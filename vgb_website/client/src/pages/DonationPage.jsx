import { useState } from 'react';
import styled from 'styled-components';
import { FaRegCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import RazorpayPaymentForm from '../components/RazorpayPaymentForm';
import SecuritySection from '../components/SecuritySection';

// Create configured axios instance with baseURL from environment variables
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5012',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [step, setStep] = useState(1); // 1: Amount selection, 2: Payment, 3: Success
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  });
  const [paymentResult, setPaymentResult] = useState(null);
  const [receiptSent, setReceiptSent] = useState(false);

  const predefinedAmounts = [1000, 2100, 5100, 11000, 21000, 51000];

  const handleDonationSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleDonorInfoChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleContinueToPayment = (e) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handlePaymentSuccess = (paymentData) => {
    console.log('Payment successful', paymentData);
    setPaymentResult(paymentData);
    
    // Send API request to send donation receipt
    const amount = getCurrentAmount();
    console.log('Sending donation receipt request with amount:', amount);
    
    api.post('/api/users/donation', {
      name: `${donorInfo.firstName} ${donorInfo.lastName}`,
      email: donorInfo.email,
      amount: amount,
      paymentId: paymentData.paymentId || paymentData.razorpay_payment_id,
      paymentMethod: 'Razorpay',
      notes: donorInfo.company ? `Company: ${donorInfo.company}` : ''
    })
    .then(response => {
      console.log('Donation processed, receipt will be sent:', response.data);
      setReceiptSent(true);
    })
    .catch(error => {
      console.error('Failed to process donation receipt:', error);
      setReceiptSent(false);
    })
    .finally(() => {
      // Set success state regardless of receipt sending status
      setStep(3);
      window.scrollTo(0, 0);
    });
  };

  const handlePaymentError = (error) => {
    console.error('Payment error:', error);
    // You might want to show an error message to the user
  };

  const getCurrentAmount = () => {
    if (donationAmount === 'custom') {
      return parseFloat(customAmount) || 0;
    }
    return parseFloat(donationAmount) || 0;
  };

  const resetForm = () => {
    setDonationAmount('');
    setCustomAmount('');
    setIsRecurring(false);
    setDonorInfo({
      firstName: '',
      lastName: '',
      email: '',
      company: ''
    });
    setPaymentResult(null);
    setReceiptSent(false);
    setStep(1);
  };

  return (
    <DonationContainer>
      <div className="container">
        <PageHeader>
          <h1>Donate For Sankalp Vishwa Guru Bharat</h1>
          <DonationMessage>
            <p>
              विश्व गुरु भारत ट्रस्ट एक ऐसे भविष्य की कल्पना करता है और संकल्प करता है जहां
              भारत अपनी वैदिक और सनातन संस्कृति, दिव्य वेद विज्ञान ज्ञान के साथ दुनिया को
              रोशन करते हुए विश्व के मार्गदर्शक प्रकाश के रूप में अपना सही स्थान पुनः प्राप्त करता है।
            </p>

            <p>
              लेकिन इस यात्रा के लिए हर हाथ, हर दिल, हर छोटी-बड़ी सहयोग की अति आवश्यकता है।
              आपका योगदान, चाहे छोटा हो या बड़ा, इस मिशन को गति देता है।
            </p>

            <p>
              आपके द्वारा दिया गया प्रत्येक रुपया हमारे मिशन को मजबूत करता है और भारत को विश्व गुरु बनाने की दिशा में एक कदम आगे बढ़ाता है।
              कृपया इस पवित्र मिशन में अपना योगदान दें।
            </p>
          </DonationMessage>
        </PageHeader>

        {step === 3 ? (
          <SuccessContainer>
            <SuccessIcon>
              <FaRegCheckCircle />
            </SuccessIcon>
            <h2>Thank You for Your Donation!</h2>
            <p>
              Your generous contribution of ₹{getCurrentAmount()} {isRecurring ? 'monthly' : ''}
              helps support Vishwa Guru Bharat's mission around the world.
            </p>
            <p>
              {receiptSent 
                ? `We've sent a confirmation email to ${donorInfo.email}.` 
                : `A donation receipt will be emailed to ${donorInfo.email} shortly.`}
            </p>
            {paymentResult && (
              <PaymentDetails>
                <p>Payment ID: {paymentResult.paymentId || paymentResult.razorpay_payment_id}</p>
                <p>Payment Status: Successful</p>
              </PaymentDetails>
            )}
            <DonateAgainButton onClick={resetForm}>Donate Again</DonateAgainButton>
          </SuccessContainer>
        ) : (
          <DonationForm>
            {step === 1 ? (
              <form onSubmit={handleContinueToPayment}>
                <SectionTitle>Select Donation Amount</SectionTitle>
                <AmountButtonsContainer>
                  {predefinedAmounts.map(amount => (
                    <AmountButton
                      key={amount}
                      type="button"
                      selected={donationAmount === amount.toString()}
                      onClick={() => handleDonationSelect(amount.toString())}
                    >
                      ₹{amount}
                    </AmountButton>
                  ))}
                </AmountButtonsContainer>

                <CustomAmountContainer>
                  <label htmlFor="customAmount">Custom Amount:</label>
                  <CustomAmountInput
                    type="number"
                    id="customAmount"
                    placeholder="Enter amount in ₹"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    min="1"
                    step="1"
                  />
                </CustomAmountContainer>

                <RecurringContainer>
                  <input
                    type="checkbox"
                    id="recurring"
                    checked={isRecurring}
                    onChange={() => setIsRecurring(!isRecurring)}
                  />
                  <label htmlFor="recurring">Make this a monthly donation</label>
                </RecurringContainer>

                <SectionTitle style={{ marginTop: '30px' }}>Your Information</SectionTitle>
                <FormRow>
                  <FormGroup>
                    <label htmlFor="firstName">First Name*</label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={donorInfo.firstName}
                      onChange={handleDonorInfoChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="lastName">Last Name*</label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={donorInfo.lastName}
                      onChange={handleDonorInfoChange}
                      required
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <label htmlFor="email">Email Address*</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={donorInfo.email}
                      onChange={handleDonorInfoChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="company">Company (Optional)</label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={donorInfo.company}
                      onChange={handleDonorInfoChange}
                    />
                  </FormGroup>
                </FormRow>

                <ContinueButton
                  type="submit"
                  disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
                >
                  Continue to Payment
                </ContinueButton>
              </form>
            ) : (
              <div>
                <SectionTitle>Payment Information</SectionTitle>
                <SummaryBox>
                  <SummaryRow>
                    <span>Donation Amount:</span>
                    <span>₹{getCurrentAmount()}</span>
                  </SummaryRow>
                  <SummaryRow>
                    <span>Frequency:</span>
                    <span>{isRecurring ? 'Monthly' : 'One-time'}</span>
                  </SummaryRow>
                  <SummaryRow>
                    <span>Donor:</span>
                    <span>{donorInfo.firstName} {donorInfo.lastName}</span>
                  </SummaryRow>
                </SummaryBox>

                <RazorpayPaymentForm
                  amount={getCurrentAmount()}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                  currency="INR"
                  donorInfo={{
                    firstName: donorInfo.firstName,
                    lastName: donorInfo.lastName,
                    email: donorInfo.email,
                    company: donorInfo.company,
                    isRecurring: isRecurring
                  }}
                />

                <BackButton onClick={() => setStep(1)}>
                  Back to Donation Form
                </BackButton>
              </div>
            )}
          </DonationForm>
        )}

        <SecuritySection />
      </div>
    </DonationContainer>
  );
};

const DonationContainer = styled.div`
  padding: 60px 0;
  background-color: #f8f9fa;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    color: var(--primary-color, #cd232e);
    margin-bottom: 20px;
    font-size: 2.5rem;
  }
`;

const DonationMessage = styled.div`
  max-width: 800px;
  margin: 0 auto;

  p {
    color: #555;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 15px;
    text-align: justify;
  }

  p:first-child {
    font-weight: 500;
    font-size: 1.2rem;
    color: #333;
  }
`;

const DonationForm = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: var(--secondary-color, #2b2928);
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const AmountButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AmountButton = styled.button`
  background-color: ${props => props.selected ? 'var(--primary-color, #cd232e)' : '#f8f9fa'};
  color: ${props => props.selected ? '#fff' : '#333'};
  border: 1px solid ${props => props.selected ? 'var(--primary-color, #cd232e)' : '#ddd'};
  padding: 12px;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.selected ? 'var(--primary-color, #cd232e)' : '#ebebeb'};
  }
`;

const CustomAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-right: 10px;
    font-weight: 500;
    min-width: 120px;
  }
`;

const CustomAmountInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color, #cd232e);
  }
`;

const RecurringContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }

  label {
    cursor: pointer;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color, #cd232e);
  }
`;

const ContinueButton = styled.button`
  width: 100%;
  background-color: var(--primary-color, #cd232e);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b01c26;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
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

const SummaryBox = styled.div`
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
    padding-top: 8px;
    border-top: 1px solid #eee;
    font-weight: 600;
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
  }
`;

const PaymentDetails = styled.div`
  background-color: #f9f9f9;
  border-radius: 6px;
  padding: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
  
  p {
    margin: 5px 0;
    font-size: 0.9rem;
    color: #666;
  }
`;

const SuccessIcon = styled.div`
  font-size: 60px;
  color: #28a745;
`;

const DonateAgainButton = styled.button`
  background-color: var(--primary-color, #cd232e);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b01c26;
  }
`;

export default DonationPage;