// client/src/pages/initiatives/GauPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaOm, FaBookReader, FaTree, FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

const GauPage = () => {
  const [activeTab, setActiveTab] = useState('gau');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.id;
        if (sectionTop < window.innerHeight * 0.75) {
          setIsVisible(prev => ({ ...prev, [sectionId]: true }));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initiatives data remains unchanged
  const gauInitiatives = {
    'gau-raksha': {
      title: 'Gau Raksha',
      description: [
        'Protection and conservation of indigenous cow breeds through legal advocacy and community awareness programs.',
        'Prevention of cruelty and illegal trafficking by working with law enforcement and local communities.',
        'Establishment of emergency rescue networks across rural and urban areas.',
        'Documentation and preservation of native breeds through genetic mapping.'
      ],
      stats: [
        { value: "120+", label: "Rescues This Year" },
        { value: "15", label: "Legal Cases Filed" },
        { value: "32", label: "Villages Protected" }
      ]
    },
    'gau-paalan': {
      title: 'Gau Paalan',
      description: [
        'Comprehensive care programs in gaushalas including veterinary services and nutritional planning.',
        'Training programs for caretakers on modern yet traditional cow rearing techniques.',
        'Community adoption programs connecting donors with specific cows for sponsorship.',
        'Research initiatives on indigenous feeding practices and their health benefits.'
      ],
      stats: [
        { value: "45", label: "Gaushalas Supported" },
        { value: "2,500+", label: "Cows Cared For" },
        { value: "180", label: "Trained Caretakers" }
      ]
    },
    'gau-samvardhan': {
      title: 'Gau Samvardhan',
      description: [
        'Genetic preservation programs maintaining purity of indigenous breeds like Gir, Sahiwal, and Red Sindhi.',
        'Scientific breeding programs combining traditional knowledge with modern veterinary science.',
        'Documentation of lineage and characteristics of native breeds across India.',
        'Community awareness programs about the economic and ecological benefits of native breeds.'
      ],
      stats: [
        { value: "12", label: "Native Breeds Preserved" },
        { value: "8", label: "Research Papers Published" },
        { value: "75", label: "Participating Villages" }
      ]
    },
    'gau-aushadhi': {
      title: 'Gau Aushadhi',
      description: [
        'Research on Panchgavya (five cow products) and their medicinal applications.',
        'Collaboration with Ayurvedic practitioners to validate traditional remedies.',
        'Production of organic medicines, cosmetics, and agricultural inputs from cow products.',
        'Education programs about the scientific basis of cow-based medicines.'
      ],
      stats: [
        { value: "28", label: "Medicinal Products" },
        { value: "15", label: "Ayurvedic Partnerships" },
        { value: "3", label: "Research Grants" }
      ]
    }
  };

  // New: Ongoing Projects data for Gau Initiative
  const gauProjects = [
    {
      name: 'Dhriti Gau Shala',
      location: 'Yellahanka, Bangalore',
      startDate: '06 April 2025',
      projectCost: '₹1,00,000/Month',
      projectRevenue: '₹55,000/Month',
      donationNeeded: '₹95,000/Month',
      gauVanshCount: 79
    },
    {
      name: 'Gau Suraksha Kendra',
      location: 'Nagpur, Maharashtra',
      startDate: '12 June 2025',
      projectCost: '₹80,000/Month',
      projectRevenue: '₹40,000/Month',
      donationNeeded: '₹40,000/Month',
      gauVanshCount: 54
    },
    // You can add more projects here...
  ];

  return (
    <PageContainer>
      <HeroBanner>
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>Gau Initiative</HeroTitle>
            <HeroSubtitle>Protecting and honoring animals in the Vedic tradition</HeroSubtitle>
          </HeroContent>
        </HeroOverlay>
      </HeroBanner>

      <div className="container">
        <ContentSection>
          <SectionTitle>Our Gau Initiative</SectionTitle>
          <ContentText>
            <p>
              In Vedic tradition, the cow (Gau) is considered sacred and symbolizes life's sustaining force. Our Gau initiative is dedicated to the protection and care of cows and all animals, promoting compassionate treatment, sustainable practices, and raising awareness about the importance of animal welfare.
            </p>
            <p>
              Through education, advocacy, and direct action, we work to create a world where all living beings are treated with respect and dignity, in accordance with ancient Vedic principles.
            </p>
          </ContentText>

          <InitiativesSection className="animate-section" id="initiatives-section" $visible={isVisible['initiatives-section']}>
            <InitiativesList>
              {Object.entries(gauInitiatives).map(([key, initiative]) => (
                <InitiativeItem 
                  key={key}
                  $active={activeTab === key}
                  onClick={() => setActiveTab(activeTab === key ? null : key)}
                >
                  <InitiativeHeader>
                    <InitiativeName>{initiative.title}</InitiativeName>
                    <FaChevronDown className={`chevron ${activeTab === key ? 'active' : ''}`} />
                  </InitiativeHeader>
                  {activeTab === key && (
                    <InitiativeContent>
                      <InitiativeDescription>
                        {initiative.description.map((para, index) => (
                          <p key={index}>{para}</p>
                        ))}
                      </InitiativeDescription>
                      <InitiativeStats>
                        {initiative.stats.map((stat, index) => (
                          <StatItem key={index}>
                            <StatValue>{stat.value}</StatValue>
                            <StatLabel>{stat.label}</StatLabel>
                          </StatItem>
                        ))}
                      </InitiativeStats>
                    </InitiativeContent>
                  )}
                </InitiativeItem>
              ))}
            </InitiativesList>
          </InitiativesSection>

          {/* New Ongoing Projects Section */}
          <ProjectsSection className="animate-section" id="ongoing-projects-section" $visible={isVisible['ongoing-projects-section']}>
            <ProjectsSectionTitle>Ongoing Projects</ProjectsSectionTitle>
            <ProjectsGrid>
              {gauProjects.map((project, index) => (
                <ProjectCard key={index}>
                  <ProjectTitle>{project.name}</ProjectTitle>
                  <ProjectLocation>{project.location}</ProjectLocation>
                  <ProjectStartDate>Start Date: {project.startDate}</ProjectStartDate>
                  <ProjectInfo>
                    <p><strong>Expected Cost:</strong> {project.projectCost}</p>
                    <p><strong>Revenue:</strong> {project.projectRevenue}</p>
                    <p><strong>Donation Needed:</strong> {project.donationNeeded}</p>
                    <p><strong>No. of Gau Vansh:</strong> {project.gauVanshCount}</p>
                  </ProjectInfo>
                  <ExploreButton href="/donate">Explore &amp; Donate</ExploreButton>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </ProjectsSection>

          <KeyAreas>
            <AreaTitle>Key Focus Areas</AreaTitle>
            <AreaGrid>
              <AreaItem>
                <AreaIcon>🐄</AreaIcon>
                <AreaName>Cow Protection</AreaName>
                <AreaDescription>Supporting gaushalas (cow shelters) and promoting the ethical treatment of cows throughout India.</AreaDescription>
              </AreaItem>
              <AreaItem>
                <AreaIcon>🌱</AreaIcon>
                <AreaName>Sustainable Farming</AreaName>
                <AreaDescription>Promoting traditional farming methods that honor the sacred relationship between humans, animals, and the land.</AreaDescription>
              </AreaItem>
              <AreaItem>
                <AreaIcon>📚</AreaIcon>
                <AreaName>Education</AreaName>
                <AreaDescription>Raising awareness about the importance of animal welfare and the cultural significance of cows in Indian tradition.</AreaDescription>
              </AreaItem>
              <AreaItem>
                <AreaIcon>🧪</AreaIcon>
                <AreaName>Cow-Based Products</AreaName>
                <AreaDescription>Promoting sustainable, cruelty-free products derived from cows, including organic fertilizers and traditional remedies.</AreaDescription>
              </AreaItem>
            </AreaGrid>
          </KeyAreas>
          
          <GetInvolved>
            <InvolvedTitle>How You Can Help</InvolvedTitle>
            <p>
              Join us in our mission to protect and honor animals, particularly cows, which hold a special place in India's cultural and spiritual heritage.
            </p>
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

export default GauPage;

/* ---------- Styled Components ---------- */

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

/* New Ongoing Projects Section */
const ProjectsSection = styled.section.attrs(({ $visible }) => ({
  style: {
    opacity: $visible ? 1 : 0,
    transform: `translateY(${$visible ? '0' : '20px'})`
  }
}))`
  margin-top: 50px;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const ProjectsSectionTitle = styled.h3`
  font-size: 1.8rem;
  color: #cd232e;
  margin-bottom: 20px;
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
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  padding: 20px;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.12);
  }
`;

const ProjectTitle = styled.h4`
  font-size: 1.2rem;
  color: #2b2928;
  margin-bottom: 5px;
`;

const ProjectLocation = styled.p`
  font-size: 0.95rem;
  color: #777;
  margin-bottom: 10px;
`;

const ProjectStartDate = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 20px;
`;

const ProjectInfo = styled.div`
  margin-bottom: 20px;
  
  p {
    font-size: 0.9rem;
    color: #444;
    line-height: 1.6;
    margin-bottom: 5px;
  }
`;

const ExploreButton = styled.a`
  display: inline-block;
  background-color: #cd232e;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #b01c26;
  }
`;

/* Key Areas Section */
const KeyAreas = styled.div`
  margin: 40px 0;
`;

const AreaTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 25px;
`;

const AreaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AreaItem = styled.div`
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

const AreaIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const AreaName = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const AreaDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
`;

/* Get Involved Section */
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

/* Initiatives Section Styles */
const InitiativesSection = styled.section.attrs(({ $visible }) => ({
  style: {
    opacity: $visible ? 1 : 0,
    transform: `translateY(${$visible ? '0' : '20px'})`
  }
}))`
  margin: 60px 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const InitiativesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
`;

const InitiativeItem = styled.div.attrs(props => ({
  $active: props.$active
}))`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  border-left: 4px solid ${props => props.$active ? '#cd232e' : 'transparent'};
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const InitiativeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  .chevron {
    transition: transform 0.3s;
    color: #666;
    
    &.active {
      transform: rotate(180deg);
      color: #cd232e;
    }
  }
`;

const InitiativeName = styled.h4`
  font-size: 1.2rem;
  color: #2b2928;
  margin: 0;
`;

const InitiativeContent = styled.div`
  padding: 0 20px 20px 20px;
  border-top: 1px solid #eee;
`;

const InitiativeDescription = styled.div`
  p {
    color: #555;
    line-height: 1.7;
    margin-bottom: 15px;
    
    &:last-child {
      margin-bottom: 25px;
    }
  }
`;

const InitiativeStats = styled.div`
  display: flex;
  gap: 15px;
  margin: 25px 0;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StatItem = styled.div`
  flex: 1;
  min-width: 120px;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid #cd232e;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #cd232e;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

