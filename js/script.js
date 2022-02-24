var sound;

function preload() {
    sound=loadSound('https://redirector.googlevideo.com/videoplayback?expire=1645715407&ei=d50XYtGhLaPas8IPzbGT6As&ip=0.0.0.0&id=b5d25bc2bc6fcc5e&itag=24&source=yt_reference&requiressl=yes&susc=ytcm&mime=audio/mpeg&vprv=1&gir=yes&clen=3217068&dur=201.064&lmt=1642624051769787&txp=0011224&cmo=secure_transport=yes&sparams=expire,ei,ip,id,itag,source,requiressl,susc,mime,vprv,gir,clen,dur,lmt&sig=AOq0QJ8wRQIhAITo-t7dRGoUefRyFfDO8nwKlek99g5c873cK6iI0L6xAiBjxh5NfqFlXDvWBSeSNZUb-cyD7unX47CdRHb7fHvB5w==');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function mouseClicked() {
    if(sound.isPlaying) {
        sound.pause();
    } else {
        sound.play();
    }
}
