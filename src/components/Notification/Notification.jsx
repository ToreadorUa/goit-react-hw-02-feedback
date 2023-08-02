import { styled } from 'styled-components';

export const Notification = ({ message }) => <Message>{message}</Message>;

const Message = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
`;
