// skipWaiting(), this will force activate the service worker
self.addEventListener('install', () => {
  self.skipWaiting()
})

// access all other tabs and windows of the browser that will use this service worker
self.addEventListener('activate', () => {
  self.clients.matchAll({
    type: 'window'
  }).then(clients => {
    for (let client of clients) {
      client.navigate(client.url)
    }
  })
})

// push notification
self.addEventListener('push', event => {
  if (!(self.Notification && self.Notification.permission === 'granted')) return

  console.log('push event', event.data)
  let data = {};
  if (Object.keys(event.data).length > 0) {
    data = event.data.json();
  }

  let title = data.title || "Something Has Happened";
  let options = {
    body: data.message || "Here's something you might want to check out.",
    icon: "/img/android-chrome-maskable-192x192.png"
  }

  event.waitUntil(self.registration.showNotification(title, options))
})