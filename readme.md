# Anyplay

This will hopefully become a platform that allows users to browse and share short audio clips.

## How to setup?

You need to install a version of mongo db, need node js and a few packages. Once all of this is done, clone this repository and type the following command in your terminal:
npm install

This will get all the packages you might need for testing the platform.

Next, you should create a file called ".env" without the quotes, this requires some secure information. Your file should look something like this:

* port=7777 //the main port that the server listens on.
* mailHost="my-mail-host@provider.domain" //The host address for your mailing server.
* mailPort=600 //the port for connecting to the mail server.
* mailUser="test@1.2" //The email address you will use to send your emails with.
* mailPass="pass" //The password for the email address in use.

## What next?

If you cloned the repository, installed the packages and the mongo db app, configured the .env file and type "node app.js" without the quotes, you should get the message "the server is listening on 7777. This meens everything works out so far. Now, you can open up your browser and enter the following URL: localhost:7777

You should see the anyplay home page. Congratulations.

### Suggestions:

Please feel free to creat an isssue for any suggestions you would like to see. If you can implement it, that'd be awesome also.

## Contributions

As always, any contributions are welcome. Wether in the form of pull requests or issues, anything helps.

If you want to get in touch, please send me an email at ashleygrobler04@gmail.com
