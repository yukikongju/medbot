const chatForm = get('form');
const chatInput = get('input');
const chatBox = get('main');
const patient_sex=[]
const patient_age=[]
const patient_symptoms=[]



start()


//appendMessage("bot", 'What is your assigned at birth gender and your age')
//appendMessage("bot","Do you take any medication?")
//appendMessage("bot", "We recommend you to call the 811 if your problem still isn't solved and it isn't an emergency. Otherwise, you should call 911 or go to the emergency.")

async function take_input(){

}
chatForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = chatInput.value;
  if (!text) return;
  take_input()
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
    <button id="submitCheckboxesb">"Submit"</button>`
  
    
    chatBox.insertAdjacentHTML('beforeend', boxes);
  chatBox.scrollTop += 500;
  const submitCheckboxes=document.querySelector('#submitCheckboxesb')
  submitCheckboxes.addEventListener('click', (event)=>{
    let checkboxes = document.querySelectorAll('.messageCheckbox:checked');
    let values = [];
      checkboxes.forEach((checkbox) => {
        patient_symptoms.push(checkbox.name);
      });
      console.log(patient_symptoms)
      nextt(patient_symptoms);
  })
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}
async function start(){
  appendMessage("bot", "Is your situation urgent?");
  const boxe=`<div><input class='approve' type='checkbox' name='yes'>Yes</div>
  <div><input class='approve' type='checkbox' name='no'>No</div>
  <button id="submitCheckboxesa">"Submit"</button>'`
  chatBox.insertAdjacentHTML("beforeend",boxe)
  const submitCheckboxes=document.querySelector('#submitCheckboxesa')
  await submitCheckboxes.addEventListener('click', (event)=>{
    let checkboxes = document.querySelectorAll('.approve:checked');
    let values = [];
      checkboxes.forEach((checkbox) => {
        values.push(checkbox.name);
      });
      console.log(values[0])
    if (values[0]=='yes'){
      appendMessage("bot", "Please call 911 or go to the emergency");
    }
    else {
      appendMessage("bot", "You don't have to go to the hospital. Please help me answer some questions about you, to better help solve your problem. What are your symptoms");
      appendCheckbox();
    }
  })
  
};
function nextt(a){
  appendMessage("bot", 'What is your assigned at birth gender')
  const boxe=`<div><input class='gender' type='checkbox' name='male'>Male</div>
  <div><input class='gender' type='checkbox' name='female'>Female</div>
  <button id="submitCheckboxesc">"Submit"</button>'`
  chatBox.insertAdjacentHTML("beforeend",boxe)
  const submitCheckboxes=document.querySelector('#submitCheckboxesc')
    submitCheckboxes.addEventListener('click', (event)=>{
    let checkboxes = document.querySelectorAll('.gender:checked');
    let values = [];
      checkboxes.forEach((checkbox) => {
        patient_sex.push(checkbox.name);
      });
      nexttt(a,patient_sex)
  })
};
function nexttt(a,b){
  appendMessage("bot", 'What is your age')
  chatForm.addEventListener('submit', event => {
    event.preventDefault();
    const text = chatInput.value;
    if (!text) return;
    take_input()
    appendMessage('user', text);
    patient_age.push(text)
    chatInput.value = '';
  });
  const prompt =
 `
I am a ${b[0]} and ${patient_age[0]} years old. I have ${a.join(" ")}. 

Do I have to go to the hospital? I only want to go to the hospital if it is really urgent.
`
  console.log("l")
  console.log(patient_age)
  query({
    "inputs": prompt,
    "parameters": {parameters_dct}
}).then((response) => {
	console.log(JSON.stringify(response));
  appendMessage("user",response[0]['generated_text'])
});
appendMessage('bot','If you still have any questions, contact 811 or your nearest physician!')
}

parameters_dct = {
	'top_k': 10,
	//'top_p': 0.85,
	'top_p': 0.1,
	'temperature': 5.0,
	'max_time': 10.0,
	// 'max_new_tokens': 500,
	//'do_sample': True,
	//'return_full_text': True,
}


async function query(data) {
	const response = await fetch(
		"https://xevhza5rhd1jhkq8.us-east-1.aws.endpoints.huggingface.cloud",
		{
			headers: { 
				"Accept" : "application/json",
				"Content-Type": "application/json" 
			},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}





