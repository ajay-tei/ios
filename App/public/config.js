
window.__config = {
  production: true,
  apiBaseUrl: 'https://gateway.silvercoastclub.com',
  messagingBaseUrl: 'https://messaging.silvercoastclub.com',
  recaptchaEnterpriseUrl:'https://www.google.com/recaptcha/enterprise.js',
  recaptchaUrl:'https://www.google.com/recaptcha/api.js',
  isEnterprise: true, 
  ignoreExternalLoginRedirection:false, 
  title: 'Total e Integrated | Unify Platform',
  icons: [
    { rel: 'icon', type: 'image/png', href: 'favicon.png' },
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
  ],  
  turnstileConfigs: {
    cloudflareTurnstileUrl: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit',
    appearance: {
      default:'interaction-only',
      auth: 'always',//always, interaction-only, execute,
      teetimes: 'always'
    }
  }
};
