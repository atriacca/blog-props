import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <BlogList />
        <BlogPost />
        <Footer />
      </div>
    );
  }
}

export default App;
