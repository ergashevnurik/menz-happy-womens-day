var envelope = document.getElementById('envelope');
var envelopeTop = document.getElementById('envelopeTop');
var letter = document.getElementById('contact');
var left = document.getElementById('left')
var bottomRight = document.getElementById('bottom-right');
var enterNameButton = document.getElementById('enter-name'); 
var userFirstName = document.getElementById('user-firstname');
var title = document.getElementById('title');
var receivedUserName = document.getElementById('received-user-name');

envelope.style.left = '-10000px';

enterNameButton.onclick = function() {
    envelope.style.left = '0';
    envelope.style.transition = 'all .6s ease-in-out';
    enterNameButton.style.opacity = '0';
    title.style.opacity = '0';
    userFirstName.style.opacity = '0';
    userFirstName.readOnly = true;
    open();
}


function open() {

envelopeTop.classList.add("close");
envelope.addEventListener('mouseover', openEnvelopeOnHover);
envelope.addEventListener('mouseout', closeEnvelopeOnHover);

function openEnvelopeOnHover() {
    envelopeTop.classList.remove("close");
    envelopeTop.classList.add("open");
    pullOutPartial();
}

function pullOutPartial() {
    letter.classList.remove("in");
    letter.classList.add("out-partial");
    envelopeTop.style.zIndex = '-1';
    letter.style.transition = '2s';
}

function closeEnvelopeOnHover() {
    var flag = 0;
    if (flag === 1) {
        putIn();
        envelopeTop.classList.remove("open");
        envelopeTop.classList.add("close");
    } else {
        envelope.removeEventListener('mouseout', closeEnvelopeOnHover);
    }
}

function putIn() {
    letter.classList.remove("out-partial");
    letter.classList.add("in");
}

envelope.addEventListener('click', openEnvelope);

function openEnvelope() {
    var flag = 0;
    closeEnvelopeOnHover();
    letter.classList.add("pull");
    letter.addEventListener("animationend", function() {
        left.style.zIndex = '0';
        bottomRight.style.zIndex = '0';
        envelopeTop.style.zIndex = '0';
        letter.style.zIndex = '90';
        letter.classList.add("put");
        letter.addEventListener("animationend", function() {
            letter.style.transition = 'none';
            letter.classList.add("final");
            letter.classList.remove("put");
            letter.classList.remove("pull");
            var name = userFirstName.value;
            receivedUserName.innerHTML = name;
            envelope.style.cursor = "default";
        });
    });
    envelope.removeEventListener('click', openEnvelope);
}
}