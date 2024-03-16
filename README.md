# Med Bot

Team: Random Forest

## Strategy

Gather information on the patient:
- Is it urgent? 
    * if yes, then tell them to call 911
    * If no, then ask more questions to give actions
- Gather information
    * what are your symptoms?
    * what is your age?
    * what is your pain out of 10?
- Generate prompt
    * give the context: "You are a doctor."
    * give user information

## Parameters
- temperature: 5.0
    * 10.0 => feels like it didn't take the issues seriously
    * 100.0 => outputing random words
    * 1.0 => too little and outputing the user input
- 


