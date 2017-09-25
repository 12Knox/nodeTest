import React from 'react';

export default class ValueInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value;
    }
  }
}
