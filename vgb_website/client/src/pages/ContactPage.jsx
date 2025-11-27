// client/src/pages/ContactPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheck } from 'react-icons/fa';
import api from '../services/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setFormStatus({ loading: true, success: false, error: null });
      
      await api.post('/api/contact', formData);
      
      setFormStatus({
        loading: false,
        success: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
      
      // Clear error after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  return (
    <PageContainer>
      <h1>Contact Us</h1>
      
      <ContactGrid>
        <ContactInfo>
          <h2>Get in Touch</h2>
          <InfoItem>
            <FaMapMarkerAlt />
            <div>
              <h3>Our Location</h3>
              <p>123 VGB Street, New Delhi, India</p>
            </div>
          </InfoItem>
          
          <InfoItem>
            <FaPhone />
            <div>
              <h3>Phone Number</h3>
              <p>+91 98765 43210</p>
            </div>
          </InfoItem>
          
          <InfoItem>
            <FaEnvelope />
            <div>
              <h3>Email Address</h3>
              <p>info@vishwagurubharat.org</p>
            </div>
          </InfoItem>
          
          <InfoItem>
            <FaClock />
            <div>
              <h3>Working Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <h2>Send Us A Message</h2>
          
          {formStatus.success && (
            <SuccessMessage>
              <FaCheck /> Message sent successfully!
            </SuccessMessage>
          )}
          
          {formStatus.error && (
            <ErrorMessage>
              {formStatus.error}
            </ErrorMessage>
          )}
          
          <FormGroup>
            <FormInput
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormInput
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormInput
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <FormInput
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormTextarea
              name="message"
              placeholder="Your Message*"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <SubmitButton 
            type="submit" 
            disabled={formStatus.loading}
          >
            {formStatus.loading ? 'Sending...' : 'Send Message'}
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  
  h1 {
    text-align: center;
    color: #cd232e;
    margin-bottom: 40px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: #f8f8f8;
  padding: 30px;
  border-radius: 10px;
  
  h2 {
    color: #2b2928;
    margin-bottom: 30px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  
  svg {
    color: #cd232e;
    font-size: 24px;
    margin-right: 15px;
    margin-top: 5px;
  }
  
  h3 {
    color: #2b2928;
    margin: 0 0 5px;
    font-size: 18px;
  }
  
  p {
    color: #666;
    margin: 0;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  
  h2 {
    color: #2b2928;
    margin-bottom: 30px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #cd232e;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #cd232e;
  }
`;

const SubmitButton = styled.button`
  background: #cd232e;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #b41e28;
  }
  
  &:disabled {
    background: #999;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 12px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export default ContactPage;