// client/src/pages/initiatives/GitaPage.jsx
import React from 'react';
import styled from 'styled-components';

const GitaPage = () => {
  return (
    <PageContainer>
      <HeroBanner>
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>Gita Initiative</HeroTitle>
            <HeroSubtitle>Promoting ancient wisdom for modern living</HeroSubtitle>
          </HeroContent>
        </HeroOverlay>
      </HeroBanner>

      <div className="container">
        <ContentSection>
          <SectionTitle>Our Gita Initiative</SectionTitle>
          <ContentText>
            <p>
              Named after the sacred Bhagavad Gita, our Gita initiative focuses on promoting and preserving ancient sacred texts and making their timeless wisdom accessible and applicable to modern life. These texts contain profound insights into ethics, psychology, spirituality, and human potential.
            </p>
            <p>
              Through study groups, translations, commentaries, and educational programs, we bridge the gap between ancient wisdom and contemporary challenges, helping people discover practical guidance for leading fulfilling, purposeful lives.
            </p>
          </ContentText>
          
          <KeyTextsSection>
            <KeyTextsTitle>Sacred Texts We Focus On</KeyTextsTitle>
            <TextsGrid>
              <TextCard>
                <TextImage src="https://web-assets.same.dev/1591743426/2260428846.png" alt="Bhagavad Gita" />
                <TextOverlay>
                  <TextName>Bhagavad Gita</TextName>
                  <TextDescription>
                    The divine song of Lord Krishna, offering guidance on duty, purpose, and spiritual life.
                  </TextDescription>
                </TextOverlay>
              </TextCard>
              <TextCard>
                <TextImage src="https://web-assets.same.dev/1675577225/3977124565.png" alt="Upanishads" />
                <TextOverlay>
                  <TextName>Upanishads</TextName>
                  <TextDescription>
                    Philosophical texts exploring the nature of reality, consciousness, and the self.
                  </TextDescription>
                </TextOverlay>
              </TextCard>
              <TextCard>
                <TextImage src="https://web-assets.same.dev/1645611323/2017019684.png" alt="Vedas" />
                <TextOverlay>
                  <TextName>Vedas</TextName>
                  <TextDescription>
                    Ancient texts containing hymns, philosophical dialogues, and ritual instructions.
                  </TextDescription>
                </TextOverlay>
              </TextCard>
              <TextCard>
                <TextImage src="https://web-assets.same.dev/1306262657/3509351711.png" alt="Puranas" />
                <TextOverlay>
                  <TextName>Puranas</TextName>
                  <TextDescription>
                    Ancient stories and myths that convey profound spiritual truths through narrative.
                  </TextDescription>
                </TextOverlay>
              </TextCard>
            </TextsGrid>
          </KeyTextsSection>
          
          <ProgramsSection>
            <ProgramsTitle>Our Programs</ProgramsTitle>
            <ProgramsList>
              <ProgramItem>
                <ProgramName>Gita Study Groups</ProgramName>
                <ProgramDescription>
                  Regular meetings to study and discuss the Bhagavad Gita, exploring its verses and their application to daily life.
                </ProgramDescription>
              </ProgramItem>
              <ProgramItem>
                <ProgramName>Text Translation Projects</ProgramName>
                <ProgramDescription>
                  Translating ancient texts into modern languages with accessible commentaries to make their wisdom widely available.
                </ProgramDescription>
              </ProgramItem>
              <ProgramItem>
                <ProgramName>Youth Education Programs</ProgramName>
                <ProgramDescription>
                  Teaching young people about their cultural heritage and the practical wisdom contained in ancient texts.
                </ProgramDescription>
              </ProgramItem>
              <ProgramItem>
                <ProgramName>Digital Archives</ProgramName>
                <ProgramDescription>
                  Creating digital repositories of sacred texts with translations, commentaries, and resources for study.
                </ProgramDescription>
              </ProgramItem>
            </ProgramsList>
          </ProgramsSection>
          
          <QuoteSection>
            <QuoteText>
              "When a person is devoted to something with complete faith, I unify his faith in that form. Then, when his faith is completely unified, he gains the object of his devotion."
            </QuoteText>
            <QuoteSource>— Bhagavad Gita, Chapter 7, Verse 21</QuoteSource>
          </QuoteSection>
          
          <GetInvolved>
            <InvolvedTitle>Explore Ancient Wisdom</InvolvedTitle>
            <p>Join us in discovering and applying the timeless wisdom of India's sacred texts to modern life.</p>
            <ActionButtons>
              <ActionButton to="/experience">Join a Study Group</ActionButton>
              <ActionButton to="/volunteer">Volunteer</ActionButton>
              <ActionButton to="/contact">Contact Us</ActionButton>
            </ActionButtons>
          </GetInvolved>
        </ContentSection>
      </div>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  padding-bottom: 60px;
`;

const HeroBanner = styled.div`
  height: 350px;
  background-image: url('https://web-assets.same.dev/1591743426/2260428846.png');
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

const ContentSection = styled.section`
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
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

const ContentText = styled.div`
  color: #444;
  line-height: 1.8;
  
  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
`;

const KeyTextsSection = styled.div`
  margin: 40px 0;
`;

const KeyTextsTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

const TextsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextCard = styled.div`
  position: relative;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const TextImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  padding: 20px;
  color: white;
`;

const TextName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const TextDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
`;

const ProgramsSection = styled.div`
  margin: 40px 0;
`;

const ProgramsTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

const ProgramsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProgramItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const ProgramName = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ProgramDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const QuoteSection = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 40px;
  margin: 40px 0;
  text-align: center;
  position: relative;
  
  &:before, &:after {
    content: '"';
    font-size: 60px;
    color: rgba(205, 35, 46, 0.2);
    position: absolute;
    font-family: serif;
  }
  
  &:before {
    top: 20px;
    left: 20px;
  }
  
  &:after {
    bottom: 0;
    right: 20px;
    transform: rotate(180deg);
  }
`;

const QuoteText = styled.p`
  font-size: 1.3rem;
  color: #333;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const QuoteSource = styled.p`
  color: #666;
  font-weight: 600;
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

export default GitaPage;