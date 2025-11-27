import React, { useState } from 'react';
import styled from 'styled-components';
import VGBBanner from '../../components/VGBBanner';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PageContainer = styled.div`
  padding-bottom: 60px;
  background-color: #f8f9fa;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const CalendarContainer = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const MonthNavigator = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: #cd232e;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #b01c26;
  }
`;

const CurrentMonth = styled.h2`
  color: #333;
  font-size: 1.8rem;
  margin: 0;
  min-width: 200px;
  text-align: center;
`;

const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  color: #666;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: #eee;
  border: 1px solid #eee;
`;

const CalendarCell = styled.div`
  background: white;
  min-height: 120px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.isCurrentMonth ? '#fff5f5' : '#f9f9f9'};
    transform: scale(1.02);
  }
  
  ${props => !props.isCurrentMonth && `
    color: #ccc;
    background: #f9f9f9;
  `}
  ${props => props.isToday && `
    background: #fff5f5;
  `}
`;

const DayNumber = styled.div`
  font-weight: ${props => props.isToday ? 'bold' : 'normal'};
  color: ${props => props.isToday ? '#cd232e' : 'inherit'};
  margin-bottom: 5px;
`;

const EventDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #cd232e;
  margin-right: 5px;
  display: inline-block;
`;

const EventTitle = styled.div`
  font-size: 0.8rem;
  color: #333;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const EventDetails = styled.div`
  display: none;
  position: absolute;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 15px;
  z-index: 10;
  min-width: 250px;
  
  ${CalendarCell}:hover & {
    display: block;
  }
`;

const events = {
  // January 2024
  '2024-01-14': [{ 
    title: 'Makar Sankranti', 
    location: 'VGB Center, Delhi',
    description: 'Celebration of the sun\'s transit into Capricorn'
  }],
  '2024-01-26': [{ 
    title: 'Republic Day Celebration', 
    location: 'VGB Centers Pan India',
    description: 'Flag hoisting and cultural programs'
  }],
  
  // February 2024
  '2024-02-14': [{ 
    title: 'Basant Panchami', 
    location: 'VGB Cultural Centers',
    description: 'Celebration of spring season and Saraswati Puja'
  }],
  '2024-02-24': [{ 
    title: 'Maha Shivratri', 
    location: 'VGB Temples',
    description: 'Night-long celebration and prayers to Lord Shiva'
  }],

  // March 2024
  '2024-03-07': [{ 
    title: 'Holika Dahan', 
    location: 'VGB Cultural Centers',
    description: 'Traditional bonfire ceremony'
  }],
  '2024-03-08': [{ 
    title: 'Holi Celebration', 
    location: 'VGB Centers Pan India',
    description: 'Festival of colors and spring celebration'
  }],
  '2024-03-25': [{ 
    title: 'Ram Navami', 
    location: 'VGB Temples',
    description: 'Celebration of Lord Ram\'s birth'
  }],

  // April 2024
  '2024-04-11': [{ 
    title: 'Hanuman Jayanti', 
    location: 'VGB Temples',
    description: 'Celebration of Lord Hanuman\'s birth'
  }],
  '2024-04-17': [{ 
    title: 'Akshaya Tritiya', 
    location: 'VGB Centers',
    description: 'Auspicious day for new beginnings'
  }],

  // May 2024
  '2024-05-23': [{ 
    title: 'Buddha Purnima', 
    location: 'VGB Cultural Centers',
    description: 'Celebration of Buddha\'s birth, enlightenment and nirvana'
  }],

  // June 2024
  '2024-06-21': [{ 
    title: 'International Yoga Day', 
    location: 'All VGB Centers',
    description: 'Mass yoga sessions and wellness programs'
  }],

  // July 2024
  '2024-07-21': [{ 
    title: 'Guru Purnima', 
    location: 'VGB Centers Pan India',
    description: 'Honoring spiritual and academic teachers'
  }],

  // August 2024
  '2024-08-15': [{ 
    title: 'Independence Day', 
    location: 'VGB Centers Pan India',
    description: 'National celebration with cultural programs'
  }],
  '2024-08-19': [{ 
    title: 'Raksha Bandhan', 
    location: 'VGB Cultural Centers',
    description: 'Celebration of brother-sister bond'
  }],
  '2024-08-26': [{ 
    title: 'Krishna Janmashtami', 
    location: 'VGB Temples',
    description: 'Celebration of Lord Krishna\'s birth'
  }],

  // September 2024
  '2024-09-07': [{ 
    title: 'Ganesh Chaturthi', 
    location: 'VGB Centers',
    description: '10-day celebration of Lord Ganesha'
  }],

  // October 2024
  '2024-10-02': [{ 
    title: 'Gandhi Jayanti', 
    location: 'VGB Centers',
    description: 'Tribute to Mahatma Gandhi'
  }],
  '2024-10-11': [{ 
    title: 'Navratri Begins', 
    location: 'VGB Centers Pan India',
    description: '9-day celebration of divine feminine energy'
  }],
  '2024-10-20': [{ 
    title: 'Dussehra', 
    location: 'VGB Cultural Centers',
    description: 'Victory of good over evil celebration'
  }],

  // November 2024
  '2024-11-01': [{ 
    title: 'Diwali', 
    location: 'VGB Centers Pan India',
    description: 'Festival of lights celebration'
  }],
  '2024-11-15': [{ 
    title: 'Tulsi Vivah', 
    location: 'VGB Temples',
    description: 'Traditional ceremony of Tulsi plant'
  }],

  // December 2024
  '2024-12-25': [{ 
    title: 'Christmas Celebration', 
    location: 'VGB Centers',
    description: 'Interfaith harmony celebration'
  }]
};

const EventCalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const allDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Get events for a specific date
  const getEventsForDate = (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    return events[dateStr] || [];
  };

  // Navigation handlers
  const previousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  // Calculate calendar weeks
  const startDay = monthStart.getDay();
  const endDay = 6 - monthEnd.getDay();
  
  // Add padding days to beginning and end
  const paddingDaysBefore = Array.from({ length: startDay }, (_, i) => 
    new Date(monthStart.getFullYear(), monthStart.getMonth(), -startDay + i + 1)
  );
  
  const paddingDaysAfter = Array.from({ length: endDay }, (_, i) => 
    new Date(monthEnd.getFullYear(), monthEnd.getMonth(), monthEnd.getDate() + i + 1)
  );
  
  const allCalendarDays = [...paddingDaysBefore, ...allDays, ...paddingDaysAfter];

  return (
    <PageContainer>
      <VGBBanner 
        title="Event Calendar" 
        subtitle="Stay updated with our upcoming events and programs" 
        backgroundImage="https://web-assets.same.dev/1306262657/3509351711.png"
      />
      <ContentWrapper>
        <CalendarContainer>
          <CalendarHeader>
            <MonthNavigator>
              <NavButton onClick={previousMonth}>
                <FaChevronLeft />
              </NavButton>
              <CurrentMonth>
                {format(currentDate, 'MMMM yyyy')}
              </CurrentMonth>
              <NavButton onClick={nextMonth}>
                <FaChevronRight />
              </NavButton>
            </MonthNavigator>
          </CalendarHeader>

          <WeekdayHeader>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day}>{day}</div>
            ))}
          </WeekdayHeader>

          <CalendarGrid>
            {allCalendarDays.map((date, index) => {
              const dayEvents = getEventsForDate(date);
              const isCurrentMonth = isSameMonth(date, currentDate);
              const isToday = isSameDay(date, new Date());

              return (
                <CalendarCell 
                  key={index} 
                  isCurrentMonth={isCurrentMonth}
                  isToday={isToday}
                >
                  <DayNumber isToday={isToday}>
                    {format(date, 'd')}
                  </DayNumber>
                  {dayEvents.map((event, eventIndex) => (
                    <div key={eventIndex}>
                      <EventTitle>
                        <EventDot />
                        {event.title}
                      </EventTitle>
                      <EventDetails>
                        <h4>{event.title}</h4>
                        <p><strong>Location:</strong> {event.location}</p>
                        <p>{event.description}</p>
                      </EventDetails>
                    </div>
                  ))}
                </CalendarCell>
              );
            })}
          </CalendarGrid>
        </CalendarContainer>
      </ContentWrapper>
    </PageContainer>
  );
};

export default EventCalendarPage;