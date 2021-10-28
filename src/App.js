import './App.css';
import React from 'react';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import FormContainer  from './components/Form/FormContainer';
import UsersContainer from './components/Users/UsersContainer';


export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <UsersContainer/>
      <FormContainer/>
    </div>
  );
}


