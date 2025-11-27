// client/src/pages/RegisterPage.jsx
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../context/AuthContext';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    profession: '',
    phone: '',
    location: ''
  });

  const [formError, setFormError] = useState('');
  const { register, error, user, clearError } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
    
    // Clear any previous auth errors when component mounts
    clearError();
    
    // eslint-disable-next-line
  }, [user, navigate]);

  const { name, email, password, confirmPassword, company, profession, phone, location } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted, validating...');

    // Validate form
    if (!name || !email || !password || !confirmPassword || !company || !profession) {
      setFormError('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setFormError('Password must be at least 6 characters');
      return;
    }

    // Clear form error
    setFormError('');

    // Prepare data for registration
    const userData = {
      name,
      email,
      password,
      company,
      profession,
      location,
      phone
    };

    // Attempt registration
    console.log('Attempting registration with:', { ...userData, password: '[REDACTED]' });
    
    try {
      const result = await register(userData);
      console.log('Registration result:', result);
      
      if (result.success) {
        if (result.requiresVerification) {
          // Redirect to verification page if OTP verification is required
          console.log('Email verification required, redirecting to verification page');
          navigate('/verify-email');
        } else {
          // Direct login if no verification needed (fallback)
          console.log('Registration successful, redirecting to profile');
          navigate('/profile');
        }
      } else {
        console.log('Registration failed:', result.message);
        setFormError(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration submission:', error);
      setFormError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <RegisterContainer>
      <div className="container">
        <RegisterWrapper>
          <RegisterHeader>
            <RegisterLogo src="/vgb-logo.png" alt="Vishwa Guru Bharat Logo" />
            <RegisterTitle>Create Account</RegisterTitle>
          </RegisterHeader>

          {(formError || error) && <ErrorMessage>{formError || error}</ErrorMessage>}

          <RegisterForm onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="name">Full Name*</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="email">Email*</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="password">Password*</FormLabel>
                <FormInput
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="confirmPassword">Confirm Password*</FormLabel>
                <FormInput
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="company">Company/Business Name*</FormLabel>
                <FormInput
                  type="text"
                  id="company"
                  name="company"
                  value={company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="profession">Profession/Industry*</FormLabel>
                <FormInput
                  type="text"
                  id="profession"
                  name="profession"
                  value={profession}
                  onChange={handleChange}
                  placeholder="Enter your profession"
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel htmlFor="location">Location</FormLabel>
                <FormInput
                  type="text"
                  id="location"
                  name="location"
                  value={location}
                  onChange={handleChange}
                  placeholder="City, Country"
                />
              </FormGroup>
            </FormRow>

            <TermsText>
              By creating an account, you agree to the
              <TermsLink to="/terms">Terms of Service</TermsLink> and
              <TermsLink to="/privacy">Privacy Policy</TermsLink>.
            </TermsText>

            <SubmitButton type="submit">Create Account</SubmitButton>
          </RegisterForm>

          <LoginSection>
            <LoginText>Already have an account?</LoginText>
            <LoginLink to="/login">Sign In</LoginLink>
          </LoginSection>
        </RegisterWrapper>
      </div>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  padding: 80px 0;
  background-color: #f8f8f8;
`;

const RegisterWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 40px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const RegisterHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const RegisterLogo = styled.img`
  max-width: 150px;
  margin-bottom: 20px;
`;

const RegisterTitle = styled.h1`
  font-size: 1.8rem;
  color: var(--secondary-color, #2b2928);
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const RegisterForm = styled.form`
  margin-bottom: 30px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const FormGroup = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
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
`;

const TermsText = styled.p`
  margin: 20px 0;
  font-size: 0.9rem;
  color: #666;
`;

const TermsLink = styled(Link)`
  color: var(--primary-color, #cd232e);
  margin: 0 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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

  &:hover {
    background-color: #b01c26;
  }
`;

const LoginSection = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

const LoginText = styled.span`
  margin-right: 10px;
  color: #666;
`;

const LoginLink = styled(Link)`
  color: var(--primary-color, #cd232e);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default RegisterPage;