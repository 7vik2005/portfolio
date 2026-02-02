// File: server.js
<<<<<<< HEAD
import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors";
=======
import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

<<<<<<< HEAD
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
=======
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
  }

  try {
    const transporter = nodemailer.createTransport({
<<<<<<< HEAD
      service: "gmail",
=======
      service: 'gmail',
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
<<<<<<< HEAD
      subject: "New Contact Form Message",
=======
      subject: 'New Contact Form Message',
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
      html: `
        <h3>Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
<<<<<<< HEAD
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ message: "Something went wrong." });
=======
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ message: 'Something went wrong.' });
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
