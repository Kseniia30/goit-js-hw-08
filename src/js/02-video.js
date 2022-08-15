import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = 'videoplayer-current-time';

function onPlay(data) {
    console.log(data);
    localStorage.setItem(currentTime, JSON.stringify(data))
}
    player.on('timeupdate', onPlay);

function returnPlayback() {
    if (JSON.parse(localStorage.getItem(currentTime)) === null) {
        return;
    }
    const paused = JSON.parse(localStorage.getItem(currentTime))["seconds"]

    if (paused) {
        player
            .setCurrentTime(paused)
            .then(function (seconds) { })
            .catch(function (error) {
                switch (error.name) {
                    case "Error":
                        break;
                    default: break;
                }
            })
    }
    }
returnPlayback()


