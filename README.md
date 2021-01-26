# Rentomojo Backend Task

## Installation
npm i

## run
nodemon app.js

# Includes
   env.txt (change to .env) which includes mongodb uri and jwt key 
   ### MUST INCLUDE  api_docs.json file which contains postman collections.

## How to execute in POSTMAN(APPLICATION)

### STEP 1
first import api_docs.json

### STEP 2
set api_local and token as env variables and then make requests

eg: api_local = localhost:3900  

OR 

api_local = sumitrentomojo.ddns.net

## Demo user
used id : sumit@gmail.com
password : password


# live host URL
url: sumitrentomojo.ddns.net

# FOR OFFLINE USE 
localhost:3900

##  APIS endpoints:
/api/users/signup  
/api/users/login

# GET CONTACT LIST (PAGINATION) (LIMIT 10)
/api/phonebook?page=1

# FOR DELETE EDIT  CONTACTS
/api/phonebook/:id

# FOR ADD CONTACTS
/api/phonebook/

# SEARCH
/api/phonebook/search
