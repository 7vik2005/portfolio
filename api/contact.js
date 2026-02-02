<<<<<<< HEAD
// File: api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
=======
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
<<<<<<< HEAD
    return res.status(400).json({ message: "All fields are required" });
=======
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

<<<<<<< HEAD
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Message",
=======
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Contact Form Message',
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
      html: `
        <h3>Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
<<<<<<< HEAD
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({ message: "Something went wrong." });
=======
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email Error:', error);
    res.status(500).json({ message: 'Something went wrong.' });
>>>>>>> 211cfd49e49ad92d13c6d703360adad802ecd735
  }
}
