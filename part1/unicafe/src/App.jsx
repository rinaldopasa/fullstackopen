import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  isNaN(value) && (value = 0);
  return (
    <tr>
      <td>{text}</td>
      <td>{text === "positive" ? value + " %" : value}</td>
    </tr>
  );
};

const Statistics = ({ feedbacks }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={feedbacks.good} />
          <StatisticLine text="neutral" value={feedbacks.neutral} />
          <StatisticLine text="bad" value={feedbacks.bad} />
          <StatisticLine text="all" value={feedbacks.all} />
        </tbody>
        <tfoot>
          <StatisticLine text="average" value={feedbacks.average} />
          <StatisticLine text="positive" value={feedbacks.positive} />
        </tfoot>
      </table>
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;

  const feedbacks = {
    good,
    neutral,
    bad,
    all,
    average: (good - bad) / all,
    positive: (good / all) * 100,
  };

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Unicafe App</h1>
      <h2>Give Feedback</h2>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics feedbacks={feedbacks} />
    </div>
  );
};

export default App;
