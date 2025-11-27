import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaOm, FaHandHoldingHeart, FaBookReader } from 'react-icons/fa';

const StepsSection = () => {
  return (
    <StepsContainer>
      <div className="container">
        <StepsHeader>Path to Enlightenment</StepsHeader>
        <StepsSubheader>
          Join us in our mission to revive and spread India's ancient wisdom
        </StepsSubheader>

        <StepsList>
          <StepItem>
            <StepNumber>
              <FaOm />
            </StepNumber>
            <StepTitle>Learn</StepTitle>
            <StepDescription>
              Explore ancient wisdom through our programs and initiatives
            </StepDescription>
          </StepItem>

          <StepItem>
            <StepNumber>
              <FaHandHoldingHeart />
            </StepNumber>
            <StepTitle>Practice</StepTitle>
            <StepDescription>
              Apply timeless teachings in your daily life
            </StepDescription>
          </StepItem>

          <StepItem>
            <StepNumber>
              <FaBookReader />
            </StepNumber>
            <StepTitle>Share</StepTitle>
            <StepDescription>
              Spread the light of knowledge to others
            </StepDescription>
          </StepItem>
        </StepsList>

        <JoinButton to="/register">Begin Your Journey</JoinButton>
      </div>
    </StepsContainer>
  );
};

const StepsContainer = styled.section`
  padding: 80px 0;
  background-color: var(--primary-color);
  color: #fff;
  text-align: center;
`;

const StepsHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

const StepsSubheader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 60px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const StepsList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50px;
    left: 20%;
    right: 20%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &::before {
      display: none;
    }
  }
`;

const StepItem = styled.div`
  width: 30%;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 20px;
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const JoinButton = styled(Link)`
  display: inline-block;
  background-color: #fff;
  color: var(--primary-color);
  font-weight: 600;
  padding: 15px 40px;
  border-radius: 30px;
  text-transform: uppercase;
  transition: all 0.3s;
  font-size: 1.1rem;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export default StepsSection;
