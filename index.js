const chatForm = get('form');
const chatInput = get('input');
const chatBox = get('main');

appendMessage('bot', 'This is a bot bubble');
appendMessage('user', 'This is a user bubble');
appendMessage("bot", "Is your situation urgent");
appendMessage("bot", "Please call 911 or go to the amergency");
appendMessage("bot", 'What are your symptoms');
appendMessage("bot", 'What is your assigned at birth gender and your age')
//diagnostics
//Ingestion
  //Child
  //Lack of breathing
  //Poison
  //Toxins
  //Cleaning products
  //Extreme
//Chest pains
  //Heart pains
  //Stomach pains
  //Lung pain
  //Extreme
//Head pains
  //Persitent
  //Short lasting
  //Extreme
//Muscles pains
  //Upper body pains
  //Lower body
//Throwing up
  //Chronic
  //Painful
  //Blood
//Expulses
  //Blood
  //Puss
  //Unknown matter
  //Pain
//Coordination problems
  //Chronic
  //Sudden
//Fever
  //Amount
//Other
appendMessage("bot","Do you take any medication?")
appendMessage("bot", "We recommend you to call the 811 if your problem still isn't solved and it isn't an emergency. Otherwise, you should call 911 or go to the emergency.")


chatForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = chatInput.value;
  if (!text) return;
  
  appendMessage('user', text);
  chatInput.value = '';
});

function appendMessage(side, text) {
  const bubble = `
    <div class="msg -${side}">
        <div class="bubble">${text}</div>
    </div>`;
  chatBox.insertAdjacentHTML('beforeend', bubble);
  chatBox.scrollTop += 500;
}

function appendCheckbox(side, text){
  const boxes=`
    <div>
    <input`
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}
