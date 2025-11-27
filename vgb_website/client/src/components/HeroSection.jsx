import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <HeroTitle>Grow Your <Revenue>Revenue</Revenue></HeroTitle>
          <HeroDescription>
            Join BNI<sup>®</sup>, the world's largest and most successful referral networking organization
          </HeroDescription>
          <HeroInfo>
            Discover how BNI Members around the world meet each week locally to pass millions of referrals to each other worth billions of dollars in revenue for businesses just like yours.
          </HeroInfo>
          <GetInvitedButton to="/find-a-chapter">GET INVITED</GetInvitedButton>
        </HeroText>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  background-image: url('https://web-assets.same.dev/722953758/3904417250.jpeg');
  background-size: cover;
  background-position: center;
  height: 600px;
  position: relative;

  @media (max-width: 768px) {
    background-image: url('https://web-assets.same.dev/3461441144/1023208745.jpeg');
    height: 500px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5%;
  z-index: 1;
`;

const HeroText = styled.div`
  max-width: 600px;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Revenue = styled.span`
  display: block;
`;

const HeroDescription = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroInfo = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const GetInvitedButton = styled(Link)`
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

export default HeroSection;
