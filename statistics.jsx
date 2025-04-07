const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = total === 0 ? 0 : (good - bad) / total;
    const positive = total === 0 ? "0%" : ((good / total) * 100).toFixed(1) + "%";
  
    if (total === 0) {
      return <p>No feedback given</p>;
    }
  
    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Average: {average.toFixed(1)}</p>
        <p>Positive: {positive}</p>
      </div>
    );
  };
  
  2. Update your App component:
  
  import { useState } from 'react';
  
  const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
  
    return (
      <div>
        <h1>Give Feedback</h1>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
  
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  };
  export default App;