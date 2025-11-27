import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaArrowRight, FaHandHoldingHeart, FaOm, FaBookReader, FaTree, FaChevronDown } from 'react-icons/fa';
import CounterSection from '../components/CounterSection';
import TestimonialSlider from '../components/TestimonialSlider';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('gau');
  const [isVisible, setIsVisible] = useState({});
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

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

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  const initiatives = {
    gau: {
      title: "Gau (Animal Protection)",
      icon: "🐄",
      description: "Our Gau initiative focuses on saving all animals, particularly cows which are sacred in Vedic culture. We work on preventing animal cruelty, promoting ethical treatment, and creating shelters for abandoned animals.",
      stats: [
        { value: "50+", label: "Animal Shelters" },
        { value: "5000+", label: "Animals Rescued" },
        { value: "25+", label: "Conservation Projects" },
      ],
      image: "https://web-assets.same.dev/1675577225/3977124565.png"
    },
    ganga: {
      title: "Ganga (Water Conservation)",
      icon: "🌊",
      description: "The Ganga initiative aims to save water sources, create water resources, and eliminate water crisis. We organize river cleanup drives, install rainwater harvesting systems, and educate communities about water conservation.",
      stats: [
        { value: "100+", label: "Water Bodies Revived" },
        { value: "150+", label: "Villages Supported" },
        { value: "1000+", label: "Rainwater Systems" },
      ],
      image: "https://web-assets.same.dev/1645611323/2017019684.png"
    },
    gayatri: {
      title: "Gayatri (Self Development)",
      icon: <FaOm />,
      description: "Gayatri initiative promotes mantras for self-development, spiritual growth, and mental well-being. We organize meditation camps, spiritual retreats, and classes on ancient mantras for modern problems.",
      stats: [
        { value: "10000+", label: "Meditation Participants" },
        { value: "200+", label: "Spiritual Retreats" },
        { value: "50+", label: "Spiritual Centers" },
      ],
      image: "https://web-assets.same.dev/1306262657/3509351711.png"
    },
    gita: {
      title: "Gita (Ancient Wisdom)",
      icon: "📖",
      description: "Our Gita initiative promotes ancient texts like the Bhagavad Gita, Vedas, and Puranas that teach us how to live harmoniously in society. We organize discourses, publish translations, and create modern applications of ancient wisdom.",
      stats: [
        { value: "500+", label: "Knowledge Sessions" },
        { value: "25+", label: "Publications" },
        { value: "100K+", label: "Online Followers" },
      ],
      image: "https://web-assets.same.dev/1591743426/2260428846.png"
    },
    guru: {
      title: "Guru (Knowledge Sharing)",
      icon: "🧎🏽",
      description: "The Guru initiative honors the tradition of knowledge sharing. We connect spiritual leaders, scholars, and practitioners to share their wisdom with the world, maintaining the ancient guru-shishya tradition in a modern context.",
      stats: [
        { value: "100+", label: "Spiritual Leaders" },
        { value: "300+", label: "Educational Workshops" },
        { value: "50K+", label: "Beneficiaries" },
      ],
      image: "https://web-assets.same.dev/2691685965/1462887440.png"
    },
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Rajeev Sharma",
      role: "Environmental Activist",
      image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
      quote: "The 5 Elements program by Vishwa Guru Bharat has transformed how our community approaches environmental conservation. Their methodologies are deeply rooted in ancient wisdom yet perfectly applicable to modern challenges."
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Yoga Instructor",
      image: "https://xsgames.co/randomusers/assets/avatars/female/2.jpg",
      quote: "As a yoga practitioner for 15 years, I've found that VGB's Gayatri initiative brings a refreshing authenticity to spiritual practices. Their meditation techniques have deepened my practice tremendously."
    },
    {
      id: 3,
      name: "Dr. Amit Verma",
      role: "Professor of Vedic Studies",
      image: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
      quote: "The way Vishwa Guru Bharat has integrated ancient Vedic knowledge with contemporary educational methods is remarkable. Their Gita initiative makes timeless wisdom accessible to the younger generation."
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <VideoBackground>
          {!isVideoPlaying && (
            <VideoOverlay onClick={playVideo}>
              <PlayButton>
                <i className="fas fa-play"></i>
              </PlayButton>
            </VideoOverlay>
          )}
          <video 
            ref={videoRef} 
            poster="https://web-assets.same.dev/1591743426/2260428846.png"
            muted
            loop
            playsInline
          >
            <source src="#" type="video/mp4" />
          </video>
        </VideoBackground>
        <HeroContent>
          <HeroTitle>
            Vishwa Guru Bharat
            <HeroSubtitle>Bharatiya Vedic Sanatan Sanskriti Trust</HeroSubtitle>
          </HeroTitle>
          <HeroText>
            Reviving India's ancient wisdom to guide humanity towards peace, prosperity, and spiritual awakening
          </HeroText>
          <HeroButtons>
            <PrimaryButton to="/about">Discover Our Mission</PrimaryButton>
            <SecondaryButton to="/donate">Support Our Cause</SecondaryButton>
          </HeroButtons>
        </HeroContent>
        <ScrollDown href="#intro-section">
          <FaChevronDown />
        </ScrollDown>
      </HeroSection>
      
      <MainContent>
        <div className="container">
          <IntroSection className="animate-section" id="intro-section" visible={isVisible['intro-section']}>
            <IntroContent>
              <IntroHeading>Reviving India's Position as <HighlightText>Vishwa Guru</HighlightText></IntroHeading>
              <IntroDescription>
                When the world was groping in darkness, India was teaching about the identity of man with the Supreme. 
                Vishwa Guru Bharat is on a mission to reestablish India as the global center of spiritual wisdom, 
                sustainable practices, and holistic development.
              </IntroDescription>
              
              <InfographicContainer>
                <InfographicItem>
                  <InfographicIcon><FaHandHoldingHeart /></InfographicIcon>
                  <InfographicNumber>108</InfographicNumber>
                  <InfographicLabel>Departments</InfographicLabel>
                </InfographicItem>
                <InfographicItem>
                  <InfographicIcon><FaOm /></InfographicIcon>
                  <InfographicNumber>1000+</InfographicNumber>
                  <InfographicLabel>Volunteers</InfographicLabel>
                </InfographicItem>
                <InfographicItem>
                  <InfographicIcon><FaTree /></InfographicIcon>
                  <InfographicNumber>500+</InfographicNumber>
                  <InfographicLabel>Projects</InfographicLabel>
                </InfographicItem>
              </InfographicContainer>
            </IntroContent>
            <IntroImage>
              <img src="https://web-assets.same.dev/335287695/52350043.png" alt="Vishwa Guru Bharat" />
            </IntroImage>
          </IntroSection>
        </div>
        
        <CounterSection />
        
        <div className="container">
          <CirclesBackground>
            <MissionSection className="animate-section" id="mission-section" visible={isVisible['mission-section']}>
              <SectionTitle>Our Mission & Vision</SectionTitle>
              <MissionVisionCards>
                <MissionCard>
                  <MissionCardOverlay>
                    <CardTitle>Our Mission</CardTitle>
                    <CardContent>
                      Vishwa Guru Bharat is driven by the ancient wisdom of India, embarking on a global mission 
                      to awaken the art of thinking for inner peace and societal unity. We empower individuals 
                      and communities through sustainable development initiatives and holistic education.
                    </CardContent>
                  </MissionCardOverlay>
                </MissionCard>
                
                <VisionCard>
                  <VisionCardOverlay>
                    <CardTitle>Our Vision</CardTitle>
                    <CardContent>
                      We envision a world where India reclaims its position as Vishwa Guru - the world teacher. 
                      Where Vedic principles of harmony, sustainability, and spiritual growth guide humanity 
                      towards a more peaceful, balanced existence in accordance with nature and universal consciousness.
                    </CardContent>
                  </VisionCardOverlay>
                </VisionCard>
              </MissionVisionCards>
            </MissionSection>
          </CirclesBackground>

          <ValuePropositionSection className="animate-section" id="values-section" visible={isVisible['values-section']}>
            <SectionTitle>Our Core Values</SectionTitle>
            <ValueGrid>
              <ValueCard>
                <ValueIcon>🕉️</ValueIcon>
                <ValueTitle>Spiritual Growth</ValueTitle>
                <ValueText>
                  Fostering personal and collective spiritual development through ancient wisdom and practices
                </ValueText>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>🌿</ValueIcon>
                <ValueTitle>Environmental Harmony</ValueTitle>
                <ValueText>
                  Promoting sustainable living and respect for nature's elements
                </ValueText>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>🤝</ValueIcon>
                <ValueTitle>Community Service</ValueTitle>
                <ValueText>
                  Building stronger communities through selfless service and shared values
                </ValueText>
              </ValueCard>
            </ValueGrid>
          </ValuePropositionSection>
          
          <InitiativesSection className="animate-section" id="initiatives-section" visible={isVisible['initiatives-section']}>
            <SectionTitle>Our 5G Initiative</SectionTitle>
            <InitiativesDescription>
              The 5G initiative represents the five pillars of our work, focusing on preserving and reviving ancient wisdom 
              and practices that benefit all of humanity and our planet.
            </InitiativesDescription>
            
            <InitiativesTabs>
              {Object.keys(initiatives).map(key => (
                <InitiativeTab 
                  key={key}
                  active={activeTab === key}
                  onClick={() => setActiveTab(key)}
                >
                  <TabIcon>{initiatives[key].icon}</TabIcon>
                  <TabLabel>{key.charAt(0).toUpperCase() + key.slice(1)}</TabLabel>
                </InitiativeTab>
              ))}
            </InitiativesTabs>
            
            <InitiativeContent>
              <InitiativeDetails>
                <InitiativeTitle>{initiatives[activeTab].title}</InitiativeTitle>
                <InitiativeDescription>{initiatives[activeTab].description}</InitiativeDescription>
                <InitiativeStats>
                  {initiatives[activeTab].stats.map((stat, index) => (
                    <StatItem key={index}>
                      <StatValue>{stat.value}</StatValue>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatItem>
                  ))}
                </InitiativeStats>
                <LearnMoreLink to={`/${activeTab}`}>
                  Learn more about {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} <FaArrowRight />
                </LearnMoreLink>
              </InitiativeDetails>
              <InitiativeImage src={initiatives[activeTab].image} alt={initiatives[activeTab].title} />
            </InitiativeContent>
          </InitiativesSection>
          
          {/* Updated "Preserving The 5 Elements" Section */}
          <ElementsSection className="animate-section" id="elements-section" visible={isVisible['elements-section']}>
            <SectionTitle>Preserving The 5 Elements</SectionTitle>
            <ElementsDescription>
              Our trust is working to protect and restore the balance of the five natural elements that sustain all life.
            </ElementsDescription>
            
            <ElementsInfographic>
              <ElementCenterCircle>
                <ElementCenterIcon>🌍</ElementCenterIcon>
                <ElementCenterText>पंचतत्व</ElementCenterText>
              </ElementCenterCircle>
              
              <ElementsGrid>
                <ElementCard>
                  <ElementIcon style={{backgroundColor: '#AED9E0'}}>💨</ElementIcon>
                  <ElementName>वायु (Air)</ElementName>
                  <ElementDesc>Combating air pollution through tree plantation, awareness campaigns, and sustainable practices</ElementDesc>
                </ElementCard>
                
                <ElementCard>
                  <ElementIcon style={{backgroundColor: '#B8B8D1'}}>✨</ElementIcon>
                  <ElementName>आकाश (Space)</ElementName>
                  <ElementDesc>Reducing noise pollution and electromagnetic contamination to preserve mental peace</ElementDesc>
                </ElementCard>
                
                <ElementCard>
                  <ElementIcon style={{backgroundColor: '#DDB892'}}>🌍</ElementIcon>
                  <ElementName>पृथ्वी (Earth)</ElementName>
                  <ElementDesc>Fighting soil degradation, promoting organic farming, and preventing deforestation</ElementDesc>
                </ElementCard>
                
                <ElementCard>
                  <ElementIcon style={{backgroundColor: '#5EADF0'}}>💧</ElementIcon>
                  <ElementName>जल (Water)</ElementName>
                  <ElementDesc>Preserving water bodies, promoting rainwater harvesting, and preventing water pollution</ElementDesc>
                </ElementCard>
                
                <ElementCard>
                  <ElementIcon style={{backgroundColor: '#F5CAC3'}}>🔥</ElementIcon>
                  <ElementName>अग्नि (Fire)</ElementName>
                  <ElementDesc>Promoting sustainable energy, reducing fossil fuel dependency, and harnessing solar power</ElementDesc>
                </ElementCard>
              </ElementsGrid>
            </ElementsInfographic>
          </ElementsSection>
          
          <TestimonialSection>
            <SectionTitle>What People Say About Us</SectionTitle>
            <TestimonialSlider testimonials={testimonials} />
          </TestimonialSection>
          
          <NewsEventsSection className="animate-section" id="news-section" visible={isVisible['news-section']}>
            <SectionTitle>Latest News & Events</SectionTitle>
            
            <NewsGrid>
              <NewsCard>
                <NewsImage src="https://web-assets.same.dev/1675577225/3977124565.png" alt="News 1" />
                <NewsDate>March 10, 2025</NewsDate>
                <NewsTitle>International Yoga Conference Announced</NewsTitle>
                <NewsExcerpt>
                  Vishwa Guru Bharat is organizing an International Yoga Conference to promote the ancient practice of yoga...
                </NewsExcerpt>
                <NewsLink href="#">Read More</NewsLink>
              </NewsCard>
              
              <NewsCard>
                <NewsImage src="https://web-assets.same.dev/1645611323/2017019684.png" alt="News 2" />
                <NewsDate>March 5, 2025</NewsDate>
                <NewsTitle>Ganga Clean-up Drive Reaches Milestone</NewsTitle>
                <NewsExcerpt>
                  The Ganga initiative reached a significant milestone with the successful completion of its 100th river cleanup drive...
                </NewsExcerpt>
                <NewsLink href="#">Read More</NewsLink>
              </NewsCard>
              
              <NewsCard>
                <NewsImage src="https://web-assets.same.dev/1306262657/3509351711.png" alt="News 3" />
                <NewsDate>February 28, 2025</NewsDate>
                <NewsTitle>New Spiritual Center Opens in Delhi</NewsTitle>
                <NewsExcerpt>
                  Vishwa Guru Bharat inaugurated a new Spiritual Center in Delhi, offering meditation classes and spiritual guidance...
                </NewsExcerpt>
                <NewsLink href="#">Read More</NewsLink>
              </NewsCard>
            </NewsGrid>
          </NewsEventsSection>
          
          <CTASection className="animate-section" id="cta-section" visible={isVisible['cta-section']}>
            <CTAContainer>
              <CTAContent>
                <CTATitle>Join Our Mission Today</CTATitle>
                <CTADescription>
                  Be part of the movement to reestablish India as Vishwa Guru. Together, we can create a more 
                  harmonious, sustainable world guided by timeless wisdom.
                </CTADescription>
                <CTAButtons>
                <PrimaryCTAButton to="/donate">Make a Donation</PrimaryCTAButton>
                <SecondaryCTAButton to="/register">Become a Pratinidhi</SecondaryCTAButton>
              </CTAButtons>
              </CTAContent>
              <CTAImage src="https://web-assets.same.dev/2691685965/1462887440.png" alt="Join Vishwa Guru Bharat" />
            </CTAContainer>
          </CTASection>
        </div>
      </MainContent>
    </HomeContainer>
  );
};

//
// Animations
//
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

//
// Styled Components
//
const HomeContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
`;

const PlayButton = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgba(205, 35, 46, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  transition: all 0.3s;
  animation: ${pulse} 2s infinite;
  
  &:hover {
    background-color: rgba(205, 35, 46, 1);
    transform: scale(1.1);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  max-width: 900px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 5px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.div`
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 20px;
  color: #f1f1f1;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.3rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  background-color: #cd232e;
  color: white;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background-color: #b01c26;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: white;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  border: 2px solid white;
  transition: all 0.3s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

const ScrollDown = styled.a`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 30px;
  animation: ${bounce} 2s infinite;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 1;
  }
`;

const IntroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0;
  gap: 40px;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 30px;
  }
`;

const IntroContent = styled.div`
  flex: 1;
`;

const IntroHeading = styled.h2`
  font-size: 2.6rem;
  color: #2b2928;
  margin-bottom: 20px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HighlightText = styled.span`
  color: #cd232e;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 10px;
    background-color: rgba(205, 35, 46, 0.2);
    bottom: 5px;
    left: 0;
    z-index: -1;
  }
`;

const IntroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 30px;
`;

const IntroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
  img {
    max-width: 100%;
    max-height: 300px;
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const InfographicContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfographicItem = styled.div`
  text-align: center;
  padding: 25px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 1;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
    margin-bottom: 20px;
  }
`;

const InfographicIcon = styled.div`
  font-size: 2.5rem;
  color: #cd232e;
  margin-bottom: 15px;
`;

const InfographicNumber = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  color: #2b2928;
  margin-bottom: 5px;
`;

const InfographicLabel = styled.div`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`;

const CirclesBackground = styled.div`
  position: relative;
  width: 100%;
  padding: 40px 0;
  background-color: #fff;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  color: #cd232e;
  font-size: 2.3rem;
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #cd232e;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const MissionSection = styled.section`
  margin: 40px 0 80px;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

// Mission and Vision Cards
const MissionVisionCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MissionCard = styled.div`
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  background-image: url('https://web-assets.same.dev/1675577225/3977124565.png');
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 200px;
  }
`;

const VisionCard = styled.div`
  height: 350px;
  border-radius: 15px;
  overflow: hidden;
  background-image: url('https://web-assets.same.dev/1306262657/3509351711.png');
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  @media (max-width: 768px) {
    height: auto;
    min-height: 200px;
  }
`;

const MissionCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    position: relative;
    background: linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.85) 100%);
    padding: 20px;
    height: auto;
  }
`;

const VisionCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    position: relative;
    background: linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.85) 100%);
    padding: 20px;
    height: auto;
  }
`;

const CardTitle = styled.h3`
  color: white;
  font-size: 2rem;
  margin-bottom: 15px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

const CardContent = styled.p`
  color: white;
  line-height: 1.6;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    text-shadow: none;
  }
`;

const InitiativesSection = styled.section`
  margin: 80px 0;
  background-color: white;
  border-radius: 15px;
  padding: 50px 40px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.visible ? 1 : 0};
  transform: scale(${props => props.visible ? 1 : 0.95});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const InitiativesDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;
  color: #555;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const InitiativesTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 30px 0;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const InitiativeTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 25px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${props => props.active ? '#f8f9fa' : 'transparent'};
  border-bottom: 3px solid ${props => props.active ? '#cd232e' : 'transparent'};
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const TabIcon = styled.div`
  font-size: 2.2rem;
  color: #cd232e;
  margin-bottom: 10px;
`;

const TabLabel = styled.div`
  font-weight: 600;
  color: #333;
`;

const InitiativeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 40px;
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    padding: 30px 20px;
  }
`;

const InitiativeDetails = styled.div`
  flex: 1;
`;

const InitiativeTitle = styled.h3`
  font-size: 2rem;
  color: #2b2928;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const InitiativeDescription = styled.p`
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1rem;
`;

const InitiativeStats = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StatItem = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border-left: 3px solid #cd232e;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex: 1;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #cd232e;
margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 0.95rem;
  color: #666;
  font-weight: 500;
`;

const LearnMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #cd232e;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  gap: 10px;
  transition: all 0.3s;
  
  &:hover {
    gap: 15px;
  }
`;

const InitiativeImage = styled.img`
  flex: 1;
  max-width: 450px;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-in-out;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

// Updated styled components for the "Preserving The 5 Elements" section

const ElementsSection = styled.section`
  margin: 80px 0;
  background: linear-gradient(135deg, #ffffff, #f9f9f9);
  border-radius: 20px;
  padding: 60px 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const ElementsDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  color: #555;
  line-height: 1.8;
  font-size: 1.1rem;
  font-style: italic;
`;

const ElementsInfographic = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const ElementCenterCircle = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  background-color: #cd232e;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 50px;
  z-index: 2;
  box-shadow: 0 10px 20px rgba(205, 35, 46, 0.3);
  animation: ${pulse} 3s infinite;

  &:before {
    content: '';
    position: absolute;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 2px dashed rgba(205, 35, 46, 0.3);
    z-index: 1;
  }
`;

const ElementCenterIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 5px;
`;

const ElementCenterText = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const ElementsGrid = styled.div`
  display: grid;
  gap: 30px;
  width: 100%;
  
  /* Desktop view: 2-3 split layout */
  @media (min-width: 993px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto auto;
    
    /* First row: 2 items centered */
    & > *:nth-child(1) {
      grid-column: 2 / span 2;
    }
    & > *:nth-child(2) {
      grid-column: 4 / span 2;
    }
    
    /* Second row: 3 items */
    & > *:nth-child(3) {
      grid-column: 1 / span 2;
    }
    & > *:nth-child(4) {
      grid-column: 3 / span 2;
    }
    & > *:nth-child(5) {
      grid-column: 5 / span 2;
    }
  }
  
  /* Tablet view */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    
    & > *:last-child {
      grid-column: 1 / -1;
    }
  }
  
  /* Mobile view */
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    
    & > * {
      grid-column: 1;
    }
  }
`;

const ElementCard = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 30px 25px;
  text-align: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 3;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  }
`;

const ElementIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 2rem;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  ${ElementCard}:hover & {
    transform: scale(1.05);
  }
`;

const ElementName = styled.h3`
  color: #2b2928;
  font-size: 1.4rem;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ElementDesc = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const TestimonialSection = styled.section`
  margin: 80px 0;
  padding: 20px 0;
`;

const NewsEventsSection = styled.section`
  margin: 80px 0;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const NewsDate = styled.div`
  font-size: 0.9rem;
  color: #cd232e;
  margin: 20px 20px 10px;
  font-weight: 500;
`;

const NewsTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0 20px 15px;
  color: #2b2928;
  line-height: 1.4;
`;

const NewsExcerpt = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0 20px 20px;
  line-height: 1.6;
`;

const NewsLink = styled.a`
  display: inline-block;
  color: #cd232e;
  font-weight: 600;
  margin: 0 20px 20px;
  text-decoration: none;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #cd232e;
    transition: width 0.3s;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const CTASection = styled.section`
  margin: 80px 0 20px;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const CTAContainer = styled.div`
  background: linear-gradient(135deg, #cd232e 0%, #b01c26 100%);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const CTAContent = styled.div`
  flex: 1;
  padding: 60px 40px;
  color: white;
  
  @media (max-width: 992px) {
    padding: 40px 20px;
  }
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 30px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrimaryCTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #cd232e;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background-color: #f1f1f1;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

const SecondaryCTAButton = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: white;
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  border: 2px solid white;
  transition: all 0.3s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

const CTAImage = styled.img`
  width: 40%;
  object-fit: cover;
  object-position: center;
  
  @media (max-width: 992px) {
    width: 100%;
    height: 300px;
  }
`;

// Add these styled components with your other styled components

const ValuePropositionSection = styled.section`
  margin: 80px 0;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  @media (max-width: 768px) {
    margin: 60px 0;
  }
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ValueCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const ValueTitle = styled.h3`
  font-size: 1.3rem;
  color: #2b2928;
  margin-bottom: 15px;
`;

const ValueText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const PageContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: relative;
`;

const MainContent = styled.main`
  width: 100%;
  position: relative;
  background-color: #fff;
`;

export default HomePage;
