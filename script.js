document.addEventListener('DOMContentLoaded', () => {

    // --- WhatsApp Form Functionality ---
    // NOTE: Using the ID 'send-sms-btn' which was the final ID used in the HTML/CSS updates.
    const sendWhatsAppBtn = document.getElementById('send-sms-btn'); 
    const formMessage = document.getElementById('form-message');
    
    // !!! IMPORTANT: Set the target phone number with country code (e.g., 91 for India) !!!
    const targetWhatsAppNumber = '918977887377'; 

    sendWhatsAppBtn.addEventListener('click', function(event) {
        event.preventDefault(); 

        const nameInput = document.getElementById('name').value.trim();
        const messageInput = document.getElementById('message').value.trim();
        
        // Simple validation check
        if (nameInput === "" || messageInput === "") {
            displayMessage("Please fill out both your Name and Message.", "error");
            return;
        }

        // Construct the pre-filled message for WhatsApp
        const fullMessage = `Hello Kamakshi Constructions,\nI have an inquiry from the website.\nName: ${nameInput}\n\nMessage:\n${messageInput}`;
        
        // URL-encode the message
        const whatsappBody = encodeURIComponent(fullMessage);
        
        // Use the WhatsApp wa.me link structure. Opens a new tab/window for better experience.
        const whatsappLink = `https://wa.me/${targetWhatsAppNumber}?text=${whatsappBody}`;

        // Open the WhatsApp chat link
        window.open(whatsappLink, '_blank'); 

        // Provide user feedback
        displayMessage("Opening WhatsApp with your message drafted!", "success");
        document.getElementById('message-form').reset();
    });

    function displayMessage(text, type) {
        formMessage.textContent = text;
        
        // Remove 'hidden' class to make the element visible
        formMessage.classList.remove('hidden'); 
        formMessage.style.opacity = '1';

        setTimeout(() => {
            // Fade out
            formMessage.style.opacity = '0'; 
            setTimeout(() => {
                 // Re-hide the element after the fade transition completes (500ms)
                 formMessage.classList.add('hidden');
            }, 500);
        }, 6000); 
    }
});