import React from 'react';
import AppContext, { WithAppContext } from './AppContext';

function getPropsFromContext(context) {
  return {
    onSubmit: context.addWidget,
  };
}

class WidgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widget: '',
    };
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input type="text" value={this.state.widget} onChange={e => this.setState({ widget: e.target.value })} />
        <button type="submit">Save</button>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    const widget = this.state.widget;
    this.props.onSubmit(widget);
    this.setState({ widget: '' });
  }
}

const WidgetFormWithAppContext = WithAppContext(getPropsFromContext, WidgetForm);

export default WidgetFormWithAppContext;
