const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      <p>
        {parts.part1.name} {parts.part1.exercises}
      </p>
      <p>
        {parts.part2.name} {parts.part2.exercises}
      </p>
      <p>
        {parts.part3.name} {parts.part3.exercises}
      </p>
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts.part1.exercises + parts.part2.exercises + parts.part3.exercises}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = {
    part1: {
      name: 'Fundamentals of React',
      exercises: 10
    },
    part2: {
      name: 'Using props to pass data',
      exercises: 7
    },
    part3: {
      name: 'State of a component',
      exercises: 14
    }
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App