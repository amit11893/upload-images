import React, { Component } from 'react';
import DropZone from 'react-dropzone';

class App extends Component{
    constructor(props) {
        super(props);
        this.state ={ preview: null}
        this.handleDrop = this.handleDrop.bind(this);
    }
    handleDrop([{ preview }]) {
        this.setState( { preview })
    }
    render() {
        return (
            <DropZone onDrop={this.handleDrop} accept="image/jpeg,image/tiff,image/gif"
            multiple={true} ></DropZone>
        )
    }
}
 export default App;