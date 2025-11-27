// client/src/pages/initiatives/GuruPage.jsx
import React from 'react';
import styled from 'styled-components';

const GuruPage = () => {
  return (
    <PageContainer>
      <HeroBanner>
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>Guru Initiative</HeroTitle>
            <HeroSubtitle>Honoring the tradition of knowledge transmission</HeroSubtitle>
          </HeroContent>
        </HeroOverlay>
      </HeroBanner>

      <div className="container">
        <ContentSection>
          <SectionTitle>Our Guru Initiative</SectionTitle>
          <ContentText>
            <p>
              The Guru initiative honors the ancient tradition of knowledge transmission from teacher to student (Guru-Shishya Parampara). In the Vedic tradition, the Guru is not just a teacher but a guide who helps remove ignorance and leads the student toward spiritual enlightenment.
            </p>
            <p>
              Through this initiative, we connect authentic spiritual teachers with sincere seekers, preserve traditional teaching methodologies, and create platforms where the wisdom of enlightened masters can be shared with the world.
            </p>
          </ContentText>
          
          <GuruPrinciplesSection>
            <PrinciplesTitle>The Guru-Shishya Tradition</PrinciplesTitle>
            <PrinciplesGrid>
              <PrincipleCard>
                <PrincipleIcon>🔥</PrincipleIcon>
                <PrincipleName>Knowledge Transfer</PrincipleName>
                <PrincipleDescription>
                  The direct transmission of knowledge from teacher to student, often through oral tradition and personal guidance.
                </PrincipleDescription>
              </PrincipleCard>
              <PrincipleCard>
                <PrincipleIcon>🧠</PrincipleIcon>
                <PrincipleName>Spiritual Awakening</PrincipleName>
                <PrincipleDescription>
                  Beyond information, the Guru helps awaken the student's inner wisdom and spiritual potential.
                </PrincipleDescription>
              </PrincipleCard>
              <PrincipleCard>
                <PrincipleIcon>🙏</PrincipleIcon>
                <PrincipleName>Reverence</PrincipleName>
                <PrincipleDescription>
                  The tradition emphasizes respect and gratitude for the teacher who shares knowledge selflessly.
                </PrincipleDescription>
              </PrincipleCard>
              <PrincipleCard>
                <PrincipleIcon>⚖️</PrincipleIcon>
                <PrincipleName>Discipline</PrincipleName>
                <PrincipleDescription>
                  Students cultivate discipline, dedication, and receptivity to receive the fullness of the teaching.
                </PrincipleDescription>
              </PrincipleCard>
            </PrinciplesGrid>
          </GuruPrinciplesSection>
          
          <ProgramsSection>
            <ProgramsTitle>Our Programs</ProgramsTitle>
            <ProgramsList>
              <ProgramItem>
                <ProgramName>Guru-Shishya Connect</ProgramName>
                <ProgramDescription>
                  Connecting sincere seekers with authentic teachers in various spiritual traditions and disciplines.
                </ProgramDescription>
              </ProgramItem>
              <ProgramItem>
                <ProgramName>Wisdom Archive</ProgramName>
                <ProgramDescription>
                  Recording and preserving the teachings of revered spiritual masters for future generations.
                </ProgramDescription>
              </ProgramItem>
              <ProgramItem>
                <ProgramName>Teacher Training</ProgramName>
                <ProgramDescription>
                  Preparing qualified individuals to become effective teachers in their respective traditions.
                </ProgramDescription>
              </ProgramItem>
              <ProgramItem>
                <ProgramName>Spiritual Discourses</ProgramName>
                <ProgramDescription>
                  Organizing public talks by respected spiritual teachers on various aspects of wisdom traditions.
                </ProgramDescription>
              </ProgramItem>
            </ProgramsList>
          </ProgramsSection>
          
          <QuoteSection>
            <QuoteText>
              "Just as a candle cannot burn without fire, men cannot live without a spiritual life. The Guru is the flame that ignites this spiritual fire within."
            </QuoteText>
            <QuoteSource>— Ancient Vedic Wisdom</QuoteSource>
          </QuoteSection>
          
          <GuruStoriesSection>
            <StoriesTitle>Guru Stories</StoriesTitle>
            <StoriesText>
              Throughout India's history, countless stories illustrate the profound relationship between Guru and disciple. From Krishna and Arjuna to Ramakrishna and Vivekananda, these relationships have not only transformed individuals but have also shaped the course of spiritual and cultural history.
            </StoriesText>
            <StoriesCard>
              <StoriesCardTitle>The Story of Ekalavya</StoriesCardTitle>
              <StoriesCardText>
                Ekalavya, unable to receive direct instruction from the master archer Dronacharya, created a clay statue of the teacher and practiced with such dedication that he became one of the greatest archers of his time. His story illustrates that the essence of the Guru lies not just in physical presence but in the disciple's devotion and receptivity to the teaching.
              </StoriesCardText>
            </StoriesCard>
          </GuruStoriesSection>
          
          <GetInvolved>
            <InvolvedTitle>Connect with the Tradition</InvolvedTitle>
            <p>Experience the transformative power of the Guru-Shishya tradition and help preserve this ancient system of knowledge transmission.</p>
            <ActionButtons>
              <ActionButton to="/experience">Attend a Discourse</ActionButton>
              <ActionButton to="/volunteer">Support Our Work</ActionButton>
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
  background-image: url('https://web-assets.same.dev/2691685965/1462887440.png');
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

const GuruPrinciplesSection = styled.div`
  margin: 40px 0;
`;

const PrinciplesTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PrincipleCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const PrincipleIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
`;

const PrincipleName = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const PrincipleDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
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

const GuruStoriesSection = styled.div`
  margin: 40px 0;
`;

const StoriesTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const StoriesText = styled.p`
  color: #444;
  line-height: 1.8;
  margin-bottom: 25px;
  font-size: 1.1rem;
`;

const StoriesCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border-left: 3px solid #cd232e;
`;

const StoriesCardTitle = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 15px;
`;

const StoriesCardText = styled.p`
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
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

export default GuruPage;