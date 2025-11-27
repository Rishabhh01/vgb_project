import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutFeature = () => {
  return (
    <FeatureContainer>
      <div className="container">
        <FeatureContent>
          <FeatureTitle>
            <SubTitle>Beyond Networking</SubTitle>
            <MainTitle>Build Your Professional Network</MainTitle>
          </FeatureTitle>

          <FeatureDescription>
            Build a trusted network of like-minded professionals who not only care about your success but are eager to help you achieve it.
          </FeatureDescription>

          <FeatureTestimonial>
            <TestimonialContent>
              BNI has been a game-changer, expanding my network with like-minded professionals.
            </TestimonialContent>
            <TestimonialAuthor>
              Crystal Garcia<br />
              Business Development, USA
            </TestimonialAuthor>
          </FeatureTestimonial>
        </FeatureContent>

        <FeatureImageWrapper>
          <FeatureImage src="https://web-assets.same.dev/1698794521/1895046616.png" alt="Crystal Garcia" />
        </FeatureImageWrapper>
      </div>
    </FeatureContainer>
  );
};

const FeatureContainer = styled.section`
  padding: 80px 0;
  background-color: #2b2928;
  color: #fff;

  .container {
    display: flex;
    align-items: center;

    @media (max-width: 992px) {
      flex-direction: column;
    }
  }
`;

const FeatureContent = styled.div`
  flex: 1;
  padding-right: 50px;

  @media (max-width: 992px) {
    padding-right: 0;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const FeatureTitle = styled.div`
  margin-bottom: 25px;
`;

const SubTitle = styled.div`
  color: #ccc;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

const MainTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const FeatureTestimonial = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const TestimonialContent = styled.div`
  font-style: italic;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  font-weight: 600;
  line-height: 1.5;
`;

const FeatureImageWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const FeatureImage = styled.img`
  max-width: 320px;
  border-radius: 50%;
`;

export default AboutFeature;
