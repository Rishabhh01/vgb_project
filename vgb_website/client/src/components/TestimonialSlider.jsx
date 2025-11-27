// client/src/components/TestimonialSlider.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialSlider = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Default testimonials if none are provided
  const defaultTestimonials = [
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
  
  const testimonialsToUse = testimonials || defaultTestimonials;
  
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);
  
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialsToUse.length);
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + testimonialsToUse.length) % testimonialsToUse.length);
      setIsAnimating(false);
    }, 500);
  };
  
  return (
    <SliderContainer>
      <SliderControls>
        <SliderButton onClick={prevSlide}>
          <FaChevronLeft />
        </SliderButton>
        <SliderProgress>
          {testimonialsToUse.map((_, index) => (
            <ProgressDot 
              key={index} 
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </SliderProgress>
        <SliderButton onClick={nextSlide}>
          <FaChevronRight />
        </SliderButton>
      </SliderControls>
      
      <SliderContent isAnimating={isAnimating}>
        <QuoteIcon>
          <FaQuoteLeft />
        </QuoteIcon>
        
        <TestimonialQuote>
          {testimonialsToUse[currentSlide].quote}
        </TestimonialQuote>
        
        <TestimonialAuthor>
          <AuthorImage src={testimonialsToUse[currentSlide].image} alt={testimonialsToUse[currentSlide].name} />
          <AuthorInfo>
            <AuthorName>{testimonialsToUse[currentSlide].name}</AuthorName>
            <AuthorRole>{testimonialsToUse[currentSlide].role}</AuthorRole>
          </AuthorInfo>
        </TestimonialAuthor>
      </SliderContent>
    </SliderContainer>
  );
};

// Animations
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled Components
const SliderContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const SliderContent = styled.div`
  position: relative;
  padding: 40px 20px 30px;
  text-align: center;
  animation: ${props => props.isAnimating ? fadeOut : fadeIn} 0.5s ease-in-out;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: #cd232e;
  opacity: 0.5;
  margin-bottom: 20px;
`;

const TestimonialQuote = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  font-style: italic;
  margin-bottom: 30px;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f0f0f0;
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;

const AuthorRole = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SliderButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    border-color: #cd232e;
    color: #cd232e;
  }
`;

const SliderProgress = styled.div`
  display: flex;
  gap: 10px;
`;

const ProgressDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#cd232e' : '#ddd'};
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? '#cd232e' : '#ccc'};
  }
`;

export default TestimonialSlider;