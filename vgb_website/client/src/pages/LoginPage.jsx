import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  
  const { login, error, user, clearError } = useContext(AuthContext);
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!email || !password) {
      setFormError('Please fill in all fields');
      return;
    }
    
    // Clear form error if any
    setFormError('');
    
    // Attempt login
    const result = await login(email, password);
    if (result.success) {
      navigate('/profile'); // Redirect to profile on success
    }
  };
  
  return (
    <LoginContainer>
      <div className="container">
        <LoginWrapper>
          <LoginHeader>
            <LoginLogo src="/vgb-logo.png" alt="Vishwa Guru Bharat Logo" />
            <LoginTitle>Member Login</LoginTitle>
          </LoginHeader>
          
          {(formError || error) && <ErrorMessage>{formError || error}</ErrorMessage>}
          
          <LoginForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </FormGroup>
            
            <ForgotPassword to="/forgot-password">Forgot password?</ForgotPassword>
            
            <SubmitButton type="submit">Sign In</SubmitButton>
          </LoginForm>
          
          <RegisterSection>
            <RegisterText>Don't have an account?</RegisterText>
            <RegisterLink to="/register">Create Account</RegisterLink>
          </RegisterSection>
        </LoginWrapper>
      </div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  padding: 80px 0;
  background-color: #f8f8f8;
`;

const LoginWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const LoginLogo = styled.img`
  max-width: 150px;
  margin-bottom: 20px;
`;

const LoginTitle = styled.h1`
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

const LoginForm = styled.form`
  margin-bottom: 30px;
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
`;

const ForgotPassword = styled(Link)`
  display: block;
  text-align: right;
  color: var(--primary-color, #cd232e);
  margin-bottom: 20px;
  font-size: 0.9rem;
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

const RegisterSection = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

const RegisterText = styled.span`
  margin-right: 10px;
  color: #666;
`;

const RegisterLink = styled(Link)`
  color: var(--primary-color, #cd232e);
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default LoginPage;