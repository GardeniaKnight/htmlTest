document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');
    const playPauseButton = document.getElementById('playPauseButton');
    
    let isPlaying = false; // Initial state of video
    
    playPauseButton.addEventListener('click', function() {
        if (isPlaying) {
            video.pause();
            playPauseButton.textContent = 'Play';
        } else {
            video.play();
            playPauseButton.textContent = 'Pause';
        }
        isPlaying = !isPlaying; // Toggle the state
    });
});

