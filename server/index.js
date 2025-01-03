import dotenv from "dotenv";
import nodemailer from "nodemailer";
import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173" || process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", () => {
  return "Hello, World!";
});
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, message, budget } = req.body;

    // Client email (confirmation)
    let htmlContentClient;
    const clientTemplatePath = path.join(
      __dirname,
      "emailTemplate",
      "confirmation.html"
    );
    try {
      htmlContentClient = fs.readFileSync(clientTemplatePath, "utf-8");
    } catch (error) {
      console.log(error);
    }
    htmlContentClient = htmlContentClient
      .replace("{{name}}", name)
      .replace("{{APP_NAME}}", process.env.APP_NAME);

    // Admin email (client message)
    let htmlContentAdmin;
    const adminTemplatePath = path.join(
      __dirname,
      "emailTemplate",
      "client-message.html"
    );
    try {
      htmlContentAdmin = fs.readFileSync(adminTemplatePath, "utf-8");
    } catch (error) {
      console.log(error);
    }
    htmlContentAdmin = htmlContentAdmin
      .replace("{{name}}", name)
      .replace("{{email}}", email)
      .replace("{{message}}", message)
      .replace("{{budget}}", budget)
      .replace("{{APP_NAME}}", process.env.APP_NAME);

    // Send email to client
    const mailOptionsClient = {
      from: process.env.GMAIL,
      to: email,
      subject: "NEW MESSAGE FROM CLIENT",
      html: htmlContentClient,
    };
    await transporter.sendMail(mailOptionsClient);

    //myself
    const mailOptionsAdmin = {
      from: process.env.GMAIL,
      to: process.env.GMAIL,
      subject: "New message from client",
      html: htmlContentAdmin,
      replyTo: email,
    };
    await transporter.sendMail(mailOptionsAdmin);

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error sending email" });
  }
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
