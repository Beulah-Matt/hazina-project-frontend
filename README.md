# Hazina Application
```Group Members```
1. Beulah Mathenge - Scrum Master and Full Stack Developer
2. Kevin Kweyu - UI/UX, Frontend Developer, Figma Designs
3. Dennis Gachomo - Backend Developer
4. Yego Kipkemoi - Backend Developer 
5. Gilbert Kipkemoi - Frontend Developer 

Here is a video walkthrough for the project:


https://user-images.githubusercontent.com/109944021/235605385-76ed52d7-ab57-4c08-b05a-74f9e538d5ad.mp4

       
## Ruby on rails backend.

>>The project is Hazina Api Rails backend.
>>The project requrements were as follows:-
    
    >Ruby 2.7.4
    >NodeJS (v16),and npm
    >Postgresql
    >Deploying

>> To run the project in your browser you can fork and clone and run the following commands:-

        $ bundle install
        $ rails db:migrate db:seed
        $ rails s: run the backend on http://localhost:3000      


### GETTING STARTED WITH THE PROJECT

 <>INSTALLATIONS

 First, you need to have rails and bundlers installed globally in your machine.
   Simply by installing the latest version.

 #### Installation

     >Run the following commands:
       $ gem install bundler
       $ gem install rails

 #### Installation of node.js
   
     run:-
     $nvm install 16
     $nvm use 16
     $nvm alias default 16

     Then verify the node version using:
      $node -v 

 ##### Install Postgresql


 Deploying requires that you use PostgreSQL for your database instead of SQLite. PostgreSQL (or just Postgres for short) is an advanced database management system with more features than SQLite. If you don't already have it installed, you'll need to set it up.  
    > Run the following commands from your Ubuntu terminal: 
          $ sudo apt update
          $ sudo apt install postgresql postgresql-contrib libpq-dev

     > Then confirm that Postgres was installed successfully:  
           $psql --version   

           >To start Posgresql run the following command:
                $sudo service postgresql start

 You'd need to create a Postgres user with the same name as the same name with your operating system.
     To do so, run this command to open the Postgres CLI:
        $sudo -u postgres -i

 From the Postgres CLI, run this command (replacing "name" with your username):  
        $createuser -sr name
        >Then enter control + d or type logout to exit.  
        

## USING THE PROJECT

Run 
  $rails s: then http://localhost:3000 in your browser if you are unable to access the hosted backend 
   to specify what you want to access you can run:-
   `` Index, Create and Show routes for storage units https://hazina-backend.up.railway.app/storage_units
   `` To get specific a customer's booked storage we can make GET, POST, UPDATE and DELETE requests to https://hazina-backend.up.railway.app/customer_storages

#### Resources:

 For more resources you can visit the link below:
 https://rubyonrails.org

>>>> REACT FRONTEND (client)

The react project is to display the data from the backend  by fetching.
For this to occur ensure the rails server is running for it to display data to the frontend part.
   
   Run these commands on separate terminals:-
        
    > rails s: run the backend on http://localhost:3000
    > npm start --prefix client: run the frontend on http://localhost:4000


### DEPLOYMENT FRONTEND

I created a new repository on the client(frontend) folder for deployment;

    >>> https://hazina-fe.vercel.app/

 This is the GitHub URL of the repository:-
        https://github.com/Beulah-Matt/hazina-project-frontend

        The rails server must be running to see the fetched data on the screen.
          >> rails s

 ### DEPLOYMENT BACKEND

 This is my GitHub backend URL
    >>> https://github.com/Beulah-Matt/Hazina


### Permissions
We hereby permit to use of the code in this project for both reference and learning purposes. 
Please reach us from our GitHub profiles
kevinzepwa, Beulah-Matt, GachomoX, yegobaroni and kipkemoi98
