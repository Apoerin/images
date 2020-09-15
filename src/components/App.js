import React, {Component} from 'react';
import '../App.css';
import ImageList from "./ImageList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
        index: 0
    };
  }

  //fetching images from url
  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
        .then(res => res.json())
        .then(data => {
            this.setState({ images: data });
        })
        .catch(err => {
            console.log('Error happened during fetching!', err);
        });
  }


  //onClick event to show next 3 images from array
  toNext = () => {
      this.setState({index: (this.state.index + 3)});
  }

  render() {
    return (
        <div className="container">
            <h2 className="title">Images list</h2>
            <ImageList data={this.state.images.slice(this.state.index, this.state.index + 3)}/>
            <button onClick={this.toNext} className="next-btn">Next</button>
        </div>
    )
  }

}

export default App;

