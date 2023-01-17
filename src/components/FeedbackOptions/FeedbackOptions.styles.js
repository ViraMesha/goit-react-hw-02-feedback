import styled from 'styled-components';

export const FeedbackOptionsList = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
  margin-bottom: 20px;
`;

export const FeedbackOptionsBtn = styled.button`
  padding: 10px 16px;
  width: 80px;
  cursor: pointer;
  border: 1px solid black;
  font-weight: 500;
  color: white;
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  outline: none;
  text-align: center;
  transition: background-color 100ms ease-in-out;

  &:hover,
  &:focus {
    background-color: #f082ac;
  }
`;
