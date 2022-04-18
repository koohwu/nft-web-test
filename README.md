Installation Guide
------------------------------------------------------------
Require Node Js for install Cypress
1.Go to https://nodejs.org/en/ 
2.Download 16.14.2 LTS
3.Install Node JS in your PC/Mac

After Install Node JS
1.Create a folder for automation test
2.Open terminal / NodeJs cmd and cd to your created folder
3.input following command
  npm install cypress --save-dev 
4.node_modules folder or package.json should be installed under the previous folder
5.Input folling command and Cypress GUI will open
  npx cypress open 

For Docker image
You can pull thress images
1.docker pull cypress/base
2.docker pull cypress/browsers
3.docker pull cypress/included

Then you can add in container and run the image