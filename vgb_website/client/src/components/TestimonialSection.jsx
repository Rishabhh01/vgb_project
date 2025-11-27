import { useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Farzana Suri',
      profession: 'Coaching',
      location: 'India',
      quote: 'BNI has shown me how to raise the bar and rewrite my business blueprint.',
      image: 'https://web-assets.same.dev/1537585380/2465645835.png'
    },
    {
      id: 2,
      name: 'Jennie B',
      profession: 'Sales',
      location: 'United States',
      quote: 'Over 86% of my clients come through referrals from BNI Members.',
      image: 'https://web-assets.same.dev/3741261992/3615683701.png'
    },
    {
      id: 3,
      name: 'Sudhindra R',
      profession: 'Digital Marketing',
      location: 'India',
      quote: 'It is a must-have platform to grow oneself, build a network, and expand one\'s business.',
      image: 'https://web-assets.same.dev/645897380/1268271834.png'
    },
    {
      id: 4,
      name: 'Dr. Adriana Cortés',
      profession: 'Health & Wellness',
      location: 'Colombia',
      quote: 'There is no strategy that benefits so many areas in one\'s life than BNI!',
      image: 'https://web-assets.same.dev/1088323696/1053151379.png'
    },
    {
      id: 5,
      name: 'Kent Raymer',
      profession: 'Construction',
      location: 'United States',
      quote: 'I\'ve shifted my business to one developed via referrals with zero competition.',
      image: 'https://web-assets.same.dev/3670313755/3044472475.png'
    },
    {
      id: 6,
      name: 'Rafael Lins',
      profession: 'Pest Control',
      location: 'Brazil',
      quote: 'BNI has been a fundamental networking tool for my and my company\'s growth.',
      image: 'https://web-assets.same.dev/1106594397/3575778435.png'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <TestimonialContainer>
      <div className="container">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
              <TestimonialProfile>
                <TestimonialImage src={testimonial.image} alt={testimonial.name} />
                <TestimonialInfo>
                  <TestimonialName>{testimonial.name}</TestimonialName>
                  <TestimonialPosition>
                    {testimonial.profession}, {testimonial.location}
                  </TestimonialPosition>
                </TestimonialInfo>
              </TestimonialProfile>
            </TestimonialCard>
          ))}
        </Slider>
      </div>
      <TestimonialDisclaimer>
        *Disclaimer: This information is based on historical BNI Member self-reported data as of August 5, 2024, and represents collective results from BNI Members worldwide over the last 12 months. Errors in self-reporting of data or in subsequent analysis are possible. Therefore, the information herein should only be viewed as representative in nature.
      </TestimonialDisclaimer>
    </TestimonialContainer>
  );
};

const TestimonialContainer = styled.section`
  padding: 80px 0;
  background-color: var(--primary-color);
  color: #fff;
  position: relative;

  .slick-track {
    display: flex !important;
  }

  .slick-slide {
    height: inherit !important;
    display: flex !important;
    justify-content: center;
    align-items: stretch;

    > div {
      height: 100%;
      width: 100%;
    }
  }

  .slick-prev, .slick-next {
    &:before {
      font-size: 24px;
    }
  }

  .slick-prev {
    left: -30px;
  }

  .slick-next {
    right: -30px;
  }
`;

const TestimonialCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 30px;
  margin: 10px;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialQuote = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
`;

const TestimonialProfile = styled.div`
  display: flex;
  align-items: center;
`;

const TestimonialImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

const TestimonialInfo = styled.div``;

const TestimonialName = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const TestimonialPosition = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const TestimonialDisclaimer = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
  max-width: 1000px;
  margin: 40px auto 0;
  text-align: center;
  padding: 0 20px;
`;

export default TestimonialSection;
