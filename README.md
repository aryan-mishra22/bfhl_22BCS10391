Objective for backend : 
Build and deploy a REST API with one endpoint that accepts requests with both GET and POST methods. 
POST method endpoint takes in the request (JSON) and returns the following: 
1. Status 
2. User ID 
3. College Email ID 
4. College Roll Number 
5. Array for numbers 
6. Array for alphabets 
GET method endpoint doesn’t take any user input, it just returns an operation_code - 
Please refer to Annexure (A) for request/response samples 

Logic – (2 Parts) 
1. Route: /bfhl 
| Method: POST  
a. Example: https://testbfhl.herokuapp.com/bfhl [POST Method] 
b. Response should always contain your user_id (fullname_dob) in the following format 
         i.   "user_id": {full_name_ddmmyyyy} 
              E.g.:  "user_id”:  "john_doe_17091999" 
c. “is_success” should be returned in the response to mark the status of operation. It can 
be true / false
2. Route: /bfhl  | Method: GET 
a. Example: https://testbfhl.herokuapp.com/bfhl [GET Method] 
b. Doesn’t take any input from the user. The endpoint will be hit with a GET request, that’s 
it. 
c. Expected HTTP Status Code: 200 
d. Expected Response Body (hardcoded) (JSON): 
           {  
               “operation_code”:1 
            }
