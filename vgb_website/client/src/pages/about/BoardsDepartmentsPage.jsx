// client/src/pages/about/BoardsDepartmentsPage.jsx
import React from 'react';
import styled from 'styled-components';
import { FaBuilding, FaUsers } from 'react-icons/fa';
import DepartmentList from '../../components/DepartmentsSection';

const BoardsDepartmentsPage = () => {
  return (
    <PageContainer>
      {/* Custom Banner for Boards & Departments */}
      <BoardsBanner>
        <BannerOverlay>
          <BannerTitle>Boards & Departments</BannerTitle>
          <BannerSubtitle>Our Organizational Structure</BannerSubtitle>
        </BannerOverlay>
      </BoardsBanner>

      <ContentWrapper>
        {/* Intro Section */}
        <IntroSection>
          <IconWrapper>
            <FaBuilding size={55} />
          </IconWrapper>
          <Title>Welcome to Our Boards & Departments</Title>
          <Subtitle>Working together for a better future</Subtitle>
          <Description>
            We manage over 108 departments, each contributing a unique expertise 
            to further the mission of Vishwa Guru Bharat. Below is an overview 
            of the various boards and departments within our organization.
          </Description>
        </IntroSection>

        {/* Department Grid (imported from a separate component) */}
        <DepartmentList />

        {/* Call-to-Action Section */}
        <CallToAction>
          <CTAIcon>
            <FaUsers size={55} />
          </CTAIcon>
          <CTAContent>
            <CTAHeading>Interested in Joining Us?</CTAHeading>
            <CTAText>
              We welcome new volunteers and members who are passionate 
              about making a difference. Contact us to learn more about 
              open roles in our boards and departments.
            </CTAText>
            <CTAButton href="mailto:info@vishwagurubharat.org">Get in Touch</CTAButton>
          </CTAContent>
        </CallToAction>
      </ContentWrapper>
    </PageContainer>
  );
};

export default BoardsDepartmentsPage;

/* ---------- Styled Components ---------- */

const PageContainer = styled.div`
  background-color: #f8f9fa;
  padding-bottom: 60px;
`;

/* --------- Custom Banner Component --------- */
const BoardsBanner = styled.div`
  width: 100%;
  height: 350px; /* Adjust height as needed */
  background-image: url('https://via.placeholder.com/1200x350.png?text=Boards+%26+Departments');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* dark overlay for readability */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BannerTitle = styled.h1`
  color: #fff;
  font-size: 2.8rem;
  margin: 0;
`;

const BannerSubtitle = styled.h3`
  color: #f0f0f0;
  font-size: 1.6rem;
  margin-top: 10px;
`;

/* --------- Content Wrapper and Intro Section --------- */
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const IntroSection = styled.section`
  text-align: center;
  margin-bottom: 50px;
`;

const IconWrapper = styled.div`
  color: #cd232e;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #cd232e;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  color: #666;
  margin-bottom: 20px;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: #444;
  font-size: 1rem;
`;

/* --------- Call-to-Action Section --------- */
const CallToAction = styled.section`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  margin-top: 50px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CTAIcon = styled.div`
  color: #cd232e;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const CTAContent = styled.div`
  max-width: 600px;
`;

const CTAHeading = styled.h2`
  color: #cd232e;
  margin-bottom: 10px;
`;

const CTAText = styled.p`
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: #cd232e;
  color: #fff;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
  
  &:hover {
    background-color: #b91d27;
  }
`;
