// client/src/pages/about/SankalpPage.jsx
import React from 'react';
import styled from 'styled-components';
import { FaLeaf, FaGraduationCap, FaFlask } from 'react-icons/fa';

const SankalpPage = () => {
  return (
    <PageContainer>
      <HeaderSection>
        <HeaderContent>
          <HeaderTitle>Sankalp</HeaderTitle>
          <HeaderTagline>
            A resolute commitment to reawakening India's ancient wisdom and illuminating the path to a flourishing world.
          </HeaderTagline>
        </HeaderContent>
      </HeaderSection>

      <ContentWrapper>
        <MainHeading>
          Vishwa Guru Bharat: Rekindling the Light Within, Leading the World Forward
        </MainHeading>
        
        <SubHeading>
          Sankalp: A resolute commitment to reawakening India's ancient wisdom and illuminating the path to a flourishing world.
        </SubHeading>

        <IntroSection>
          <Paragraph>
            Driven by the timeless teachings of India, Vishwa Guru Bharat embarks on a global mission to rekindle the art of thinking for inner peace and societal unity. We believe that true transformation begins with a Sankalp—an unwavering promise to ourselves and future generations to create a brighter future.
          </Paragraph>
        </IntroSection>

        <SectionTitle>Empowering Individuals, Igniting Communities</SectionTitle>
        <Paragraph>
          We empower individuals and communities through a tapestry of transformative initiatives:
        </Paragraph>

        <InitiativesGrid>
          <InitiativeCard>
            <IconWrapper>
              <FaLeaf />
            </IconWrapper>
            <CardTitle>Sustainable Sankalp</CardTitle>
            <CardText>Championing environmentally conscious practices and supporting communities in building a thriving, green future.</CardText>
          </InitiativeCard>

          <InitiativeCard>
            <IconWrapper>
              <FaGraduationCap />
            </IconWrapper>
            <CardTitle>Holistic Education</CardTitle>
            <CardText>Nurturing responsible citizens and compassionate leaders through transformative education programs.</CardText>
          </InitiativeCard>

          <InitiativeCard>
            <IconWrapper>
              <FaMeditation />
            </IconWrapper>
            <CardTitle>Inner Sankalp</CardTitle>
            <CardText>Guiding individuals on a path of self-discovery through meditation, yoga, and practices that cultivate inner peace.</CardText>
          </InitiativeCard>

          <InitiativeCard>
            <IconWrapper>
              <FaFlask />
            </IconWrapper>
            <CardTitle>Ayurvedic Wisdom</CardTitle>
            <CardText>Harnessing the power of ancient Ayurveda to promote holistic health and unlock the true wealth within.</CardText>
          </InitiativeCard>
        </InitiativesGrid>

        <SectionTitle>Bridging the Ancient and the Modern</SectionTitle>
        <Paragraph>
          Vishwa Guru Bharat bridges the gap between ancient wisdom and modern solutions. We believe that India's timeless teachings hold immense relevance for the challenges we face today. By blending these time-tested principles with cutting-edge approaches, we pave the way for a more sustainable, equitable, and harmonious world.
        </Paragraph>

        <SectionTitle>Join the Sankalp Movement</SectionTitle>
        <Paragraph>
          We invite you to join us in our Sankalp movement. Together, we can create a world where:
        </Paragraph>

        <VisionList>
          <VisionItem>
            <VisionIcon>✨</VisionIcon>
            <VisionText>Individuals flourish, empowered by the wisdom within.</VisionText>
          </VisionItem>
          <VisionItem>
            <VisionIcon>🌱</VisionIcon>
            <VisionText>Communities thrive, united in sustainable prosperity.</VisionText>
          </VisionItem>
          <VisionItem>
            <VisionIcon>🌟</VisionIcon>
            <VisionText>India, a radiant Vishwa Guru, illuminates the path towards a brighter future for all.</VisionText>
          </VisionItem>
        </VisionList>

        <CallToAction>
          <SectionTitle>Take a Step Towards Your Own Sankalp</SectionTitle>
          <Paragraph>
            Ignite your inner spark through our Art of Thinking workshops. Discover the transformative power of holistic healing at our renowned Ayurvedic centers. Support our mission by volunteering your skills or donating to empower communities.
          </Paragraph>
        </CallToAction>

        <FinalNote>
          Every Sankalp, however small, adds light to the collective flame. Together, let us rise to the call of our Sankalp and create a world that is truly Vishwa Guru Bharat—a guiding light for humanity.
        </FinalNote>
        <FinalNote>
          Remember, the power of Sankalp lies within you. Start yours today!
        </FinalNote>
      </ContentWrapper>
    </PageContainer>
  );
};

export default SankalpPage;

/* ---------- Styled Components ---------- */

const PageContainer = styled.div`
  background-color: #f8f9fa;
  padding-bottom: 60px;
`;

const HeaderSection = styled.header`
  background: linear-gradient(135deg, #cd232e 0%, #8b0000 100%);
  padding: 60px 20px;
  text-align: center;
  color: white;
  margin-bottom: 40px;
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const HeaderTagline = styled.h3`
  font-size: 1.4rem;
  margin-top: 20px;
  font-weight: 400;
  line-height: 1.6;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const MainHeading = styled.h1`
  color: #cd232e;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

const SubHeading = styled.h2`
  color: #555;
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 40px;
  font-weight: 400;
  line-height: 1.4;
`;

const IntroSection = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const SectionTitle = styled.h3`
  color: #cd232e;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background: #cd232e;
    margin: 10px auto;
  }
`;

const Paragraph = styled.p`
  color: #444;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

const InitiativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 40px 0;
`;

const InitiativeCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #cd232e;
  margin-bottom: 20px;
`;

const CardTitle = styled.h4`
  color: #cd232e;
  font-size: 1.4rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

const CardText = styled.p`
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
`;

const VisionList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 40px auto;
`;

const VisionItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const VisionIcon = styled.span`
  font-size: 2rem;
  margin-right: 20px;
  color: #cd232e;
`;

const VisionText = styled.p`
  color: #444;
  font-size: 1.1rem;
  margin: 0;
`;

const CallToAction = styled.div`
  background: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
  margin: 40px 0;
  text-align: center;
`;

const FinalNote = styled.p`
  color: #2d2d2d;
  font-weight: 600;
  text-align: center;
  margin-top: 40px;
  font-size: 1.3rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;
