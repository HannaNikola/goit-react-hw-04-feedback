import { useState } from 'react';
import { FeedbackOptions } from '../Feedback/FeedbackOptions';
import { Statistics } from '../Statistic/Statistics';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import { ContenerDiv } from './App.styled';


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

 const handleFeedback = (type) => {
   
   switch (type) {
     case 'good':
       setGood((prevState) => prevState + 1);
       break;
     case 'neutral':
       setNeutral((prevState) => prevState + 1);
       break;
     case 'bad':
       setBad((prevState) => prevState + 1);
       break;
     default:
       break;
   }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    const total = countTotalFeedback();
    return total ? (good / total) * 100 : 0;
  }



    const total = countTotalFeedback();
  const positivePercentage = countPositivePercentage();
    const getFeedback = total > 0;


    return (
      <ContenerDiv>
        <Section title="Feedback">
          <h1>Please leave feedback</h1>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
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
