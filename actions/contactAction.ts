import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const { MailtrapClient } = require("mailtrap");


const ContactController = async(
  req: NextApiRequest,
  res: NextApiResponse
) =>{
  if (req.method === "POST") {
    const { fullname, contactNumber, email, note } = req.body;

    try {

        console.log("Message sent: ");
      const TOKEN = "c88f68ffb7c07dbc3a73411d704702a6";
      const ENDPOINT = "https://send.api.mailtrap.io/";

      const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

      const sender = {
        email: "mailtrap@memorabledestination.in",
        name: "Mailtrap Admin",
      };
      const recipients = [
        {
          email: "admin@memorabledestination.in",
        },
      ];

      const info = await client.send({
        from: sender,
        to: recipients,
        subject: `New message from ${fullname}`,
        text: `Contact Number: ${contactNumber}\nEmail: ${email}\nNote: ${note}`,
        category: "Integration Test",
      });

     

      console.log("Message sent: ", info);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(200).json({ error: "" });
}

export  default {ContactController};