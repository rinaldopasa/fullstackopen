const Header = ({ title }) => <h2>{title}</h2>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const TotalExercises = ({ total }) => {
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
};

const Course = ({ course }) => {
  const total = course.parts.reduce((s, p) => s + p.exercises, 0);

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <TotalExercises total={total} />
    </div>
  );
};

export default Course;
