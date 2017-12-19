import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div id="FretemanApp">
        {this.props.children}
      </div>
    );
  }
}

export default App;
