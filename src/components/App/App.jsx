import { Component } from 'react';
import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import { Statistics } from '../Statistic/Statistics';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import { ContenerDiv } from './App.styled';






export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((prevState) => ({ [type]: prevState[type] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const total = this.countTotalFeedback();
    return total ? (this.state.good / total) * 100 : 0;
  }


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.positivePercentage();
    const getFeedback = total > 0;


    return (
      <ContenerDiv>
        <Section title="Feedback">
          <h1>Please leave feedback</h1>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {getFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </ContenerDiv>
    );
  }
}
