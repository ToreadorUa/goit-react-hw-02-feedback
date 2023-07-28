import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';
import { Buttons } from './FeedbackStyled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = e => {
    const feedbackName = e.target.name;
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeedbackPercentage(i) {
    return Math.round((this.state.good / i) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percents = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <h1>Please leave feedback</h1>
        <Buttons>
          <button type="button" name="good" onClick={this.handleClick}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.handleClick}>
            Neutral
          </button>
          <button type="button" name="bad" onClick={this.handleClick}>
            Bad
          </button>
        </Buttons>
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percents={percents}
          />
        )}
      </>
    );
  }
}
