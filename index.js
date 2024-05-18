#!/usr/bin/env node

const { exec } = require('child_process');

const scriptPath = 'image.sh';

// Function to log your details in the terminal
function logDetails() {
    const message = "Hola! I am Bijit Modal, I love to learn new technologies and solve problems using it. I am currently undergraduate student";
    const githubLink = "https://github.com/Bijit-Mondal";
    const linkedinLink = "https://www.linkedin.com/in/bijit-mondal-3b196721b/";
    const wesbiteLink = "https://codedhyan.netlify.app";

    // Create a colorful box using ANSI escape codes
    const colorfulBox = `\x1b[38;5;51m+---------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
    +---------------------------------------------------------------+
    | \x1b[38;5;93mGithub:\x1b[0m \x1b[38;5;39m${githubLink}                     \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}                 \x1b[38;5;51m|
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}                      \x1b[38;5;51m|
    +----------------------------------------------------------------+\x1b[0m`;

    exec(`sh ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`${stdout}`);
        console.log(colorfulBox);
    });
  }
  // Call the function to log your details
  logDetails();
