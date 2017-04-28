import React from 'react';
import UnixGroupElement from './UnixGroupElement.js';
import {Row, Col, Grid, Panel, ListGroup} from 'react-bootstrap';

const primaryUserDetails = {
  backgroundColor: "#fff"
}

const info = {}

export default class UnixGroupList extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    let unixGroups = this
      .props
      .UnixGroupDetails
      .map((group, index) => {
        return (<UnixGroupElement key={index} details={group} ButtonHandler={this.props.ButtonHandler} disabled={this.props.disabled}/>);
      });
    //console.log("insideADGroupList", adGroups);
    return (
      <div>
        <Panel
          style={primaryUserDetails}
          header="UNIX Groups"
          collapsible
          defaultExpanded>
          <ListGroup>
            {unixGroups}
          </ListGroup>
        </Panel>
      </div>
    );
  }

  componentDidMount() {
    this.setState({someKey: 'otherValue'});
  }
}
