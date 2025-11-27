import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PrivacySettings = ({ privacySettings, onUpdate }) => {
  const [settings, setSettings] = useState(privacySettings);

  const handleToggle = (field) => {
    const newSettings = {
      ...settings,
      [field]: !settings[field]
    };
    setSettings(newSettings);
    onUpdate(newSettings);
  };

  const fields = [
    { key: 'email', label: 'Email Address' },
    { key: 'phone', label: 'Phone Number' },
    { key: 'dateOfBirth', label: 'Date of Birth' },
    { key: 'address', label: 'Address' },
    { key: 'qualification', label: 'Qualification' },
    { key: 'occupation', label: 'Occupation' },
    { key: 'designation', label: 'Designation' },
    { key: 'socialMediaLinks', label: 'Social Media Links' }
  ];

  return (
    <Container>
      <Title>Privacy Settings</Title>
      <Description>
        Control which information is visible to other members.
      </Description>
      
      <SettingsList>
        {fields.map(({ key, label }) => (
          <SettingItem key={key}>
            <SettingLabel>{label}</SettingLabel>
            <ToggleButton
              type="button"
              isVisible={settings[key]}
              onClick={() => handleToggle(key)}
            >
              {settings[key] ? <FaEye /> : <FaEyeSlash />}
              {settings[key] ? 'Visible' : 'Hidden'}
            </ToggleButton>
          </SettingItem>
        ))}
      </SettingsList>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h3`
  color: #2b2928;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 20px;
  font-size: 0.9rem;
`;

const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.span`
  color: #444;
  font-weight: 500;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background: ${({ isVisible }) => isVisible ? '#e8f5e9' : '#fff4f4'};
  color: ${({ isVisible }) => isVisible ? '#2e7d32' : '#d32f2f'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ isVisible }) => isVisible ? '#c8e6c9' : '#ffcdd2'};
  }

  svg {
    font-size: 14px;
  }
`;

export default PrivacySettings; 