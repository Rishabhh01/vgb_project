import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaEnvelope, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Data
const leadershipData = [
  {
    id: 1,
    name: "Shri C.S Thakur",
    position: "Founder",
    image: "https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/357764439_591007253161119_749019385525702839_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AGaRdtPl5PoQ7kNvgFF9Xo6&_nc_oc=AdmkpVGuCBz7b9AWA72NvsCP79Y4dHpls6iGgdjaM56n6aRyAjo4iRZVz3gOcvocuhY&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=0QNTZ9khKMpw_CQ9pFxXLg&oh=00_AYHILzySxPqPd1kQ8MUtolrvtNKyb_w9fddVRO470fep2g&oe=67E2E0D0",
    bio: "With over 30 years of experience in Vedic studies and spiritual practice, Shri C.S Thakur has dedicated his life to preserving and promoting India's ancient wisdom. He holds a Ph.D. in Sanskrit and has authored numerous books on Vedic philosophy.",
    quote: "Our work is not just about preserving tradition, but about making ancient wisdom relevant to solve today's most pressing challenges.",
    social: {
      linkedin: "https://linkedin.com",
      email: "rajendra@vishwagurubharat.org"
    }
  },
  {
    id: 2,
    name: "Smt. Rupali Dutta",
    position: "Founder and President",
    image: "https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/482062142_970873021844672_5897488387761409284_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EoevHa5OsbYQ7kNvgFWxHXd&_nc_oc=Admx78YdzT8thiw1eYeFdPXxXPLkUcT-PrDyehTeynHWIGSuD47rzKCNjymD54N7rjw&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=Wvad51fkEJpA1PP1nx9M3w&oh=00_AYF3dScn8NBOAz2ZhIu78Nvo3YSWwcMIAdlxeid7DQZssw&oe=67E2DB8F",
    bio: "Smt. Rupali Dutta combines her background in environmental science with deep knowledge of Vedic environmental principles. She leads our sustainability initiatives and has been instrumental in developing our 5 Elements conservation program.",
    quote: "Ancient India understood the delicate balance of nature millennia before modern environmentalism. We must revive this wisdom for our planet's future.",
    social: {
      linkedin: "https://linkedin.com",
      email: "ananya@vishwagurubharat.org"
    }
  }
];

const teamData = [
  {
    id: 1,
    name: "Shri Sarvdaman Sharma",
    position: "Trustee",
    image: "https://vishwagurubharat.org/img/ShriSarvdaman.jpg",
    social: {
      linkedin: "https://linkedin.com",
      email: "arjun@vishwagurubharat.org"
    }
  },
  {
    id: 2,
    name: "Shri Dr. Anil Kumar Padha",
    position: "Trustee",
    image: "https://vishwagurubharat.org/img/anil2.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      email: "priya@vishwagurubharat.org"
    }
  },
  {
    id: 3,
    name: "Shri Rajat Vashisht",
    position: "General Secretary Org",
    image: "https://vishwagurubharat.org/img/shriRajatji.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "vikram@vishwagurubharat.org"
    }
  },
  {
    id: 4,
    name: "Padma Shri Dr. Vishwamurthy Shastri",
    position: "Patron",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "meera@vishwagurubharat.org"
    }
  },
  {
    id: 5,
    name: "Shri Acharya Agnivrat Jee",
    position: "Director General",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "lakshmi@vishwagurubharat.org"
    }
  },
  {
    id: 6,
    name: "Shri Hitesh Chandel",
    position: "Secretary General",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "lakshmi@vishwagurubharat.org"
    }
  },
  {
    id: 7,
    name: "Shri Vishal Kapahi",
    position: "Director General Jammu & Kashmir",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "lakshmi@vishwagurubharat.org"
    }
  },
  {
    id: 8,
    name: "Shri Dhamecha Arvind Retilal",
    position: "National Vice President",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "lakshmi@vishwagurubharat.org"
    }
  },
  {
    id: 9,
    name: "Shri S.K. Muraleei",
    position: "National Secretary",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "lakshmi@vishwagurubharat.org"
    }
  },
  {
    id: 10,
    name: "Smt Rita Kalra",
    position: "Director Women Empowerment",
    image: "https://vishwagurubharat.org/img/shriritakalra.jpg",
    social: {
      linkedin: "https://linkedin.com",
      email: "lakshmi@vishwagurubharat.org"
    }
  },
  {
    id: 11,
    name: "Shri Parmar ketanbhai Valjibhai",
    position: "Gujarat State President",
    image: "https://vishwagurubharat.org/img/ShriParmar.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "lakshmi@vishwagurubharat.org"
    }
  },
  {
    id: 12,
    name: "Smt Dr. Shefali Sharma",
    position: "Director of Women Education",
    image: "https://vishwagurubharat.org/img/smtshefalisharma.jpg",
    social: {
      linkedin: "https://linkedin.com",
      email: "lakshmi@vishwagurubharat.org"
    }
  },
  {
    id: 13,
    name: "Divyansh Rohatgi",
    position: "Full Stack Developer",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "divyansh@vishwagurubharat.org"
    }
  },
  {
    id: 14,
    name: "Parth Jain",
    position: "Full Stack Developer",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "parth@vishwagurubharat.org"
    }
  },
  {
    id: 15,
    name: "Michael Brown",
    position: "Backend Engineer",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "michael@vishwagurubharat.org"
    }
  }
];

const developersData = [
  {
    id: 1,
    name: "Divyansh Rohatgi",
    position: "Full Stack Developer",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "divyansh@vishwagurubharat.org"
    }
  },
  {
    id: 2,
    name: "Parth Jain",
    position: "Full Stack Developer",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "parth@vishwagurubharat.org"
    }
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Backend Engineer",
    image: "https://web-assets.same.dev/335287695/52350043.png",
    social: {
      linkedin: "https://linkedin.com",
      email: "michael@vishwagurubharat.org"
    }
  }
];

const TeamPage = () => {
  return (
    <PageContainer>
      {/* Page Header */}
      <PageHeader>
        <HeaderOverlay>
          <Container>
            <HeaderContent>
              <PageTitle>Our Team</PageTitle>
              <PageSubtitle>Meet the dedicated individuals behind Vishwa Guru Bharat</PageSubtitle>
            </HeaderContent>
          </Container>
        </HeaderOverlay>
      </PageHeader>

      {/* Leadership Section */}
      <SectionContainer>
        <Container>
          <SectionTitle>Leadership</SectionTitle>
          <SectionDescription>
            Our organization is guided by visionaries who are committed to reestablishing
            India's position as Vishwa Guru through dedication to Vedic principles and practices.
          </SectionDescription>

          <LeadershipGrid>
            {leadershipData.map((leader) => (
              <LeaderCard key={leader.id}>
                <LeaderImageWrapper>
                  <LeaderImage src={leader.image} alt={leader.name} />
                </LeaderImageWrapper>
                <LeaderInfo>
                  <LeaderName>{leader.name}</LeaderName>
                  <LeaderPosition>{leader.position}</LeaderPosition>
                  <LeaderBio>{leader.bio}</LeaderBio>
                  <SocialLinks>
                    <SocialLink href={leader.social.linkedin} target="_blank" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </SocialLink>
                    <SocialLink href={`mailto:${leader.social.email}`} aria-label="Email">
                      <FaEnvelope />
                    </SocialLink>
                  </SocialLinks>
                  <LeaderQuote>
                    <QuoteIconLeft><FaQuoteLeft /></QuoteIconLeft>
                    {leader.quote}
                    <QuoteIconRight><FaQuoteRight /></QuoteIconRight>
                  </LeaderQuote>
                </LeaderInfo>
              </LeaderCard>
            ))}
          </LeadershipGrid>
        </Container>
      </SectionContainer>

      {/* Core Team Section */}
      <SectionContainer lightBg>
        <Container>
          <SectionTitle>Core Team</SectionTitle>
          <SectionDescription>
            Our diverse and talented team brings expertise from various fields to advance
            our mission of promoting Vedic wisdom and practices.
          </SectionDescription>

          <TeamGrid>
            {teamData.map((member) => (
              <TeamMember key={member.id}>
                <TeamMemberImage src={member.image} alt={member.name} />
                <TeamMemberInfo>
                  <TeamMemberName>{member.name}</TeamMemberName>
                  <TeamMemberPosition>{member.position}</TeamMemberPosition>
                  <TeamMemberSocial>
                    <TeamSocialLink href={member.social.linkedin} target="_blank" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </TeamSocialLink>
                    <TeamSocialLink href={`mailto:${member.social.email}`} aria-label="Email">
                      <FaEnvelope />
                    </TeamSocialLink>
                  </TeamMemberSocial>
                </TeamMemberInfo>
              </TeamMember>
            ))}
          </TeamGrid>

          {/* Developers Section */}
          <DevelopersSection>
            <DevelopersTitle>Meet the Developers</DevelopersTitle>
            <DevelopersDescription>
              The talented team behind our digital presence, working to bring our mission to the world.
            </DevelopersDescription>
            <DevelopersGrid>
              {developersData.map((developer) => (
                <DeveloperCard key={developer.id}>
                  <DeveloperImage src={developer.image} alt={developer.name} />
                  <DeveloperName>{developer.name}</DeveloperName>
                  <DeveloperPosition>{developer.position}</DeveloperPosition>
                  <DeveloperSocial>
                    <DeveloperSocialLink href={developer.social.linkedin} target="_blank" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </DeveloperSocialLink>
                    <DeveloperSocialLink href={`mailto:${developer.social.email}`} aria-label="Email">
                      <FaEnvelope />
                    </DeveloperSocialLink>
                  </DeveloperSocial>
                </DeveloperCard>
              ))}
            </DevelopersGrid>
          </DevelopersSection>
        </Container>
      </SectionContainer>

      {/* Join Us Section */}
      <JoinSection>
        <Container>
          <JoinContent>
            <JoinTitle>Join Our Team</JoinTitle>
            <JoinDescription>
              We're always looking for passionate individuals who share our vision of reviving India's ancient
              wisdom and practices. If you're dedicated to making a difference, we'd love to hear from you.
            </JoinDescription>
            <JoinButton href="mailto:careers@vishwagurubharat.org">
              Contact Us About Opportunities
            </JoinButton>
          </JoinContent>
        </Container>
      </JoinSection>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageHeader = styled.div`
  background-image: url('https://web-assets.same.dev/1306262657/3509351711.png');
  background-size: cover;
  background-position: center;
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SectionContainer = styled.section`
  padding: 100px 0;
  background-color: ${props => props.lightBg ? '#f8f9fa' : 'white'};
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: #2b2928;
  position: relative;
  font-weight: 700;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: #cd232e;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 40px auto 60px;
  color: #555;
  line-height: 1.8;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 30px auto 40px;
  }
`;

// Leadership Section Styles
const LeadershipGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  max-width: 1000px;
  margin: 0 auto;
`;

const LeaderCard = styled.div`
  display: flex;
  gap: 40px;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid #cd232e;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeaderImageWrapper = styled.div`
  flex: 0 0 400px;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    flex: 0 0 auto;
  }
`;

const LeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${LeaderCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 992px) {
    height: 400px;
  }

  @media (max-width: 576px) {
    height: 300px;
  }
`;

const LeaderInfo = styled.div`
  padding: 40px;
  flex: 1;

  @media (max-width: 576px) {
    padding: 25px;
  }
`;

const LeaderName = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #2b2928;
  font-weight: 700;
`;

const LeaderPosition = styled.p`
  font-size: 1.2rem;
  color: #cd232e;
  margin-bottom: 25px;
  font-weight: 600;
`;

const LeaderBio = styled.p`
  color: #555;
  line-height: 1.8;
  margin-bottom: 25px;
  font-size: 1.1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-size: 1.1rem;

  &:hover {
    background-color: #cd232e;
    color: white;
    transform: translateY(-3px);
  }
`;

const LeaderQuote = styled.blockquote`
  font-style: italic;
  color: #666;
  border-left: 4px solid #cd232e;
  padding-left: 20px;
  margin-left: 0;
  position: relative;
  font-size: 1.2rem;
  line-height: 1.7;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 0 10px 10px 0;
`;

const QuoteIconLeft = styled.span`
  color: rgba(205, 35, 46, 0.2);
  font-size: 2rem;
  position: absolute;
  left: -10px;
  top: -10px;
`;

const QuoteIconRight = styled.span`
  color: rgba(205, 35, 46, 0.2);
  font-size: 2rem;
  margin-left: 5px;
`;

// Core Team Section Styles
const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TeamMember = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  border: 2px solid #cd232e;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${TeamMember}:hover & {
    transform: scale(1.05);
  }
`;

const TeamMemberInfo = styled.div`
  padding: 25px;
  text-align: center;
`;

const TeamMemberName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 8px;
  color: #2b2928;
  font-weight: 600;
`;

const TeamMemberPosition = styled.p`
  color: #cd232e;
  margin-bottom: 20px;
  font-size: 1.1rem;
  font-weight: 500;
`;

const TeamMemberSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;

const TeamSocialLink = styled.a`
  width: 35px;
  height: 35px;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-size: 1rem;

  &:hover {
    background-color: #cd232e;
    color: white;
    transform: translateY(-3px);
  }
`;

// Join Us Section Styles
const JoinSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://web-assets.same.dev/1675577225/3977124565.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 100px 0;
  color: white;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const JoinContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const JoinTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 25px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const JoinDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 40px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const JoinButton = styled.a`
  display: inline-block;
  background-color: #cd232e;
  color: white;
  padding: 15px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s;
  border: 2px solid #cd232e;

  &:hover {
    background-color: transparent;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

// New styled components for developers section
const DevelopersSection = styled.div`
  background-color: #f8f9fa;
  padding: 40px 0;
  margin-top: 40px;
  border-top: 1px solid #eee;
`;

const DevelopersTitle = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #2b2928;
  font-weight: 600;
`;

const DevelopersDescription = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 30px;
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const DevelopersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const DeveloperCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DeveloperImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 15px;
  border: 3px solid #cd232e;
`;

const DeveloperName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #2b2928;
`;

const DeveloperPosition = styled.p`
  color: #cd232e;
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const DeveloperSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const DeveloperSocialLink = styled.a`
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  color: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-size: 0.9rem;

  &:hover {
    background-color: #cd232e;
    color: white;
    transform: translateY(-2px);
  }
`;

export default TeamPage;
