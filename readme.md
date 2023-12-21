🌐 Concept Project: 4s-tack stands for Strapi,Sveltekit,Shadcn-svelte,Superforms

Introduction 🚀
Build full stack web application is a blizz with this stack.
Create entities and relations from Strapi UI and get types for your entities in your sveltekit!
Utilize context aware Chat Assistants for building your application.
Utilise strapi's lifecycles and custom web hook to build any backend code.
When you need to deploy in production on AWS from microtica free deployment template:https://docs.microtica.com/deploy-a-new-strapi-app

Technologies 🛠️
Shadcn-Svelte: A fresh and intuitive library. 🏡
Strapi: Automatic conversion of entities to types, simplifying complexity. 🌟
SvelteKit: A beloved framework for rapid development. 🚀
Superforms: Bridges SvelteKit frontend forms with the backend. 🌉

🔑 Key Features:
Manage your application with the help of AI powered dev-utils UI:
    -Use dev-utils to generate your types automatically.
    -Use the context aware assistants(Powered by openAI):
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

What is dev-utils:
Dev utils will help you configure the project and will give you context aware assistants!✨✨✨

How to use dev-utils:
Just '''cd dev-utils && run npm run dev''' and you'll get a ui with step by step instructions...
Don't forget to setup dev-utils->.env variables:
    AUTH0_SETTINGS_URL:The url of auth0 application settings page
    OPENAI_KEY:Your openai key
After that you can generate types and let the AI to generate some Context for your current entities structures and relation.
Then head from navigation to:
    -sveltekit assistant
    or
    -strapi assistant 
and get context aware chat!🪄🧙‍♂️

Remember this is only a starting template
Feel free to customize further based on your project's specific needs and details! 🌟