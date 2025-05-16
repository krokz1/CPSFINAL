function updateButtonStyles(isExpanded) {
    const style = document.getElementById('dynamicStyles') || document.createElement('style');
    style.id = 'dynamicStyles';
    
    if (isExpanded) {
        style.innerHTML = `
            .services-company-description__button::before {
                transform: rotate(-45deg);
                box-shadow: -0.25rem 0.25rem var(--background-color-decor-button);
            }
            .services-company-description__button::after {
                transform: rotate(45deg);
                box-shadow: 0.25rem 0.25rem var(--background-color-decor-button);
            }
        `;
    } else {
        style.innerHTML = `
            .services-company-description__button::before {
                transform: rotate(45deg);
                box-shadow: 0.25rem 0.25rem var(--background-color-decor-button);
            }
            .services-company-description__button::after {
                transform: rotate(-45deg);
                box-shadow: -0.25rem 0.25rem var(--background-color-decor-button);
            }
        `;
    }

    if (!document.getElementById('dynamicStyles')) {
        document.head.appendChild(style);
    }
}

const button = document.getElementById('toggleButton');
const hiddenText = document.querySelectorAll('.services-company-description__text--hidden');

button.addEventListener('click', function() {
    let allVisible = Array.from(hiddenText).every(hidden => hidden.style.display === 'inline-block');

    if (!allVisible) {
        hiddenText.forEach(hidden => {
            hidden.style.display = 'inline-block'; 
        });
        button.textContent = 'Скрыть'; 
        updateButtonStyles(true);
    } else { 
        hiddenText.forEach(hidden => {
            hidden.style.display = 'none'; 
        });
        button.textContent = 'Читать далее';
        updateButtonStyles(false);
    }
});
