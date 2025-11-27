// client/src/pages/CommunityPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaUsers, FaHandsHelping, FaCalendarAlt, FaComments, FaMapMarkerAlt } from 'react-icons/fa';

const CommunityPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('chapters');

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
  
  // Sample chapter data
  const chapters = [
    {
      name: "Delhi Chapter",
      members: 450,
      location: "New Delhi, India",
      meetingDay: "Saturdays",
      image: "https://web-assets.same.dev/1675577225/3977124565.png",
      description: "Our Delhi chapter focuses on Vedic philosophy and its applications in modern life, with regular discussions on the Bhagavad Gita and yoga practices."
    },
    {
      name: "Mumbai Chapter",
      members: 380,
      location: "Mumbai, Maharashtra",
      meetingDay: "Sundays",
      image: "https://web-assets.same.dev/1645611323/2017019684.png",
      description: "The Mumbai chapter emphasizes Ayurvedic wellness and meditation, with special focus on urban applications of ancient health principles."
    },
    {
      name: "Bangalore Chapter",
      members: 320,
      location: "Bangalore, Karnataka",
      meetingDay: "Wednesdays",
      image: "https://web-assets.same.dev/1306262657/3509351711.png",
      description: "Our Bangalore chapter combines technology with spirituality, exploring how ancient wisdom can enhance innovation and modern living."
    },
    {
      name: "Chennai Chapter",
      members: 280,
      location: "Chennai, Tamil Nadu",
      meetingDay: "Fridays",
      image: "https://web-assets.same.dev/1591743426/2260428846.png",
      description: "The Chennai chapter specializes in classical arts and spirituality, preserving traditional music, dance, and their connection to spiritual practice."
    }
  ];
  
  // Sample events data
  const events = [
    {
      title: "Global Meditation Day",
      date: "April 20, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Multiple Locations & Online",
      image: "https://web-assets.same.dev/1675577225/3977124565.png",
      description: "Join thousands worldwide for a synchronized meditation session promoting global peace and harmony."
    },
    {
      title: "Vedic Heritage Festival",
      date: "May 15-17, 2025",
      time: "9:00 AM - 9:00 PM",
      location: "Pragati Maidan, New Delhi",
      image: "https://web-assets.same.dev/1306262657/3509351711.png",
      description: "A three-day celebration of India's Vedic heritage featuring performances, workshops, exhibits, and traditional food."
    },
    {
      title: "Youth Leadership Summit",
      date: "June 5-6, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Taj Convention Centre, Mumbai",
      image: "https://web-assets.same.dev/1645611323/2017019684.png",
      description: "Empowering young leaders with ancient wisdom and modern skills for creating positive change in the world."
    }
  ];
  
  // Sample forums data
  const forums = [
    {
      title: "Vedic Philosophy Discussion",
      members: 1200,
      posts: 3500,
      lastActivity: "2 hours ago",
      description: "Discuss the philosophical aspects of Vedic texts and their relevance in modern life."
    },
    {
      title: "Meditation & Yoga Practices",
      members: 1850,
      posts: 5200,
      lastActivity: "45 minutes ago",
      description: "Share experiences, techniques, and questions related to meditation and yoga practices."
    },
    {
      title: "Ayurvedic Wellness",
      members: 950,
      posts: 2800,
      lastActivity: "5 hours ago",
      description: "Exchange knowledge about Ayurvedic principles, recipes, and natural remedies."
    },
    {
      title: "Environmental Stewardship",
      members: 780,
      posts: 1900,
      lastActivity: "1 day ago",
      description: "Discuss environmental issues and sustainable solutions based on Vedic principles."
    }
  ];
  
  // Sample volunteers data
  const volunteerOpportunities = [
    {
      title: "Meditation Guide",
      commitment: "4-6 hours/week",
      location: "Various Chapters",
      skills: ["Meditation experience", "Communication skills", "Patience"],
      description: "Lead guided meditation sessions for community members and newcomers."
    },
    {
      title: "Environmental Project Coordinator",
      commitment: "8-10 hours/week",
      location: "Regional Offices",
      skills: ["Project management", "Environmental knowledge", "Leadership"],
      description: "Coordinate local environmental initiatives based on the 5 Elements principles."
    },
    {
      title: "Content Creator",
      commitment: "Flexible",
      location: "Remote",
      skills: ["Writing", "Research", "Social media knowledge"],
      description: "Create educational content about Vedic philosophy, practices, and their modern applications."
    },
    {
      title: "Community Outreach Volunteer",
      commitment: "6-8 hours/week",
      location: "Various Locations",
      skills: ["Communication", "Organization", "People skills"],
      description: "Represent Vishwa Guru Bharat at community events and engage with potential members."
    }
  ];

  return (
    <PageContainer>
      <HeroBanner>
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>Our Community</HeroTitle>
            <HeroSubtitle>Connect, learn, and grow with like-minded individuals around the world</HeroSubtitle>
          </HeroContent>
        </HeroOverlay>
      </HeroBanner>

      <div className="container">
        <IntroSection className="animate-section" id="intro-section" visible={isVisible['intro-section']}>
          <SectionTitle>Join Our Global Family</SectionTitle>
          <IntroText>
            The Vishwa Guru Bharat community brings together individuals from all walks of life who share a common interest in India's ancient wisdom and its applications in modern life. Through local chapters, events, online forums, and volunteer opportunities, we create spaces for learning, connection, and positive action.
          </IntroText>
          
          <CommunityStats>
            <StatItem>
              <StatValue>45+</StatValue>
              <StatLabel>Local Chapters</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>10,000+</StatValue>
              <StatLabel>Community Members</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>25+</StatValue>
              <StatLabel>Countries</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>300+</StatValue>
              <StatLabel>Annual Events</StatLabel>
            </StatItem>
          </CommunityStats>
        </IntroSection>
        
        <TabsContainer>
          <TabItem 
            active={activeTab === 'chapters'}
            onClick={() => setActiveTab('chapters')}
          >
            <TabIcon><FaUsers /></TabIcon>
            <TabText>Local Chapters</TabText>
          </TabItem>
          <TabItem 
            active={activeTab === 'events'}
            onClick={() => setActiveTab('events')}
          >
            <TabIcon><FaCalendarAlt /></TabIcon>
            <TabText>Events</TabText>
          </TabItem>
          <TabItem 
            active={activeTab === 'forums'}
            onClick={() => setActiveTab('forums')}
          >
            <TabIcon><FaComments /></TabIcon>
            <TabText>Online Forums</TabText>
          </TabItem>
          <TabItem 
            active={activeTab === 'volunteer'}
            onClick={() => setActiveTab('volunteer')}
          >
            <TabIcon><FaHandsHelping /></TabIcon>
            <TabText>Volunteer</TabText>
          </TabItem>
        </TabsContainer>
        
        {activeTab === 'chapters' && (
          <ContentSection className="animate-section" id="chapters-section" visible={isVisible['chapters-section']}>
            <SectionTitle>Local Chapters</SectionTitle>
            <SectionDescription>
              Our local chapters provide opportunities for in-person connection and learning within your community. Each chapter has its own focus and activities, reflecting the interests and needs of its members.
            </SectionDescription>
            
            <ChaptersGrid>
              {chapters.map((chapter, index) => (
                <ChapterCard key={index}>
                  <ChapterImage src={chapter.image} alt={chapter.name} />
                  <ChapterContent>
                    <ChapterName>{chapter.name}</ChapterName>
                    <ChapterStats>
                      <ChapterStat>
                        <FaUsers /> {chapter.members} Members
                      </ChapterStat>
                      <ChapterStat>
                        <FaMapMarkerAlt /> {chapter.location}
                      </ChapterStat>
                      <ChapterStat>
                        <FaCalendarAlt /> Meets on {chapter.meetingDay}
                      </ChapterStat>
                    </ChapterStats>
                    <ChapterDescription>{chapter.description}</ChapterDescription>
                    <ChapterLink to="/community/chapters">Learn More</ChapterLink>
                  </ChapterContent>
                </ChapterCard>
              ))}
            </ChaptersGrid>
            
            <FindChapterSection>
              <FindChapterTitle>Find a Chapter Near You</FindChapterTitle>
              <FindChapterText>
                Don't see a chapter in your area? Contact us to find the nearest chapter or to explore starting a new one.
              </FindChapterText>
              <FindChapterButton to="/contact">Contact Us</FindChapterButton>
            </FindChapterSection>
          </ContentSection>
        )}
        
        {activeTab === 'events' && (
          <ContentSection className="animate-section" id="events-section" visible={isVisible['events-section']}>
            <SectionTitle>Upcoming Events</SectionTitle>
            <SectionDescription>
              Join us for enlightening and transformative events organized by Vishwa Guru Bharat and our community partners. These events provide opportunities to deepen your understanding of ancient wisdom and connect with like-minded individuals.
            </SectionDescription>
            
            <EventsGrid>
              {events.map((event, index) => (
                <EventCard key={index}>
                  <EventImage src={event.image} alt={event.title} />
                  <EventDetails>
                    <EventDate>{event.date}</EventDate>
                    <EventTitle>{event.title}</EventTitle>
                    <EventInfo>
                      <EventTime>{event.time}</EventTime>
                      <EventLocation>{event.location}</EventLocation>
                    </EventInfo>
                    <EventDescription>{event.description}</EventDescription>
                    <EventActions>
                      <EventButton primary>Register</EventButton>
                      <EventButton>Learn More</EventButton>
                    </EventActions>
                  </EventDetails>
                </EventCard>
              ))}
            </EventsGrid>
            
            <ViewAllSection>
              <ViewAllButton to="/events">View All Events</ViewAllButton>
            </ViewAllSection>
          </ContentSection>
        )}
        
        {activeTab === 'forums' && (
          <ContentSection className="animate-section" id="forums-section" visible={isVisible['forums-section']}>
            <SectionTitle>Online Forums</SectionTitle>
            <SectionDescription>
              Our online forums provide spaces for discussion, learning, and connection, regardless of your geographical location. Join conversations on a variety of topics related to ancient wisdom and its modern applications.
            </SectionDescription>
            
            <ForumsGrid>
              {forums.map((forum, index) => (
                <ForumCard key={index}>
                  <ForumTitle>{forum.title}</ForumTitle>
                  <ForumStats>
                    <ForumStat>{forum.members} Members</ForumStat>
                    <ForumStat>{forum.posts} Posts</ForumStat>
                    <ForumStat>Last activity: {forum.lastActivity}</ForumStat>
                  </ForumStats>
                  <ForumDescription>{forum.description}</ForumDescription>
                  <ForumButton to="/community/forum">Join Discussion</ForumButton>
                </ForumCard>
              ))}
            </ForumsGrid>
            
            <ForumCTA>
              <CTABG>
                <CTAContent>
                  <CTATitle>Join Our Online Community</CTATitle>
                  <CTAText>
                    Create an account to participate in discussions, access exclusive resources, and connect with like-minded individuals around the world.
                  </CTAText>
                  <CTAButton to="/register">Create Account</CTAButton>
                </CTAContent>
              </CTABG>
            </ForumCTA>
          </ContentSection>
        )}
        
        {activeTab === 'volunteer' && (
          <ContentSection className="animate-section" id="volunteer-section" visible={isVisible['volunteer-section']}>
            <SectionTitle>Volunteer Opportunities</SectionTitle>
            <SectionDescription>
              Volunteering with Vishwa Guru Bharat is a rewarding way to contribute your skills and time to a meaningful cause. We offer various opportunities that align with different interests, skills, and availability.
            </SectionDescription>
            
            <VolunteerGrid>
              {volunteerOpportunities.map((opportunity, index) => (
                <VolunteerCard key={index}>
                  <VolunteerTitle>{opportunity.title}</VolunteerTitle>
                  <VolunteerDetails>
                    <VolunteerDetail>
                      <DetailLabel>Time Commitment:</DetailLabel>
                      <DetailValue>{opportunity.commitment}</DetailValue>
                    </VolunteerDetail>
                    <VolunteerDetail>
                      <DetailLabel>Location:</DetailLabel>
                      <DetailValue>{opportunity.location}</DetailValue>
                    </VolunteerDetail>
                    <VolunteerDetail>
                      <DetailLabel>Skills Needed:</DetailLabel>
                      <SkillsList>
                        {opportunity.skills.map((skill, i) => (
                          <SkillTag key={i}>{skill}</SkillTag>
                        ))}
                      </SkillsList>
                    </VolunteerDetail>
                  </VolunteerDetails>
                  <VolunteerDescription>{opportunity.description}</VolunteerDescription>
                  <VolunteerButton to="/community/volunteer">Apply Now</VolunteerButton>
                </VolunteerCard>
              ))}
            </VolunteerGrid>
            
            <VolunteerCTA>
              <CTATitle>Can't Find What You're Looking For?</CTATitle>
              <CTAText>
                We're always looking for passionate volunteers with diverse skills. If you don't see an opportunity that matches your interests, contact us to discuss how you can contribute.
              </CTAText>
              <CTAButton to="/contact">Contact Us</CTAButton>
            </VolunteerCTA>
          </ContentSection>
        )}
      </div>
    </PageContainer>
  );
};

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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

const IntroSection = styled.section`
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
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

const IntroText = styled.p`
  color: #444;
  line-height: 1.8;
  margin-bottom: 30px;
  font-size: 1.1rem;
`;

const CommunityStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #cd232e;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: #444;
  font-weight: 500;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    gap: 5px;
    padding: 10px;
  }
`;

const TabItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${props => props.active ? '#f8f9fa' : 'transparent'};
  border-bottom: 3px solid ${props => props.active ? '#cd232e' : 'transparent'};
  min-width: 120px;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    min-width: 80px;
  }
`;

const TabIcon = styled.div`
  font-size: 1.8rem;
  color: #cd232e;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TabText = styled.div`
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ContentSection = styled.section`
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const SectionDescription = styled.p`
  color: #444;
  line-height: 1.8;
  margin-bottom: 30px;
  font-size: 1.1rem;
`;

// Chapters tab
const ChaptersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ChapterCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ChapterImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ChapterContent = styled.div`
  padding: 25px;
`;

const ChapterName = styled.h3`
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

const ChapterStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 15px;
`;

const ChapterStat = styled.div`
  color: #666;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ChapterDescription = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ChapterLink = styled(Link)`
  color: #cd232e;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FindChapterSection = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
`;

const FindChapterTitle = styled.h3`
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

const FindChapterText = styled.p`
  color: #444;
  line-height: 1.8;
  margin-bottom: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FindChapterButton = styled(Link)`
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

// Events tab
const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const EventDetails = styled.div`
  padding: 25px;
`;

const EventDate = styled.div`
  color: #cd232e;
  font-weight: 600;
  margin-bottom: 10px;
`;

const EventTitle = styled.h3`
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

const EventInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;
  color: #666;
  font-size: 0.9rem;
`;

const EventTime = styled.div``;

const EventLocation = styled.div``;

const EventDescription = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const EventActions = styled.div`
  display: flex;
  gap: 10px;
`;

const EventButton = styled.button`
  background-color: ${props => props.primary ? '#cd232e' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#cd232e'};
  border: ${props => props.primary ? 'none' : '1px solid #cd232e'};
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.primary ? '#b01c26' : 'rgba(205, 35, 46, 0.1)'};
    transform: translateY(-3px);
  }
`;

const ViewAllSection = styled.div`
  text-align: center;
`;

const ViewAllButton = styled(Link)`
  display: inline-block;
  background-color: #f9f9f9;
  color: #333;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-3px);
  }
`;

// Forums tab
const ForumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ForumCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px;
  transition: transform 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ForumTitle = styled.h3`
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 15px;
`;

const ForumStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
`;

const ForumStat = styled.div`
  color: #666;
  font-size: 0.9rem;
`;

const ForumDescription = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ForumButton = styled(Link)`
  display: inline-block;
  background-color: #cd232e;
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  
  &:hover {
    background-color: #b01c26;
    transform: translateY(-2px);
  }
`;

const ForumCTA = styled.div`
  margin-top: 40px;
`;

const CTABG = styled.div`
  background-image: url('https://web-assets.same.dev/1306262657/3509351711.png');
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 60px 40px;
  text-align: center;
  color: white;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const CTATitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 25px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: #cd232e;
  padding: 12px 30px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background-color: #f1f1f1;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

// Volunteer tab
const VolunteerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VolunteerCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const VolunteerTitle = styled.h3`
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 20px;
  text-align: center;
`;

const VolunteerDetails = styled.div`
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
`;

const VolunteerDetail = styled.div`
  margin-bottom: 15px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;

const DetailValue = styled.div`
  color: #666;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  background-color: rgba(205, 35, 46, 0.1);
  color: #cd232e;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 0.85rem;
`;

const VolunteerDescription = styled.p`
  color: #444;
  line-height: 1.7;
  margin-bottom: 25px;
  font-size: 1rem;
`;

const VolunteerButton = styled.a`
  display: block;
  background-color: #cd232e;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s;
  
  &:hover {
    background-color: #b01c26;
    transform: translateY(-3px);
  }
`;

const VolunteerCTA = styled.div`
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export default CommunityPage;