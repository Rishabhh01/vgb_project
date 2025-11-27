// client/src/pages/ExperiencePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaYinYang, FaOm, FaBookOpen, FaPrayingHands, FaLeaf, FaRegPlayCircle } from 'react-icons/fa';

const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState('meditation');
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

  return (
    <PageContainer>
      <HeroBanner>
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>VGB Experience</HeroTitle>
            <HeroSubtitle>Immerse yourself in ancient wisdom through modern experiences</HeroSubtitle>
          </HeroContent>
        </HeroOverlay>
      </HeroBanner>

      <div className="container">
        <IntroSection className="animate-section" id="intro-section" visible={isVisible['intro-section']}>
          <SectionTitle>Experience the Wisdom of India</SectionTitle>
          <IntroText>
            Vishwa Guru Bharat offers a variety of immersive experiences that allow you to connect with India's ancient wisdom in meaningful ways. From meditation and yoga to Ayurvedic wellness and Vedic education, our programs are designed to promote holistic well-being and spiritual growth.
          </IntroText>
          
          <ProgramsGrid>
            <ProgramCard onClick={() => setActiveTab('meditation')}>
              <ProgramIcon><FaOm /></ProgramIcon>
              <ProgramName>Meditation & Yoga</ProgramName>
            </ProgramCard>
            <ProgramCard onClick={() => setActiveTab('ayurveda')}>
              <ProgramIcon><FaLeaf /></ProgramIcon>
              <ProgramName>Ayurvedic Wellness</ProgramName>
            </ProgramCard>
            <ProgramCard onClick={() => setActiveTab('courses')}>
              <ProgramIcon><FaBookOpen /></ProgramIcon>
              <ProgramName>Vedic Courses</ProgramName>
            </ProgramCard>
            <ProgramCard onClick={() => setActiveTab('retreats')}>
              <ProgramIcon><FaPrayingHands /></ProgramIcon>
              <ProgramName>Spiritual Retreats</ProgramName>
            </ProgramCard>
          </ProgramsGrid>
        </IntroSection>

        {activeTab === 'meditation' && (
          <ProgramSection className="animate-section" id="meditation-section" visible={isVisible['meditation-section']}>
            <ProgramHeader>
              <ProgramHeaderIcon><FaOm /></ProgramHeaderIcon>
              <div>
                <ProgramHeaderTitle>Meditation & Yoga</ProgramHeaderTitle>
                <ProgramHeaderSubtitle>Ancient practices for modern well-being</ProgramHeaderSubtitle>
              </div>
            </ProgramHeader>
            
            <ProgramContent>
              <ProgramImage src="https://web-assets.same.dev/1306262657/3509351711.png" alt="Meditation & Yoga" />
              <ProgramDetails>
                <ProgramDescription>
                  <p>
                    Our meditation and yoga programs are designed to help you connect with your inner self, reduce stress, and promote physical and mental well-being. Led by experienced practitioners, these sessions combine ancient techniques with modern approaches to address the challenges of contemporary life.
                  </p>
                  <p>
                    Whether you're a beginner or an experienced practitioner, our programs offer something for everyone, from guided meditations and breathing exercises to various styles of yoga.
                  </p>
                </ProgramDescription>
                
                <OfferingsList>
                  <OfferingsTitle>Our Offerings</OfferingsTitle>
                  <Offering>
                    <OfferingName>Daily Meditation Sessions</OfferingName>
                    <OfferingDesc>Guided meditation sessions focusing on mindfulness, concentration, and spiritual growth.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Yoga Classes</OfferingName>
                    <OfferingDesc>Traditional Hatha, Ashtanga, and Kundalini yoga classes for all levels.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Pranayama Workshops</OfferingName>
                    <OfferingDesc>Learn powerful breathing techniques to enhance vital energy and mental clarity.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Meditation Teacher Training</OfferingName>
                    <OfferingDesc>Comprehensive training programs for those who wish to become meditation teachers.</OfferingDesc>
                  </Offering>
                </OfferingsList>
                
                <TestimonialBox>
                  <TestimonialQuote>
                    "The meditation program at Vishwa Guru Bharat transformed my life. I've found a sense of peace and clarity that I never thought possible. The teachers are incredibly knowledgeable and supportive."
                  </TestimonialQuote>
                  <TestimonialAuthor>— Priya Sharma, Delhi</TestimonialAuthor>
                </TestimonialBox>
                
                <ProgramCTA>
                  <CTAText>Ready to transform your life through meditation and yoga?</CTAText>
                  <CTAButton to="/contact">Join Our Next Session</CTAButton>
                </ProgramCTA>
              </ProgramDetails>
            </ProgramContent>
            
            <VideoSection>
              <VideoTitle>Experience Our Meditation Session</VideoTitle>
              <VideoContainer>
                <VideoPlaceholder>
                  <PlayIcon><FaRegPlayCircle /></PlayIcon>
                </VideoPlaceholder>
              </VideoContainer>
            </VideoSection>
            
            <UpcomingEvents>
              <SectionTitle>Upcoming Meditation & Yoga Events</SectionTitle>
              <EventsGrid>
                <EventCard>
                  <EventDate>April 15, 2025</EventDate>
                  <EventTitle>Meditation Retreat in Rishikesh</EventTitle>
                  <EventDetails>A 7-day retreat focusing on deep meditation practices in the spiritual capital of India.</EventDetails>
                  <EventLink to="/contact">Learn More</EventLink>
                </EventCard>
                <EventCard>
                  <EventDate>May 2, 2025</EventDate>
                  <EventTitle>Yoga Workshop for Beginners</EventTitle>
                  <EventDetails>A weekend workshop introducing the fundamentals of yoga to newcomers.</EventDetails>
                  <EventLink to="/contact">Learn More</EventLink>
                </EventCard>
                <EventCard>
                  <EventDate>May 21, 2025</EventDate>
                  <EventTitle>Advanced Pranayama Techniques</EventTitle>
                  <EventDetails>An intensive one-day workshop on advanced breathing techniques for experienced practitioners.</EventDetails>
                  <EventLink to="/contact">Learn More</EventLink>
                </EventCard>
              </EventsGrid>
            </UpcomingEvents>
          </ProgramSection>
        )}

        {activeTab === 'ayurveda' && (
          <ProgramSection className="animate-section" id="ayurveda-section" visible={isVisible['ayurveda-section']}>
            <ProgramHeader>
              <ProgramHeaderIcon><FaLeaf /></ProgramHeaderIcon>
              <div>
                <ProgramHeaderTitle>Ayurvedic Wellness</ProgramHeaderTitle>
                <ProgramHeaderSubtitle>Ancient science of life for holistic health</ProgramHeaderSubtitle>
              </div>
            </ProgramHeader>
            
            <ProgramContent>
              <ProgramImage src="https://web-assets.same.dev/1645611323/2017019684.png" alt="Ayurvedic Wellness" />
              <ProgramDetails>
                <ProgramDescription>
                  <p>
                    Ayurveda, the ancient Indian science of life, offers a comprehensive approach to health that addresses the body, mind, and spirit. Our Ayurvedic wellness programs are designed to help you understand your unique constitution and develop personalized strategies for optimal health.
                  </p>
                  <p>
                    From consultations with Ayurvedic practitioners to workshops on diet, lifestyle, and herbal remedies, our offerings provide practical tools for enhancing your well-being based on time-tested principles.
                  </p>
                </ProgramDescription>
                
                <OfferingsList>
                  <OfferingsTitle>Our Offerings</OfferingsTitle>
                  <Offering>
                    <OfferingName>Ayurvedic Consultations</OfferingName>
                    <OfferingDesc>Personalized assessments with experienced practitioners to determine your dosha and health needs.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Panchakarma Retreats</OfferingName>
                    <OfferingDesc>Traditional detoxification and rejuvenation programs to restore balance and vitality.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Ayurvedic Cooking Classes</OfferingName>
                    <OfferingDesc>Learn to prepare delicious, healing meals based on Ayurvedic principles.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Herbal Medicine Workshops</OfferingName>
                    <OfferingDesc>Discover the healing properties of herbs and how to use them for common ailments.</OfferingDesc>
                  </Offering>
                </OfferingsList>
                
                <TestimonialBox>
                  <TestimonialQuote>
                    "The Ayurvedic consultation and treatment plan completely changed my approach to health. I've experienced significant improvements in my digestion, energy levels, and overall well-being."
                  </TestimonialQuote>
                  <TestimonialAuthor>— Rajesh Kumar, Mumbai</TestimonialAuthor>
                </TestimonialBox>
                
                <ProgramCTA>
                  <CTAText>Ready to experience the benefits of Ayurvedic wellness?</CTAText>
                  <CTAButton to="/contact">Schedule a Consultation</CTAButton>
                </ProgramCTA>
              </ProgramDetails>
            </ProgramContent>
            
            <InfoGraphicSection>
              <InfoGraphicTitle>Understanding the Three Doshas</InfoGraphicTitle>
              <DoshasContainer>
                <DoshaCard>
                  <DoshaIcon style={{backgroundColor: '#F6D5A4'}}>💨</DoshaIcon>
                  <DoshaName>Vata</DoshaName>
                  <DoshaElements>Air & Space</DoshaElements>
                  <DoshaQualities>Light, Cold, Dry, Mobile</DoshaQualities>
                  <DoshaDescription>
                    Governs movement and nervous system. When balanced, promotes creativity and flexibility.
                  </DoshaDescription>
                </DoshaCard>
                <DoshaCard>
                  <DoshaIcon style={{backgroundColor: '#F5CAC3'}}>🔥</DoshaIcon>
                  <DoshaName>Pitta</DoshaName>
                  <DoshaElements>Fire & Water</DoshaElements>
                  <DoshaQualities>Hot, Sharp, Oily, Light</DoshaQualities>
                  <DoshaDescription>
                    Governs metabolism and digestion. When balanced, promotes intelligence and courage.
                  </DoshaDescription>
                </DoshaCard>
                <DoshaCard>
                  <DoshaIcon style={{backgroundColor: '#AED9E0'}}>🌊</DoshaIcon>
                  <DoshaName>Kapha</DoshaName>
                  <DoshaElements>Earth & Water</DoshaElements>
                  <DoshaQualities>Heavy, Cold, Oily, Slow</DoshaQualities>
                  <DoshaDescription>
                    Governs structure and lubrication. When balanced, promotes stability and compassion.
                  </DoshaDescription>
                </DoshaCard>
              </DoshasContainer>
            </InfoGraphicSection>
            
            <UpcomingEvents>
              <SectionTitle>Upcoming Ayurvedic Events</SectionTitle>
              <EventsGrid>
                <EventCard>
                  <EventDate>April 20, 2025</EventDate>
                  <EventTitle>Ayurvedic Cooking Workshop</EventTitle>
                  <EventDetails>Learn to prepare nutritious, dosha-balancing meals using traditional Ayurvedic principles.</EventDetails>
                  <EventLink to="/contact">Learn More</EventLink>
                </EventCard>
                <EventCard>
                  <EventDate>May 10, 2025</EventDate>
                  <EventTitle>Seasonal Wellness Retreat</EventTitle>
                  <EventDetails>A weekend retreat focusing on Ayurvedic practices for spring to maintain balance and vitality.</EventDetails>
                  <EventLink to="/contact">Learn More</EventLink>
                </EventCard>
                <EventCard>
                  <EventDate>June 5, 2025</EventDate>
                  <EventTitle>Herbal Medicine Masterclass</EventTitle>
                  <EventDetails>Discover the healing properties of common herbs and learn to make your own remedies.</EventDetails>
                  <EventLink to="/contact">Learn More</EventLink>
                </EventCard>
              </EventsGrid>
            </UpcomingEvents>
          </ProgramSection>
        )}

        {activeTab === 'courses' && (
          <ProgramSection className="animate-section" id="courses-section" visible={isVisible['courses-section']}>
            <ProgramHeader>
              <ProgramHeaderIcon><FaBookOpen /></ProgramHeaderIcon>
              <div>
                <ProgramHeaderTitle>Vedic Courses</ProgramHeaderTitle>
                <ProgramHeaderSubtitle>Timeless wisdom for contemporary life</ProgramHeaderSubtitle>
              </div>
            </ProgramHeader>
            
            <ProgramContent>
              <ProgramImage src="https://web-assets.same.dev/1591743426/2260428846.png" alt="Vedic Courses" />
              <ProgramDetails>
                <ProgramDescription>
                  <p>
                    Our Vedic courses offer deep insights into the ancient wisdom of India, making it accessible and relevant for contemporary life. From the philosophical teachings of the Upanishads to the practical guidance of the Bhagavad Gita, these courses provide a comprehensive understanding of Vedic knowledge.
                  </p>
                  <p>
                    Led by scholars and practitioners with decades of experience, our courses combine traditional learning methods with modern educational approaches, allowing students to integrate this wisdom into their daily lives.
                  </p>
                </ProgramDescription>
                
                <OfferingsList>
                  <OfferingsTitle>Our Offerings</OfferingsTitle>
                  <Offering>
                    <OfferingName>Introduction to Vedic Philosophy</OfferingName>
                    <OfferingDesc>A foundational course exploring the core concepts of Vedic thought and their relevance today.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Bhagavad Gita Study</OfferingName>
                    <OfferingDesc>An in-depth exploration of this timeless text and its practical applications for modern living.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Sanskrit Language</OfferingName>
                    <OfferingDesc>Learn the ancient language of the Vedas, from basic alphabets to reading classical texts.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Vedic Mathematics</OfferingName>
                    <OfferingDesc>Discover the elegant computational methods of Vedic mathematics, enhancing problem-solving skills.</OfferingDesc>
                  </Offering>
                </OfferingsList>
                
                <TestimonialBox>
                  <TestimonialQuote>
                    "The Bhagavad Gita course was life-changing. The teachers presented complex philosophical concepts in such a clear and practical way that I could immediately apply them to my daily challenges."
                  </TestimonialQuote>
                  <TestimonialAuthor>— Anil Mehta, Bangalore</TestimonialAuthor>
                </TestimonialBox>
                
                <ProgramCTA>
                  <CTAText>Ready to explore the depths of Vedic wisdom?</CTAText>
                  <CTAButton to="/contact">Enroll in a Course</CTAButton>
                </ProgramCTA>
              </ProgramDetails>
            </ProgramContent>
            
            <CourseCalendar>
              <CalendarTitle>Upcoming Course Schedule</CalendarTitle>
              <CalendarGrid>
                <CalendarItem>
                  <CalendarMonth>April 2025</CalendarMonth>
                  <CalendarCourses>
                    <CalendarCourse>
                      <CourseDate>April 5-6</CourseDate>
                      <CourseName>Introduction to Vedic Philosophy (Weekend Intensive)</CourseName>
                    </CalendarCourse>
                    <CalendarCourse>
                      <CourseDate>April 12-May 17</CourseDate>
                      <CourseName>Bhagavad Gita Study (6-Week Course)</CourseName>
                    </CalendarCourse>
                    <CalendarCourse>
                      <CourseDate>April 20</CourseDate>
                      <CourseName>Vedic Mathematics Workshop</CourseName>
                    </CalendarCourse>
                  </CalendarCourses>
                </CalendarItem>
                <CalendarItem>
                  <CalendarMonth>May 2025</CalendarMonth>
                  <CalendarCourses>
                    <CalendarCourse>
                      <CourseDate>May 3-4</CourseDate>
                      <CourseName>Sanskrit for Beginners (Weekend Intensive)</CourseName>
                    </CalendarCourse>
                    <CalendarCourse>
                      <CourseDate>May 15-June 19</CourseDate>
                      <CourseName>Upanishads: Ancient Wisdom for Modern Times (6-Week Course)</CourseName>
                    </CalendarCourse>
                    <CalendarCourse>
                      <CourseDate>May 25</CourseDate>
                      <CourseName>Vedic Astrology Introduction</CourseName>
                    </CalendarCourse>
                  </CalendarCourses>
                </CalendarItem>
              </CalendarGrid>
            </CourseCalendar>
            
            <InstructorsSection>
              <SectionTitle>Our Instructors</SectionTitle>
              <InstructorsGrid>
                <InstructorCard>
                  <InstructorImage src="https://xsgames.co/randomusers/assets/avatars/male/7.jpg" alt="Dr. Ramesh Sharma" />
                  <InstructorName>Dr. Ramesh Sharma</InstructorName>
                  <InstructorTitle>Sanskrit Scholar</InstructorTitle>
                  <InstructorBio>Ph.D. in Sanskrit with 25 years of teaching experience at prestigious universities.</InstructorBio>
                </InstructorCard>
                <InstructorCard>
                  <InstructorImage src="https://xsgames.co/randomusers/assets/avatars/female/4.jpg" alt="Dr. Lakshmi Iyer" />
                  <InstructorName>Dr. Lakshmi Iyer</InstructorName>
                  <InstructorTitle>Vedanta Philosophy</InstructorTitle>
                  <InstructorBio>Author of multiple books on Vedantic philosophy and its applications in modern life.</InstructorBio>
                </InstructorCard>
                <InstructorCard>
                  <InstructorImage src="https://xsgames.co/randomusers/assets/avatars/male/8.jpg" alt="Prof. Sunil Desai" />
                  <InstructorName>Prof. Sunil Desai</InstructorName>
                  <InstructorTitle>Vedic Mathematics</InstructorTitle>
                  <InstructorBio>Renowned mathematician with expertise in both modern and Vedic mathematical systems.</InstructorBio>
                </InstructorCard>
              </InstructorsGrid>
            </InstructorsSection>
          </ProgramSection>
        )}

        {activeTab === 'retreats' && (
          <ProgramSection className="animate-section" id="retreats-section" visible={isVisible['retreats-section']}>
            <ProgramHeader>
              <ProgramHeaderIcon><FaPrayingHands /></ProgramHeaderIcon>
              <div>
                <ProgramHeaderTitle>Spiritual Retreats</ProgramHeaderTitle>
                <ProgramHeaderSubtitle>Immersive experiences for transformation</ProgramHeaderSubtitle>
              </div>
            </ProgramHeader>
            
            <ProgramContent>
              <ProgramImage src="https://web-assets.same.dev/2691685965/1462887440.png" alt="Spiritual Retreats" />
              <ProgramDetails>
                <ProgramDescription>
                  <p>
                    Our spiritual retreats offer an opportunity to step away from the demands of daily life and immerse yourself in practices that foster inner peace, clarity, and connection. Set in serene locations across India, these retreats combine meditation, yoga, spiritual discourses, and community living.
                  </p>
                  <p>
                    Whether you're seeking personal transformation, spiritual guidance, or simply a break from the routine, our retreats provide a supportive environment for your journey inward.
                  </p>
                </ProgramDescription>
                
                <OfferingsList>
                  <OfferingsTitle>Our Offerings</OfferingsTitle>
                  <Offering>
                    <OfferingName>Weekend Silent Retreats</OfferingName>
                    <OfferingDesc>Short, intensive experiences focusing on meditation and inner silence.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>7-Day Transformational Retreats</OfferingName>
                    <OfferingDesc>Comprehensive programs combining various spiritual practices for deep transformation.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Pilgrimages to Sacred Sites</OfferingName>
                    <OfferingDesc>Guided journeys to India's holy places, combining travel with spiritual practices.</OfferingDesc>
                  </Offering>
                  <Offering>
                    <OfferingName>Seasonal Sadhana Retreats</OfferingName>
                    <OfferingDesc>Intensive spiritual practices aligned with the energy of specific seasons.</OfferingDesc>
                  </Offering>
                </OfferingsList>
                
                <TestimonialBox>
                  <TestimonialQuote>
                    "The 7-day retreat in Rishikesh was one of the most profound experiences of my life. The combination of meditation, yoga, and spiritual teachings in the peaceful Himalayan setting led to deep insights and lasting peace."
                  </TestimonialQuote>
                  <TestimonialAuthor>— Sarah Johnson, United States</TestimonialAuthor>
                </TestimonialBox>
                
                <ProgramCTA>
                  <CTAText>Ready for a transformative spiritual journey?</CTAText>
                  <CTAButton to="/contact">Reserve Your Retreat</CTAButton>
                </ProgramCTA>
              </ProgramDetails>
            </ProgramContent>
            
            <RetreatLocations>
              <LocationsTitle>Our Retreat Locations</LocationsTitle>
              <LocationsGrid>
                <LocationCard>
                  <LocationImage src="https://web-assets.same.dev/1675577225/3977124565.png" alt="Rishikesh" />
                  <LocationOverlay>
                    <LocationName>Rishikesh</LocationName>
                    <LocationDescription>
                      Experience deep spiritual practices in the yoga capital of the world, nestled in the Himalayan foothills by the sacred Ganges River.
                    </LocationDescription>
                  </LocationOverlay>
                </LocationCard>
                <LocationCard>
                  <LocationImage src="https://web-assets.same.dev/1306262657/3509351711.png" alt="Varanasi" />
                  <LocationOverlay>
                    <LocationName>Varanasi</LocationName>
                    <LocationDescription>
                      Immerse yourself in the ancient spiritual traditions of India's oldest and most sacred city on the banks of the Ganges.
                    </LocationDescription>
                  </LocationOverlay>
                </LocationCard>
                <LocationCard>
                  <LocationImage src="https://web-assets.same.dev/1591743426/2260428846.png" alt="Kerala" />
                  <LocationOverlay>
                    <LocationName>Kerala</LocationName>
                    <LocationDescription>
                      Combine Ayurvedic healing with spiritual practices in the lush, serene environment of God's Own Country.
                    </LocationDescription>
                  </LocationOverlay>
                </LocationCard>
              </LocationsGrid>
            </RetreatLocations>
            
            <UpcomingRetreats>
              <SectionTitle>Upcoming Retreats</SectionTitle>
              <RetreatsGrid>
                <RetreatCard>
                  <RetreatDate>April 12-19, 2025</RetreatDate>
                  <RetreatTitle>Spring Transformation Retreat</RetreatTitle>
                  <RetreatLocation>Rishikesh, Uttarakhand</RetreatLocation>
                  <RetreatDescription>
                    A 7-day immersive experience focusing on meditation, yoga, and spiritual teachings to harness the renewal energy of spring.
                  </RetreatDescription>
                  <RetreatFeatures>
                    <RetreatFeature>Daily yoga and meditation</RetreatFeature>
                    <RetreatFeature>Spiritual discourses</RetreatFeature>
                    <RetreatFeature>Ganga aarti participation</RetreatFeature>
                    <RetreatFeature>Nature walks</RetreatFeature>
                  </RetreatFeatures>
                  <RetreatButton to="/contact">Reserve Your Spot</RetreatButton>
                </RetreatCard>
                <RetreatCard>
                  <RetreatDate>May 5-7, 2025</RetreatDate>
                  <RetreatTitle>Weekend Silent Retreat</RetreatTitle>
                  <RetreatLocation>Coorg, Karnataka</RetreatLocation>
                  <RetreatDescription>
                    A 3-day silent retreat in the serene hills of Coorg, focusing on mindfulness meditation and inner silence.
                  </RetreatDescription>
                  <RetreatFeatures>
                    <RetreatFeature>Complete silence</RetreatFeature>
                    <RetreatFeature>Guided meditations</RetreatFeature>
                    <RetreatFeature>Nature immersion</RetreatFeature>
                    <RetreatFeature>Vegetarian meals</RetreatFeature>
                  </RetreatFeatures>
                  <RetreatButton to="/contact">Reserve Your Spot</RetreatButton>
                </RetreatCard>
              </RetreatsGrid>
            </UpcomingRetreats>
          </ProgramSection>
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

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
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
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const IntroText = styled.p`
  text-align: center;
  color: #444;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
`;

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProgramCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
`;

const ProgramIcon = styled.div`
  font-size: 2.5rem;
  color: #cd232e;
  margin-bottom: 15px;
`;

const ProgramName = styled.h3`
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ProgramSection = styled.section`
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  opacity: ${props => props.visible ? 1 : 0};
  transform: translateY(${props => props.visible ? 0 : '30px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const ProgramHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProgramHeaderIcon = styled.div`
  font-size: 3rem;
  color: #cd232e;
  
  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

const ProgramHeaderTitle = styled.h2`
  color: #2b2928;
  font-size: 2.2rem;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProgramHeaderSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  font-style: italic;
`;

const ProgramContent = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ProgramImage = styled.img`
  flex: 1;
  max-width: 350px;
  border-radius: 15px;
  object-fit: cover;
  height: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    max-width: 100%;
    height: 300px;
  }
`;

const ProgramDetails = styled.div`
  flex: 2;
`;

const ProgramDescription = styled.div`
  color: #444;
  line-height: 1.8;
  margin-bottom: 30px;
  
  p {
    margin-bottom: 15px;
    font-size: 1.05rem;
  }
`;

const OfferingsList = styled.div`
  margin-bottom: 30px;
`;

const OfferingsTitle = styled.h3`
  color: #2b2928;
  font-size: 1.4rem;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #cd232e;
  }
`;

const Offering = styled.div`
  margin-bottom: 15px;
  border-left: 3px solid #cd232e;
  padding-left: 15px;
  background-color: #f9f9f9;
  padding: 15px 15px 15px 18px;
  border-radius: 0 5px 5px 0;
`;

const OfferingName = styled.h4`
  color: #333;
  font-size: 1.1rem;
  margin-bottom: 5px;
`;

const OfferingDesc = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const TestimonialBox = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 30px;
  position: relative;
  
  &:before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 4rem;
    color: rgba(205, 35, 46, 0.2);
    font-family: serif;
    line-height: 1;
  }
`;

const TestimonialQuote = styled.p`
  color: #444;
  font-style: italic;
  line-height: 1.8;
  font-size: 1.05rem;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.p`
  color: #666;
  font-weight: 600;
  text-align: right;
`;

const ProgramCTA = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
`;

const CTAText = styled.p`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #cd232e;
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background-color: #b01c26;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const VideoSection = styled.div`
  margin-bottom: 50px;
`;

const VideoTitle = styled.h3`
  color: #2b2928;
  font-size: 1.6rem;
  margin-bottom: 20px;
  text-align: center;
`;

const VideoContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const VideoPlaceholder = styled.div`
  background-image: url('https://web-assets.same.dev/1675577225/3977124565.png');
  background-size: cover;
  background-position: center;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const PlayIcon = styled.div`
  font-size: 4rem;
  color: white;
  opacity: 0.8;
  transition: all 0.3s;
  animation: ${pulse} 2s infinite;
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const UpcomingEvents = styled.div`
  margin-bottom: 30px;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const EventDate = styled.div`
  color: #cd232e;
  font-weight: 600;
  margin-bottom: 10px;
`;

const EventTitle = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const EventDetails = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const EventLink = styled(Link)`
  color: #cd232e;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #cd232e;
    transition: width 0.3s;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const InfoGraphicSection = styled.div`
  margin-bottom: 50px;
`;

const InfoGraphicTitle = styled.h3`
  color: #2b2928;
  font-size: 1.6rem;
  margin-bottom: 30px;
  text-align: center;
`;

const DoshasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DoshaCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const DoshaIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 2rem;
`;

const DoshaName = styled.h4`
  color: #333;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const DoshaElements = styled.div`
  color: #666;
  font-style: italic;
  margin-bottom: 10px;
`;

const DoshaQualities = styled.div`
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const DoshaDescription = styled.p`
  color: #444;
  line-height: 1.6;
`;

const CourseCalendar = styled.div`
  margin-bottom: 50px;
`;

const CalendarTitle = styled.h3`
  color: #2b2928;
  font-size: 1.6rem;
  margin-bottom: 30px;
  text-align: center;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CalendarItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const CalendarMonth = styled.h4`
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const CalendarCourses = styled.div``;

const CalendarCourse = styled.div`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #eee;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

const CourseDate = styled.div`
  color: #cd232e;
  font-weight: 600;
  margin-bottom: 5px;
`;

const CourseName = styled.div`
  color: #444;
  line-height: 1.5;
`;

const InstructorsSection = styled.div`
  margin-bottom: 30px;
`;

const InstructorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InstructorCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const InstructorImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const InstructorName = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin: 15px 20px 5px;
`;

const InstructorTitle = styled.div`
  color: #cd232e;
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0 20px 10px;
`;

const InstructorBio = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0 20px 20px;
  font-size: 0.95rem;
`;

const RetreatLocations = styled.div`
  margin-bottom: 50px;
`;

const LocationsTitle = styled.h3`
  color: #2b2928;
  font-size: 1.6rem;
  margin-bottom: 30px;
  text-align: center;
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LocationCard = styled.div`
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const LocationImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  
  ${LocationCard}:hover & {
    transform: scale(1.1);
  }
`;

const LocationOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  padding: 20px;
  color: white;
`;

const LocationName = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const LocationDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const UpcomingRetreats = styled.div`
  margin-bottom: 30px;
`;

const RetreatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RetreatCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const RetreatDate = styled.div`
  color: #cd232e;
  font-weight: 600;
  margin-bottom: 10px;
`;

const RetreatTitle = styled.h4`
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 5px;
`;

const RetreatLocation = styled.div`
  color: #666;
  font-style: italic;
  margin-bottom: 15px;
`;

const RetreatDescription = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const RetreatFeatures = styled.ul`
  margin-bottom: 20px;
  padding-left: 20px;
`;

const RetreatFeature = styled.li`
  color: #555;
  margin-bottom: 8px;
  line-height: 1.5;
`;

const RetreatButton = styled(Link)`
  display: inline-block;
  background-color: #cd232e;
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  
  &:hover {
    background-color: #b01c26;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export default ExperiencePage;