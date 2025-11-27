import React from 'react';
import styled from 'styled-components';

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'International Yoga Conference',
      date: 'March 15-17, 2025',
      location: 'Delhi, India',
      description: 'Join us for a three-day conference on Yoga and meditation practices, featuring renowned teachers from around the world.',
      image: 'https://web-assets.same.dev/1306262657/3509351711.png'
    },
    {
      id: 2,
      title: 'Ganga Clean-up Drive',
      date: 'April 5, 2025',
      location: 'Haridwar, India',
      description: 'Participate in our monthly river clean-up initiative to restore the holy Ganga river to its pristine state.',
      image: 'https://web-assets.same.dev/1645611323/2017019684.png'
    },
    {
      id: 3,
      title: 'Vedic Knowledge Symposium',
      date: 'April 22-23, 2025',
      location: 'Mumbai, India',
      description: 'Explore ancient Vedic wisdom and its practical applications in modern life through expert talks and workshops.',
      image: 'https://web-assets.same.dev/1591743426/2260428846.png'
    }
  ];

  return (
    <EventsContainer>
      <div className="container">
        <PageHeader>
          <PageTitle>Events & Programs</PageTitle>
          <PageDescription>
            Join us for transformative experiences that blend ancient wisdom with modern practices.
            Our events foster community connection, spiritual growth, and positive action.
          </PageDescription>
        </PageHeader>

        <EventsSection>
          <SectionTitle>Upcoming Events</SectionTitle>

          <EventsList>
            {upcomingEvents.map(event => (
              <EventCard key={event.id}>
                <EventImage src={event.image} alt={event.title} />
                <EventContent>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDetails>
                    <EventDate><i className="far fa-calendar"></i> {event.date}</EventDate>
                    <EventLocation><i className="fas fa-map-marker-alt"></i> {event.location}</EventLocation>
                  </EventDetails>
                  <EventDescription>{event.description}</EventDescription>
                  <RegisterButton href="#">Register Now</RegisterButton>
                </EventContent>
              </EventCard>
            ))}
          </EventsList>
        </EventsSection>

        <SubscribeSection>
          <SubscribeTitle>Stay Updated with Our Events</SubscribeTitle>
          <SubscribeDescription>
            Subscribe to our newsletter to receive updates on upcoming events and initiatives.
          </SubscribeDescription>
          <SubscribeForm>
            <SubscribeInput type="email" placeholder="Your email address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </SubscribeForm>
        </SubscribeSection>
      </div>
    </EventsContainer>
  );
};

// Styled Components
const EventsContainer = styled.div`
  padding: 80px 0;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  color: #2b2928;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const EventsSection = styled.section`
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #cd232e;
  margin-bottom: 40px;
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

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const EventCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventImage = styled.img`
  width: 30%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const EventContent = styled.div`
  padding: 30px;
  flex: 1;
`;

const EventTitle = styled.h3`
  font-size: 1.8rem;
  color: #2b2928;
  margin-bottom: 15px;
`;

const EventDetails = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  color: #555;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const EventDate = styled.div`
  font-size: 1rem;

  i {
    margin-right: 8px;
    color: #cd232e;
  }
`;

const EventLocation = styled.div`
  font-size: 1rem;

  i {
    margin-right: 8px;
    color: #cd232e;
  }
`;

const EventDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const RegisterButton = styled.a`
  display: inline-block;
  background-color: #cd232e;
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b01c26;
  }
`;

const SubscribeSection = styled.section`  background-color: #f9f9f9;
  padding: 50px;
  border-radius: 10px;
  text-align: center;
`;

const SubscribeTitle = styled.h3`
  font-size: 1.8rem;
  color: #2b2928;
  margin-bottom: 15px;
`;

const SubscribeDescription = styled.p`
  color: #666;
  max-width: 600px;
  margin: 0 auto 25px;
`;

const SubscribeForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const SubscribeInput = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #cd232e;
  }

  @media (max-width: 576px) {
    border-radius: 30px;
    margin-bottom: 10px;
  }
`;

const SubscribeButton = styled.button`
  background-color: #cd232e;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 0 30px 30px 0;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b01c26;
  }

  @media (max-width: 576px) {
    border-radius: 30px;
  }
`;

export default EventsPage;

