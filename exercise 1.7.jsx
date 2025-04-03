import { useState } from 'react';

const App = () => {
  // State for feedback
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Calculate total feedback
  const total = good + neutral + bad;

  // Calculate average score
  const average = total === 0 ? 0 : (good - bad) / total;

  // Calculate positive feedback percentage
  const positive = total === 0 ? '0%' : ((good / total) * 100).toFixed(1) + '%';

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <h2>Statistics</h2>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>All: {total}</p>
          <p>Average: {average.toFixed(1)}</p>
          <p>Positive: {positive}</p>
        </div>
      )}
    </div>
  );
};

export default App;
