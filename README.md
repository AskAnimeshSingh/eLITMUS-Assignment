# eLITMUS-Assignment

Problem Statement:

eLitmus is a recruitment and assessment company that conducts tests across the globe. One of the most common challenges we face is preventing cheating during exams. We need your help to design and create a chrome extension to address this issue.

A Chrome extension that operates on assessment websites, activating when a user opens a test page. It opens a form for the user to enter their name, email, and test invitation code, and upon clicking the "Start Test" button, the user's information is sent to the backend server for storage. The extension performs a camera and audio check, and initiates image proctoring, sending images to the server every three minutes (configurable). All image and user activity data are stored on the backend server.
 
Feature List:

1.	Frontend(Should be As Chrome Extensions)
a.	A Chrome extension that allows users to input their details through a form.
b.	Upon clicking the "Start Test" button, the user's information is sent to the backend server. 
c.	The extension performs audio and video requirement checks and displays the candidate's live webcam feed on the page. 
d.	It also sends images of the user from the browser to the server at configurable intervals.
e.	An admin dashboard is provided to display all user information and stored images.
2.	Backend
a.	Create the Backend which will store the related data and images.
b.	 Images should be stored in some data storage (preferred cloud).
c.	Create a backend API to display all the user information along with stored images.
d.	Images should be stored along with timestamp.
 

Additional Requirements(Optional):
1.	Admin dashboard displaying images can have additional features.
a.	Image description can be provided. (example → any object visible or not, multiple faces are in images or not, candidate face is visible or not.)
b.	As a whole if there are multiple person images captured during images, then flags should be shown in the dashboard.

Solution Proposal:
To address the problem of cheating during exams, we can develop a Chrome extension that operates on assessment websites. This extension will allow users to input their details through a form, and upon clicking the "Start Test" button, their information will be sent to the backend server for storage. The extension will also perform audio and video requirement checks and display the candidate's live webcam feed on the page. It will also send images of the user from the browser to the server at configurable intervals.

The backend will be responsible for storing all the related data and images. We will use cloud storage to store the images, and a backend API will be created to display all the user information along with stored images. Images will be stored along with a timestamp for easy reference.

An admin dashboard will be provided to display all user information and stored images. The dashboard will have additional features such as image description, which will provide information on any object visible or not, multiple faces in the images, and whether the candidate's face is visible or not. If multiple person images are captured during images, flags should be shown in the dashboard. This will help the admin to quickly identify any anomalies during the test and take necessary actions.

In summary, our proposed solution will include a Chrome extension that operates on assessment websites, a backend server to store all data and images, and an admin dashboard with additional features to display user information and stored images. This solution will help to prevent cheating during exams and provide a secure and reliable platform for assessment.


for Backend the architecture will look like --

                     ┌───────────┐            ┌──────────────┐
                     │  Client   │            │  Admin       │
                     │           │            │  Dashboard   │
                     └────┬──────┘            └──────┬───────┘
                          │                         │
                          │ API                     │
             ┌────────────┴─────────────────────────┴─────────────────┐
             │                                                           │
┌───────────────────────────────────┐                      ┌──────────────────────────────────────┐
│            Backend                │                      │          Image Storage              │
│                                   │                      │                                      │
│       API Server & Database       │                      │            Cloud Storage             │
└───────────────────────────────────┘                      └──────────────────────────────────────┘

STEPS TO BE FOLLOWED TO RUN THIS CODES_
1) create the frontend named as index.html
2) create a css file named style.css
3) add javascript link and add some javascript with file name script.js
4) now create API and database (Mongodb) connection with file name index.js.(To create connection with database you need to install some JSON package by running commands in terminal, they are-- npm install express, npm install mongoose, ) 
5) Make sure to install and keep running the Mongodb database.
6) Test your API endpoints using a tool like Postman or a web browser.
Deploy your backend to a server or hosting platform such as Heroku or AWS, if needed
