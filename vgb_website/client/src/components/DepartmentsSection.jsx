// client/src/components/DepartmentList.jsx
import React from 'react';
import styled from 'styled-components';

const DepartmentSection = () => {
  const departments = [
    "Agriculture",
    "Art & Culture",
    "Education",
    "Environment & Forest",
    "Health & Family Welfare",
    "Yoga & Meditation",
    "Science & Technology",
    "Social Development",
    "Rural & Urban Development",
    "Information & Broadcasting",
    "Defence",
    "Law & Justice"
  ];

  return (
    <SectionContainer>
      <SectionTitle>Our Departments</SectionTitle>
      <DepartmentGrid>
        {departments.map((dept, index) => (
          <DepartmentItem key={index}>
            {dept}
          </DepartmentItem>
        ))}
      </DepartmentGrid>
    </SectionContainer>
  );
};

export default DepartmentSection;

// Styled Components
const SectionContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  margin: 40px 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  color: #cd232e;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
`;

const DepartmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

const DepartmentItem = styled.div`
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
  padding: 15px;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #cd232e;
    color: #fff;
  }
`;
