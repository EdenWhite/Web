'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "7a7c51d406063cb58c5ed4ddfb6cc77c",
"/assets\assets\logo.png": "ab33b3d187efd5781629a84cff0bd3e7",
"/assets\FontManifest.json": "7e44e8b4b89f486d63702f17e20f069d",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\fonts\Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"/assets\fonts\Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"/assets\LICENSE": "b8fe1d4c200b1675f9dbe564ab22265b",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "39c809a723e67f60c3b48871c9b34b1b",
"/main.dart.js": "1711a488e96a64966b183e98c331060b",
"/manifest.json": "fdddbdc3c32450e7089b7c924c007092"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
