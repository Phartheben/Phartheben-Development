import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

// class App extends Component {

const app = props => {
  const [ personsState, setPersonsState ] = useState({persons: [
          { name: 'Max', age:'28'},
          { name: 'Manu', age:'23'},
          { name: 'Annie', age:'26'}
        ],
        otherState: 'some value'
      });

      console.log(personsState)

      const switchNameHandler = () => {
          //console.log('was clicked!') 
          //Don't do personsState.persons[0].name = 'Maximilian';
          setPersonsState({
            persons: [
            { name: 'Maximilian', age:'28'},
            { name: 'ManuUTD', age:'23'},
            { name: 'sTEPAnnie', age:'27'}
          ],
        otherState: personsState.otherState
      })
  }
    
    return (
      <div className="App">
        <h1>Hi, Phartheben here</h1>
        <p>25</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work?'));
  }

export default app;


//   state = {
//     persons: [
//       { name: 'Max', age:'28'},
//       { name: 'Manu', age:'23'},
//       { name: 'Annie', age:'26'}
//     ],
//     otherState: 'some value'
//   }

// switchNameHandler = () => {
//   //console.log('was clicked!') 
//   //Don't do personsState.persons[0].name = 'Maximilian';
//   this.setState({
//     persons: [
//     { name: 'Maximilian', age:'28'},
//     { name: 'ManuUTD', age:'23'},
//     { name: 'sTEPAnnie', age:'27'}
//   ]})
// }


//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, Phartheben here</h1>
//         <p>25</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     );
//     //return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work?'));
//   }
// }

// export default App;
