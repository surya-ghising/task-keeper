import React from 'react';
import Header from './components/header'
import Tasks from './components/tasks'
import TaskForm from './components/task_form'
import {useState} from 'react'
import './index.css'

function App() {

  const appName = 'Task Keeper'
  const [tasks, setTasks] = useState([
    {
      'id': 1,
      'title': 'Learn React',
      'description': 'Learn react to do basic UI stuffs.'
    },
    {
      'id': 2,
      'title': 'Make Project',
      'description': 'Make project to learn more realtime projects in React.'
    }
  ])

  return (
    <div className="container">
      <Header title={appName}/>
      <TaskForm />
      <Tasks tasks= {tasks}/>
    </div>
  );
}


// class App extends React.Component {
//   render() {
//     return <h1>Hello From a Class.</h1>
//   }
// }

export default App;
