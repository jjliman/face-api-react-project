// import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
// import Logo from './components/Logo/Logo';
// import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
// import FaceRecognition from './components/FaceRecognition/FaceRecognition';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <Logo />
        <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
