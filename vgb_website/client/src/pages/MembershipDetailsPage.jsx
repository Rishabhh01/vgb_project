// client/src/pages/MembershipDetailsPage.jsx
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import AuthContext from '../context/AuthContext';
import {membershipBenefits} from '../constants/membershipBenefits';

const MembershipDetailsPage = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  // Upgrade options: if user is on BASIC or SILVER, they can upgrade.
  const upgradeOptions = {
    'BASIC MEMBERSHIP': 'SILVER MEMBERSHIP',
    'SILVER MEMBERSHIP': 'GOLD MEMBERSHIP',
  };

  if (loading) {
    return <LoadingMessage>Loading membership details...</LoadingMessage>;
  }

  return (
    <PageContainer>
      <Greeting>
        {user && user.name ? `Hello, ${user.name}!` : 'Hello!'} Here are your membership details:
      </Greeting>

      <MembershipCard>
        <CardHeader>
          <CardTitle>My Membership</CardTitle>
        </CardHeader>
        {user.membershipStatus === 'active' ? (
          <>
            <CardBody>
              <InfoRow>
                <Label>Membership Type:</Label>
                <Value>{user.membershipType || 'Standard'}</Value>
              </InfoRow>
              {user.membershipStartDate && (
                <InfoRow>
                  <Label>Start Date:</Label>
                  <Value>
                    {new Date(user.membershipStartDate).toLocaleDateString()}
                  </Value>
                </InfoRow>
              )}
              {user.membershipEndDate && (
                <InfoRow>
                  <Label>Valid Until:</Label>
                  <Value>
                    {new Date(user.membershipEndDate).toLocaleDateString()}
                  </Value>
                </InfoRow>
              )}
            </CardBody>

            <BenefitsSection>
              <BenefitsTitle>Membership Benefits</BenefitsTitle>
              <BenefitsList>
                {membershipBenefits[user.membershipType] &&
                  membershipBenefits[user.membershipType].map((benefit, index) => (
                    <BenefitItem key={index}>
                      <BenefitIcon>
                        <FaCheck />
                      </BenefitIcon>
                      {benefit}
                    </BenefitItem>
                  ))}
              </BenefitsList>
            </BenefitsSection>

            {upgradeOptions[user.membershipType] && (
              <UpgradeSection>
                <UpgradeMessage>
                  Want to upgrade your membership to <strong>{upgradeOptions[user.membershipType]}</strong>?
                </UpgradeMessage>
                <UpgradeButton onClick={() => navigate('/membership-upgrade')}>
                  Upgrade Now
                </UpgradeButton>
              </UpgradeSection>
            )}
          </>
        ) : (
          <NoMembershipMessage>
            Your membership is currently pending. Please complete your membership process to access all features.
          </NoMembershipMessage>
        )}
      </MembershipCard>
    </PageContainer>
  );
};

export default MembershipDetailsPage;

/* ---------- Styled Components ---------- */

const PageContainer = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const Greeting = styled.p`
  text-align: center;
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 20px;
`;

/* Membership Card Styles */
const MembershipCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 30px;
`;

const CardHeader = styled.div`
  background-color: #f0f0f0;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const CardTitle = styled.h2`
  margin: 0;
  color: #2d2d2d;
  font-size: 1.8rem;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Label = styled.span`
  flex: 1;
  font-weight: 600;
  color: #555;
`;

const Value = styled.span`
  flex: 1;
  color: #333;
`;

/* Benefits Section */
const BenefitsSection = styled.section`
  padding: 20px;
  border-top: 1px solid #ddd;
  background-color: #fafafa;
`;

const BenefitsTitle = styled.h3`
  font-size: 1.6rem;
  color: #2d2d2d;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 20px;
  text-align: center;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1rem;
  color: #444;
`;

const BenefitIcon = styled.span`
  color: #28a745;
  margin-right: 10px;
`;

/* Upgrade Section */
const UpgradeSection = styled.section`
  margin-top: 30px;
  padding: 20px;
  text-align: center;
  background-color: #eef6ff;
  border-top: 1px solid #ddd;
`;

const UpgradeMessage = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 15px;
`;

const UpgradeButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0069d9;
  }
`;

const NoMembershipMessage = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #777;
  margin-top: 20px;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
`;
