// server/utils/emailService.js
const nodemailer = require('nodemailer');

// Configure nodemailer with Gmail settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com', 
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false
  }
});

/**
 * Send an OTP verification email
 * @param {string} email - Recipient's email address
 * @param {string} otp - One-time password code
 * @returns {Promise} - Resolves when email is sent
 */
const sendOTPEmail = async (email, otp) => {
  try {
    console.log('Sending OTP email to:', email);
    
    const mailOptions = {
      from: `"Vishwa Guru Bharat" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Verify Your Email - Vishwa Guru Bharat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://vishwagurubharat.org/vgb-logo.png" alt="Vishwa Guru Bharat Logo" style="max-width: 150px;">
            <h2 style="color: #cd232e;">Verify Your Email</h2>
          </div>
          
          <p>Thank you for registering with Vishwa Guru Bharat. To complete your registration, please verify your email address by entering the following verification code:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <div style="background-color: #f8f8f8; display: inline-block; padding: 15px 40px; border-radius: 5px; border: 1px dashed #ddd;">
              <h1 style="margin: 0; color: #cd232e; letter-spacing: 5px; font-size: 28px;">${otp}</h1>
            </div>
            <p style="margin-top: 10px; color: #666; font-size: 14px;">This code is valid for 10 minutes</p>
          </div>
          
          <p>If you did not request this verification, please ignore this email or contact us if you have concerns.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666;">
            <p>Vishwa Guru Bharat</p>
            <p style="margin: 5px 0;">
              <a href="https://vishwagurubharat.org" style="color: #cd232e; text-decoration: none;">vishwagurubharat.org</a>
            </p>
          </div>
        </div>
      `
    };

    console.log('Attempting to send OTP email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw error;
  }
};

/**
 * Send a membership confirmation email with digital card
 * @param {string} email - Member's email address
 * @param {object} user - User object containing membership details
 * @returns {Promise} - Resolves when email is sent
 */
const sendMembershipConfirmationEmail = async (email, user) => {
  try {
    console.log('Sending membership confirmation to:', email);
    
    // Format membership period
    const startDate = new Date(user.membershipStartDate).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    
    let validityPeriod = 'Lifetime';
    if (user.membershipEndDate) {
      const endDate = new Date(user.membershipEndDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      validityPeriod = `${startDate} to ${endDate}`;
    }
    
    // Define background color based on membership type
    let cardColor = '#cd232e'; // Default red for basic
    if (user.membershipType === 'SILVER MEMBERSHIP') {
      cardColor = '#757575'; // Silver
    } else if (user.membershipType === 'GOLD MEMBERSHIP') {
      cardColor = '#D4AF37'; // Gold
    }
    
    const mailOptions = {
      from: `"Vishwa Guru Bharat" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Vishwa Guru Bharat Membership',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://vishwagurubharat.org/vgb-logo.png" alt="Vishwa Guru Bharat Logo" style="max-width: 150px;">
            <h2 style="color: #cd232e;">Membership Confirmation</h2>
          </div>
          
          <p>Dear ${user.name},</p>
          
          <p>Thank you for joining the Vishwa Guru Bharat community! Your membership has been activated successfully.</p>
          
          <!-- Digital Membership Card -->
          <div style="margin: 30px 0; background: linear-gradient(135deg, ${cardColor}, #2b2928); border-radius: 10px; overflow: hidden; color: white; box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);">
            <div style="padding: 20px; display: flex; justify-content: space-between; align-items: center;">
              <img src="https://vishwagurubharat.org/vgb-logo.png" alt="VGB" style="height: 50px; filter: brightness(0) invert(1);">
              <div style="text-align: right; font-size: 18px; font-weight: bold;">${user.membershipType}</div>
            </div>
            
            <div style="padding: 10px 20px 20px; background-color: rgba(0,0,0,0.2);">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
                <tr>
                  <td style="padding: 8px 0; opacity: 0.8; font-size: 14px;">MEMBER NAME</td>
                </tr>
                <tr>
                  <td style="padding: 0 0 12px 0; font-size: 20px; font-weight: bold;">${user.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; opacity: 0.8; font-size: 14px;">MEMBER ID</td>
                </tr>
                <tr>
                  <td style="padding: 0 0 12px 0; font-size: 16px; letter-spacing: 1px;">${user._id}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; opacity: 0.8; font-size: 14px;">VALIDITY PERIOD</td>
                </tr>
                <tr>
                  <td style="padding: 0; font-size: 16px;">${validityPeriod}</td>
                </tr>
              </table>
              
              <div style="text-align: center; margin-top: 10px; font-size: 12px; opacity: 0.7;">
                Vishwa Guru Bharat Association Member
              </div>
            </div>
          </div>
          
          <h3>Membership Benefits:</h3>
          <ul style="padding-left: 20px; line-height: 1.6;">
            <li>Access to exclusive events and programs</li>
            <li>Special discounts on workshops and seminars</li>
            <li>Networking opportunities with like-minded individuals</li>
            <li>Regular updates on our activities and initiatives</li>
            ${user.membershipType !== 'BASIC MEMBERSHIP' ? '<li>Priority registration for limited-seat events</li>' : ''}
            ${user.membershipType === 'GOLD MEMBERSHIP' ? '<li>Complimentary access to premium content and resources</li>' : ''}
          </ul>
          
          <p>To access your membership benefits, simply present your digital membership card at our events or quote your Member ID when registering.</p>
          
          <p>If you have any questions or need assistance, please contact us at <a href="mailto:info@vishwagurubharat.org" style="color: #cd232e;">info@vishwagurubharat.org</a>.</p>
          
          <div style="margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
            <p style="color: #666; margin-bottom: 10px;">Vishwa Guru Bharat</p>
            <a href="https://vishwagurubharat.org" style="color: #cd232e; text-decoration: none;">vishwagurubharat.org</a>
          </div>
        </div>
      `
    };

    console.log('Attempting to send membership confirmation email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Membership confirmation email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending membership confirmation email:', error);
    throw error;
  }
};

/**
 * Send a password reset email with reset link
 * @param {string} email - User's email address
 * @param {string} name - User's name
 * @param {string} resetUrl - Password reset URL
 * @returns {Promise} - Resolves when email is sent
 */
const sendPasswordResetEmail = async (email, name, resetUrl) => {
  try {
    console.log('Sending password reset email to:', email);
    
    const mailOptions = {
      from: `"Vishwa Guru Bharat" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Reset Your Password - Vishwa Guru Bharat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://vishwagurubharat.org/vgb-logo.png" alt="Vishwa Guru Bharat Logo" style="max-width: 150px;">
            <h2 style="color: #cd232e;">Reset Your Password</h2>
          </div>
          
          <p>Dear ${name},</p>
          
          <p>We received a request to reset your password for your Vishwa Guru Bharat account. If you didn't make this request, you can safely ignore this email.</p>
          
          <p>To reset your password, click the button below. This link is valid for 30 minutes.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" style="background-color: #cd232e; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Reset Password</a>
          </div>
          
          <p>If the button above doesn't work, you can also copy and paste the following link into your browser:</p>
          
          <div style="background-color: #f8f8f8; padding: 15px; border-radius: 5px; margin: 15px 0; word-break: break-all;">
            <a href="${resetUrl}" style="color: #cd232e; text-decoration: none;">${resetUrl}</a>
          </div>
          
          <p>For security reasons, this password reset link will expire in 30 minutes. If you need to reset your password after that time, please submit a new request.</p>
          
          <div style="margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
            <p style="color: #666; margin-bottom: 10px;">Vishwa Guru Bharat</p>
            <a href="https://vishwagurubharat.org" style="color: #cd232e; text-decoration: none;">vishwagurubharat.org</a>
          </div>
        </div>
      `
    };

    console.log('Attempting to send password reset email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Password reset email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
};

/**
 * Send a password change confirmation email
 * @param {string} email - User's email address
 * @param {string} name - User's name
 * @returns {Promise} - Resolves when email is sent
 */
const sendPasswordChangedEmail = async (email, name) => {
  try {
    console.log('Sending password changed confirmation to:', email);
    
    const mailOptions = {
      from: `"Vishwa Guru Bharat" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Password Changed Successfully - Vishwa Guru Bharat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://vishwagurubharat.org/vgb-logo.png" alt="Vishwa Guru Bharat Logo" style="max-width: 150px;">
            <h2 style="color: #cd232e;">Password Changed Successfully</h2>
          </div>
          
          <p>Dear ${name},</p>
          
          <p>Your password for Vishwa Guru Bharat has been changed successfully.</p>
          
          <div style="background-color: #f8f8f8; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <p style="margin-top: 0;"><strong>Time of change:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin-bottom: 0;">If you did not make this change, please contact us immediately by replying to this email or at <a href="mailto:info@vishwagurubharat.org" style="color: #cd232e;">info@vishwagurubharat.org</a>.</p>
          </div>
          
          <p>You can now log in to your account with your new password.</p>
          
          <div style="margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
            <p style="color: #666; margin-bottom: 10px;">Vishwa Guru Bharat</p>
            <a href="https://vishwagurubharat.org" style="color: #cd232e; text-decoration: none;">vishwagurubharat.org</a>
          </div>
        </div>
      `
    };

    console.log('Attempting to send password changed email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Password changed email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending password changed email:', error);
    throw error;
  }
};

/**
 * Format date to readable string
 * @param {Date} date - Date to format
 * @returns {string} - Formatted date
 */
const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  });
};

/**
 * Send a donation receipt email
 * @param {string} email - Donor's email address
 * @param {object} donationData - Object containing donation details
 * @returns {Promise} - Resolves when email is sent
 */
const sendDonationReceiptEmail = async (email, donationData) => {
  try {
    console.log('Sending donation receipt to:', email);
    
    const mailOptions = {
      from: `"Vishwa Guru Bharat" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Your Donation to Vishwa Guru Bharat',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://vishwagurubharat.org/vgb-logo.png" alt="Vishwa Guru Bharat Logo" style="max-width: 150px;">
            <h2 style="color: #cd232e;">Donation Receipt</h2>
          </div>
          
          <p>Dear ${donationData.name || 'Supporter'},</p>
          
          <p>Thank you for your generous donation to Vishwa Guru Bharat. Your contribution helps us continue our mission of promoting and preserving India's cultural heritage and values.</p>
          
          <div style="background-color: #f8f8f8; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #2b2928; margin-top: 0;">Donation Receipt</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; color: #666;">Receipt No.</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; text-align: right; font-weight: bold;">${donationData.receiptNumber || donationData.paymentId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; color: #666;">Date</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; text-align: right;">${new Date(donationData.date || new Date()).toLocaleDateString('en-US', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; color: #666;">Donor Name</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; text-align: right;">${donationData.name || 'Anonymous'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; color: #666;">Donor Email</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; text-align: right;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; color: #666;">Payment Method</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; text-align: right;">${donationData.paymentMethod || 'Online Payment'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 18px; font-weight: bold; color: #2b2928;">Donation Amount</td>
                <td style="padding: 12px 0; font-size: 18px; font-weight: bold; text-align: right; color: #cd232e;">₹${donationData.amount.toFixed(2)}</td>
              </tr>
            </table>
          </div>
          
          <div style="border: 1px dashed #ccc; padding: 15px; margin: 25px 0; text-align: center; background-color: #f9f9f9;">
            <p style="margin: 0; color: #666; font-style: italic;">Vishwa Guru Bharat is a registered non-profit organization. Your contribution may be tax-deductible as allowed by law.</p>
            <p style="margin: 5px 0 0; color: #666; font-style: italic; font-size: 14px;">Tax ID: ${donationData.taxId || 'ABCDE1234F'}</p>
          </div>
          
          <p>Your generosity enables us to:</p>
          <ul style="padding-left: 20px; line-height: 1.6;">
            <li>Organize cultural events and educational programs</li>
            <li>Support community initiatives and social welfare projects</li>
            <li>Preserve and promote traditional arts, literature, and values</li>
            <li>Connect people with India's rich cultural heritage</li>
          </ul>
          
          <p>If you have any questions about your donation or would like to learn more about our work, please contact us at <a href="mailto:info@vishwagurubharat.org" style="color: #cd232e;">info@vishwagurubharat.org</a>.</p>
          
          <div style="margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
            <p style="color: #666; margin-bottom: 10px;">Vishwa Guru Bharat</p>
            <a href="https://vishwagurubharat.org" style="color: #cd232e; text-decoration: none;">vishwagurubharat.org</a>
          </div>
        </div>
      `
    };

    console.log('Attempting to send donation receipt email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Donation receipt email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending donation receipt email:', error);
    throw error;
  }
};

/**
 * Send contact form email
 * @param {Object} data - Contact form data
 * @returns {Promise} - Resolves when email is sent
 */
const sendContactEmail = async (data) => {
  try {
    console.log('Sending contact form email...');
    
    const mailOptions = {
      from: `"Vishwa Guru Bharat" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email, // Add Reply-To header
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://vishwagurubharat.org/vgb-logo.png" alt="Vishwa Guru Bharat Logo" style="max-width: 150px;">
            <h2 style="color: #cd232e;">Message from Website Visitor</h2>
          </div>
          
          <div style="background-color: #f8f8f8; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #2b2928; margin-top: 0;">Contact Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; color: #666;">Name</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; text-align: right;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; color: #666;">Email</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; text-align: right;">
                  <a href="mailto:${data.email}" style="color: #cd232e; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              ${data.phone ? `
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #ddd; color: #666;">Phone</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #ddd; text-align: right;">${data.phone}</td>
                </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; color: #666;">Subject</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #ddd; text-align: right;">${data.subject}</td>
              </tr>
            </table>
          </div>
          
          <div style="margin: 25px 0;">
            <h3 style="color: #2b2928; margin-top: 0;">Message</h3>
            <p style="color: #666; line-height: 1.6;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
            <p style="color: #666; margin-bottom: 10px;">Vishwa Guru Bharat</p>
            <a href="https://vishwagurubharat.org" style="color: #cd232e; text-decoration: none;">vishwagurubharat.org</a>
          </div>
        </div>
      `
    };

    console.log('Attempting to send contact email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

module.exports = {
  sendOTPEmail,
  sendMembershipConfirmationEmail,
  sendPasswordResetEmail,
  sendPasswordChangedEmail,
  sendDonationReceiptEmail,
  sendContactEmail
};