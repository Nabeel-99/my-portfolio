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
    origin: [
      "https://farouknabil.vercel.app",
      "http://localhost:5173" || process.env.FRONTEND_URL,
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.post("/api/send-email", async (req, res) => {
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

    // Generate unique message ID for proper threading
    const messageId = `<${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 11)}@${process.env.GMAIL.split("@")[1]}>`;

    // Send email to client
    const mailOptionsClient = {
      from: process.env.GMAIL,
      to: email,
      subject: "Website project inquiry",
      html: htmlContentClient,
      messageId: messageId,
    };
    await transporter.sendMail(mailOptionsClient);

    //myself
    const mailOptionsAdmin = {
      from: process.env.GMAIL,
      to: process.env.GMAIL,
      subject: "Website project inquiry",
      html: htmlContentAdmin,
      replyTo: email,
      messageId: `<admin-${Date.now()}@${process.env.GMAIL.split("@")[1]}>`,
      headers: {
        "In-Reply-To": messageId,
        References: messageId,
      },
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
