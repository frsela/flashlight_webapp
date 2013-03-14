if (window.navigator.mozPower) {
  window.navigator.mozPower.screenBrightness = 1;
}

if (window.navigator.requestWakeLock) {
  var lock = window.navigator.requestWakeLock('screen');
  window.addEventListener('unload', function () {
    lock.unlock();
  });
}
