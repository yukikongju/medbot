import requests

API_URL = "https://xevhza5rhd1jhkq8.us-east-1.aws.endpoints.huggingface.cloud"
headers = {
	"Accept": "application/json",
	"Content-Type": "application/json"
}

parameters_dct = {
	'top_k': 10,
	# 'top_p': 0.85,
	'top_p': 0.1,
	'temperature': 5.0,
	'max_time': 10.0,
	# 'max_new_tokens': 500,
	# 'do_sample': True,
	# 'return_full_text': True,
}

diagnostic = "back pain"
patient_symptoms = ["lower back pain"]
patient_characteristics = """
Age: 12
Sex: F
"""

# 2. Determine if they have to go to the hospital or if they can solve their issues themselves.
# Please give a list of 5 symptoms and their respective probability with format (<diagnostic>, <probability>)
# You are a doctor specialized in {diagnostic} that talks in English.
# 'Here is the patient history:\n\nThe patient is a 12-year-old female who presents with lower back pain.\n\nHere is the patient physical exam:\n\nThe patient has no tenderness at the site of pain.\n\nHere is the patient lab tests:\n\nThe patient has no abnormal lab findings.\n\nHere is the patient imaging:\n\nThe patient has no abnormal imaging findings.\n\nHere is the patient

prompt = f"""
You are a doctor specialized in {diagnostic} that talks in English.

Patient Symptoms:
{patient_symptoms}

Patient Characteristics:
{patient_characteristics}

Determine if the patient has to go to the doctor?
"""

patient_sex = "female"
patient_age = 12
pain_level = 5
has_fever = True
timeline = "weeks"

# I {"do" if has_fever else "dont"} have fever.
# The symptoms have been there for {timeline}.
# I {"do" if has_fever else "dont"} have fever.
# My pain level is {pain_level} out of 10.

prompt2 = f"""
I am a {patient_sex} and {patient_age} years old. I have {", ".join(patient_symptoms)}. 

Do I have to go to the hospital? I only want to go to the hospital if it is really urgent.
"""

print(prompt2)

long_prompt = f"""You are a doctor specialized in {diagnostic} and you want to determine if a patient needs to go to 
the hospital. You need to identify the problems based on the patient symptoms and their personal 
information. Here is what the patient is saying:

I am a female and 12 years old. I have {patient_symptoms}. 
"""

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()

response = query({
	# "inputs": prompt,
	# "inputs": long_prompt,
	# "inputs": prompt1, # good
	"inputs": prompt2,
	# "inputs": {"query": prompt},
	"parameters": parameters_dct
})

