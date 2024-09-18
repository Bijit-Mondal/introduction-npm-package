import { createSpinner } from 'nanospinner';
import colors from 'colors';
import link from 'terminal-link';

console.clear();

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function printSkills(lang, header) {
    const availableColors = shuffle(['cyan', 'green', 'blue','yellow']);
    let output = `${header}`.brightGreen;
    lang.forEach((l) => {
        const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
        output += `${l[randomColor]}, `;
    });
    console.log(output.slice(0, -2)); // Remove the last comma and space
}

// Function to log your details in the terminal
async function logDetails() {
    console.log(`
░█░█░█▀▀░█░░░█░░░█▀█░░░█░█░▀█▀░█▀▀░▀█▀░▀█▀░█▀█░█▀▄
░█▀█░█▀▀░█░░░█░░░█░█░░░▀▄▀░░█░░▀▀█░░█░░░█░░█░█░█▀▄
░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀░░░░▀░░▀▀▀░▀▀▀░▀▀▀░░▀░░▀▀▀░▀░▀

    `.brightRed);
    console.log();

    const spinner = createSpinner('Loading Bijit\'s details...').start();

    async function spinnerStart(){
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    await spinnerStart();

    spinner.success();

    // Details
    console.log(`
███╗   ███╗███████╗
████╗ ████║██╔════╝
██╔████╔██║█████╗
██║╚██╔╝██║██╔══╝
██║ ╚═╝ ██║███████╗
╚═╝     ╚═╝╚══════╝
    `.brightYellow)


    const website = link('Watch me struggling', 'https://bijit.xyz');
    const githubLink = link('Watch me coding','https://github.com/Bijit-Mondal')
    const xLink = link('Watch me chirping','https://x.com/BijitMondal10')

    console.log(`Name:`.brightYellow +` Bijit Mondal`.brightBlue);
    console.log(`Website:`.brightYellow + ` ${website}`.brightBlue);
    console.log(`Github: `.brightYellow +`${githubLink}`.brightBlue);
    console.log(`X: `.brightYellow +`${xLink}`.brightBlue);

    console.log()



    // Skills in ascii
    console.log(`
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝

    `.brightGreen)
    printSkills(['Java','JavaScript','C','Python'], 'Languages: ');
    printSkills(['VueJS','ViteJs','Tailwind CSS'], 'Frontend: ');
    printSkills(['SpringBoot','NuxtJS','NitroJS','Flask'],'Backend: ');
    printSkills(['MySQL','Sqlite','PostgreSQL','MongoDB','Redis'],'Database: ');
    printSkills(['Gitlab CI/CD','Docker','Kubernetes'],'Devops: ');
}
// Call the function to log your details
logDetails();
