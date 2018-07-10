import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = { selectedFiles: null, showGrid: false };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit =this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({ selectedFiles: event.target.files });

    let files = Array.from(event.target.files);
    let destination = this.refs.destination;

    files.forEach((file, index) => {
      if(file.type.indexOf('image')!==-1) {
        let reader = new FileReader();

        reader.onload = function(e) {
          let img = new Image();
          img.src= e.target.result;

          destination.appendChild(img);
        }

        reader.readAsDataURL(file);
      }
    })
  }

  render() {
    return (
      <div className="App" >
        <input type="file" accept='image/*' onChange={this.handleChange} multiple/>
        <br />
        <div ref="destination"></div>
      </div>
    );
  }
}

export default App;
