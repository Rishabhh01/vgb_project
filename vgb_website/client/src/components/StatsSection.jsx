import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background: #fff;
  width: 100%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent);
  }
`;

const Logo = styled.img`
  max-width: 150px;
  margin-bottom: 40px;
`;

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.h2`
  font-size: 3rem;
  color: #cd232e;
  margin: 0;
  font-weight: bold;
  line-height: 1.2;
`;

const StatLabel = styled.p`
  font-size: 1.4rem;
  color: #333;
  margin: 10px 0 0 0;
  font-weight: 500;
`;

const StatsSection = () => {
  return (
    <StatsContainer>
      <Logo src="/vgb-logo.png" alt="VGB Logo" />
      <StatsWrapper>
        <StatItem>
          <StatNumber>1000+</StatNumber>
          <StatLabel>Volunteers</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>500+</StatNumber>
          <StatLabel>Projects</StatLabel>
        </StatItem>
      </StatsWrapper>
    </StatsContainer>
  );
};

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 20px;
`;

const StatPrefix = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
`;

const StatSubtext = styled.div`
  font-size: 0.8rem;
  color: #777;
  margin-top: 5px;
  font-style: italic;
`;

const CtaSection = styled.div`
  background-color: #f1f1f1;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CtaText = styled.div`
  font-size: 1.3rem;
  font-weight: 600;

  span {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: #fff;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 30px;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b01c26;
  }
`;

export default StatsSection;
