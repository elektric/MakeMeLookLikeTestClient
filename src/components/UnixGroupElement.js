import React from 'react';
import {ListGroupItem, Button, Grid, Row, Col} from 'react-bootstrap';
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
        <Grid>
          <Row>
            <Col sm={6} lg={6}>
              {this.props.details.Name}
            </Col>
            <Col sm={2} lg={2}>
              <Button onClick={this.handleClick} bsStyle={this.state.selected ? 'success' : 'danger'}>{this.state.selectedText}</Button>
            </Col>
          </Row>
        </Grid>
      </ListGroupItem>
    );
  }

  componentDidMount() {
    //this.setState({ someKey: 'otherValue' });
  }
}
