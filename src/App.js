import React from 'react';
import Header from './components/header'

function App() {

  const appName = 'Task Keeper'

  return (
    <div className="container">
      <Header title={appName}/>
    </div>
  );
}


// class App extends React.Component {
//   render() {
//     return <h1>Hello From a Class.</h1>
//   }
// }

export default App;
