// api/contact.js - Vercel Serverless Function

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, interest, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email content
  const emailContent = `
New Contact Form Submission from Quanti Capital Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Interest: ${interest || 'General Inquiry'}

Message:
${message}

---
Sent from Quanti Capital Contact Form
  `.trim();

  try {
    // Using Resend API (free tier: 100 emails/day)
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Quanti Capital Website <onboarding@resend.dev>',
        to: ['samuel.torres@quanticapital.org'],
        reply_to: email,
        subject: `New Contact: ${name} - ${interest || 'General Inquiry'}`,
        text: emailContent,
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } else {
      const error = await response.json();
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
