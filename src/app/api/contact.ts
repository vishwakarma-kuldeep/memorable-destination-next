import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { fullname, contactNumber, email, note } = req.body

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'your_mailtrap_username',
          pass: 'your_mailtrap_password',
        },
      })

      const info = await transporter.sendMail({
        from: 'admin@memorabledestination.com',
        to: 'naman@mmeorabledestination.com',
        subject: `New message from ${fullname}`,
        text: `Contact Number: ${contactNumber}\nEmail: ${email}\nNote: ${note}`,
      })

      console.log('Message sent: %s', info.messageId)
    } catch (error:any) {
      console.log(error)
      return res.status(500).json({ error: error.message })
    }
  }

  return res.status(200).json({ error: '' })
}
