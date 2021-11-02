import './App.sass';
import React from 'react';
import { Header } from './components/Header/Header';
import { ContentBig } from './components/Content/ContentBig';
import { ContentSmall } from './components/Content/ContentSmall';
import FormContainer  from './components/Form/FormContainer';
import UsersContainer from './components/Users/UsersContainer';
import PawsL from './images/Footprint-972x177.svg'
import PawsM from './images/Footprint-467x177.svg'
import PawsS from './images/Footprint-328x124.svg'
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div className="App">
      <div className='App-header'>
      <Header/>
      </div>
      <div className='App-content'>
      <ContentBig/>
      </div>
      <div className='App-container'>
      <ContentSmall/>
      <UsersContainer/>
      <FormContainer/>
      </div>
      <div className='App-paws'>
        <img src={PawsL} className='PawsL'/>
        <img src={PawsM} className='PawsM'/>
        <img src={PawsS} className='PawsS'/>
      </div>
      <div className='App-footer'>
      <Footer/>
      </div>
    </div>
  );
}


