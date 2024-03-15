import requests

API_URL = "https://xevhza5rhd1jhkq8.us-east-1.aws.endpoints.huggingface.cloud"
headers = {
	"Accept": "application/json",
	"Content-Type": "application/json"
}

parameters_dct = {
	# 'top_k': 10,
	# 'top_p': 0.9,
	# 'temperature': 2.0,
	# 'max_time': 5.0,
}

diagnostic = "back pain"
patient_symptoms = ["lower back pain"]
patient_characteristic = {
	'age': 12,
	'sex': 'F',
}

prompt = f"""
You are a doctor specialized in {diagnostic}. Try to: 
1. Find a diagnostic given a patient symptoms and characteristics. 
2. Determine if they have to go to the hospital or if they can solve their issues themselves.

Here are the patient symptoms:
{patient_symptoms}

Here are the patient characteristics:
{patient_characteristic}
"""

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.json()


output = query({
	"inputs": prompt,
	"parameters": parameters_dct
})