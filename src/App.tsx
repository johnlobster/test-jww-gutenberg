import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, } from 'react-router-dom';
import { Link, Routes } from 'react-router-dom'

import styles from './App.module.scss'

import ViewSource from './components/ViewSource/ViewSource'
import EditableBlock from './components/EditableBlock/EditableBlock'

const dummyPage: string[] = [
  "This",
  "Is",
  "A",
  "test",
]
const Header: React.FunctionComponent = () => {


  return (
    <div className={styles.header}>
      
        <h1>Editor testing</h1>
        <hr />
        <h3>Page menu</h3>
        <h4 >
          <Link to="/Home">Editor (home page)</Link>
        </h4>
        <h4 >
          <Link to="/TextVisualizer">Text representation</Link>
        </h4>
        <hr></hr>
    </div>

  );
}
const App: React.FunctionComponent = () => {
  return (
    <div>
      <Router>

        <Header />

        <Routes>
          <Route path='/Home' element={<EditableBlock src={dummyPage} />} />

          <Route path='/TextVisualizer' element={<ViewSource src={dummyPage} />} />

          <Route element={<div>404 time</div>} />

        </Routes>

      </Router>
            
    </div>
    
  ); 
}

export default App;
