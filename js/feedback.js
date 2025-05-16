
const buttonCall = document.getElementById('button-call');
const requestCallDialog = document.querySelector('.request-call');
const requestCallClose = document.querySelector('.request-call__button-close');
const bodyOverlay = document.querySelector('.body__overlay');

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


function closeRequestCallDialog() {
    requestCallDialog.style.display = 'none';
    bodyOverlay.style.display = 'none';
}

buttonCall.addEventListener('click', openRequestCallDialog);

requestCallClose.addEventListener('click', closeRequestCallDialog);

const buttonChat = document.getElementById('button-chat');
const feedbackModalDialog = document.querySelector('.feedback-modal');
const feedbackModalClose = document.querySelector('.feedback-modal__button-close');

function openFeedbackModalDialog() {
    feedbackModalDialog.style.display = 'flex';
    bodyOverlay.style.display = 'block';
}

function closeFeedbackModalDialog() {
    feedbackModalDialog.style.display = 'none';
    bodyOverlay.style.display = 'none';
}

buttonChat.addEventListener('click', openFeedbackModalDialog);
feedbackModalClose.addEventListener('click', closeFeedbackModalDialog);
