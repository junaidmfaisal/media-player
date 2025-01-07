


             React with API project steps
  ---------------------------------------------------

  1. Create a react project using vite
  2. Remove unwanted code from App.jsx , index.css , App.css file
  3. Install any styling library to project
  4. Create a folder for different pages for this application in src folder,and create different component for each page in the folder
  5. Set up a path for component using react-router-dom library
  6. create a component folder inorder to held reusable quotes in deifferent pages 


                    JSON server Deployment

    using Node.JS
    1. create a index.js inside server folder
    2. update scripts key of package.json file with { "start": "node index.js" } and remove test key from it
    3. create .gitignore file to add node modules 
    4. define steps to run db.json file using json-server in index.js
        - import json-server
        - create a server for media player app inorder to run our server app
        - create a middleware to convert json data to JS
        - create a port for executing our APP
        - setup the path / or route of db.json so that the client can make the request
        - use middleware , route inside the server
        - run the server using given port
        - To execute our app we have to use node index.js in terminal so that we can see the output in localhost:3000