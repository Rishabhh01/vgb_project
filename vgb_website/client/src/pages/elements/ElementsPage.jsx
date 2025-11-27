// client/src/pages/elements/ElementsPage.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const ElementsPage = () => {
  return (
    <PageContainer>
      <HeroBanner>
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>The Five Elements</HeroTitle>
            <HeroSubtitle>Preserving the balance of nature through ancient wisdom</HeroSubtitle>
          </HeroContent>
        </HeroOverlay>
      </HeroBanner>

      <div className="container">
        <IntroSection>
          <SectionTitle>The Pancha Maha Bhutas</SectionTitle>
          <IntroText>
            <p>
              According to Vedic philosophy, all of creation, including the human body, is made up of five elements: Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Ether/Space(Akasha). These elements are not just physical substances but also represent different types of energy and qualities that pervade the universe.
            </p>
            <p>
              Our Five Elements initiative focuses on preserving the balance of these elements in nature through environmental conservation, sustainable practices, and raising awareness about our connection to the natural world. We believe that by understanding and honoring these elements, we can create a more harmonious relationship with our planet.
            </p>
          </IntroText>
        </IntroSection>
        
        <ElementsInfographic>
          <CenterCircle>
            <CenterText>Five Elements</CenterText>
          </CenterCircle>
          <ElementsContainer>
            <ElementBox color="#B8D8D8">
              <ElementCircle color="#5EADF0">💧</ElementCircle>
              <ElementDetails>
                <ElementName>Water (Jal)</ElementName>
                <ElementQualities>Liquid, Cool, Flowing</ElementQualities>
                <ElementDescription>
                  Represents cohesiveness, fluidity, and adaptability. Associated with taste and emotions.
                </ElementDescription>
              </ElementDetails>
            </ElementBox>
            
            <ElementBox color="#FFD6BA">
              <ElementCircle color="#F5CAC3">🔥</ElementCircle>
              <ElementDetails>
                <ElementName>Fire (Agni)</ElementName>
                <ElementQualities>Hot, Sharp, Transformative</ElementQualities>
                <ElementDescription>
                  Represents transformation, digestion, and intelligence. Associated with vision and metabolism.
                </ElementDescription>
              </ElementDetails>
            </ElementBox>
            
            <ElementBox color="#DDB892">
              <ElementCircle color="#BB8F70">🌍</ElementCircle>
              <ElementDetails>
                <ElementName>Earth (Prithvi)</ElementName>
                <ElementQualities>Solid, Stable, Grounded</ElementQualities>
                <ElementDescription>
                  Represents stability, structure, and solidity. Associated with smell and physical body.
                </ElementDescription>
              </ElementDetails>
            </ElementBox>
            
            <ElementBox color="#AEFFD8">
              <ElementCircle color="#AED9E0">💨</ElementCircle>
              <ElementDetails>
                <ElementName>Air (Vayu)</ElementName>
                <ElementQualities>Mobile, Dry, Light</ElementQualities>
                <ElementDescription>
                  Represents movement, transportation, and communication. Associated with touch and nervous system.
                </ElementDescription>
              </ElementDetails>
            </ElementBox>
            
            <ElementBox color="#DCCAE9">
              <ElementCircle color="#B8B8D1">✨</ElementCircle>
              <ElementDetails>
                <ElementName>Ether (Akasha)</ElementName>
                <ElementQualities>Subtle, All-pervading, Spacious</ElementQualities>
                <ElementDescription>
                  Represents space, consciousness, and potential. Associated with sound and mind.
                </ElementDescription>
              </ElementDetails>
            </ElementBox>
          </ElementsContainer>
        </ElementsInfographic>
        
        <InitiativesSection>
          <SectionTitle>Our Environmental Initiatives</SectionTitle>
          <InitiativeText>
            Based on the Five Elements philosophy, we have developed specific initiatives to address environmental challenges and promote ecological balance.
          </InitiativeText>
          
          <InitiativesGrid>
            <InitiativeCard>
              <InitiativeHeader color="#AED9E0">
                <InitiativeIcon>💧</InitiativeIcon>
                <InitiativeName>Water Conservation</InitiativeName>
              </InitiativeHeader>
              <InitiativeContent>
                <InitiativeDescription>
                  Protecting water bodies, promoting rainwater harvesting, and reducing water pollution to preserve this vital element.
                </InitiativeDescription>
                <InitiativeProjects>
                  <ProjectItem>River cleanup drives</ProjectItem>
                  <ProjectItem>Rainwater harvesting systems</ProjectItem>
                  <ProjectItem>Water purification technologies</ProjectItem>
                </InitiativeProjects>
              </InitiativeContent>
            </InitiativeCard>
            
            <InitiativeCard>
              <InitiativeHeader color="#F5CAC3">
                <InitiativeIcon>🔥</InitiativeIcon>
                <InitiativeName>Sustainable Energy</InitiativeName>
              </InitiativeHeader>
              <InitiativeContent>
                <InitiativeDescription>
                  Promoting clean, renewable energy sources and reducing fossil fuel dependence to balance the fire element.
                </InitiativeDescription>
                <InitiativeProjects>
                  <ProjectItem>Solar energy adoption</ProjectItem>
                  <ProjectItem>Fuel-efficient cooking solutions</ProjectItem>
                  <ProjectItem>Energy conservation education</ProjectItem>
                </InitiativeProjects>
              </InitiativeContent>
            </InitiativeCard>
            
            <InitiativeCard>
              <InitiativeHeader color="#DDB892">
                <InitiativeIcon>🌍</InitiativeIcon>
                <InitiativeName>Soil Restoration</InitiativeName>
              </InitiativeHeader>
              <InitiativeContent>
                <InitiativeDescription>
                  Combating soil degradation, promoting organic farming, and preventing deforestation to preserve the earth element.
                </InitiativeDescription>
                <InitiativeProjects>
                  <ProjectItem>Organic farming workshops</ProjectItem>
                  <ProjectItem>Reforestation programs</ProjectItem>
                  <ProjectItem>Waste management systems</ProjectItem>
                </InitiativeProjects>
              </InitiativeContent>
            </InitiativeCard>
            
            <InitiativeCard>
              <InitiativeHeader color="#AED9E0">
                <InitiativeIcon>💨</InitiativeIcon>
                <InitiativeName>Air Quality</InitiativeName>
              </InitiativeHeader>
              <InitiativeContent>
                <InitiativeDescription>
                  Reducing air pollution, promoting tree plantation, and developing clean air technologies to purify the air element.
                </InitiativeDescription>
                <InitiativeProjects>
                  <ProjectItem>Urban forestation</ProjectItem>
                  <ProjectItem>Clean transportation advocacy</ProjectItem>
                  <ProjectItem>Industrial emission reduction</ProjectItem>
                </InitiativeProjects>
              </InitiativeContent>
            </InitiativeCard>
            
            <InitiativeCard>
              <InitiativeHeader color="#B8B8D1">
                <InitiativeIcon>✨</InitiativeIcon>
                <InitiativeName>Space Harmony</InitiativeName>
              </InitiativeHeader>
              <InitiativeContent>
                <InitiativeDescription>
                  Reducing noise pollution, electromagnetic radiation, and creating peaceful spaces to balance the ether element.
                </InitiativeDescription>
                <InitiativeProjects>
                  <ProjectItem>Noise reduction in urban areas</ProjectItem>
                  <ProjectItem>Meditation gardens and spaces</ProjectItem>
                  <ProjectItem>Electromagnetic radiation awareness</ProjectItem>
                </InitiativeProjects>
              </InitiativeContent>
            </InitiativeCard>
          </InitiativesGrid>
        </InitiativesSection>
        
        <PracticesSection>
          <SectionTitle>Balancing the Elements in Daily Life</SectionTitle>
          <PracticesText>
            The five elements exist within us as well as around us. Here are some ways you can honor and balance these elements in your daily life:
          </PracticesText>
          
          <PracticesList>
            <PracticeItem>
              <PracticeTitle>Earth: Practice Grounding</PracticeTitle>
              <PracticeDescription>
                Walk barefoot on natural ground, garden, work with clay, or spend time in nature to connect with the earth element.
              </PracticeDescription>
            </PracticeItem>
            <PracticeItem>
              <PracticeTitle>Water: Stay Hydrated</PracticeTitle>
              <PracticeDescription>
                Drink plenty of clean water, take nurturing baths or showers, and conserve water in your daily activities.
              </PracticeDescription>
            </PracticeItem>
            <PracticeItem>
              <PracticeTitle>Fire: Honor Your Digestive Fire</PracticeTitle>
              <PracticeDescription>
                Eat warm, freshly cooked meals, spend time in moderate sunlight, and engage in physical activity to balance the fire element.
              </PracticeDescription>
            </PracticeItem>
            <PracticeItem>
              <PracticeTitle>Air: Mindful Breathing</PracticeTitle>
              <PracticeDescription>
                Practice pranayama (breathing exercises), ensure good ventilation in your living spaces, and spend time in fresh air.
              </PracticeDescription>
            </PracticeItem>
            <PracticeItem>
              <PracticeTitle>Ether: Create Space for Silence</PracticeTitle>
              <PracticeDescription>
                Practice meditation, reduce noise pollution in your environment, and create moments of silence in your daily routine.
              </PracticeDescription>
            </PracticeItem>
          </PracticesList>
        </PracticesSection>
        
        <GetInvolved>
          <InvolvedTitle>Join Our Environmental Efforts</InvolvedTitle>
          <p>Help us preserve the balance of the five elements through conservation, education, and sustainable practices.</p>
          <ActionButtons>
            <ActionButton to="/donate">Support Our Projects</ActionButton>
            <ActionButton to="/volunteer">Volunteer</ActionButton>
            <ActionButton to="/contact">Partner With Us</ActionButton>
          </ActionButtons>
        </GetInvolved>
      </div>
    </PageContainer>
  );
};

// Animations
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Styled Components
const PageContainer = styled.div`
  padding-bottom: 60px;
`;

const HeroBanner = styled.div`
  height: 350px;
  background-image: url('https://web-assets.same.dev/1675577225/3977124565.png');
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 50px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const IntroSection = styled.section`
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const SectionTitle = styled.h2`
  color: #cd232e;
  font-size: 2rem;
  margin-bottom: 25px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #cd232e;
  }
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const IntroText = styled.div`
  color: #444;
  line-height: 1.8;
  
  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
`;

const ElementsInfographic = styled.div`
  position: relative;
  background-color: white;
  border-radius: 15px;
  padding: 80px 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CenterCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #cd232e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  margin-bottom: 50px;
  position: relative;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(205, 35, 46, 0.3);
  animation: ${pulse} 3s infinite ease-in-out;
  
  &:before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px dashed rgba(205, 35, 46, 0.5);
    animation: ${rotate} 20s linear infinite;
  }
`;

const CenterText = styled.div`
  font-size: 1.1rem;
  text-align: center;
`;

const ElementsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ElementBox = styled.div`
  background-color: ${props => props.color || '#f9f9f9'};
  border-radius: 15px;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ElementCircle = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${props => props.color || '#f0f0f0'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ElementDetails = styled.div`
  flex: 1;
`;

const ElementName = styled.h3`
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

const ElementQualities = styled.div`
  color: #666;
  font-style: italic;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ElementDescription = styled.p`
  color: #444;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const InitiativesSection = styled.section`
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const InitiativeText = styled.p`
  color: #444;
  line-height: 1.8;
  margin-bottom: 30px;
  font-size: 1.1rem;
`;

const InitiativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InitiativeCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const InitiativeHeader = styled.div`
  background-color: ${props => props.color || '#f0f0f0'};
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const InitiativeIcon = styled.div`
  font-size: 1.8rem;
`;

const InitiativeName = styled.h3`
  color: #333;
  font-size: 1.2rem;
  margin: 0;
`;

const InitiativeContent = styled.div`
  padding: 20px;
`;

const InitiativeDescription = styled.p`
  color: #444;
  line-height: 1.7;
  margin-bottom: 15px;
  font-size: 0.95rem;
`;

const InitiativeProjects = styled.ul`
  padding-left: 20px;
  margin: 0;
`;

const ProjectItem = styled.li`
  color: #555;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const PracticesSection = styled.section`
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const PracticesText = styled.p`
  color: #444;
  line-height: 1.8;
  margin-bottom: 30px;
  font-size: 1.1rem;
`;

const PracticesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PracticeItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const PracticeTitle = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const PracticeDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const GetInvolved = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  
  p {
    color: #444;
    max-width: 700px;
    margin: 0 auto 25px;
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const InvolvedTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  display: inline-block;
  background-color: #cd232e;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background-color: #b01c26;
    transform: translateY(-3px);
  }
`;

export default ElementsPage;