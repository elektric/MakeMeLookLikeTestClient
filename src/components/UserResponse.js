import React from 'react';
import {ListGroupItem} from 'react-bootstrap';


const person = {
  textAlign: 'left', 
  //padding: '0px 0px 0px 0px'
}

export default class UserResponse extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
           <ListGroupItem style={person}><img
                src={require('../userLogo.jpg')}
                style={{
                marginTop: '-3px',
                width: '25px',
                height: '25px',
                float: 'right'
            }}
                alt="logo"/>{this.props.messageText}
            </ListGroupItem>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

