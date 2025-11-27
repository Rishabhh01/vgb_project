// client/src/pages/initiatives/GangaPage.jsx
import React from 'react';
import styled from 'styled-components';

const GangaPage = () => {
  return (
    <PageContainer>
      <HeroBanner>
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>Ganga Initiative</HeroTitle>
            <HeroSubtitle>Preserving water bodies and promoting water conservation</HeroSubtitle>
          </HeroContent>
        </HeroOverlay>
      </HeroBanner>

      <div className="container">
        <ContentSection>
          <SectionTitle>Our Ganga Initiative</SectionTitle>
          <ContentText>
            <p>
              Named after India's most sacred river, our Ganga initiative is dedicated to preserving water bodies, promoting water conservation, and ensuring clean water access for all. Water is not just a resource but a divine element essential for all life on Earth.
            </p>
            <p>
              Through community-driven projects, education, and advocacy, we work to protect rivers, lakes, and groundwater while promoting sustainable water management practices based on ancient wisdom and modern science.
            </p>
          </ContentText>
          
          <KeyProjects>
            <ProjectsTitle>Current Projects</ProjectsTitle>
            <ProjectsGrid>
              <ProjectCard>
                <ProjectImage src="https://web-assets.same.dev/1645611323/2017019684.png" alt="River Cleanup" />
                <ProjectOverlay>
                  <ProjectName>River Cleanup Drives</ProjectName>
                  <ProjectDescription>
                    Regular cleaning campaigns along major rivers and water bodies to remove waste and improve water quality.
                  </ProjectDescription>
                </ProjectOverlay>
              </ProjectCard>
              <ProjectCard>
                <ProjectImage src="https://web-assets.same.dev/1306262657/3509351711.png" alt="Rainwater Harvesting" />
                <ProjectOverlay>
                  <ProjectName>Rainwater Harvesting</ProjectName>
                  <ProjectDescription>
                    Installing rainwater harvesting systems in communities facing water scarcity to collect and store rainwater.
                  </ProjectDescription>
                </ProjectOverlay>
              </ProjectCard>
              <ProjectCard>
                <ProjectImage src="https://web-assets.same.dev/1591743426/2260428846.png" alt="Water Conservation" />
                <ProjectOverlay>
                  <ProjectName>Water Conservation Education</ProjectName>
                  <ProjectDescription>
                    Educational programs for schools and communities on water conservation techniques and importance.
                  </ProjectDescription>
                </ProjectOverlay>
              </ProjectCard>
            </ProjectsGrid>
          </KeyProjects>
          
          <ImpactSection>
            <ImpactTitle>Our Impact</ImpactTitle>
            <ImpactStats>
              <ImpactStat>
                <ImpactValue>50+</ImpactValue>
                <ImpactLabel>Rivers & Lakes Protected</ImpactLabel>
              </ImpactStat>
              <ImpactStat>
                <ImpactValue>100+</ImpactValue>
                <ImpactLabel>Communities Supported</ImpactLabel>
              </ImpactStat>
              <ImpactStat>
                <ImpactValue>500+</ImpactValue>
                <ImpactLabel>Water Conservation Projects</ImpactLabel>
              </ImpactStat>
            </ImpactStats>
          </ImpactSection>
          
          <GetInvolved>
            <InvolvedTitle>Join Our Water Conservation Efforts</InvolvedTitle>
            <p>Be part of our mission to protect water bodies and ensure clean water access for all living beings.</p>
            <ActionButtons>
              <ActionButton to="/donate">Make a Donation</ActionButton>
              <ActionButton to="/volunteer">Volunteer</ActionButton>
              <ActionButton to="/contact">Partner With Us</ActionButton>
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
  background-image: url('https://web-assets.same.dev/1645611323/2017019684.png');
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

const KeyProjects = styled.div`
  margin: 40px 0;
`;

const ProjectsTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  padding: 20px;
  color: white;
`;

const ProjectName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
`;

const ImpactSection = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 40px;
`;

const ImpactTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 25px;
  text-align: center;
`;

const ImpactStats = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const ImpactStat = styled.div`
  text-align: center;
`;

const ImpactValue = styled.div`
  color: #cd232e;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

const ImpactLabel = styled.div`
  color: #444;
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

export default GangaPage;