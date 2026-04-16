const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ code: 405, status: "Method Not Allowed" });
  }

  const { EMAIL_USER, EMAIL_PASS, CONTACT_TO_EMAIL } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(500).json({
      code: 500,
      status: "Email environment variables are not configured",
    });
  }

  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const firstName = payload?.firstName || "";
    const lastName = payload?.lastName || "";
    const email = payload?.email || "";
    const phone = payload?.phone || "";
    const message = payload?.message || "";
    const name = `${firstName} ${lastName}`.trim();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: CONTACT_TO_EMAIL || EMAIL_USER,
      replyTo: email || undefined,
      subject: "Contact Form Submission - Portfolio",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (error) {
    return res.status(500).json({ code: 500, status: "Failed to send message" });
  }
};
