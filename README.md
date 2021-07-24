# Social-Network

## Description
A social network API application that allows users to connect with friends, share their thoughts and react to friends' thoughts. 

## User Story
>AS A social media startup  
I WANT an API for my social network that uses a NoSQL database  
SO THAT my website can handle large amounts of unstructured data  

## Acceptance Criteria
>GIVEN a social network API  
WHEN I enter the command to invoke the application  
THEN my server is started and the Mongoose models are synced to the MongoDB database  
WHEN I open API GET routes in Insomnia Core for users and thoughts  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
THEN I am able to successfully create, update, and delete users and thoughts in my database  
WHEN I test API POST and DELETE routes in Insomnia Core  
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list  

## Installation

1. Clone social-network repository
2. Run <code> npm install</code> to install dependencies  
    - Ensure you have the following dependencies  
        a. Express.js  
        b. Mongoose  
3. Run <code> npm start </code> to initialize the app
4. Use Insomnia to test the routes

## Usage

### Video
*[Video of User Experience](https://drive.google.com/file/d/1wZghJ5KHe4PMV7zXMHIrzUugIxbv42ja/view)

![Walkthrough Video](./assets/social-network.gif)

