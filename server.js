import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = process.env.PORT || 5501;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = new sqlite3.Database('contacts.db');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS contacts (name TEXT, email TEXT, phone TEXT, company TEXT, website TEXT, quoteDetails TEXT)");
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, phone, company, website, quoteDetails } = req.body;

    db.run("INSERT INTO contacts (name, email, phone, company, website, quoteDetails) VALUES (?, ?, ?, ?, ?, ?)",
        [name, email, phone, company, website, quoteDetails],
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

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
