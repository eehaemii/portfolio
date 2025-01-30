// components/styled.ts
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  padding: 20px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
`;
