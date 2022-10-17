import { Component } from "react"



export class Feedback extends Component{
  state = {
      good: 0,
      neutral: 0,
      bad: 0,
  }
  
  addFeedback = (propName) => {
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
            <div>
              <h2>Please leave feedback</h2>
                  <div>
                      <button type="button" onClick={() => this.addFeedback('good')}>good</button>
                      <button type="button" onClick={() => this.addFeedback('neutral')}>neutral</button>
                      <button type="button" onClick={() => this.addFeedback('bad')}>bad</button>
                  </div>
              <h2>Satictics</h2>
                  <div>
                      <p>good:{ good }</p>
                      <p>neutral:{ neutral }</p>
                      <p>bad:{ bad }</p>
                      <p>total:{ total }</p>
                      <p>positive feedback: {positiveFeedback} %</p>
                  </div>

            </div>
        )
    }
}


 export class Counter extends Component {
  /* ... */

  handleIncrement = evt => {
    console.log("Increment button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // работает
  };

  handleDecrement = evt => {
    console.log("Decrement button was clicked!", evt); // работает
    console.log("this.props: ", this.props); // работает
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}