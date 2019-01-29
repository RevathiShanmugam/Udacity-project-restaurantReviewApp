/*if the cache name object doesn’t exist,
create one with the passed cache name*/
const myCacheName= 'myCacheName';
const cacheFiles=[
				'./',
				'./index.html',
				'./restaurant.html',
				'./css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg'
			];

self.addEventListener('install', function(event) {
  event.waitUntil(
  		caches.open(myCacheName).then(function(cache) {
  			return cache.addAll(cacheFiles);
      }
    ))
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
      if(response){
        return response;
      }
      else{
        return fetch(event.request);
      }
    })
  )
});
