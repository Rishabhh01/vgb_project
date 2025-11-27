import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NewsCard = ({ image, date, title, excerpt, slug }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Date>{date}</Date>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      <ReadMoreLink to={`/news/${slug}`}>Read More</ReadMoreLink>
    </Card>
  );
};

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Date = styled.div`
  color: #666;
  font-size: 0.9rem;
  padding: 1rem 1rem 0.5rem;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #333;
`;

const Excerpt = styled.p`
  color: #666;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  color: #cd232e;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #a41b24;
  }
`;

export default NewsCard; 