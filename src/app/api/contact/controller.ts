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

/* 
  // import { NextApiRequest, NextApiResponse } from 'next';

// async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
//     console.log('Request method:', req.method)
//   if (req.method === 'POST') {
//     // Handle POST request
//     const { name, email, message }: { name: string, email: string, message: string } = req.body;
//     // Process the contact form data
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Message:', message);
//     // Assuming a successful response for demonstration
//     res.status(200).json({ message: 'Contact form submitted successfully' });
//   } else {
//     // Return a 405 Method Not Allowed error for non-POST requests
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
// export default handler;

// // import express from 'express';
// // import  ContactController  from './controller';

// // const router = express.Router();

// // router.post('/contact', ContactController);

// // export default router;
*/