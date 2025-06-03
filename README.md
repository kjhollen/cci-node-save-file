# Saving an image with Node

*For local installations only*: this method is NOT secure, and allows anyone to upload an image to your server.
Generally, if you're going to put something like this on the internet you would want to have some type of login system to prevent abuse.
This provides an alternative to having p5.js pop up the download dialogue with save(), but is best suited for running an installation locally on your own computer.

*updates to .gitignore*: added a line to ignore image files in /savedImages so that user data isn't committed to the repo.

This project includes a Node.js server script and a web page that connects to it.
The client sends an image (via p5.js canvas), and the server saves the image locally.

[Node.js](https://nodejs.org/en/about/) is a popular runtime that lets you run server-side JavaScript.
This project uses the [Express](https://expressjs.com/) framework.
Please do not upgrade to Express version 5, which is incompatible with the version of node.js that Glitch uses.

_Last updated: 19 May 2025_

## Prerequisites

You'll get best use out of this project if you're familiar with basic JavaScript.
If you've written JavaScript for client-side web pages this is a little different because it uses server-side JS, but the syntax is the same!

## What's in this project?

← `README.md`: That’s this file, where you can tell people what your cool website does and how you built it.

← `public/style.css`: The styling rules for the pages in your site.

← `public/client.js`: The JavaScript for the site's front-end. This is the JavaScript that will run in the user's (client's) web browser. In this example, the client has a simple p5.js drawing app and some code for sending the canvas to the server when a button is clicked on the webpage.

← `public/index.html`: This is the main index for the site. In other Glitch examples, you may see HTML templates with libraries like Handlebars instead of an index.html

← `server.js`: The **Node.js** server script for your new site. In this template, we respond to POST requests at /save to save an image.

← `package.json`: The NPM packages for your project's dependencies.

## Try this next 🏗️

___Want a minimal version of this project to build your own Node.js app? Check out [Blank Node](https://glitch.com/edit/#!/remix/glitch-blank-node)!___

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

Note: this is a template developed by Glitch and uses Fastify instead of Express.
Both libraries are similar in function, but have different syntax.

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

- Need more help? [Check out our Help Center](https://help.glitch.com/) for answers to any common questions.
- Ready to make it official? [Become a paid Glitch member](https://glitch.com/pricing) to boost your app with private sharing, more storage and memory, domains and more.
