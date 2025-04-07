const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
  
    if (total === 0) {
      return (
        <div>
          <h2>Statistics</h2>
          <p>No feedback given</p>
        </div>
      );
    }
  
    const average = ((good - bad) / total).toFixed(1);
    const positive = ((good / total) * 100).toFixed(1) + '%';
  
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={total} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive} />
          </tbody>
        </table>
      </div>
    );
  };
  