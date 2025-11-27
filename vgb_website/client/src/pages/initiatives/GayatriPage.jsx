// client/src/pages/initiatives/GayatriPage.jsx
import React from 'react';
import styled from 'styled-components';

const GayatriPage = () => {
  return (
    <PageContainer>
      <HeroBanner>
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>Gayatri Initiative</HeroTitle>
            <HeroSubtitle>Promoting mantras and practices for spiritual development</HeroSubtitle>
          </HeroContent>
        </HeroOverlay>
      </HeroBanner>

      <div className="container">
        <ContentSection>
          <SectionTitle>Our Gayatri Initiative</SectionTitle>
          <ContentText>
            <p>
              Named after the sacred Gayatri Mantra, our Gayatri initiative focuses on promoting mantras, meditation, and other spiritual practices for personal development and inner transformation. These ancient practices offer powerful tools for cultivating peace, clarity, and higher consciousness.
            </p>
            <p>
              Through workshops, retreats, and educational resources, we make these time-tested practices accessible to people from all backgrounds, helping them harness the transformative power of mantras in their daily lives.
            </p>
          </ContentText>
          
          <MantraSection>
            <MantraTitle>The Gayatri Mantra</MantraTitle>
            <MantraBox>
              <SanskritText>ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्</SanskritText>
              <MantraTranslation>
                "Om Bhur Bhuvah Swah, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat"
              </MantraTranslation>
              <MantraMeaning>
                "We meditate on the glory of the Creator; who has created the Universe; who is worthy of worship; who is the embodiment of Knowledge and Light; who is the remover of all sins and ignorance; may He enlighten our intellect."
              </MantraMeaning>
            </MantraBox>
          </MantraSection>
          
          <ProgramsSection>
            <ProgramsTitle>Our Programs</ProgramsTitle>
            <ProgramsGrid>
              <ProgramCard>
                <ProgramIcon>🧘</ProgramIcon>
                <ProgramName>Mantra Meditation Workshops</ProgramName>
                <ProgramDescription>
                  Learn the correct pronunciation, meaning, and meditation techniques for powerful mantras.
                </ProgramDescription>
              </ProgramCard>
              <ProgramCard>
                <ProgramIcon>📚</ProgramIcon>
                <ProgramName>Spiritual Texts Study</ProgramName>
                <ProgramDescription>
                  Guided study of the Upanishads, Bhagavad Gita, and other texts that explain the science of mantras.
                </ProgramDescription>
              </ProgramCard>
              <ProgramCard>
                <ProgramIcon>🌅</ProgramIcon>
                <ProgramName>Sunrise Sadhana</ProgramName>
                <ProgramDescription>
                  Early morning practice sessions combining mantras, pranayama, and meditation at sunrise.
                </ProgramDescription>
              </ProgramCard>
              <ProgramCard>
                <ProgramIcon>🎵</ProgramIcon>
                <ProgramName>Mantra Chanting Circles</ProgramName>
                <ProgramDescription>
                  Community gatherings for group chanting of mantras to create powerful positive vibrations.
                </ProgramDescription>
              </ProgramCard>
            </ProgramsGrid>
          </ProgramsSection>
          
          <BenefitsSection>
            <BenefitsTitle>Benefits of Mantra Practice</BenefitsTitle>
            <BenefitsList>
              <BenefitItem>
                <BenefitName>Mental Clarity</BenefitName>
                <BenefitDescription>Regular mantra meditation helps clear mental fog and enhances focus and concentration.</BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitName>Stress Reduction</BenefitName>
                <BenefitDescription>The rhythmic repetition of mantras activates the parasympathetic nervous system, reducing stress and anxiety.</BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitName>Spiritual Growth</BenefitName>
                <BenefitDescription>Mantras are tools for connecting with higher consciousness and deepening spiritual awareness.</BenefitDescription>
              </BenefitItem>
              <BenefitItem>
                <BenefitName>Improved Well-being</BenefitName>
                <BenefitDescription>Regular practice helps balance the body's energies and promotes overall health and vitality.</BenefitDescription>
              </BenefitItem>
            </BenefitsList>
          </BenefitsSection>
          
          <GetInvolved>
            <InvolvedTitle>Experience the Power of Mantras</InvolvedTitle>
            <p>Join us to explore the transformative potential of mantras and ancient spiritual practices.</p>
            <ActionButtons>
              <ActionButton to="/experience">Join a Workshop</ActionButton>
              <ActionButton to="/volunteer">Become a Volunteer</ActionButton>
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
  background-image: url('https://web-assets.same.dev/1306262657/3509351711.png');
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

const MantraSection = styled.div`
  margin: 40px 0;
`;

const MantraTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center;
`;

const MantraBox = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const SanskritText = styled.div`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const MantraTranslation = styled.div`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MantraMeaning = styled.div`
  color: #666;
  line-height: 1.8;
  font-size: 1rem;
`;

const ProgramsSection = styled.div`
  margin: 40px 0;
`;

const ProgramsTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProgramCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProgramIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  text-align: center;
`;

const ProgramName = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: center;
`;

const ProgramDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
`;

const BenefitsSection = styled.div`
  margin: 40px 0;
`;

const BenefitsTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  background-color: #fff;
  border-left: 3px solid #cd232e;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const BenefitName = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const BenefitDescription = styled.p`
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

export default GayatriPage;