import styled from 'styled-components';

export const Card = styled.li`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.h3`
  padding-bottom: 6px;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const Link = styled.a`
  display: table;
  padding-top: 16px;
  font-weight: 700;
  font-size: 1rem;
`;
