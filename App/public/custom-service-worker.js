//importScripts('./ngsw-worker.js');

console.log('service-worker started');
importScripts('ngsw-worker.js');

const clientHeartbeats = new Map();
const CLIENT_TIMEOUT = 9000;

async function monitorClients() {
  const now = Date.now();
  for (const [clientId, clientData] of clientHeartbeats.entries()) {
    if (now - clientData.lastSeen > CLIENT_TIMEOUT || clientData.status === 'closing') {
      // console.log(`[Custom SW] Client ${clientId} is inactive or closing. Calling API.`);

      const sendPromise = fetch(clientData.url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${clientData.token}`,
          'Content-Type': 'application/json'
        },
        body: clientData.request ? JSON.stringify(clientData.request) : null,
        keepalive: true
      });

      await sendPromise;
      clientHeartbeats.delete(clientId);
    }
  }
}

function startMonitorLoop() {
  async function loop() {
    await monitorClients();
    setTimeout(loop, 7000); // run every 15s as backup monitor
  }
  loop();
}
startMonitorLoop();

self.addEventListener('message', event => {
  const clientId = event.source.id;

  if (event.data?.type === 'HEARTBEAT_INIT') {
    const { token, url, request } = event.data;
    clientHeartbeats.set(clientId, {
      lastSeen: Date.now(),
      token,
      url,
      request
    });
    console.log(`[Custom SW] Initial heartbeat registered for ${clientId}`);
  }

  if (event.data?.type === 'HEARTBEAT_PING') {
    const existing = clientHeartbeats.get(clientId);
    if (existing) {
      existing.lastSeen = Date.now();
      //console.log(`[Custom SW] Heartbeat ping from ${clientId}`);
    }
    event.waitUntil(monitorClients());
  }

  if (event.data?.type === 'HEARTBEAT_CLOSE') {
      console.log(`[Custom SW] Heartbeat Close from ${clientId}`);

    const existing = clientHeartbeats.get(clientId);
    if (existing) {
      existing.status = 'closing';
      existing.lastSeen = Date.now();
    }
    event.waitUntil(monitorClients());
  }
});



async function callApi(url,token,request) {
  try {

    console.log('callapi:', token,url,request);

    await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ token }`,
        // 'ExtendedAuthorization': `Bearer ${ token.getPayload()?.extended_access_token }`,
        'Content-Type': 'application/json'
      },
      body:request? JSON.stringify(request):null,
      keepalive: true
    });
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }finally{
    token=null;
    url=null;
  }
}
