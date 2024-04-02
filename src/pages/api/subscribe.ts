// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const url = `https://us18.api.mailchimp.com/3.0/lists/${process.env.NEXT_PUBLIC_MAILCHIMP_LIST_KEY}/members`;

    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY}`,
    };

    const data = {
      email_address: req.body.email,
      status: "subscribed",
    };
    try {
      const response = await axios.post(url, data, { headers });
      console.log(response?.data);
      res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error("Mailchimp API error:", error);
      res.status(500).json({ message: "Subscription failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
