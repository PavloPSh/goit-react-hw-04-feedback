import { Component } from "react";


import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

import { GlobalStyle } from "./GlobalStyles";



export class App extends Component{
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }

  onLeaveFeedback = (propName) => {
    this.setState((prevState) => {
      const value = prevState[propName];
      return {
        [propName]: value + 1
      }
    })
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const result = this.countTotalFeedback() ? (this.state.good / total) * 100 : 0;
    return Number(result.toFixed(0));
    }

  render() {

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Section title='Please leave feedback'>

        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />

        
        {!total
          ? <Notification message="There is no feedback" />
          : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
            positiveFeedback={positiveFeedback} />} 
        
        <GlobalStyle />

      </Section>
      
    )}
}



