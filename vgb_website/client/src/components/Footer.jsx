import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube,
  FaHandHoldingHeart, FaLeaf, FaWater, FaSun, FaBook, FaPrayingHands, FaHeart,
  FaChevronRight, FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <FooterTop>
        <Container>
          <FooterContent>
            <FooterSection>
              <FooterLogo>
                <img src="/vgblogo.png" alt="Vishwa Guru Bharat Logo" />
              </FooterLogo>
              <FooterText>
                Vishwa Guru Bharat is dedicated to reestablishing India as a global leader in spiritual wisdom,
                sustainable practices, and holistic development through Vedic principles and ancient knowledge.
              </FooterText>
              <SocialLinks>
                <SocialLink href="https://facebook.com/vishwagurubharattrust" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </SocialLink>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </SocialLink>
                <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </SocialLink>
                <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube />
                </SocialLink>
              </SocialLinks>
              <DonateButton to="/donate">
                <FaHeart /> Make a Donation
              </DonateButton>
            </FooterSection>

            <FooterSection>
              <FooterHeading>Quick Links</FooterHeading>
              <FooterLinksList>
                <FooterLinkItem>
                  <FooterLink to="/"><FaChevronRight /> Home</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/about"><FaChevronRight /> About Us</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/team"><FaChevronRight /> Our Team</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/experience"><FaChevronRight /> VGB Experience</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/contact"><FaChevronRight /> Contact Us</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink as="a" href="https://imageworldz.online" target="_blank" rel="noopener noreferrer">
                    <FaChevronRight /> Community Store
                  </FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/donate"><FaChevronRight /> Support Our Cause</FooterLink>
                </FooterLinkItem>
              </FooterLinksList>
            </FooterSection>

            <FooterSection>
              <FooterHeading>Projects & Initiatives</FooterHeading>
              <FooterLinksList>
                <FooterLinkItem>
                  <FooterLink to="/gau"><FaChevronRight /> Gau Seva</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/ganga"><FaChevronRight /> Ganga Conservation</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/gayatri"><FaChevronRight /> Gayatri Awareness</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/gita"><FaChevronRight /> Gita Teachings</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/guru"><FaChevronRight /> Guru Initiatives</FooterLink>
                </FooterLinkItem>
              </FooterLinksList>
            </FooterSection>

            <FooterSection>
              <FooterHeading>Contact Us</FooterHeading>
              <ContactList>
                <ContactItem>
                  <ContactIcon>
                    <FaMapMarkerAlt />
                  </ContactIcon>
                  <ContactText>Jammu, Distt. Kishtwar, J&K, India</ContactText>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>
                    <FaPhone />
                  </ContactIcon>
                  <ContactText>
                    <a href="tel:+919103544414">+91-9103544414</a>
                  </ContactText>
                </ContactItem>
                <ContactItem>
                  <ContactIcon>
                    <FaEnvelope />
                  </ContactIcon>
                  <ContactText>
                    <a href="mailto:info@vishwagurubharat.org">info@vishwagurubharat.org</a>
                  </ContactText>
                </ContactItem>
              </ContactList>
              {/* <NewsletterBox>
                <NewsletterTitle>Subscribe to our newsletter</NewsletterTitle>
                <NewsletterForm>
                  <NewsletterInput type="email" placeholder="Your email address" />
                  <NewsletterButton type="submit">Subscribe</NewsletterButton>
                </NewsletterForm>
              </NewsletterBox> */}
            </FooterSection>
          </FooterContent>
        </Container>
      </FooterTop>

      <FooterMiddle>
        <Container>
          <FooterFeatures>
            <FeatureItem>
              <FeatureIcon><FaHandHoldingHeart /></FeatureIcon>
              <FeatureText>
                <FeatureTitle>5G Initiative</FeatureTitle>
                <FeatureDescription>Promoting our five-pillar approach to spiritual and environmental harmony</FeatureDescription>
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon><FaPrayingHands /></FeatureIcon>
              <FeatureText>
                <FeatureTitle>Vedic Wisdom</FeatureTitle>
                <FeatureDescription>Preserving and sharing ancient knowledge for modern challenges</FeatureDescription>
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon><FaLeaf /></FeatureIcon>
              <FeatureText>
                <FeatureTitle>Sustainable Living</FeatureTitle>
                <FeatureDescription>Promoting ecological balance and environmental consciousness</FeatureDescription>
              </FeatureText>
            </FeatureItem>
          </FooterFeatures>
        </Container>
      </FooterMiddle>

      <FooterBottom>
        <Container>
          <FooterBottomContent>
            <Copyright>
              &copy; {new Date().getFullYear()} Vishwa Guru Bharat | Bharatiya Vedic Sanatan Sanskriti Trust. All Rights Reserved.
            </Copyright>
            <FooterBottomLinks>
              <FooterBottomLink to="/terms">Terms of Service</FooterBottomLink>
              <FooterBottomLink to="/privacy">Privacy Policy</FooterBottomLink>
              <FooterBottomLink to="/sitemap">Sitemap</FooterBottomLink>
            </FooterBottomLinks>
            <BackToTopButton onClick={scrollToTop}>
              <FaArrowUp />
            </BackToTopButton>
          </FooterBottomContent>
        </Container>
      </FooterBottom>
    </FooterContainer>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContainer = styled.footer`
  color: #f1f1f1;
  font-family: 'Poppins', sans-serif;
`;

const FooterTop = styled.div`
  background-color: #2b2928;
  padding: 60px 0 40px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
`;

const FooterSection = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;

  img {
    max-width: 150px;
    filter: brightness(1.2);
  }
`;

const FooterText = styled.p`
  line-height: 1.7;
  color: #ccc;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    background-color: #cd232e;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(205, 35, 46, 0.3);
  }
`;

const DonateButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #cd232e;
  color: white;
  padding: 10px 18px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  font-size: 0.95rem;
  gap: 8px;

  &:hover {
    background-color: #a91d28;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(205, 35, 46, 0.3);
  }
`;

const FooterHeading = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 25px;
  position: relative;
  font-weight: 600;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #cd232e;
  }

  @media (max-width: 768px) {
    &:after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLinkItem = styled.li`
  margin-bottom: 12px;
`;

const FooterLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
  display: flex;
  align-items: center;

  svg {
    font-size: 12px;
    margin-right: 8px;
    color: #cd232e;
  }

  &:hover {
    color: #fff;
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    justify-content: center;

    &:hover {
      transform: none;
    }
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 25px 0;
`;

const ContactItem = styled.li`
  display: flex;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  color: #cd232e;
  margin-right: 15px;
  font-size: 18px;
  line-height: 1.6;
`;

const ContactText = styled.div`
  color: #ccc;
  line-height: 1.6;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const NewsletterBox = styled.div`
  margin-top: 25px;
`;

const NewsletterTitle = styled.h4`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 12px;
`;

const NewsletterForm = styled.form`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

const NewsletterInput = styled.input`
  padding: 10px 15px;
  border-radius: 4px 0 0 4px;
  border: none;
  outline: none;
  flex: 1;

  @media (max-width: 768px) {
    border-radius: 4px;
    width: 100%;
  }
`;

const NewsletterButton = styled.button`
  padding: 10px 15px;
  background-color: #cd232e;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #a91d28;
  }

  @media (max-width: 768px) {
    border-radius: 4px;
    width: 100%;
  }
`;

const FooterMiddle = styled.div`
  background-color: #222;
  padding: 30px 0;
`;

const FooterFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #cd232e, #a91d28);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  flex-shrink: 0;
`;

const FeatureText = styled.div`
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const FeatureTitle = styled.h4`
  color: #fff;
  margin: 0 0 5px 0;
  font-size: 1.1rem;
`;

const FeatureDescription = styled.p`
  color: #aaa;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterBottom = styled.div`
  background-color: #1a1a1a;
  padding: 20px 0;
`;

const FooterBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  color: #888;
  font-size: 0.9rem;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterBottomLink = styled(Link)`
  color: #888;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #cd232e;
  }
`;

const BackToTopButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #cd232e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #a91d28;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 20px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default Footer;
