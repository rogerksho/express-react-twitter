import logo from './logo.svg';
import * as Twit from 'twit'
import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <TweetMaker />
    </div>
  );
}

class TweetMaker extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: []}
  }

  fetchTweet(username) {
    fetch('http://localhost:8080/user/' + username)
    .then(res => res.json())
    .then(res => this.setState({data: res.data}))
  }

  render() {
    return(
      <div>
        <div style={{marginBottom:'20px'}}>
          <p>Enter username: </p>
          <input id='handle'></input>
          <button onClick={() => {this.fetchTweet(document.getElementById('handle').value)}}>fetch</button>
        </div>
        
        <div>
          {this.state.data.map((tweet, index) => {
            return Tweet(tweet,index)
          })}
        </div>
      </div>
    )
  }
}

const Tweet = (tweet, index) => {
  return(
    <div key={index} style={{borderStyle:'solid',borderColor:'black'}}>
      <h2>tweet {index+1}</h2>
      <p>{tweet.text}</p>
    </div>
  )
}

export default App;