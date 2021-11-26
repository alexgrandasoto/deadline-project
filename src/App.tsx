import React, { Suspense } from 'react';
import './App.scss';
import Deadline from './Deadline';


const App: React.FC = () => {
  return (
    <Suspense fallback={LoadingDiv}>
      <Deadline />
    </Suspense>
  )
}


const LoadingDiv: React.FC = () => {
  return (
    <div>Loading...</div>
  )
}



export default App;
