import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

export default class App extends Component {
  render() {
    return (
      <>
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </>
    );
  }
}