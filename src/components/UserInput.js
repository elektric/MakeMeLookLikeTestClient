import React from 'react';
import ListGroupItem from 'react-bootstrap';

const bot = {
  textAlign: 'right',
  //padding: '0px 0px 0px 0px'
}
const person = {
  //padding: '0px 0px 0px 0px'
}

export default class UserInput extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
           <ListGroupItem style={bot}><img
                src={"http://people.nml.com/User%20Photos/Profile%20Pictures/kal1730_LThumb.jpg"}
                style={{
                width: '32px',
                height: '32px',
                float: 'left'
            }}
                alt="logo"/>{this.props.messageDetailsHistory}
            </ListGroupItem>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

