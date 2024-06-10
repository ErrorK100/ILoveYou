document.addEventListener("DOMContentLoaded", function() {
    // Contagem Regressiva
    const countDownDate = new Date("2028-06-10").getTime();
    const countdownElement = document.getElementById("dias");
    
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        
        if (countdownElement) {
            countdownElement.innerHTML = days;
        }

        if (distance < 0) {
            clearInterval(x);
            if (countdownElement) {
                countdownElement.innerHTML = "Chegou o dia!";
            }
        }
    }, 1000);

    // Pop-up messages
    const messages = [
        "Você é a melhor coisa que aconteceu na minha vida.",
        "Cada momento com você é inesquecível.",
        "Estou ansioso para nosso futuro juntos.",
        "Você ilumina meus dias!"
    ];
    
    let messageIndex = 0;
    function showPopupMessage() {
        if (messageIndex < messages.length) {
            const message = messages[messageIndex];
            const popup = document.createElement('div');
            popup.className = 'popup';
            popup.innerText = message;
            document.body.appendChild(popup);
            setTimeout(() => {
                popup.remove();
            }, 3000);
            messageIndex++;
            setTimeout(showPopupMessage, 5000);
        }
    }
    
    showPopupMessage();
});
