const equipmentButton = document.getElementById('equipment-repair-visibility');
const slides = document.querySelectorAll('.equipment-repair__card');

let initialVisibleCount;

function getInitialVisibleCount() {
    const width = window.innerWidth;
    if (width >= 1120) {
        return 4;
    } else if (width >= 768) {
        return 3;
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
        equipmentButton.style.display = 'none';
        return;
    } else {
        equipmentButton.style.display = '';
    }

    initialVisibleCount = getInitialVisibleCount();
    updateSlidesVisibility(initialVisibleCount);
    equipmentButton.textContent = 'Показать все';
}

equipmentButton.addEventListener('click', function() {
    const width = window.innerWidth;

    if (width < 767) {
        return;
    }

    if (equipmentButton.textContent === 'Показать все') {
        slides.forEach(slide => slide.style.display = 'flex');
        equipmentButton.textContent = 'Скрыть';
        newStyleDecorButton();
    } else {
        updateSlidesVisibility(initialVisibleCount);
        equipmentButton.textContent = 'Показать все';
        defoltStyleDecorButton();
    }
});

setInitialState();

window.addEventListener('resize', () => {
    setInitialState();
});

function newStyleDecorButton() {
    const button = document.querySelector('.section__read-more-button');

    if (button) {
        const style = document.createElement('style');
        style.innerHTML = `
            .section__read-more-button::before {
                transform: rotate(-45deg);
                box-shadow: -0.25rem 0.25rem var(--background-color-decor-button);
            }
            .section__read-more-button::after {
                transform: rotate(45deg);
                box-shadow: 0.25rem 0.25rem var(--background-color-decor-button);
            }
        `;
        document.head.appendChild(style);
    } else {
        console.warn('Элемент с классом "section__read-more-button" не найден.');
    }
}

function defoltStyleDecorButton() {
    const button = document.querySelector('.section__read-more-button');

    if (button) {
        const style = document.createElement('style');
        style.innerHTML = `
            .section__read-more-button::before {
                transform: rotate(45deg);
                box-shadow: 0.25rem 0.25rem var(--background-color-decor-button);
            }
            .section__read-more-button::after {
                transform: rotate(-45deg);
                box-shadow: -0.25rem 0.25rem var(--background-color-decor-button);
            }
        `;
        document.head.appendChild(style);
    } else {
        console.warn('Элемент с классом "section__read-more-button" не найден.');
    }
}