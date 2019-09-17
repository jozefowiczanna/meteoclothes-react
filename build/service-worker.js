/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/meteoszafa-react/precache-manifest.c64dafda325be39c783bda18cf0d7efc.js"
=======
  "/meteoszafa-react/precache-manifest.3dad589679c7a6e77da829f816351ae8.js"
>>>>>>> 1ff4b37e4e1a1b5c3c76fea6d9017c7941b6cc28
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/meteoszafa-react/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
