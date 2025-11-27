// src/pages/ResetPasswordPage.jsx
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from '../services/api'; // Import the centralized api instance

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { token } = useParams();
  const navigate = useNavigate();
  
  // Verify token on component mount
  useEffect(() => {
    const verifyToken = async () => {
      try {
        await api.get(`/api/users/reset-password/${token}`);
        setIsTokenValid(true);
      } catch (err) {
        setError('This password reset link is invalid or has expired.');
      } finally {
        setIsLoading(false);
      }
    };
    
    verifyToken();
  }, [token]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    setMessage('');
    
    try {
      // Reset password through API
      const response = await api.post(`/api/users/reset-password/${token}`, {
        password
      });
      
      setMessage(response.data.message || 'Your password has been reset successfully');
      
      // Clear form
      setPassword('');
      setConfirmPassword('');
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Failed to reset password. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isLoading) {
    return (
      <PageContainer>
        <div className="container">
          <FormWrapper>
            <LoadingMessage>Verifying your request...</LoadingMessage>
          </FormWrapper>
        </div>
      </PageContainer>
    );
  }
  
  if (!isTokenValid) {
    return (
      <PageContainer>
        <div className="container">
          <FormWrapper>
            <ErrorMessage>{error}</ErrorMessage>
            <BackToLogin to="/forgot-password">Request a new password reset</BackToLogin>
          </FormWrapper>
        </div>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <div className="container">
        <FormWrapper>
          <FormHeader>
            <FormLogo src="/vgb-logo.png" alt="Vishwa Guru Bharat Logo" />
            <FormTitle>Set New Password</FormTitle>
          </FormHeader>
          
          <FormDescription>
            Please enter your new password below.
          </FormDescription>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {message && <SuccessMessage>{message}</SuccessMessage>}
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="password">New Password</FormLabel>
              <FormInput 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                required
                disabled={isSubmitting}
                minLength={6}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <FormInput 
                type="password" 
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
                disabled={isSubmitting}
                minLength={6}
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Change Password'}
            </SubmitButton>
            
            <BackToLogin to="/login">Back to Login</BackToLogin>
          </Form>
        </FormWrapper>
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 80px 0;
  background-color: #f8f8f8;
`;

const FormWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const FormLogo = styled.img`
  max-width: 150px;
  margin-bottom: 20px;
`;

const FormTitle = styled.h1`
  font-size: 1.8rem;
  color: var(--secondary-color, #2b2928);
`;

const FormDescription = styled.p`
  text-align: center;
  margin-bottom: 30px;
  color: #666;
  line-height: 1.5;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--secondary-color, #2b2928);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary-color, #cd232e);
    outline: none;
  }
  
  &:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--primary-color, #cd232e);
  color: #fff;
  font-weight: 600;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 20px;
  
  &:hover:not(:disabled) {
    background-color: #b01c26;
  }
  
  &:disabled {
    background-color: #e0858b;
    cursor: not-allowed;
  }
`;

const BackToLogin = styled(Link)`
  display: block;
  text-align: center;
  color: var(--primary-color, #cd232e);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default ResetPasswordPage;