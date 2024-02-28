import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const AnecdoteInfo = ({ title, anecdote, voted }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{anecdote}</p>
      <p>
        has <strong>{voted}</strong> votes
      </p>
    </div>
  );
};

const AnecdoteOfTheDay = (props) => {
  return (
    <div>
      <AnecdoteInfo
        title="Anecdote of the day"
        anecdote={props.anecdote}
        voted={props.voted}
      />
      <div>
        <Button onClick={props.onVote} text="vote" />
        <Button onClick={props.onNext} text="next anecdote" />
      </div>
    </div>
  );
};

const AnecdoteMostVoted = ({ anecdote, voted }) => {
  return (
    <AnecdoteInfo
      title="Anecdote with most votes"
      anecdote={anecdote}
      voted={voted}
    />
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const mostVoted = Math.max(...points);

  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  const handleVoted = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };
  const handleNext = () => setSelected(getRandomNumber(anecdotes.length));

  return (
    <div>
      <AnecdoteOfTheDay
        onVote={handleVoted}
        onNext={handleNext}
        anecdote={anecdotes[selected]}
        voted={points[selected]}
      />
      <AnecdoteMostVoted
        anecdote={anecdotes[points.indexOf(mostVoted)]}
        voted={mostVoted}
      />
    </div>
  );
};

export default App;
