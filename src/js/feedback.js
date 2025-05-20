// Получаем элементы
const buttonCall = document.getElementById('button-call');
const requestCallDialog = document.querySelector('.request-call');
const requestCallClose = document.querySelector('.request-call__button-close');
const bodyOverlay = document.querySelector('.body__overlay');

// Функция для открытия диалога
function openRequestCallDialog() {
    requestCallDialog.style.display = 'flex';
    bodyOverlay.style.display = 'block';
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.innerHTML = `
                .body__overlay {
                    z-index: 11;
                }
            `;
}

// Функция для закрытия диалога
function closeRequestCallDialog() {
    requestCallDialog.style.display = 'none';
    bodyOverlay.style.display = 'none';
}

// Добавляем обработчик события на кнопку открытия
buttonCall.addEventListener('click', openRequestCallDialog);

// Добавляем обработчик события на кнопку закрытия
requestCallClose.addEventListener('click', closeRequestCallDialog);

// Получаем элементы
const buttonChat = document.getElementById('button-chat');
const feedbackModalDialog = document.querySelector('.feedback-modal');
const feedbackModalClose = document.querySelector('.feedback-modal__button-close');

// Функция для открытия диалога
function openFeedbackModalDialog() {
    feedbackModalDialog.style.display = 'flex';
    bodyOverlay.style.display = 'block';
}

// Функция для закрытия диалога
function closeFeedbackModalDialog() {
    feedbackModalDialog.style.display = 'none';
    bodyOverlay.style.display = 'none';
}

// Добавляем обработчик события на кнопку открытия
buttonChat.addEventListener('click', openFeedbackModalDialog);

// Добавляем обработчик события на кнопку закрытия
feedbackModalClose.addEventListener('click', closeFeedbackModalDialog);