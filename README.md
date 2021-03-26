# symetra

## Top level directory layout

```bash
├── bin
│   ├── www
├── helpers                                       #Helper functions for routes
│   ├── admin.js
│   ├── custgomers.js
├── public
│   ├── images
│   ├── javascripts
│   ├── stylesheets
├── views
│   ├── error.ejs
│   ├── index.ejs
├── routes                                        #Route definitions
│   ├── admin.js
│   ├── customers.js
├── .env                                          #Environment variable
├── .gitignore
├── app.js                                        #Node server entry point
├── init.js                                       #Initializes data
```

## Initialization

`/init.js` has a self running function that initializes some variables with default values. 

Variables and their default values: 

 `nthTransaction = 3`
 `discountCode = 'discount10'`
 
Users is a Map containing objects representing users. 

`id : integer`\
`discountCode : string`\
`transactionsMade : integer`\
`discountUses : integer`

## Routes

#### /admin

All admin routes are prefixed with `/admin`

GET `/code` Retrieves current discount code\
GET `/report` Retrieves current admin report\
POST `/set_code` Send `discountCode` in request body\
POST `/set_transaction_number` Send `transactionNumber` in request body\

#### /customers

All customer routes are prefixed with `/customers`

GET `/:user_id/discount_code` Checks if a user has a discount code\
POST `/transaction/:user_id` Makes a transaction for a user

## Running the program 

You can run the program with `npm run start` 
