import React from 'react';

export default class UnixGroupElement extends React.Component {
  constructor() {
    super();
    this.state = { selected: false };
  }

  render() {
        return (
            <div>
                <h4 key={this.props.index}>{this.props.details.Name}</h4>
            </div>
        );
  }

  componentDidMount() {
    //this.setState({ someKey: 'otherValue' });
  }
}

