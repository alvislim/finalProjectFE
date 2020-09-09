# Rewards Tracker

## Table of Content
- [Project Demo](#Project-Demo)
- [Application MVP](#Application-MVP)
- [Project Scope](#Project-Scope)
- [Dependencies](#Dependencies)
- [User Stories](#User-Stories)

## Project Demo 
https://buynowor.herokuapp.com/

## Application MVP
- A webscraping web APP where user can input the desired URL and price, and server will send an email to the user when the product price indicator by the user meets the user desired price 
- Chart to analyze the changes of the prices, automation feature to fetch relevant keyword from other websites (Daily)
- Build based on the **MVC** file structure: Models, Views, Controllers
- Deployed online via **Heroku**
- MERN Stack

## Project Scope
- User authentication via passport local strategy
- Protected routes in front end
- Web automation process
- Set up cron jobs and to trigger email when certain conditions are met


## Dependencies
#### 1. BootStrap - CSS framework
#### 2. Axios - to make API calls to backend
#### 3. MomentJS - Wrapper to handle Date object
#### 4. Bcrypt - Hashed passwords in database
#### 5. Cheerio - Implementation of Jquery in server
#### 6. Cors - To support secure cross-origin request from front end to back end
#### 7. Node-cron -  Jobs schelduler on the server
#### 8. PassportJS - To handle authenticate requests
#### 9. Puppeteer - A high-level API to control headless Chrome or Chromium or interact with the DevTools protocol.
#### 10. Mongoose - Database for application
#### 11. FuseJs - a lightweight JavaScript search library that supports fuzzy search

## User Stories
# US.1
**As a** user,
**I want** to have a pleasant looking homepage, with description of what the website is about
### Acceptance Criteria
1. A NavBar with
- login / logout CTA
- homepage redirection CTA
2. A Body with
- Introduction of the website with a login and logout CTA
- A section to describe what the website is about
3. A universal Footer
### Dependencies
- Bootstrap for the CSS framework

# US.2
**As a** user,
**I want** to be able to sign up / login in
### Acceptance Criteria
- when click on sign up, user will be able to navigate to register page
- when user is at the registration page, user will be able to onboard successfully
- When click on login, user will be navigate to login page
- When user is at login page, user will be able to login successfuly
- In login page, user will be able to either onboard via a manual sign up process
### Dependencies
- PassportJS - authentication layer
- Axios - for making HTTP request

# US.3
**As a** user,
**I want** to be able to add a product to track the price
### Acceptance Criteria
1. A form with the below parameters
- Name of Product
- URL
- Price
- Submit CTA
2. To display a success / error toast based on server response <success: true / false>
3. User will be able to view the added items in the dashboard itself with the below parameters
- Product image which is retrived from the form URL
- Buy / item link CTA based on the condition if the desired price <= product price
- Product Name which is retrieved from the form Name of Product
- Product current price which is retrived from the form URL
- Desired Price is which retrieved from the form Price
- a Delete CTA
- View single product CTA
### Dependencies
- Axios - for making HTTP request to server
- React-hook-form
- Puppeteer and cheerios for the automation process the fetch the requried details from the given URL

# US.4
**As a** user,
**I want** to be able to view more information on the single product view page
### Acceptance Criteria
- A back button CTA to redirect user back to dashboard
- Description of the viewed product with IMG, Product name, Desired Price and Product current price
- A chart which will display the daily price of the product retrieved from server by the user input URL
- Chart to have a Hide / display CTA
- A table to display a list of relevant products fetched from other website with the user input Product Name with the parameters <Item Name and Item Price>
- User will be able to search on the table
- A sortable table 
### Dependencies
- Axios - for making HTTP request to server to ensure user is authenticated and for fetching the books data
- BootstrapTable
- Puppeteer and cheerios for the automation process the fetch the requried details from the given URL
- MomentJS
  
  # US.5
**As a** user,
**I want** to be able to receive an email notification when any of the products Desired Price <= Product Price
### Acceptance Criteria
- A cronjob scheduled at 12pm SGT daily to check for the below conditions
- To retrieve the product latest price from the user given URL
- If desired Price <= Product Price an email notification will be sent to the user
### Dependencies
- Axios - for making HTTP request to server to ensure user is authenticated and for fetching the books data
- NodeCron
- Puppeteer and cheerios for the automation process the fetch the requried details from the given URL


