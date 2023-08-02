import { Buttons } from './FeedbackStyled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <Buttons>
    <button type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </Buttons>
);
