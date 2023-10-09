function toggleVideo(videoId) {
    const video = document.getElementById(videoId);
    const playButton = video.parentElement.querySelector('.play-button');

    if (video.paused) {
        video.play();
        playButton.style.opacity = '0.2';
    } else {
        video.pause();
        playButton.style.opacity = '1';
    }
}
