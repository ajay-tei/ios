
//change loading depend on theme
const defaultTheme = "material-dark";
let theme = defaultTheme;
try
{
  const profileSettings = JSON.parse(localStorage.getItem('profile-settings')) || null;
  theme = (profileSettings && profileSettings.theme) ? profileSettings.theme : defaultTheme;
} finally
{
  document.getElementById('nb-global-spinner').classList.add(`spinner-${ theme }`);
}

// This script disables double-tap zoom in mobile devices
let drags = new Set(); //set of all active drags
const delay = 500;
// Sequential touches must be in close vicinity
const minZoomTouchDelta = 10;

// Track state of the last touch
let lastTapAt = 0;
let lastClientX = 0;
let lastClientY = 0;
document.addEventListener("touchmove", function (event)
{
  if (!event.isTrusted) return; //don't react to fake touches
  Array.from(event.changedTouches).forEach(function (touch)
  {
    drags.add(touch.identifier); //mark this touch as a drag
  });
});
document.addEventListener("touchend", function (event)
{
  if (!event.isTrusted) return;
  let isDrag = false;
  Array.from(event.changedTouches).forEach(function (touch)
  {
    if (drags.has(touch.identifier))
    {
      isDrag = true;
    }
    drags.delete(touch.identifier); //touch ended, so delete it
  });

  if (!isDrag)
  {
    const tapAt = new Date().getTime();
    const timeDiff = tapAt - lastTapAt;
    const { clientX, clientY } = event.changedTouches[0];
    const xDiff = Math.abs(lastClientX - clientX);
    const yDiff = Math.abs(lastClientY - clientY);
    if (
      xDiff < minZoomTouchDelta &&
      yDiff < minZoomTouchDelta &&
      timeDiff < delay
    )
    {
      event.preventDefault();
      event.stopPropagation();

      if (typeof event.target.focus == "function" || typeof event.target.onfocus == "function")
      {
        event.target.dispatchEvent(new Event('focus', event));
      }
      //note that double-tap only happens when the body is active
      if (typeof event.target.click == "function" || typeof event.target.onclick == "function")
      {
        event.target.dispatchEvent(new Event('click', event));
      }
      if (event && event.changedTouches && event.changedTouches.length)
      {
        event.target.dispatchEvent(new TouchEvent("touchend", event));
      }
      //dispatch a copy of this event (for other touch handlers)
    }
    lastClientX = clientX;
    lastClientY = clientY;
    lastTapAt = tapAt;
  }
});
