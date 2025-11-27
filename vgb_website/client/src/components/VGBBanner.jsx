import React from 'react';
import styled from 'styled-components';

const VGBBanner = ({ title, subtitle, backgroundImage }) => {
  return (
    <BannerContainer backgroundImage={backgroundImage}>
      <BannerOverlay>
        <BannerContent className="container">
          <LogoContainer>
            <LogoImage src="https://web-assets.same.dev/335287695/52350043.png" alt="Vishwa Guru Bharat Logo" />
            <TextContainer>
              <BannerTitle>{title || "Vishwa Guru Bharat"}</BannerTitle>
              <BannerSubtitle>{subtitle || "भारतीय वैदिक सनातन संस्कृति ट्रस्ट"}</BannerSubtitle>
            </TextContainer>
          </LogoContainer>
        </BannerContent>
      </BannerOverlay>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  height: 300px;
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'linear-gradient(135deg, #cd232e 0%, #b01c26 100%)'};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
`;

const BannerContent = styled.div`
  width: 100%;
  color: white;
  padding: 0 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BannerTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const BannerSubtitle = styled.p`
  font-size: 1.2rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export default VGBBanner;
