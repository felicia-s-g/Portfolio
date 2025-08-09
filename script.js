 const countdownEl = document.getElementById("countdown");
    const launchDate = new Date("2025-08-19T00:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        countdownEl.textContent = "We are live! 🚀";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.textContent = `Launching in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
