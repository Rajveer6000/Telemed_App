import React from 'react';
import addBackgroundImage from './src/components/addBackgroundImage/addBackgroundImage';
import Game from './src/components/Game/Game';
import Menu from './src/components/Menu/Menu';
import About from './src/components/About/About';

class App extends React.Component {
  state = {
    screen: 'menu',
    pausedGameState: null,
  };
  changeScreen = screen => {
    this.setState({screen});
  };
  pausedGameHandler = gameState => {
    this.setState({pausedGameState: gameState});
  };
  render() {
    switch (this.state.screen) {
      case 'menu':
        return (
          <Menu
            handler={this.changeScreen}
            resumeButton={this.state.pausedGameState && true}
          />
        );
      case 'game':
        return (
          <Game
            handler={this.changeScreen}
            paused={this.state.pausedGameState}
            pauseHandler={this.pausedGameHandler}
          />
        );
      case 'resume':
        return (
          <Game
            handler={this.changeScreen}
            paused={this.state.pausedGameState}
            pauseHandler={this.pausedGameHandler}
            resume={this.state.pausedGameState}
          />
        );
      case 'about':
        return <About handler={this.changeScreen} />;
      default:
        break;
    }
  }
}

export default addBackgroundImage(App);
