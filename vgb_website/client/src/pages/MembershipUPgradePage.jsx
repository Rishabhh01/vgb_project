// client/src/pages/MembershipUpgradePage.jsx
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaCheck, FaRegCheckCircle, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
// Import membership data from the shared constant file
import { membershipPlans} from '../constants/membershipBenefits';

// Create configured axios instance with baseURL from environment variables
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5012',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

const MembershipUpgradePage = () => {
  const { user, loading, updateMembership } = useContext(AuthContext);
  const navigate = useNavigate();

  // Determine current plan from the user membershipType
  const currentPlan = membershipPlans.find(p => p.id === user?.membershipType) || membershipPlans[0];

  // Allow upgrades only to plans with a higher price than current plan
  const eligiblePlans = membershipPlans.filter(p => p.price > currentPlan.price);

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [step, setStep] = useState(1); // 1: Upgrade selection, 2: Payment, 3: Success
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentResult, setPaymentResult] = useState(null);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
    // If no upgrade is applicable (e.g. already on highest plan), redirect back to profile
    if (user && eligiblePlans.length === 0) {
      navigate('/profile');
    }
  }, [user, loading, navigate, eligiblePlans.length]);

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleContinueToPayment = () => {
    if (selectedPlan) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const handleRazorpayPayment = async () => {
    if (!selectedPlan) return;
    
    setPaymentProcessing(true);
    setPaymentError(null);
    
    try {
      // Get the selected plan details
      const plan = eligiblePlans.find(p => p.id === selectedPlan);
      
      // Create order with Razorpay through your backend
      const response = await api.post('/api/payments/create-order', {
        amount: plan.price,
        description: `${plan.name} - ${plan.period} membership upgrade`,
        email: user?.email,
        firstName: user?.firstName || user?.name,
        lastName: user?.lastName || '',
        metadata: {
          userId: user?._id,
          membershipPlan: plan.id,
          membershipName: plan.name,
        }
      });
      const { data } = response;
      
      if (!data.success || !data.orderId) {
        throw new Error(data.message || 'Failed to create order');
      }
      
      // Configure Razorpay options
      const options = {
        key: 'rzp_test_bToxqx9jfCqd57', // Your Razorpay test key
        amount: data.amount * 100, // amount in paise
        currency: data.currency || 'INR',
        name: 'Vishwa Guru Bharat Foundation',
        description: `${plan.name} - ${plan.period}`,
        image: '/vgb-logo.png',
        order_id: data.orderId,
        handler: async function(response) {
          try {
            // Verify payment on the backend
            await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5012'}/api/payments/verify-payment`, {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature
              });
            
            // Update membership details in the user's profile
            const result = await updateMembership({
              membershipType: plan.id,
              paymentId: response.razorpay_payment_id,
              amount: plan.price,
              membershipStartDate: new Date(), // Upgraded membership start now
              membershipEndDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
            });
            
            if (result.success) {
              setPaymentResult({
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                membershipType: plan.name,
                amount: plan.price
              });
              
              setStep(3);
              window.scrollTo(0, 0);
            } else {
              setPaymentError('Membership update failed: ' + result.message);
            }
          } catch (error) {
            console.error('Verification error:', error);
            setPaymentError('Payment verification failed. Please contact support.');
          } finally {
            setPaymentProcessing(false);
          }
        },
        prefill: {
          name: user ? `${user.firstName || ''} ${user.lastName || ''}` : '',
          email: user?.email || '',
          contact: user?.phone || ''
        },
        notes: {
          userId: user?._id,
          membershipPlan: plan.id
        },
        theme: {
          color: '#cd232e'
        },
        modal: {
          ondismiss: function() {
            setPaymentProcessing(false);
            console.log('Payment modal dismissed');
          }
        }
      };
      
      const rzp = new window.Razorpay(options);
      
      rzp.on('payment.failed', function(response) {
        console.error('Payment failed:', response.error);
        setPaymentError(response.error.description || 'Payment failed');
        setPaymentProcessing(false);
      });
      
      rzp.open();
    } catch (error) {
      console.error('Payment initiation error:', error);
      setPaymentError(error.message || 'An unexpected error occurred');
      setPaymentProcessing(false);
    }
  };

  const getSelectedPlan = () => {
    return eligiblePlans.find(p => p.id === selectedPlan) || {};
  };

  if (loading) {
    return (
      <Container>
        <div className="container">
          <LoadingMessage>Loading...</LoadingMessage>
        </div>
      </Container>
    );
  }
  
  return (
    <Container>
      <div className="container">
        <PageHeader>
          <h1>Upgrade Your Membership</h1>
          <p>
            Your current membership is <strong>{currentPlan.name}</strong>.
            Select a plan to upgrade and enjoy additional benefits.
          </p>
        </PageHeader>
        
        {step === 3 ? (
          <SuccessContainer>
            <SuccessIcon>
              <FaRegCheckCircle />
            </SuccessIcon>
            <h2>Congratulations!</h2>
            <p>
              Your membership has been successfully upgraded to {getSelectedPlan().name}.
            </p>
            <PaymentDetails>
              <p><strong>Payment ID:</strong> {paymentResult.paymentId}</p>
              <p><strong>Order ID:</strong> {paymentResult.orderId}</p>
              <p><strong>Amount Paid:</strong> ₹{paymentResult.amount}</p>
            </PaymentDetails>
            <ActionButton onClick={() => navigate('/profile')}>
              Go to Your Profile
            </ActionButton>
          </SuccessContainer>
        ) : (
          <Content>
            {step === 1 ? (
              <div>
                <SectionTitle>Select Your Upgrade Plan</SectionTitle>
                
                <PlansContainer>
                  {eligiblePlans.map((plan) => (
                    <PlanCard 
                      key={plan.id} 
                      selected={selectedPlan === plan.id}
                      recommended={plan.recommended}
                      onClick={() => handlePlanSelect(plan.id)}
                    >
                      {plan.recommended && <RecommendedTag>Recommended</RecommendedTag>}
                      <PlanName>{plan.name}</PlanName>
                      <PlanPrice>
                        ₹{plan.price}
                        <PlanPeriod>/{plan.period}</PlanPeriod>
                      </PlanPrice>
                      
                      {plan.id === 'BASIC MEMBERSHIP' && (
                        <DailyValue>
                          <FaRupeeSign /> 1 <span>per day</span>
                        </DailyValue>
                      )}
                      
                      <AnnualTag>
                        <FaCalendarAlt /> Annual Membership
                      </AnnualTag>
                      
                      <PlanFeatures>
                        {plan.features.map((feature, index) => (
                          <FeatureItem key={index}>
                            <FeatureIcon><FaCheck /></FeatureIcon>
                            {feature}
                          </FeatureItem>
                        ))}
                      </PlanFeatures>
                      <SelectButton 
                        selected={selectedPlan === plan.id}
                        onClick={() => handlePlanSelect(plan.id)}
                      >
                        {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                      </SelectButton>
                    </PlanCard>
                  ))}
                </PlansContainer>
                
                <ContinueButton 
                  onClick={handleContinueToPayment}
                  disabled={!selectedPlan}
                >
                  Continue to Payment
                </ContinueButton>
              </div>
            ) : (
              <div>
                <SectionTitle>Complete Your Upgrade Payment</SectionTitle>
                
                <OrderSummary>
                  <h3>Order Summary</h3>
                  <SummaryRow>
                    <span>New Membership Plan:</span>
                    <span>{getSelectedPlan().name}</span>
                  </SummaryRow>
                  <SummaryRow>
                    <span>Billing Period:</span>
                    <span>{getSelectedPlan().period}</span>
                  </SummaryRow>
                  <SummaryRow total>
                    <span>Total:</span>
                    <span>₹{getSelectedPlan().price}</span>
                  </SummaryRow>
                </OrderSummary>
                
                {paymentError && (
                  <ErrorMessage>{paymentError}</ErrorMessage>
                )}
                
                <PaymentSection>
                  <h3>Payment Information</h3>
                  <PaymentInfo>
                    <SecurePaymentIcon>🔒</SecurePaymentIcon>
                    <p>
                      Your payment will be processed securely through Razorpay. 
                      Click the button below to open the payment gateway.
                    </p>
                    <p>
                      <strong>For testing:</strong> Use card number <code>4111 1111 1111 1111</code>, 
                      any future expiry date, any 3-digit CVV, and password <code>1234</code> for successful payment.
                    </p>
                  </PaymentInfo>
                  
                  <PayButton 
                    onClick={handleRazorpayPayment}
                    disabled={paymentProcessing}
                  >
                    {paymentProcessing ? 'Processing...' : `Pay ₹${getSelectedPlan().price} Now`}
                  </PayButton>
                  
                  <SecurityNote>
                    All payments are secure and encrypted. Your card details are never stored on our servers.
                  </SecurityNote>
                </PaymentSection>
                
                <BackButton onClick={() => setStep(1)}>
                  Back to Plan Selection
                </BackButton>
              </div>
            )}
          </Content>
        )}
      </div>
    </Container>
  );
};

export default MembershipUpgradePage;

/* ---------- Styled Components ---------- */

const Container = styled.div`
  padding: 60px 0;
  background-color: #f8f9fa;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  h1 {
    color: var(--primary-color, #cd232e);
    margin-bottom: 15px;
    font-size: 2.5rem;
  }
  
  p {
    max-width: 800px;
    margin: 0 auto;
    color: #555;
    font-size: 1.1rem;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding: 40px;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: var(--secondary-color, #2b2928);
  font-size: 1.5rem;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const PlanCard = styled.div`
  border: 2px solid ${props => props.selected ? 'var(--primary-color, #cd232e)' : '#e0e0e0'};
  border-radius: 8px;
  padding: 25px;
  position: relative;
  transition: all 0.3s;
  background-color: ${props => props.selected ? 'rgba(205, 35, 46, 0.03)' : '#fff'};
  box-shadow: ${props => props.selected ? '0 4px 15px rgba(205, 35, 46, 0.15)' : 'none'};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const RecommendedTag = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: var(--primary-color, #cd232e);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const PlanName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--secondary-color, #2b2928);
`;

const PlanPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--primary-color, #cd232e);
  display: flex;
  align-items: baseline;
`;

const PlanPeriod = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #777;
  margin-left: 5px;
`;

const DailyValue = styled.div`
  background-color: #f8f2e6;
  color: #b88a48;
  border: 1px dashed #d6b676;
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 1.1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  margin-bottom: 15px;
  
  svg {
    margin-right: 2px;
    font-size: 0.9rem;
  }
  
  span {
    font-size: 0.8rem;
    margin-left: 4px;
  }
`;

const AnnualTag = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
  
  svg {
    margin-right: 6px;
    color: #28a745;
  }
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.95rem;
`;

const FeatureIcon = styled.span`
  color: #28a745;
  margin-right: 10px;
  font-size: 0.9rem;
`;

const SelectButton = styled.button`
  width: 100%;
  background-color: ${props => props.selected ? 'var(--primary-color, #cd232e)' : '#f1f1f1'};
  color: ${props => props.selected ? 'white' : '#333'};
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.selected ? '#b01c26' : '#e1e1e1'};
  }
`;

const ContinueButton = styled.button`
  width: 100%;
  background-color: var(--primary-color, #cd232e);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: #b01c26;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const OrderSummary = styled.div`
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 30px;
  
  h3 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.2rem;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: ${props => props.total ? '10px 0 0' : '0'};
  border-top: ${props => props.total ? '1px solid #e0e0e0' : 'none'};
  font-weight: ${props => props.total ? '600' : 'normal'};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 12px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const PaymentSection = styled.div`
  margin-bottom: 30px;
  
  h3 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
`;

const PaymentInfo = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
  
  p {
    margin: 10px 0;
    line-height: 1.5;
  }
  
  code {
    background-color: #eee;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: monospace;
  }
`;

const SecurePaymentIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PayButton = styled.button`
  width: 100%;
  background-color: var(--primary-color, #cd232e);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: #b01c26;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SecurityNote = styled.div`
  text-align: center;
  margin-top: 15px;
  color: #666;
  font-size: 0.9rem;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  
  &:hover {
    color: var(--primary-color, #cd232e);
  }
`;

const SuccessContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  h2 {
    color: var(--secondary-color, #2b2928);
    margin: 20px 0;
  }
  
  p {
    color: #555;
    margin-bottom: 15px;
    line-height: 1.6;
  }
`;

const SuccessIcon = styled.div`
  font-size: 60px;
  color: #28a745;
`;

const PaymentDetails = styled.div`
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 15px;
  margin: 20px auto;
  max-width: 350px;
  text-align: left;
  
  p {
    margin: 5px 0;
    font-size: 0.9rem;
  }
`;

const ActionButton = styled.button`
  background-color: var(--primary-color, #cd232e);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #b01c26;
  }
`;

