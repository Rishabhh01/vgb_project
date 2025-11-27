import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {
  FaBars, FaTimes, FaUser, FaFacebookF, FaTwitter, FaInstagram, FaYoutube,
  FaPhone, FaEnvelope, FaHandHoldingHeart, FaTree, FaStore, FaChevronDown,
  FaOm, FaLeaf, FaWater, FaPrayingHands, FaBook, FaSun, FaSearch, FaSignOutAlt,
  /* Added these extra icons for About dropdown items */
  FaEye, FaSitemap, FaCalendarAlt, FaUserFriends
} from 'react-icons/fa';
import AuthContext from '../context/AuthContext';

/* Animations */
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const ripple = keyframes`
  0% { width: 0; height: 0; opacity: 0.4; }
  100% { width: 200%; height: 200%; opacity: 0; }
`;

/* Layout Components */
const HeaderWrapper = styled.header`
  background: #fff;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    position: fixed;
    top: ${({ hideTopBar }) => hideTopBar ? '0' : '40px'};
    left: 0;
    right: 0;
    transition: top 0.3s ease;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

/* Top Bar */
const TopBar = styled.div`
  background: linear-gradient(90deg, #cd232e, #a91d28);
  color: #fff;
  padding: 8px 0;
  width: 100%;
  z-index: 1001;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: ${({ hideOnScroll }) => hideOnScroll ? 'translateY(-100%)' : 'translateY(0)'};
  }
`;

const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

/* Social Icons */
const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
`;

const IconLink = styled.a`
  color: #fff;
  background: rgba(255,255,255,0.15);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255,255,255,0.25);
    transform: translateY(-2px);
  }
`;

/* Contact Info */
const ContactInfo = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  gap: 8px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

/* Main Navigation */
const MainNav = styled.div`
  padding: 15px 0;

  @media (max-width: 768px) {
    padding: 12px 0;
  }
`;

const MainNavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Logo */
const LogoWrapper = styled.div`
  flex-shrink: 0;
`;

const LogoImg = styled.img`
  height: 55px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    height: 45px;
  }
`;

/* Navigation */
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

/* Mobile Menu Overlay */
const MobileOverlay = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
`;

/* Navigation Menu */
const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0 15px;
  background: #f7f7f7;
  border-radius: 25px;

  @media (max-width: 992px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 280px;
    height: 100vh;
    flex-direction: column;
    background: #fff;
    padding: 60px 25px 25px;
    border-radius: 0;
    box-shadow: -5px 0 20px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    z-index: 1000;
    overflow-y: auto;
  }
`;

const MobileClose = styled.button`
  display: none;

  @media (max-width: 992px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 15px;
  transition: all 0.2s ease;

  &:hover {
    color: #cd232e;
  }

  @media (max-width: 992px) {
    padding: 14px 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 16px;
  }
`;

const NavLinkSpan = styled.span`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 15px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #cd232e;
  }

  @media (max-width: 992px) {
    padding: 14px 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 16px;
  }
`;

/* Dropdown */
const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 220px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  border-radius: 8px;
  padding: 10px 0;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(10px)')};
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
  z-index: 10;

  @media (max-width: 992px) {
    position: static;
    box-shadow: none;
    border-left: 2px solid #f0f0f0;
    border-radius: 0;
    margin: 0 0 10px 15px;
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    max-height: ${({ isVisible }) => (isVisible ? '500px' : '0')};
    overflow: hidden;
    transition: opacity 0.3s ease, max-height 0.3s ease;
  }
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  padding: 10px 15px;
  transition: all 0.2s ease;

  &:hover {
    background: #f9f9f9;
    color: #cd232e;
  }

  @media (max-width: 992px) {
    padding: 12px 15px;
  }
`;

const DropdownIcon = styled.span`
  display: inline-flex;
  width: 28px;
  height: 28px;
  background: #f5f5f5;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #cd232e;
`;

const ChevronIcon = styled(FaChevronDown)`
  margin-left: 8px;
  font-size: 12px;
  transition: transform 0.2s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

/* Mobile Toggle */
const MobileToggle = styled.button`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    padding: 8px;
  }
`;

/* Auth Sections */
const AuthDesktop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 5px;
  min-width: 110px; /* Ensures consistent width regardless of content */

  @media (max-width: 992px) {
    display: none;
  }
`;

const AuthMobile = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }
`;

/* Buttons */
const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  font-size: 15px;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #cd232e;
    border-color: #cd232e;
  }

  @media (max-width: 992px) {
    justify-content: center;
    width: 100%;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  font-size: 15px;
  color: #333;
  background: none;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #cd232e;
    border-color: #cd232e;
  }

  @media (max-width: 992px) {
    justify-content: center;
    width: 100%;
  }
`;

const ProfileButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 15px;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #cd232e;
  }

  @media (max-width: 992px) {
    justify-content: center;
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background: #cd232e;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 8px;
  flex-shrink: 0;
`;

const DonateButton = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background: #cd232e;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  border-radius: 25px;
  text-decoration: none;
  overflow: hidden;
  animation: ${pulse} 2.5s infinite;
  box-shadow: 0 4px 10px rgba(205,35,46,0.25);
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #b91d27;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(205,35,46,0.35);
  }

  @media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }
`;

const DonateText = styled.span`
  position: relative;
  z-index: 1;
`;

/* Search 
const SearchIcon = styled.div`
  font-size: 18px;
  color: #333;
  cursor: pointer;
  transition: color 0.2s ease;
  margin-left: 5px;

  &:hover {
    color: #cd232e;
  }
`;
*/

/* Alert Banner */
const MembershipAlert = styled.div`
  background: #fff9e6;
  color: #7d6e32;
  text-align: center;
  padding: 10px 0;
  font-size: 0.9rem;
`;

const MembershipLink = styled(Link)`
  color: #cd232e;
  font-weight: 600;
  margin-left: 8px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/* Header Component */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // VGB Projects dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 1) NEW state + ref for About dropdown
  const [dropdownOpenAbout, setDropdownOpenAbout] = useState(false);
  const dropdownRefAbout = useRef(null);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // ----------- VGB Projects Mouse Enter/Leave -----------
  const handleMouseEnter = () => {
    if (window.innerWidth > 992) {
      setDropdownOpen(true);
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 992) {
      setDropdownOpen(false);
    }
  };

  // ----------- About Mouse Enter/Leave -----------
  const handleMouseEnterAbout = () => {
    if (window.innerWidth > 992) {
      setDropdownOpenAbout(true);
    }
  };
  const handleMouseLeaveAbout = () => {
    if (window.innerWidth > 992) {
      setDropdownOpenAbout(false);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // For VGB Projects
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      // For About
      if (dropdownRefAbout.current && !dropdownRefAbout.current.contains(e.target)) {
        setDropdownOpenAbout(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'visible';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [menuOpen]);

  // Add scroll handler for TopBar - only for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setHideTopBar(true);
        } else {
          setHideTopBar(false);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  // Toggle for mobile
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  // 2) NEW toggle for About (mobile)
  const handleDropdownToggleAbout = (e) => {
    e.preventDefault();
    setDropdownOpenAbout(!dropdownOpenAbout);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    setMenuOpen(false);
  };

  return (
    <>
      <TopBar hideOnScroll={hideTopBar}>
        <Container>
          <TopBarContent>
            <SocialIcons>
              <IconLink
                href="https://www.facebook.com/vishwagurubharattrust"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </IconLink>
              <IconLink href="#" aria-label="Twitter">
                <FaTwitter />
              </IconLink>
              <IconLink href="#" aria-label="Instagram">
                <FaInstagram />
              </IconLink>
              <IconLink href="#" aria-label="YouTube">
                <FaYoutube />
              </IconLink>
            </SocialIcons>
            <ContactInfo>
              <ContactItem href="tel:+919103544414">
                <FaPhone />
                +91-9103544414
              </ContactItem>
              <ContactItem href="mailto:info@vishwagurubharat.org">
                <FaEnvelope />
                info@vishwagurubharat.org
              </ContactItem>
            </ContactInfo>
          </TopBarContent>
        </Container>
      </TopBar>
      <HeaderWrapper hideTopBar={hideTopBar}>
        {/* Main Navigation */}
        <MainNav>
          <Container>
            <MainNavContent>
              {/* Logo */}
              <LogoWrapper>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <LogoImg src="/vgblogo.png" alt="Vishwa Guru Bharat" />
                </Link>
              </LogoWrapper>

              <NavContainer>
                {/* Mobile Menu Overlay */}
                <MobileOverlay isOpen={menuOpen} onClick={handleToggleMenu} />

                {/* Navigation Menu */}
                <NavMenu isOpen={menuOpen}>
                  <MobileClose onClick={handleToggleMenu}>
                    <FaTimes />
                  </MobileClose>

                  {/* 3) REPLACED the single About item with a dropdown */}
                  <NavItem
                    ref={dropdownRefAbout}
                    onMouseEnter={handleMouseEnterAbout}
                    onMouseLeave={handleMouseLeaveAbout}
                  >
                    <NavLinkSpan onClick={handleDropdownToggleAbout}>
                      <FaOm style={{ marginRight: '8px', color: '#cd232e' }} />
                      About Us
                      <ChevronIcon $isOpen={dropdownOpenAbout} />
                    </NavLinkSpan>
                    <DropdownContent isVisible={dropdownOpenAbout}>
                      <DropdownItem
                        to="/about/vision-mission"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpenAbout(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaEye />
                        </DropdownIcon>
                        Vision &amp; Mission
                      </DropdownItem>

                      <DropdownItem
                        to="/about/sankalp"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpenAbout(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaPrayingHands />
                        </DropdownIcon>
                        Sankalp
                      </DropdownItem>

                      <DropdownItem
                        to="/about/boards-departments"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpenAbout(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaSitemap />
                        </DropdownIcon>
                        Boards &amp; Departments
                      </DropdownItem>

                      <DropdownItem
                        to="/about/EventCalendar"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpenAbout(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaCalendarAlt />
                        </DropdownIcon>
                        Event Calendar
                      </DropdownItem>

                      <DropdownItem
                        to="/about/whos-who"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpenAbout(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaUserFriends />
                        </DropdownIcon>
                        Who's Who
                      </DropdownItem>
                    </DropdownContent>
                  </NavItem>

                  {/* VGB Projects (unchanged) */}
                  <NavItem
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLinkSpan onClick={handleDropdownToggle}>
                      <FaHandHoldingHeart style={{ marginRight: '8px', color: '#cd232e' }} />
                      VGB Projects
                      <ChevronIcon $isOpen={dropdownOpen} />
                    </NavLinkSpan>

                    <DropdownContent isVisible={dropdownOpen}>
                      <DropdownItem
                        to="/gau"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaLeaf />
                        </DropdownIcon>
                        Gau Seva
                      </DropdownItem>
                      <DropdownItem
                        to="/ganga"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaWater />
                        </DropdownIcon>
                        Ganga Conservation
                      </DropdownItem>
                      <DropdownItem
                        to="/gayatri"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaSun />
                        </DropdownIcon>
                        Gayatri Awareness
                      </DropdownItem>
                      <DropdownItem
                        to="/gita"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaBook />
                        </DropdownIcon>
                        Gita Teachings
                      </DropdownItem>
                      <DropdownItem
                        to="/guru"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                      >
                        <DropdownIcon>
                          <FaPrayingHands />
                        </DropdownIcon>
                        Guru Initiatives
                      </DropdownItem>
                    </DropdownContent>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/experience" onClick={() => setMenuOpen(false)}>
                      <FaTree style={{ marginRight: '8px', color: '#cd232e' }} />
                      Strategic Alliance
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      as="a"
                      href="https://imageworldz.online"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                    >
                      <FaStore style={{ marginRight: '8px', color: '#cd232e' }} />
                      Arogya Store
                    </NavLink>
                  </NavItem>

                  {/* Mobile Auth */}
                  <AuthMobile>
                    {user ? (
                      <>
                        <ProfileButton to="/profile" onClick={() => setMenuOpen(false)}>
                          <Avatar>
                            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                          </Avatar>
                          My Profile
                        </ProfileButton>
                        <DonateButton to="/donate" onClick={() => setMenuOpen(false)}>
                          <DonateText>DONATE</DonateText>
                        </DonateButton>
                        <LogoutButton onClick={handleLogout}>
                          <FaSignOutAlt style={{ marginRight: '8px' }} />
                          Logout
                        </LogoutButton>
                      </>
                    ) : (
                      <>
                        <ButtonLink to="/login" onClick={() => setMenuOpen(false)}>
                          <FaUser style={{ marginRight: '8px' }} />
                          SignUp/Login
                        </ButtonLink>
                        <DonateButton to="/donate" onClick={() => setMenuOpen(false)}>
                          <DonateText>DONATE</DonateText>
                        </DonateButton>
                      </>
                    )}
                  </AuthMobile>
                </NavMenu>

                {/* Desktop Auth */}
                <AuthDesktop>
                  {user ? (
                    <ProfileButton to="/profile">
                      <Avatar>
                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                      </Avatar>
                      Profile
                    </ProfileButton>
                  ) : (
                    <ButtonLink to="/login">
                      <FaUser style={{ marginRight: '8px' }} />
                      Login
                    </ButtonLink>
                  )}
                </AuthDesktop>

                {/* Donate Button */}
                <DonateButton to="/donate">
                  <DonateText>DONATE</DonateText>
                </DonateButton>

                {/* Desktop Logout (Only when logged in) */}
                {user && (
                  <LogoutButton onClick={handleLogout} style={{ marginLeft: '5px' }}>
                    <FaSignOutAlt style={{ marginRight: '5px' }} />
                  </LogoutButton>
                )}

                {/* Mobile Menu Toggle */}
                <MobileToggle onClick={handleToggleMenu} aria-label="Toggle menu">
                  <FaBars />
                </MobileToggle>
              </NavContainer>
            </MainNavContent>
          </Container>
        </MainNav>

        {/* Membership Alert */}
        {user && user.membershipStatus === 'pending' && (
          <MembershipAlert>
            <Container>
              Complete your membership to access all features.
              <MembershipLink to="/profile">Go to your profile</MembershipLink>
            </Container>
          </MembershipAlert>
        )}
      </HeaderWrapper>
      <MainContentSpacer hideTopBar={hideTopBar} />
    </>
  );
};

const MainContentSpacer = styled.div`
  @media (max-width: 768px) {
    height: ${({ hideTopBar }) => hideTopBar ? '60px' : '100px'};
    transition: height 0.3s ease;
  }
`;

export default Header;

