import React from 'react';
import AppFuncElement from './AppFuncElement.js'
import {Row, Col, Grid, Panel, ListGroup} from 'react-bootstrap';

const primaryUserDetails = { 
  backgroundColor: "#fff"
}

const info = { 

}

export default class AppFuncList extends React.Component {
  constructor() {
    super();
    //this.state = { someKey: 'someValue' };
  }

  render() {
    let appFuncs = this
      .props
      .AppFuncDetails
      .map((group, index) => {
        return (<AppFuncElement key={index} details={group}/>);
      });
    //console.log("insideADGroupList", adGroups);
    return (
      <div>
        <Panel
          style={primaryUserDetails}
          header="App Funcs"
          collapsible
          defaultExpanded>
          <ListGroup>
            {appFuncs}
          </ListGroup>
        </Panel>
      </div>
    );
  }

  componentDidMount() {
    //this.setState({ someKey: 'otherValue' });
  }
}
