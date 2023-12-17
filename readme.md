🌐 Concept Project: 4s-tack stands for Strapi,Sveltekit,Shadcn-svelte,Superforms

Introduction 🚀
Build full stack web application is a blizz with this stack
Create entities and relations from Strapi UI and get types for your entities in your sveltekit!
Utilise strapi's lifecycles and custom web hook to build any backend code.
When you need to deploy in production on AWS from microtica free deployment template:https://docs.microtica.com/deploy-a-new-strapi-app

🔑 Key Features:
Intuitive readable UI components tailored for generative AI.
    -We advice you to generate components from:
    https://v0.dev/
    -Convert the code by pasting on our custom v0 to svelte gpt converter:
    https://chat.openai.com/g/g-oCjTLhePU-v0-to-svelte
Type Integration:
    -From strapi UI define entities and their relations and have types generated automatically everywhere in your application.
Easy authentication:
    -auth0 takes care of your authentication.
Customizability: 
    -Add customizability from lifecycles (beforeUpdate,afterUpdate etc) or even create custom strapi endpoints.
Easy to deploy and scale up/down:
    -Auth0:Our default for bliss development - but very easy to customize and change it from strapi.
    -Deploy your frontend on vercel or any other serverless enviroment.
    -Deploy your strapi and scale(AWS):microtica can help you deploy easily with no extra cost and handles everything from s3,ec2 and RDS.
    -Deploy your strapi (Server):you can also easily deploy to digital ocean,plesk server etc.

Technologies 🛠️
Shadcn-Svelte: A fresh and intuitive library. 🏡
Strapi: Automatic conversion of entities to types, simplifying complexity. 🌟
SvelteKit: A beloved framework for rapid development. 🚀
Superforms: Bridges SvelteKit frontend forms with the backend. 🌉

Setup AUTHENTICATION
Auth0 Setup
You'll firstly need connect auth0 account with strapi (similar process for other oauth services google/facebook etc.)
STEP 1:Create a New Auth0 API
    -Applications→APIs→Create API
    -a modal will popup that you can fill up as you want
STEP 2:Create an application
    -applications→create application. 
    -This will pop up a model prompting you to create a name for the application and to select the application type. 
    -Create a name and select "machine to machine application then click on create
STEP 3:Configure the auth0 application settings:
    -Head over to settings tab
    -copy and paste the auth0 settings url into the root directory's .env file under the name AUTH0_SETTINGS_URL.
        AUTH0_SETTINGS_URL=https://manage.auth0.com/dashboard/us/<some_id>/applications/<some_other_id>/settings
    Set values:
        -Allowed Logout URLs: http://localhost:3000
        -Allowed Web Origins: http://localhost:3000
    Scroll down to Advanced Settings->Grand Types(tab)
        -Ensure the followings are enabled.
        Implicit
        Authorization Code
        Refresh Token
        Client Credentials

Strapi Auth Setup
STEP 1:Start strapi
    cd strapi && npm run dev
STEP 2:Configyre providers:
    -Settings→Users & Permissions plugin →Providers.
    -Click on auth0
    -this will open a modal where we will enable all the necessary Auth0 details. 
    -You will have to enter the following details:
    Enable: TRUE
    Client ID: <Your Auth0 Client ID>
    Client Secret: <Your Auth0 Client Secret>
    Host URI (Subdomain): <Your Auth0 tenant url>,(looks like this:dev-0e2aajac.us and it derives from dev-0e2aajac.us.auth0.com)
    The redirect URL to your front-end app: http://localhost:5173/auth/connect/auth0/redirect

You're now good to go!

JUST REMEMBER everytime you spin up tunnel strapi will get a different tunnel url(At least on ngrok free plan) that's why every time you spin up tunnels you have to update an auth0 settings page field...
But don't worry the command line will REMIND you to update that one field very fast!

Documentation for development 📖
1st Step: If it is your first time don't forget to SETUP AUTHENTICATION...

2st Step: Before spinning up Strapi and SvelteKit, please run:🚇
👉Run this command and DON'T FORGET to follow the instructions given from the console
python3 start_ngrok.py

This command opens a web tunnel with a secure connection on a random URL, and it automatically updates the strapi url environment variables in SvelteKit and Strapi!
It does not though updates the auth0 settings related field that's why you have to follow the instuctions from the console.

3rd Step: Run Strapi 📌
From a new terminal:
cd strapi && npm run dev

4th Step: Start SvelteKit 🎬
From a new terminal:
cd sveltekit && npm run dev

5th Step: Generate strapi types for frontend and backend:
From a new terminal:
cd types-gen
run:npm run t4s-all
(You can also use types-gen to generate types from swaggers for your frontend and backend)


Remember this is only a starting template
Feel free to customize further based on your project's specific needs and details! 🌟