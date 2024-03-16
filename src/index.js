const chatForm = get("form");
const chatInput = get("input");
const chatBox = get("main");

start();

//appendMessage("bot", 'What is your assigned at birth gender and your age')
//appendMessage("bot","Do you take any medication?")
//appendMessage("bot", "We recommend you to call the 811 if your problem still isn't solved and it isn't an emergency. Otherwise, you should call 911 or go to the emergency.")

async function take_input() {}
chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatInput.value;
  if (!text) return;
  take_input();
  appendMessage("user", text);
  chatInput.value = "";
});

function appendMessage(side, text) {
  const bubble = `
    <div class="msg -${side}">
        <div class="bubble">${text}</div>
    </div>`;
  chatBox.insertAdjacentHTML("beforeend", bubble);
  chatBox.scrollTop += 500;
}

function appendCheckbox(side, text) {
  const boxes = `
    <div>
    <label><input class="messageCheckbox" type="checkbox" id="symptom9" name="Ingestion" value="checked">Ingestion</label>
    </div>
    <div>
    <label><input class="messageCheckbox" type="checkbox" id="symptom8" name="Chest pain" value="checked">Chest pain</label>
    </div>
    <div>
    <label><input class="messageCheckbox" type="checkbox" id="symptom7" name="Head pain" value="checked">Head pain</label>
    </div>
    <div>
    <label><input class="messageCheckbox" type="checkbox" id="symptom6" name="Muscle pain" value="checked">Muscle pain</label>
    </div>
    <div>
    <label><input class="messageCheckbox" type="checkbox" id="symptom5" name="Throwing up" value="checked">Throwing up</label>
    </div>
    <div>
    <label><input class="messageCheckbox" type="checkbox" id="symptom4" name="Pee or excrement" value="checked">Pee or excrements</label>
    </div>
    <div>
    <label><input class="messageCheckbox" type="checkbox" id="symptom3" name="Coordination problem" value="checked">Coordination problems</label>
    </div>
    <div>
    <label><input class="messageCheckbox" type="checkbox" id="symptom2" name="Fever" value="checked">Fever</label>
    </div>
    <div>
    <label><input class="messageCheckbox" type="checkbox" id="symptom1" name="Other" value="checked">Other</label>
    </div>
    <button id="submitCheckboxesb">"Submit"</button>`;

  chatBox.insertAdjacentHTML("beforeend", boxes);
  chatBox.scrollTop += 500;
  const submitCheckboxes = document.querySelector("#submitCheckboxesb");
  submitCheckboxes.addEventListener("click", (event) => {
    let checkboxes = document.querySelectorAll(".messageCheckbox:checked");
    let values = [];
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.name);
    });
    nextt();
  });
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

async function start() {
  appendMessage(
    "bot",
    "Welcome to the montreal hospital chatbot. You are not discussing with a human, but a medical bot. Thank you for your patience. The information you give is kept confidential and is only being used for triage. The diagnostic is only for illustrative purposes, not official"
  );
  appendMessage("bot", "Is your situation urgent?");
  const boxe = `<div><input class='approve' type='checkbox' name='yes'>Yes</div>
  <div><input class='approve' type='checkbox' name='no'>No</div>
  <button id="submitCheckboxesa">"Submit"</button>'`;
  chatBox.insertAdjacentHTML("beforeend", boxe);
  const submitCheckboxes = document.querySelector("#submitCheckboxesa");
  await submitCheckboxes.addEventListener("click", (event) => {
    let checkboxes = document.querySelectorAll(".approve:checked");
    let values = [];
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.name);
    });
    console.log(values[0]);
    if (values[0] == "yes") {
      appendMessage("bot", "Please call 911 or go to the emergency");
    } else {
      appendMessage(
        "bot",
        "You don't have to go to the hospital. Please help me answer some questions about you, to better help solve your problem. What are your symptoms"
      );
      appendCheckbox();
    }
  });
}
function nextt() {
  appendMessage("bot", "What is your assigned at birth gender");
  const boxe = `<div><input class='gender' type='checkbox' name='male'>Male</div>
  <div><input class='gender' type='checkbox' name='female'>Female</div>
  <button id="submitCheckboxesc">"Submit"</button>'`;
  chatBox.insertAdjacentHTML("beforeend", boxe);
  const submitCheckboxes = document.querySelector("#submitCheckboxesc");
  submitCheckboxes.addEventListener("click", (event) => {
    let checkboxes = document.querySelectorAll(".gender:checked");
    let values = [];
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.name);
    });
    nexttt();
  });
}
function nexttt() {
  appendMessage("bot", "What is your age");
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = chatInput.value;
    if (!text) return;
    take_input();
    appendMessage("user", text);
    chatInput.value = "";
  });
}

