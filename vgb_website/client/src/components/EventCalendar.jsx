import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;
`;

const CalendarHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
  
  h2 {
    color: #cd232e;
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Month = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 8px;
`;

const MonthTitle = styled.h3`
  color: #cd232e;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.3rem;
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const EventItem = styled.li`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #e0e0e0;
  last-child {
    border-bottom: none;
  }
`;

const EventDate = styled.div`
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

const EventTitle = styled.div`
  color: #cd232e;
`;

const EventLocation = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #cd232e;
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s;
  
  &:hover {
    background-color: #b01c26;
    transform: translateY(-2px);
  }
`;

const events = {
  'January 2024': [
    {
      date: 'January 14',
      title: 'Makar Sankranti Celebration',
      location: 'VGB Center, Delhi'
    },
    {
      date: 'January 26',
      title: 'Republic Day Special Program',
      location: 'Community Hall, Mumbai'
    }
  ],
  'February 2024': [
    {
      date: 'February 10',
      title: 'Spiritual Discourse',
      location: 'VGB Ashram, Rishikesh'
    }
  ],
  'March 2024': [
    {
      date: 'March 7-8',
      title: 'Holi Cultural Festival',
      location: 'VGB Cultural Center'
    },
    {
      date: 'March 25',
      title: 'Ram Navami Celebration',
      location: 'VGB Temple Complex'
    }
  ],
  'April 2024': [
    {
      date: 'April 12-19',
      title: 'Spring Transformation Retreat',
      location: 'Rishikesh, Uttarakhand'
    }
  ],
  'May 2024': [
    {
      date: 'May 5-7',
      title: 'Weekend Silent Retreat',
      location: 'Coorg, Karnataka'
    }
  ],
  'June 2024': [
    {
      date: 'June 21',
      title: 'International Yoga Day',
      location: 'Multiple Locations'
    }
  ]
};

const EventCalendar = () => {
  return (
    <CalendarContainer>
      <CalendarHeader>
        <h2>Event Calendar 2024</h2>
        <p>Join us in our upcoming events and celebrations</p>
      </CalendarHeader>
      
      <MonthGrid>
        {Object.entries(events).map(([month, monthEvents]) => (
          <Month key={month}>
            <MonthTitle>{month}</MonthTitle>
            <EventList>
              {monthEvents.map((event, index) => (
                <EventItem key={index}>
                  <EventDate>{event.date}</EventDate>
                  <EventTitle>{event.title}</EventTitle>
                  <EventLocation>{event.location}</EventLocation>
                </EventItem>
              ))}
            </EventList>
          </Month>
        ))}
      </MonthGrid>
      
      <div style={{ textAlign: 'center' }}>
        <DownloadButton href="/cal/calendar.pdf" target="_blank">
          Download Calendar PDF
        </DownloadButton>
      </div>
    </CalendarContainer>
  );
};

export default EventCalendar; 