import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = 'videoplayer-current-time';
const parsed = JSON.parse(localStorage.getItem(currentTime));

function onPlay(data) {
    console.log(data);
    localStorage.setItem(currentTime, JSON.stringify(data))
}
    player.on('timeupdate', throttle(onPlay, 1000));

function returnPlayback() {
    if (parsed === null) {
        return;
    }
    const paused = parsed["seconds"]

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


