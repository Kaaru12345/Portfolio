# Gmail Integration Guide for Your Portfolio

There are several ways to integrate Gmail with your portfolio contact form. Here are the most popular methods:

---

## Option 1: EmailJS (Recommended - Easiest)

EmailJS is the simplest way to send emails directly from the client-side without a backend server.

### Steps:

1. **Sign up at [EmailJS](https://www.emailjs.com/)**
   - Create a free account

2. **Install EmailJS package:**
   ```bash
   npm install @emailjs/browser
   ```

3. **Set up EmailJS:**
   - Go to Email Services → Add New Service
   - Choose Gmail and connect your account
   - Note your Service ID

4. **Create an Email Template:**
   - Go to Email Templates → Create New Template
   - Use these template variables:
     - `{{from_name}}` - sender's name
     - `{{from_email}}` - sender's email
     - `{{message}}` - the message content
   - Note your Template ID

5. **Update Contact.tsx:**

```typescript
import emailjs from '@emailjs/browser';

export function Contact() {
  // ... existing code ...

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Replace these with your actual IDs from EmailJS dashboard
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'kartikaysharma824@gmail.com'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  };

  // ... rest of the component ...
}
```

**Pros:**
- No backend needed
- Free tier available (200 emails/month)
- Easy to set up
- Works directly from the browser

**Cons:**
- Limited free tier
- Email credentials visible in client-side code (use EmailJS public key instead)

---

## Option 2: Formspree

Another client-side solution that's even simpler.

### Steps:

1. **Sign up at [Formspree](https://formspree.io/)**

2. **Create a new form and get your form endpoint**

3. **Update your form:**

```typescript
export function Contact() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again.');
    }
  };
}
```

**Pros:**
- Extremely simple
- No configuration needed
- Free tier: 50 submissions/month

**Cons:**
- Limited free tier
- Less customization

---

## Option 3: Backend with Nodemailer (Most Secure)

This requires a backend server but is the most secure option.

### Steps:

1. **Create a backend server (Node.js/Express)**

2. **Install dependencies:**
   ```bash
   npm install express nodemailer cors dotenv
   ```

3. **Create server.js:**

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // your Gmail
    pass: process.env.GMAIL_APP_PASSWORD // Gmail App Password
  }
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'kartikaysharma824@gmail.com',
    subject: `Portfolio Contact from ${name}`,
    text: message,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
```

4. **Create .env file:**
   ```
   GMAIL_USER=kartikaysharma824@gmail.com
   GMAIL_APP_PASSWORD=your_app_password_here
   ```

5. **Generate Gmail App Password:**
   - Go to Google Account → Security
   - Enable 2-Step Verification
   - Go to App Passwords
   - Generate a new app password for "Mail"
   - Use this password in your .env file

6. **Update Contact.tsx:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('Failed to send message. Please try again.');
  }
};
```

**Pros:**
- Most secure
- Full control
- No third-party limitations
- Can add spam protection

**Cons:**
- Requires backend server
- Need to deploy backend separately
- More complex setup

---

## Option 4: Netlify Forms (If hosting on Netlify)

If you deploy on Netlify, you can use their built-in form handling.

### Steps:

1. **Update your form in Contact.tsx:**

```tsx
<form
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
>
  <input type="hidden" name="form-name" value="contact" />
  {/* ... rest of your form fields ... */}
</form>
```

2. **Netlify automatically handles the emails**

**Pros:**
- Zero configuration if using Netlify
- Free tier: 100 submissions/month
- Built-in spam protection

**Cons:**
- Only works with Netlify hosting
- Limited customization

---

## Recommendation

For your portfolio, I recommend **Option 1 (EmailJS)** because:
- No backend required
- Easy to set up (5 minutes)
- Free tier is sufficient for a portfolio
- Professional email delivery
- Works with any hosting provider

Let me know which option you'd like to implement, and I can help you integrate it!
