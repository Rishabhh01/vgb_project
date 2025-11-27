// client/src/pages/AboutPage.jsx
import React from 'react';
import styled from 'styled-components';
import VGBBanner from '../../components/VGBBanner';

const AboutPage = () => {
  return (
    <PageContainer>
      <VGBBanner 
        title="About Vishwa Guru Bharat" 
        subtitle="Bharatiya Vedic Sanatan Sanskriti Trust"
        backgroundImage="https://web-assets.same.dev/1306262657/3509351711.png"
      />
      
      <div className="container">
        <ContentSection>
          <LogoContainer>
            <img src="https://web-assets.same.dev/335287695/52350043.png" alt="Vishwa Guru Bharat Logo" />
          </LogoContainer>
          
          <Quote>
            "A guru is someone who has the power to see greatness even in the lowest man and has the power to raise it"
          </Quote>
          
          <AboutText>
            <p>
              Since the beginning of civilization India has been the <strong>Guru</strong> for the whole world. 
              <em> When the whole world was groping in darkness, India was teaching about the identity of man with the Supreme.</em> 
              People from all around the world converged to India to gain from its priceless wisdom. Indeed, the country that 
              showed the whole world its academic brilliance through <strong>Sushrutha, Kanad, and Aryabhatta</strong> deserves 
              to gain the same pedestal of being <strong>Vishwa Guru Bharat</strong> again.
            </p>
            
            <p>
              Now, that the world has openly adopted <strong>Namaskar</strong> as a way of greeting, Indian values have a treasure 
              trove of beliefs that can change the entire world for betterment. <strong>From Ayurveda to Indian science, there's 
              more to India that the world needs to know, learn, and adopt.</strong>
            </p>
            
            <p>
              Bharat can become <strong>"Vishwa Guru"</strong> also because of its message of great love and great compassion for all. 
              We believe in <strong>Vasudhaiva Kutumbakam</strong>, the world is one family. And now, is time that the entire world 
              also imbibes the spirit.
            </p>
            
            <p>
              Our trust has been founded by <strong>Shri C.S Thakur</strong> with the resolution to make India <strong>Vishwa Guru Bharat</strong> again. 
              To make India <strong>Vishwa Guru</strong> on the basis of vedic sanatana sanskriti by promoting vedic sanatana sanskriti also known as 
              <strong> Sanatana dharma</strong> or <strong>Hindu dharma</strong> or <strong>Vedic dharma</strong>.
            </p>
          </AboutText>
        </ContentSection>
        
        <MissionSection>
          <SectionTitle>Our Core Initiatives</SectionTitle>
          
          <p>
            Our trust is working to save <strong>5 Elements: Air, Ether(Space), Earth, Water and Fire</strong> by finding solution 
            to issues like <strong>pollution (Air, Water), soil low fertility, deforestation, etc.</strong> We also focus on our <strong>5G</strong> initiative.
          </p>
          
          <CardGrid>
            <Card>
              <CardTitle>Gau</CardTitle>
              <CardContent>To save all animals and promote compassionate treatment of all living beings.</CardContent>
            </Card>
            <Card>
              <CardTitle>Ganga</CardTitle>
              <CardContent>To save water sources and create water resources to eliminate water crisis.</CardContent>
            </Card>
            <Card>
              <CardTitle>Gayatri</CardTitle>
              <CardContent>To promote Mantras for self development and spiritual growth.</CardContent>
            </Card>
            <Card>
              <CardTitle>Gita</CardTitle>
              <CardContent>To promote and respect our Granths/Puranas which taught us living way in society.</CardContent>
            </Card>
            <Card>
              <CardTitle>Guru</CardTitle>
              <CardContent>From ancient times, Gurus are equal to the Gods who share knowledge equally.</CardContent>
            </Card>
          </CardGrid>
        </MissionSection>
        
        <HistorySection>
          <SectionTitle>Our History</SectionTitle>
          
          <p>
            On 27th October 1992 at Jammu, <strong>Shri C.S Thakur</strong> S/O Sh. Girdhari Lal R/O Paddar, Distt. Kishtwar, J&K, 
            thought about this idea and why Bharat is not the Ram Rajya? Why Bharat is not the Vishwa Guru? 
            So <strong>Shri C.S Thakur</strong> shared his Vision & Mission with various NGOs and Trusts, Sadhu's, Saints, 
            Rishi-muni, Scholar, Researcher, Social Activist, Political Analytics, Journalists, and many others and then started 
            the trust named - <em>Vishwa Guru Bharat Vedic Sanatana Sanskriti Trust</em>.
          </p>
          
          <FoundersList>
            <FounderItem>
              <FounderRole>Founder</FounderRole>
              <FounderName>Shri C.S Thakur</FounderName>
            </FounderItem>
            <FounderItem>
              <FounderRole>Founder & President</FounderRole>
              <FounderName>Smt. Rupali Sharma Dutta</FounderName>
            </FounderItem>
            <FounderItem>
              <FounderRole>Trustee</FounderRole>
              <FounderName>Dr. Anil Kumar Padha</FounderName>
            </FounderItem>
            <FounderItem>
              <FounderRole>General Secretary ORG</FounderRole>
              <FounderName>Shri Nishant Kondal</FounderName>
            </FounderItem>
          </FoundersList>
          
          <p>
            We are leading a total of <strong>108 departments (5G, 5 Elements, Art Culture & Research, Skill, Environment, Health, 
            Business, Education and many more)</strong> with pratinidhis, volunteers and people who want to see India as 
            <strong> "Vishwa Guru Bharat"</strong>.
          </p>
        </HistorySection>
        
        <DepartmentsSection>
          <SectionTitle>Our Departments</SectionTitle>
          
          <p>
            Vishwa Guru Bharat operates across various fields through 108 departments, focused on the holistic development of 
            individuals and society according to Vedic principles:
          </p>
          
          <DepartmentGrid>
            <DepartmentItem>Agriculture</DepartmentItem>
            <DepartmentItem>Art & Culture</DepartmentItem>
            <DepartmentItem>Education</DepartmentItem>
            <DepartmentItem>Environment & Forest</DepartmentItem>
            <DepartmentItem>Health & Family Welfare</DepartmentItem>
            <DepartmentItem>Yoga & Meditation</DepartmentItem>
            <DepartmentItem>Science & Technology</DepartmentItem>
            <DepartmentItem>Social Development</DepartmentItem>
            <DepartmentItem>Rural & Urban Development</DepartmentItem>
            <DepartmentItem>Information & Broadcasting</DepartmentItem>
            <DepartmentItem>Defence</DepartmentItem>
            <DepartmentItem>Law & Justice</DepartmentItem>
          </DepartmentGrid>
        </DepartmentsSection>
        
        <GetInvolvedSection>
          <SectionTitle>Get Involved</SectionTitle>
          <p>
            Collaborate, share, and influence for World Peace. Be the change you wish to see in the world.
            Join us in our mission to reestablish India as Vishwa Guru Bharat.
          </p>
          <p>
            <strong>Email:</strong> info@vishwagurubharat.org
          </p>
          <p>
            <strong>Phone:</strong> +91-9103544414
          </p>
        </GetInvolvedSection>
      </div>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  padding-bottom: 60px;
  background-color: #f8f9fa;
`;

const ContentSection = styled.section`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  max-width: 180px;
  margin: 0 auto 30px;
  
  img {
    width: 100%;
  }
`;

const Quote = styled.blockquote`
  font-style: italic;
  font-size: 1.2rem;
  color: #666;
  border-left: 3px solid #cd232e;
  padding-left: 20px;
  margin: 0 0 30px;
`;

const AboutText = styled.div`
  line-height: 1.8;
  color: #444;
  
  p {
    margin-bottom: 20px;
  }
  
  strong {
    color: #333;
  }
`;

const MissionSection = styled.section`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  p {
    margin-bottom: 30px;
    line-height: 1.8;
    color: #444;
  }
`;

const SectionTitle = styled.h2`
  color: #cd232e;
  font-size: 1.8rem;
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #cd232e;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  color: #cd232e;
  font-size: 1.3rem;
  margin-bottom: 15px;
`;

const CardContent = styled.p`
  color: #666;
  line-height: 1.6;
`;

const HistorySection = styled.section`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: #444;
  }
`;

const FoundersList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const FounderItem = styled.div`
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  border-left: 3px solid #cd232e;
`;

const FounderRole = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
`;

const FounderName = styled.div`
  font-weight: 600;
  color: #333;
`;

const DepartmentsSection = styled.section`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  p {
    margin-bottom: 30px;
    line-height: 1.8;
    color: #444;
    text-align: center;
  }
`;

const DepartmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

const DepartmentItem = styled.div`
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
  color: #333;
  transition: all 0.3s;
  
  &:hover {
    background-color: #cd232e;
    color: white;
  }
`;

const GetInvolvedSection = styled.section`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: #444;
  }
`;

export default AboutPage;