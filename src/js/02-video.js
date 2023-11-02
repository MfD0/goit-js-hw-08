import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Ініціалізація плеєра
const vimeoPlayer = new Player('vimeo-player');

// Відстеження події timeupdate
vimeoPlayer.on('timeupdate', throttle(function (event) {
  
    // Збереження поточного часу відтворення у локальне сховище
    localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000)); 

// При завантаженні сторінки встановлення позиції відео
window.addEventListener('load', function() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        vimeoPlayer.setCurrentTime(savedTime);
    }
});

