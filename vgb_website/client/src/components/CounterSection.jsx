import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CounterSection = () => {
  const [counters, setCounters] = useState({
    years: 0,
    departments: 0,
    volunteers: 0,
    projects: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targets = {
    years: 31,
    departments: 108,
    volunteers: 1000,
    projects: 500
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;

    const countersIncrement = {
      years: targets.years / steps,
      departments: targets.departments / steps,
      volunteers: targets.volunteers / steps,
      projects: targets.projects / steps
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      if (currentStep <= steps) {
        setCounters({
          years: Math.min(Math.round(countersIncrement.years * currentStep), targets.years),
          departments: Math.min(Math.round(countersIncrement.departments * currentStep), targets.departments),
          volunteers: Math.min(Math.round(countersIncrement.volunteers * currentStep), targets.volunteers),
          projects: Math.min(Math.round(countersIncrement.projects * currentStep), targets.projects)
        });
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <SectionWrapper ref={sectionRef}>
      <Background>
        <Container>
          <Title>Our Impact Since 1992</Title>

          <CounterWrapper>
            <CounterBox>
              <Number>{counters.years}</Number>
              <Plus>+</Plus>
              <Label>Years of Service</Label>
            </CounterBox>

            <CounterBox>
              <Number>{counters.departments}</Number>
              <Label>Active Departments</Label>
            </CounterBox>

            <CounterBox>
              <Number>{counters.volunteers}</Number>
              <Plus>+</Plus>
              <Label>Dedicated Volunteers</Label>
            </CounterBox>

            <CounterBox>
              <Number>{counters.projects}</Number>
              <Plus>+</Plus>
              <Label>Successful Projects</Label>
            </CounterBox>
          </CounterWrapper>
        </Container>
      </Background>
    </SectionWrapper>
  );
};

// Simple mobile-first styled components
const SectionWrapper = styled.section`
  margin: 40px 0;
  position: relative;
`;

const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
              url('https://web-assets.same.dev/1591743426/2260428846.png') center/cover no-repeat;
  width: 100%;
  padding: 50px 0;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const CounterBox = styled.div`
  flex: 1;
  min-width: 140px;
  max-width: 250px;
  text-align: center;
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 576px) {
    flex-basis: calc(50% - 20px);
    min-width: 120px;
  }
`;

const Number = styled.div`
  color: #cd232e;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const Plus = styled.span`
  color: #cd232e;
  font-size: 1.8rem;
  font-weight: 700;
  display: inline-block;
  margin-left: 2px;
  vertical-align: super;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Label = styled.div`
  color: white;
  font-size: 1rem;
  margin-top: 10px;
  font-weight: 500;

  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-top: 5px;
  }
`;

export default CounterSection;
