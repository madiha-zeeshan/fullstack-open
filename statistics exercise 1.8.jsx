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
        <p>All: {total}</p>
        <p>Average: {average.toFixed(1)}</p>
        <p>Positive: {positive}</p>
      </div>
    );
  };