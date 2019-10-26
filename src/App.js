import React from 'react';
import WidgetList from './WidgetList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWidget: '',
      widgets: [
        'Alice',
        'Bob',
      ],
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input type="text" value={this.state.newWidget} onChange={e => this.setState({ newWidget: e.target.value })} />
          <button type="submit">Save</button>
        </form>
        <WidgetList widgets={this.state.widgets} />
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState(
      function (currentState) {
        return {
          newWidget: '',
          widgets: [ ...currentState.widgets, currentState.newWidget ],
        };
      }
    );
  }
}

export default App;
