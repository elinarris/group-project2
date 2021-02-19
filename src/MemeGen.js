import React from "react";

class MemeGen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      memeStuff: [],
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        console.log();
        this.setState({
          memeStuff: data.data.memes,
          isLoaded: true,
        });
      });
  }

  render() {
    const { memeStuff, isLoaded } = this.state;
    const memes = memeStuff.map((meme) => (
      <div>
        <img src={meme.url}></img>
        <h1>{meme.name}</h1>
        <h2>{meme.url}</h2>
        <p>{meme.id}</p>
      </div>
    ));
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="App">{memes}</div>;
    }
  }
}

export default MemeGen;
