const targetTimestamp = 1746806400; // May 10, 2025 2:00:00 AM GMT+10:00

function updateCountdown() {
    const now = Math.floor(Date.now() / 1000);
    const timeLeft = targetTimestamp - now;

    if (timeLeft <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();

// Audio controls
const bgMusic = document.getElementById('bgMusic');
const volumeSlider = document.getElementById('volumeSlider');

// Set initial volume (30%)
bgMusic.volume = 0.3;

// Handle volume changes
volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    bgMusic.volume = volume;
});

// Function to start audio
function startAudio() {
    bgMusic.play().then(() => {
        console.log("Audio started successfully");
    }).catch(error => {
        console.log("Audio playback failed:", error);
    });
}

// Try to start audio when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Try to play on any user interaction
    document.body.addEventListener('click', () => {
        startAudio();
    }, { once: true });
    
    // Also try to play immediately
    startAudio();
}); 