document.addEventListener('DOMContentLoaded', () => {
    const countDownDate = new Date(Date.UTC(2026, 4, 25, 23, 0, 0)).getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownTimerEl = document.getElementById('countdown-timer');
    const countdownSectionH2 = document.querySelector('.countdown-section h2');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownTimerEl.innerHTML = "<div class='released-message'>GTA VI HAS BEEN RELEASED!</div>";
            countdownSectionH2.textContent = "IT'S HERE!";
            const releasedMessageStyle = document.createElement('style');
            releasedMessageStyle.innerHTML = `
                .released-message {
                    font-family: var(--font-display);
                    font-size: clamp(1.8rem, 6vw, 3.5rem);
                    color: var(--primary-color);
                    text-shadow: var(--glow-primary);
                    padding: 20px;
                    text-align: center;
                    width: 100%;
                }
            `;
            document.head.appendChild(releasedMessageStyle);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    const interval = setInterval(updateCountdown, 1000);

    updateCountdown();

    document.getElementById('current-year').textContent = new Date().getFullYear();
});
