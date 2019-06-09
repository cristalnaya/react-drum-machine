import React, { Component } from 'react';
import './App.scss';
import { drumPads } from './data';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      playAudio: null,
      drumPads
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  playClips = audio => {
    this[audio].play();
    this.setState({ playAudio: audio });
  };

  handleKeyPress = (e) => {
    switch(e.keyCode) {
      case 81:
        this.playClips('Q');
        break;
        case 87:
        this.playClips('W');
        break;
      case 69:
        this.playClips('E');
        break;
      case 65:
        this.playClips('A');
        break;
      case 83:
        this.playClips('S');
        break;
      case 68:
        this.playClips('D');
        break;
      case 90:
        this.playClips('Z');
        break;
      case 88:
        this.playClips('X');
        break;
      case 67:
        this.playClips('C');
        break;

        default:
          break;
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  
  render() {
    const { drumPads } = this.state;
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display">{this.state.playAudio}</div>
        <div className="pad-wrapper">
        {drumPads.map((pad, i) => {
          return (
            <div 
            key={i} 
            id={pad.id}
            className="drum-pad"
            onClick={() => {this.playClips(pad.text)}}
            >
              {pad.text}
              <audio
                ref={ref => {this[pad.text] = ref}}
                id={pad.idClip}
                className="clip"
                src={pad.src}
                >
              </audio>
            </div>
         )})
        }
        </div>
        </div>
      </div>
    );
  }
}

export default App;


