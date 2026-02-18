# EmailJS Setup Guide for Your Portfolio

## ✅ EmailJS is Already Integrated!

The code is ready - you just need to get your credentials from EmailJS and add them to the Contact component.

---

## Step-by-Step Setup:

### 1. Sign Up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

---

### 2. Connect Your Gmail Account
1. After logging in, go to **"Email Services"** in the sidebar
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with your Gmail (kartikaysharma824@gmail.com)
6. Allow EmailJS to access your Gmail
7. **Copy your Service ID** (looks like `service_abc1234`)

---

### 3. Create an Email Template
1. Go to **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Replace the default template with this:

```
Subject: New Message from {{from_name}} - Portfolio Contact

Body:
You have received a new message from your portfolio!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **"Save"**
5. **Copy your Template ID** (looks like `template_xyz5678`)

---

### 4. Get Your Public Key
1. Go to **"Account"** in the sidebar
2. Scroll down to **"API Keys"** section
3. **Copy your Public Key** (looks like `abcd1234efgh5678`)

---

### 5. Update Your Code
1. Open `/components/Contact.tsx`
2. Find these three lines (around line 20-22):
   ```typescript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

3. Replace with your actual values:
   ```typescript
   const serviceId = 'service_abc1234';      // Your Service ID
   const templateId = 'template_xyz5678';    // Your Template ID
   const publicKey = 'abcd1234efgh5678';     // Your Public Key
   ```

---

## Testing Your Contact Form

1. Save your changes
2. Go to your portfolio's contact section
3. Fill out the form with test data
4. Click "Send Message"
5. You should see: "Message sent successfully! I will get back to you soon."
6. Check your Gmail inbox - you should receive the test email!

---

## Important Notes

### Free Tier Limits:
- **200 emails per month** (free forever)
- Perfect for a portfolio website
- If you need more, upgrade to a paid plan

### Email Template Variables:
The template uses these variables that are sent from your form:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{message}}` - Visitor's message
- `{{to_email}}` - Your email (hardcoded as kartikaysharma824@gmail.com)

### Security:
- Your EmailJS Public Key is safe to expose in client-side code
- EmailJS handles all the security and prevents spam
- Your actual Gmail password is never exposed

---

## Troubleshooting

### Error: "Failed to send message"
**Solutions:**
1. Double-check your Service ID, Template ID, and Public Key
2. Make sure the template variables match exactly ({{from_name}}, {{from_email}}, {{message}})
3. Check the browser console for specific error messages
4. Verify your Gmail is properly connected in EmailJS dashboard

### Not receiving emails?
**Solutions:**
1. Check your Gmail spam folder
2. Verify the template in EmailJS dashboard
3. Make sure your Gmail account is verified in EmailJS
4. Test with the EmailJS dashboard test feature first

---

## Alternative: If You Don't Want to Use EmailJS

If you prefer to keep it simple, you can just use a `mailto:` link instead:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const subject = `Portfolio Contact from ${formData.name}`;
  const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
  
  window.location.href = `mailto:kartikaysharma824@gmail.com?subject=${subject}&body=${body}`;
};
```

This will open the user's default email client with the form data pre-filled.

---

## Need Help?

If you run into any issues:
1. Check the EmailJS documentation: https://www.emailjs.com/docs/
2. The EmailJS dashboard has helpful error messages
3. Make sure all three credentials are correctly copied
4. Test the template in the EmailJS dashboard first

Your contact form is ready to go! Just add your credentials and start receiving messages. 🚀
