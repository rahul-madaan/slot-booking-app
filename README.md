# GYM Slot Booking Web app
ReactJS based Web Application to book slots for Gym.
This app was created and hosted on AWS for Gym at Shiv Nadar University to replace manual booking every sunday

# Tech Stack
- FrontEnd: ReactJS
- BackEnd: Python FastAPI https://github.com/rahul-madaan/phone-one-server
- Database: MySQL

# Features

# Initial Setup
1. Install Node and NPM - Follow steps here: https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac
2. Download and install MySQL - Follow steps here: https://www.javatpoint.com/how-to-install-mysql
3. Clone the repo using `git clone https://github.com/rahul-madaan/IDmyPhone.git` command
4. Open the project in IntelliJ Idea(preferred)
5. Open terminal/command prompt and cd into the project folder
6. Run commands `npm install` and `npm start` (npm install will take time for initial setup)
7. Start MySQL server on your machine.
8. Run create schema script from `./SQL scripts`
9. Populate database with seed data using the  `./SQL scrips/data` folder commands. 
10. Run https://github.com/rahul-madaan/phone-one-server python FastAPI on local machine (port 8000).
11. Run command `npm start` to start the ReactJS server on port 3000
12. Open http://localhost:3000/ on your browser.

# Database UML Diagram
![slot_app_db](https://user-images.githubusercontent.com/34760210/216677500-6e47ef69-a8b6-45bc-bdc0-c6095cab027a.png)


# User Interface
## Login Page
<img width="1616" alt="Screenshot 2023-02-03 at 11 49 35 PM" src="https://user-images.githubusercontent.com/34760210/216677944-d79fa220-e91c-434e-9727-e5830c9fe1da.png">

## Register Page
<img width="1611" alt="Screenshot 2023-02-03 at 11 50 10 PM" src="https://user-images.githubusercontent.com/34760210/216678028-3c3677ac-cf2c-4194-8420-e04249d848b0.png">

## Select your gym days
https://user-images.githubusercontent.com/34760210/216679020-84dd8e3f-f443-4907-a914-e77d8f6989a9.mov




## Transfer Requests Page
<img width="1438" alt="Screenshot 2022-05-31 at 12 08 47 AM" src="https://user-images.githubusercontent.com/34760210/171045853-31f58c11-c495-45e0-a462-fd8711950443.png">

## My Buying Requests Page
<img width="1440" alt="Screenshot 2022-05-31 at 12 23 51 AM" src="https://user-images.githubusercontent.com/34760210/171047504-93abf4bb-d525-4fbc-b289-d8979381fa4c.png">

## Buy New Device Page
<img width="1438" alt="Screenshot 2022-05-31 at 12 09 37 AM" src="https://user-images.githubusercontent.com/34760210/171045943-28f43d7c-346f-4621-8627-f7605af93f11.png">

## Check Owner Page
<img width="1436" alt="Screenshot 2022-05-31 at 12 09 57 AM" src="https://user-images.githubusercontent.com/34760210/171045973-8d2a2ffa-aada-4e93-aeff-10d09b829111.png">

## Recycle Device / Book Device Pickup Page
<img width="1436" alt="Screenshot 2022-05-31 at 12 23 21 AM" src="https://user-images.githubusercontent.com/34760210/171047436-ff143ca7-117b-49b5-9bd8-0c938bf99464.png">

## Notifications
### Incorrect Password
<img width="1439" alt="Screenshot 2022-06-04 at 3 35 58 AM" src="https://user-images.githubusercontent.com/34760210/171960402-43c8193d-e0dd-41bb-ba69-ccf8ff588183.png">

### Registration Validation
<img width="1440" alt="Screenshot 2022-06-04 at 3 37 43 AM" src="https://user-images.githubusercontent.com/34760210/171960598-2aef3376-0a07-4e09-8bf1-542880352705.png">
<img width="1440" alt="Screenshot 2022-06-04 at 3 38 12 AM" src="https://user-images.githubusercontent.com/34760210/171960641-f985e03f-462a-4f3c-a1e1-b868867ddc5b.png">
<img width="1440" alt="Screenshot 2022-06-04 at 3 38 34 AM" src="https://user-images.githubusercontent.com/34760210/171960666-3383b37b-3b7a-41d8-8fda-a042b0482a4c.png">
<img width="1440" alt="Screenshot 2022-06-04 at 3 38 56 AM" src="https://user-images.githubusercontent.com/34760210/171960687-c4d083ab-ee93-4f2b-8797-075b84d674d1.png">
<img width="1437" alt="Screenshot 2022-06-04 at 3 39 15 AM" src="https://user-images.githubusercontent.com/34760210/171960724-d50b7277-554f-48a2-889c-7ade6796ee9f.png">

### Book Pickup notifications
<img width="1440" alt="Screenshot 2022-06-04 at 3 39 58 AM" src="https://user-images.githubusercontent.com/34760210/171960790-7a89f639-4a4e-4ab0-9ea7-bda25077a71b.png">
<img width="1439" alt="Screenshot 2022-06-04 at 3 40 38 AM" src="https://user-images.githubusercontent.com/34760210/171960852-be2fd938-e1a2-46ee-8b4e-23954d801c9d.png">

### Report Lost/Stolen Notification
<img width="1440" alt="Screenshot 2022-06-04 at 3 42 47 AM" src="https://user-images.githubusercontent.com/34760210/171961111-4cb24bc1-5f33-446d-8aec-20f1ff8e82af.png">


