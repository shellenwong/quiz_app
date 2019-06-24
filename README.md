# uczlx69-quiz
# Quiz Answering App


## Requirement Applications
The Quiz Answering App is the pairing app with the quiz answering app and also is part of the “UCL POP QUIZ. 
- Equipments: A computer, A smart phone with Android system
- Software used to develop: Bitvise SSH Client 8.29 in computers, PhoneGap Developer 1.8.4 APK in Android 
- Browser: Google Chrome 73.0.3683.86 (NB: Ctrl+Shift+I to check the error from the Console)

## Deployment
The Quiz Answering App is developed by HTML5 and Javascript. A phonegap app is built up by terminal of the Bitvise SSH Client. It is an open source mobile device development framework designed to enable developers to develop cross-platform mobile device applications using Web APIs such as HTML, Javascript, and CSS. What the developer needs to do is entering a simple command into the terminal. The app can be opened by typing the command “phonegap serve” into the terminal. 

Most functions developed here are basically using Javascript and the solution is mainly the asynchronous JavaScript and XML (AJAX) which is used on the client side to create multiple web applications. When opening the app, all the existing quiz points will be displayed automatically on the map, and if the client are just within 50 meters away from the quiz point, the quiz will pop up automatically, which function can be realised by tracking user’s detailed location. Getting the user’s by multiple geo-information requiring computing command, mainly like position.coords.latitude, position.coords.longitude and navigator.geolocation. As for finishing the quiz popping up, when opening the app, the app will acquire the data from the server by the solution AJAX and in order to make it work automatically, the programming statement addEventListener is used here as a start-up function. The popping up quizzes are displayed as multiple choice questions, each option collecting by the programming sentence feature.properties.id and displaying and organizing them as pop up quiz by using htmlString. After selecting the answer, the app will tell clients correct or not by checking whether the selected option is same with the correct answer recorded in the system, and then upload the question using the AJAX, same way with loading quiz points. As users like, the quiz points are a layer covering above the map, so there is a remove quiz points layer function, users can remove this any time, but if the quiz has already been answered, it cannot be removed because the status of the quiz has already been changed.

Getting how many questions users have answered correctly when they answer a question and getting users’ ranking, these two functions are basically realized by the AJAX. Adapting the server and build up the inner HTML to acquire the number of how many quizzes users answered correctly and the rankings of the user. The way of recording the user are through recording the port ID of the user. It is a convenient way to record the information instead of recording the user names created by users. Although there is a small disadvantage if there are multiple users sharing the same port ID, the system cannot tell each specific user. It is needed to be updated in the future.

## Testing
The test carried out in the campus UCL because the quiz points are mainly setting in the campus. The testing points used here are in the science library and student centre respectively for the reason that the distance between these two places is more than 50 meters.
- When opening the quiz answer app and getting close within 50 meters to the student centre the science library and student centre, the quiz will pop up automatically since the tester is tracked by the app. It takes a few time to get the closest quiz that calculating distance needs a few time. 
- After answering the quizzes, the tester can get how many quizzes answered correctly, at the same time the tester can remove the layer of the quizzes but not the answered quiz points. 
- Clicking button of “Get Ranking” on the left-hand menu, the tester can get the current ranking.
- Keeping testing it for several times by different testers in different locations, such as the main library point, the Christopher Ingold building point. 
After these tests, the app still works perfectly. And there is no error response in the NodeJS server.

## Functions used in the app
HTML or JS file       | Functions                       | Reference    | 
--------------------- | :--------------------------------------: | :-----------: |
|index.html |foundation of the app| modify from the phonegap|
userGuide2.html       | A user guide for clients to understand how to use this app  | develped by myself|
|Closing.js|Quiz pops up automatically when closing to the quiz points within 50m|Week 3 Practical, author: Dr. Claire Ellul|
LoadQuiz.js           | Loading existing quiz points, checking and uploading answers, removing the quiz points layer    | Week 6 Practical, author: Dr. Claire Ellul|
Markers.js            | Setting Makers                  |Week 3 Practical, author: Dr. Claire Ellul|
|getCorNumRanking.js|Getting how many quizzes clients answered correctly and the ranking|Week 5 Practical, author: Dr. Claire Ellul|
 leaflet.awesome-markers.js|Leaflet.AwesomeMarkers |http://leafletjs.com & https://github.com/lvoogdt |
 leaflet.js|The map show in the app|Week 2 Practical, author: Dr. Claire Ellul |
 rhMenu.js |Setting Menues in the upper right corner | Week 3 Practical, author: Dr. Claire Ellul|
 startup.js |Loading the functions automatically | Week 4 Practical, author: Dr. Claire Ellul|
 |userTracking.js|Tracking user's location automatically| Week 3 Practical, author: Dr. Claire Ellul|
 utilities.js |Detecting the port ID | Week 5 Practical, author: Dr. Claire Ellul|
 
 




























































