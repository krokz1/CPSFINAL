const visibilityButton = document.getElementById('toggle-visibility');
const slides = document.querySelectorAll('.refurbished-brands__card');

let initialVisibleCount;

function getInitialVisibleCount() {
    const width = window.innerWidth;
    if (width >= 1120) {
        return 8;
    } else if (width >= 768) {
        return 6;
    }
}

function updateSlidesVisibility(count) {
    slides.forEach((slide, index) => {
        slide.style.display = index < count ? 'flex' : 'none';
    });
}

function setInitialState() {
    const width = window.innerWidth;

    if (width < 767) {
        slides.forEach(slide => slide.style.display = '');
        visibilityButton.style.display = 'none';
        return;
    } else {
        visibilityButton.style.display = '';
    }

    initialVisibleCount = getInitialVisibleCount();
    updateSlidesVisibility(initialVisibleCount);
    visibilityButton.textContent = 'Показать все';
}

visibilityButton.addEventListener('click', function() {
    const width = window.innerWidth;

    if (width < 767) {
        return;
    }

    if (visibilityButton.textContent === 'Показать все') {
        slides.forEach(slide => slide.style.display = 'flex');
        visibilityButton.textContent = 'Скрыть';
        newStyleDecorButton();
    } else {
        updateSlidesVisibility(initialVisibleCount);
        visibilityButton.textContent = 'Показать все';
        defoltStyleDecorButton();
    }
});

setInitialState();

window.addEventListener('resize', () => {
    setInitialState();
});

function newStyleDecorButton() {
    const button = document.querySelector('.refurbished-brands__button');

    if (button) {
        const style = document.createElement('style');
        style.innerHTML = `
            .refurbished-brands__button::before {
                transform: rotate(-45deg);
                box-shadow: -0.25rem 0.25rem var(--background-color-decor-button);
            }
            .refurbished-brands__button::after {
                transform: rotate(45deg);
                box-shadow: 0.25rem 0.25rem var(--background-color-decor-button);
            }
        `;
        document.head.appendChild(style);
    } else {
        console.warn('Элемент с классом "refurbished-brands__button" не найден.');
    }
}

function defoltStyleDecorButton() {
    const button = document.querySelector('.refurbished-brands__button');

    if (button) {
        const style = document.createElement('style');
        style.innerHTML = `
            .refurbished-brands__button::before {
                transform: rotate(45deg);
                box-shadow: 0.25rem 0.25rem var(--background-color-decor-button);
            }
            .refurbished-brands__button::after {
                transform: rotate(-45deg);
                box-shadow: -0.25rem 0.25rem var(--background-color-decor-button);
            }
        `;
        document.head.appendChild(style);
    } else {
        console.warn('Элемент с классом "refurbished-brands__button" не найден.');
    }
}
