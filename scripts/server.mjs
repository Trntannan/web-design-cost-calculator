import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import sqlite3 from 'sqlite3';

// this is only an example until backend API is decided



const app = express();
const PORT = process.env.PORT || 3000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Create a SQLite database
const db = new sqlite3.Database('contacts.db');

// Create a table to store contacts if it doesn't exist
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS contacts (name TEXT, email TEXT, phone TEXT, company TEXT, website TEXT, quote_details TEXT)");
});

// Define endpoint to handle form submissions
app.post('/submit', (req, res) => {
    const { name, email, phone, company, website, quote_details } = req.body;

    // Save form data to SQLite database
    db.run("INSERT INTO contacts (name, email, phone, company, website, quote_details) VALUES (?, ?, ?, ?, ?, ?)",
        [name, email, phone, company, website, quote_details],
        (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
            } else {
                // Send automated email to user
                sendEmail(email, 'Thank you for your submission', 'Your form submission has been received.');

                res.status(200).send('Form submitted successfully');
            }
        });
});

// Function to send email
function sendEmail(to, subject, text) {
    // Nodemailer configuration
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trntannan1@gmail.com',
            pass: 'Rileygoh2408'
        }
    });

    // Email options
    let mailOptions = {
        from: 'trntannan1@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
