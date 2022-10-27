import { useState } from "react";


import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

import { GlobalStyle } from "./GlobalStyles";
import { Box } from "Box";

export const App = () => {

  const options = ['good', 'neutral', 'bad'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countTotalFeedback = () => {
    return (good + neutral + bad);
  }
  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = countTotalFeedback() ? (good / total) * 100 : 0;
    return Number(result.toFixed(0));
  }
  
  

  const onLeaveFeedback = type => {

    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        throw new Error('Unknows type')
    }
  }

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <Box display='flex' justifyContent='center' p='24px'>

      <Section title='Please leave feedback'>
        
        <Box display='flex' gridGap='20px' p='16px'>
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Box>

        {!total
          ? <Notification message="There is no feedback" />
          : <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback} />} 
            
      </Section>
      <GlobalStyle />
    </Box>  
  )

}

// export class App extends Component{
//   state = {
//       good: 0,
//       neutral: 0,
//       bad: 0,
//   }

 

//   onLeaveFeedback = (propName) => {
//     this.setState((prevState) => {
//       const value = prevState[propName];
//       return {
//         [propName]: value + 1
//       }
//     })
//   }
  
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return (good + neutral + bad);
//   }

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const result = this.countTotalFeedback() ? (this.state.good / total) * 100 : 0;
//     return Number(result.toFixed(0));
//     }

//   render() {

//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();

//     return (
      // <Box display='flex' justifyContent='center' p='24px'>

      //   <Section title='Please leave feedback'>
      //     <Box display='flex' gridGap='20px' p='16px'>
      //       <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
      //     </Box>

      //     {!total
      //       ? <Notification message="There is no feedback" />
      //       : <Statistics
      //           good={good}
      //           neutral={neutral}
      //           bad={bad}
      //           total={total}
      //           positiveFeedback={positiveFeedback} />} 
            
      //   </Section>

      // <GlobalStyle />
      // </Box>  
//     )}
// }



