# budget-tracker
A sample end-to-end application for tracking daily budgets
Language : Python


**Setting up - UI Environment**

1. Navigate inside **ui** folder
2. Run npm install
3. Run npm start

This opens up a connection and things are good to go.

**Building a docker container**

1. Run gulp
2. Dist folder gets generated, run docker build -t {some-name} .
    - This builds the docker container
    - To check the files inside the container, use the command,
        ```
        docker run -it {some-name} /bin/bash
        ```
    - To bring up the server, use the command,
        ```
        docker run -p {external-port}:{internal-port} {some-name}
        eg.) docker run -p 5000:90 budgettracker01
        Hit localhost:5000 to see the application
        ```