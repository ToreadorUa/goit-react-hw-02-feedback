import styled from 'styled-components';

export const Statistics = ({ good, bad, neutral, total, percents = 0 }) => (
  <div>
    <h2>Statistics</h2>
    <ul>
      <Li>Good: {good}</Li>
      <Li>Neutral: {neutral}</Li>
      <Li>Bad: {bad}</Li>
      <Li>Total: {total}</Li>
      <Li>Positive feedback: {percents}% </Li>
    </ul>
  </div>
);

const Li = styled.li`
  font-size: 20px;
`;
