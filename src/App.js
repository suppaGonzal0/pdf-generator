import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Form from './components/form/Form';
import Pdf from './components/pdf/Pdf';
import {context} from './Context'

function App() {

  const [name, setName] = useState();
    const [age, setAge] = useState();
    const [country, setContry] = useState();

  return (
    <div className="App">
      <context.Provider value={{setName, setAge, setContry, name, age, country}}>
      <Router>
        <Switch>
        <Route exact path="/" component={Form}/>
        <Route path="/pdf" component={Pdf}/>
        </Switch>
      </Router>
     </context.Provider>
    </div>
  );
}

export default App;
