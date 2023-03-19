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
        <h3>Page menu</h3>
        <h4 >
          <Link to="/Home">Go home</Link>
        </h4>
        <h4 >
          <Link to="/TextVisualizer">Page 1</Link>
        </h4>
        
    </div>

  );
}
const App: React.FunctionComponent = () => {
  return (
    <div>
      <Router>

        <Header />
        <Routes>
          <Route path='/Home' element={EditableBlock} />

          <Route path='/TextVisualizer' element={<ViewSource src={dummyPage} />} />

          <Route element={<div>404 time</div>} />

        </Routes>

      </Router>
      <h3>Example editable block</h3>
      
      <h3>End of test</h3>
      
    </div>
    
  ); 
}

export default App;
