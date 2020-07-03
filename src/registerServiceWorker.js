const prod = process.env.NODE_ENV != 'production'

const requestNotificationPermission = async () => {
  if ("Notification" in window) {
    const permission = await window.Notification.requestPermission();
    if (permission !== 'granted') {
      throw new Error('Permission not granted for Notification');
    }
  }
}

const shouldSW = 'serviceWorker' in navigator && prod
if (shouldSW) {
  requestNotificationPermission()
  navigator.serviceWorker.register('./sw.js').then(() => {
    console.log("Service Worker Registered!!")
  })
}