# GYM Slot Booking Web app
ReactJS based Web Application to book slots for Gym.
This app was created and hosted on AWS for Gym at Shiv Nadar University to replace manual booking every sunday

# Tech Stack
- FrontEnd: ReactJS
- BackEnd: Python FastAPI https://github.com/rahul-madaan/phone-one-server
- Database: MySQL

# Features
- Users can book a slot for 1 week 
- Admin can control the number of slots availble at a time
- To avoid race condition, once user has clicked on select slot button it is temporarily reserved for 15 minutes
- User can mark attendance using the web app
- Only one user can mark attendance for a device
- User needs to be present inside the gym to mark attendance (Collects location data)
- Admin can contol the number of missed days after which user will not be allowed to book slot for the next week.

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

## Select Gym Slot
<img width="1224" alt="Screenshot 2023-02-03 at 11 56 18 PM" src="https://user-images.githubusercontent.com/34760210/216679321-f357cff7-8fd1-4124-bfff-041bff59133f.png">


## Confirm slot details
<img width="1235" alt="Screenshot 2023-02-03 at 11 58 33 PM" src="https://user-images.githubusercontent.com/34760210/216679674-2679c6cf-5345-41ec-af02-0b70e6ab706f.png">

## Mark Attendance
<img width="1224" alt="Screenshot 2023-02-03 at 11 59 09 PM" src="https://user-images.githubusercontent.com/34760210/216679785-d168a20e-c307-442d-9968-d80eb6ab9481.png">

# Notifications
<img width="413" alt="Screenshot 2023-02-03 at 11 57 14 PM" src="https://user-images.githubusercontent.com/34760210/216679923-6e46f04f-be91-4f0b-8f4c-bf5d04a364c9.png">
<img width="379" alt="Screenshot 2023-02-03 at 11 58 21 PM" src="https://user-images.githubusercontent.com/34760210/216679944-e3a9f88e-4c02-4454-b541-47604692e5d3.png">




="https://user-images.githubusercontent.com/34760210/171961111-4cb24bc1-5f33-446d-8aec-20f1ff8e82af.png">


