# Med Bot

Team: Random Forest

## Usage

Open the `src/index.html` by double clicking the file


## Strategy

Gather information on the patient:
- Is it urgent? 
    * if yes, then tell them to call 911
    * If no, then ask more questions to give actions
- Gather information
    * what are your symptoms?
    * what is your age?
    * what is your pain out of 10?
	+ did not help the prompt => the prompt generated other questions, so 
	  we dropped it
    * "I do/dont have fever" => the prompt generated other questions, so dropped
- Generate prompt
    * give the context: "You are a doctor."
    * give user information


## Parameters

- temperature: 5.0
    * 10.0 => feels like it didn't take the issues seriously
    * 100.0 => outputing random words
    * 1.0 => too little and outputing the user input
- top_p: 0.1
    * since the diagnostic doesn't change, we want the bot response to be the same 
      most of the time
- max_time: 10.0
    * we want enough time for the bot to generate the answer
- do_sample: Not used
    * was returning nimporte quoi, so we did not used this param


