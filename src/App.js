import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score";

var userPoints = 0;
var highScore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    userScore: 0,
    highScore: 0
  };

  shuffle = arra1 => {
    var ctr = arra1.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  };

  clickFriend = index => {
    if (this.state.friends[index].clicked === true) {
      if (userPoints > this.state.highScore) {
        this.state.highScore = userPoints;
        this.state.userScore = 0;
      }
      userPoints = 0;
      for (let i = 0; i < this.state.friends.length; i++) {
        this.state.friends[i].clicked = false;
        console.log(this.state.friends[i].clicked);
      }
      alert(
        "Oops.  You already clicked that friend.  Click another friend to start a new game!"
      );
      this.forceUpdate();
    } else {
      userPoints++;
      this.state.userScore = userPoints;
      this.state.friends[index].clicked = true;
      const newFriends = this.shuffle(this.state.friends);
      // Filter this.state.friends for friends with an id not equal to the id being removed
      console.log(this.state.friends);
      // Set this.state.friends equal to the new friends array
      this.setState({ newFriends });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends Matters</Title>
        <Score
          userScore={this.state.userScore}
          highScore={this.state.highScore}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            index={friends.indexOf(friend)}
            occupation={friend.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
