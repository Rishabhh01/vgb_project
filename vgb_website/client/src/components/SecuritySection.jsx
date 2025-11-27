import styled from 'styled-components';
import { FaShieldAlt, FaLock, FaUserShield } from 'react-icons/fa';

const SecuritySection = () => {
  return (
    <SecurityContainer>
      <div className="container">
        <SecurityTitle>Your Trust & Security Matter</SecurityTitle>
        <SecurityGrid>
          <SecurityCard>
            <SecurityIcon>
              <FaShieldAlt />
            </SecurityIcon>
            <SecurityHeading>Secure Transactions</SecurityHeading>
            <SecurityText>
              All payments are processed through trusted payment gateways with industry-standard encryption
            </SecurityText>
          </SecurityCard>

          <SecurityCard>
            <SecurityIcon>
              <FaLock />
            </SecurityIcon>
            <SecurityHeading>Data Protection</SecurityHeading>
            <SecurityText>
              Your personal information is protected with advanced encryption and security measures
            </SecurityText>
          </SecurityCard>

          <SecurityCard>
            <SecurityIcon>
              <FaUserShield />
            </SecurityIcon>
            <SecurityHeading>Privacy First</SecurityHeading>
            <SecurityText>
              We never share your personal information with third parties without your consent
            </SecurityText>
          </SecurityCard>
        </SecurityGrid>
      </div>
    </SecurityContainer>
  );
};

const SecurityContainer = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;
`;

const SecurityTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 50px;
`;

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SecurityCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SecurityIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const SecurityHeading = styled.h3`
  font-size: 1.3rem;
  color: var(--secondary-color);
  margin-bottom: 15px;
`;

const SecurityText = styled.p`
  color: #666;
  line-height: 1.6;
`;

export default SecuritySection;