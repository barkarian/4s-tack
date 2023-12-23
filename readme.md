🌐 Concept Project: 4s-tack stands for Strapi,Sveltekit,Shadcn-svelte,Superforms
Develop highly customizable applications fasts with the help of context aware AI assistants!

Introduction 🚀
This is a stack that Generative AI understands 🪄🧙‍♂️
Get Context aware chat!
Create entities from UI and automatically have types on your whole application!
Easily deployed and scalable architecture

Technologies 🛠️
Shadcn-Svelte: A fresh and intuitive library. 🏡
Strapi: Automatic conversion of entities to types, simplifying complexity. 🌟
SvelteKit: A beloved framework for rapid development. 🚀
Superforms: Bridges SvelteKit frontend forms with the backend. 🌉

🔑 Key Features:
Manage your application with the help of AI powered dev-utils UI:
    -Use dev-utils to generate your types automatically.
    -Use the context aware assistants located in dev-utils(Powered by openAI):
        -Sveltekit Assistant🤖
        -Strapi Assistant🤖
Shadcn is my library of choise because of the readable UI components tailored for generative AI.
    -I advice you to generate components from existing top-notch softwate like:
    https://v0.dev/ 🪄
    -Convert the code by pasting on our custom v0 to svelte gpt converter:
    https://chat.openai.com/g/g-oCjTLhePU-v0-to-svelte 🪄
Type Integration:
    -From strapi UI define entities and their relations and have types generated automatically everywhere in your application. ⚙️
Easy authentication (default-dev:Auth0) 🔐
    -The default provider we advice you to connect to during dev-utils is an Auth0:
    -The default authentication dataflow is this one:Sveltekit->Strapi->Auth0
    ATTENTION:How to setup a different provider than auth0
    -You can easily setup a different provider from Strapi UI
    -Here is an example of you can implement oauth with google and github: 
        -Setup strapi providers from strapi UI.
        -Remember the data flow for oauth in this case will look like this:
            Sveltekit->Strapi->Google
            and simultaneously
            Sveltekit->Strapi->Github
        -If you setup a different Strapi Provider you should only change programmatically the redirect url from the frontend login button
Easy to deploy and scale up/down 📊 🚀
    -Auth0:Our default for bliss development - but very easy to customize and change it from strapi.
    -Deploy your frontend on vercel or any other serverless enviroment.
    -Deploy your strapi:
         -on scale(AWS):microtica can help you deploy easily with no extra cost and handles everything from s3,ec2 and RDS.
        -on server:you can also easily deploy to digital ocean,plesk server etc.

DOCUMENTATION:
For each directory(dev-utils,sveltekit,strapi):
1)npm install on every directory
2)create .env files for all 3 directories
3)spin up dev-utils()
4)Dev-utils will guide you to create an auth0 application and configure your authentication!
5)Whenever you modify your entities structure is a good idea to generate new context 
6)you can generate context from menubar:Types And Context->Update AI Context
7)Now your sveltekit and strapi assistants are ready to help you build your application

Remember this is only a starting template
Feel free to customize further based on your project's specific needs and details! 🌟