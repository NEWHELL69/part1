const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Part = (props) => {
  return (
    <p>{props.part} {props.excercise}</p>
  );
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} excercise = {props.exercise1}></Part>
      <Part part = {props.part2} excercise = {props.exercise2}></Part>
      <Part part = {props.part3} excercise = {props.exercise3}></Part>
    </div>
  );
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content part1={part1.name} exercise1={part1.exercises} part2={part2.name} exercise2={part2.exercises} part3={part3.name} exercise3={part3.exercises}></Content>
      <Total total={part1.exercises+part2.exercises+part3.exercises}></Total>
    </div>
  )
}

export default App