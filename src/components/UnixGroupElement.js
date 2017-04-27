import React from 'react';
import {ListGroupItem, Checkbox} from 'react-bootstrap';
export default class UnixGroupElement extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: true,
      selectedText: 'Selected'
    };
    this.handleClick = this
      .handleClick
      .bind(this);
  }
  handleClick(e) {
    if (this.state.selected) {
      this.setState({selected: false, selectedText: 'Not Selected'})
    } else {
      this.setState({selected: true, selectedText: 'Selected'})
    }
  }

  render() {
    return (
      <ListGroupItem>
        <h4 key={this.props.index}>{this.props.details.Name}</h4>
        <Checkbox
                        defaultChecked={true}
                        checked={this.state.selected}
                        onClick={this.handleClick}>{this.state.selectedText}</Checkbox>
      </ListGroupItem>
    );
  }

  componentDidMount() {
    //this.setState({ someKey: 'otherValue' });
  }
}
