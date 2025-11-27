import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <div className="container">
        <NotFoundContent>
          <NotFoundImage src="/vgblogo.png" alt="VGB Logo" />
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundText>Oops! The page you're looking for cannot be found.</NotFoundText>
          <NotFoundDescription>
            The page might have been moved, deleted, or maybe you mistyped the URL.
          </NotFoundDescription>
          <HomeButton to="/">Go to Homepage</HomeButton>
        </NotFoundContent>
      </div>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  padding: 100px 0;
  text-align: center;
  background-color: #f8f8f8;
  min-height: 60vh;
  display: flex;
  align-items: center;
`;

const NotFoundContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const NotFoundImage = styled.img`
  max-width: 150px;
  margin-bottom: 30px;
`;

const NotFoundTitle = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const NotFoundText = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--secondary-color);
`;

const NotFoundDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: #fff;
  font-weight: 600;
  padding: 12px 30px;
  border-radius: 30px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b01c26;
  }
`;

export default NotFoundPage;
