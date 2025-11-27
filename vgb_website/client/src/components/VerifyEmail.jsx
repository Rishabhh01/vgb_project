// client/src/components/VerifyEmail.jsx
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../context/AuthContext';

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const { verifyEmail, resendOTP, loading, error, verificationData, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if no verification data or already logged in
  useEffect(() => {
    if (!verificationData && !user) {
      navigate('/register');
    } else if (user) {
      navigate('/profile');
    }
  }, [verificationData, user, navigate]);

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (e) => {
    // Allow only numbers and limit to 6 digits
    const inputValue = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(inputValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!otp || otp.length !== 6) {
      setFormError('Please enter a valid 6-digit verification code');
      return;
    }

    if (!verificationData || !verificationData.email) {
      setFormError('Email information is missing. Please try registering again.');
      return;
    }

    setFormError('');

    try {
      console.log('Submitting verification with:', {
        email: verificationData.email,
        otp: otp
      });
      
      const result = await verifyEmail(verificationData.email, otp);
      
      if (result.success) {
        setSuccess(true);
        // Redirect to profile after a short delay to show success message
        setTimeout(() => {
          navigate('/profile');
        }, 1500);
      } else {
        setFormError(result.message || 'Verification failed. Please try again.');
      }
    } catch (err) {
      setFormError('An unexpected error occurred. Please try again.');
      console.error('Verification error:', err);
    }
  };

  const handleResendOTP = async () => {
    if (countdown > 0) return;
    
    try {
      const result = await resendOTP(verificationData.email);
      
      if (result.success) {
        setCountdown(60);
        setFormError('');
        setSuccess(false);

        // If we got an OTP back in development mode, autofill it to help testing
        if (result.otp) {
          setOtp(result.otp);
        }
      } else {
        setFormError(result.message || 'Failed to resend verification code');
      }
    } catch (err) {
      setFormError('An unexpected error occurred. Please try again.');
    }
  };

  if (!verificationData) {
    return null;
  }

  return (
    <VerifyContainer>
      <div className="container">
        <VerifyWrapper>
          <VerifyHeader>
            <VerifyLogo src="/vgb-logo.png" alt="Vishwa Guru Bharat Logo" />
            <VerifyTitle>Verify Your Email</VerifyTitle>
          </VerifyHeader>

          {success && <SuccessMessage>Email verified successfully! Redirecting...</SuccessMessage>}
          {(formError || error) && <ErrorMessage>{formError || error}</ErrorMessage>}

          <VerifyMessage>
            We've sent a verification code to <EmailHighlight>{verificationData.email}</EmailHighlight>. 
            Please enter the 6-digit code below to verify your email address.
          </VerifyMessage>

          {/* Development-only: show debug OTP when present so local devs can verify without email */}
          {verificationData?.otp && (
            <DebugBox>
              <strong>Dev OTP:</strong> {verificationData.otp}
              <AutoFillButton onClick={() => setOtp(verificationData.otp)}>Auto-fill</AutoFillButton>
            </DebugBox>
          )}

          <VerifyForm onSubmit={handleSubmit}>
            <OtpInput
              type="text"
              value={otp}
              onChange={handleChange}
              placeholder="Enter 6-digit code"
              maxLength="6"
              pattern="[0-9]*"
              inputMode="numeric"
              disabled={loading || success}
            />

            <SubmitButton type="submit" disabled={loading || success}>
              {loading ? 'Verifying...' : 'Verify Email'}
            </SubmitButton>
          </VerifyForm>

          <ResendSection>
            <ResendText>Didn't receive the code?</ResendText>
            <ResendButton 
              onClick={handleResendOTP} 
              disabled={countdown > 0 || loading || success}
            >
              {countdown > 0 ? `Resend in ${countdown}s` : 'Resend Code'}
            </ResendButton>
          </ResendSection>
        </VerifyWrapper>
      </div>
    </VerifyContainer>
  );
};

const VerifyContainer = styled.div`
  padding: 80px 0;
  background-color: #f8f8f8;
`;

const VerifyWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 40px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const VerifyHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const VerifyLogo = styled.img`
  max-width: 150px;
  margin-bottom: 20px;
`;

const VerifyTitle = styled.h1`
  font-size: 1.8rem;
  color: var(--secondary-color, #2b2928);
`;

const VerifyMessage = styled.p`
  text-align: center;
  margin-bottom: 25px;
  color: #666;
  line-height: 1.6;
`;

const EmailHighlight = styled.span`
  font-weight: 600;
  color: var(--secondary-color, #2b2928);
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const VerifyForm = styled.form`
  margin-bottom: 20px;
`;

const OtpInput = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  
  &:focus {
    border-color: var(--primary-color, #cd232e);
    outline: none;
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

  &:hover:not(:disabled) {
    background-color: #b01c26;
  }

  &:disabled {
    background-color: #e0a0a5;
    cursor: not-allowed;
  }
`;

const ResendSection = styled.div`
  text-align: center;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResendText = styled.span`
  margin-bottom: 10px;
  color: #666;
`;

const ResendButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-color, #cd232e);
  font-weight: 600;
  cursor: pointer;
  padding: 5px 10px;
  
  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  
  &:disabled {
    color: #999;
    cursor: not-allowed;
  }
`;

export default VerifyEmail;

const DebugBox = styled.div`
  margin: 12px 0;
  background: #fff4e5;
  border: 1px solid #ffd8a8;
  color: #5a3b00;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AutoFillButton = styled.button`
  background: transparent;
  border: 1px solid #5a3b00;
  color: #5a3b00;
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
`;