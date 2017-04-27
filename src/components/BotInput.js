import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

const bot = {
  textAlign: 'right',
  //padding: '0px 0px 0px 0px'
}
const person = {
  //padding: '0px 0px 0px 0px'
}

export default class BotInput extends React.Component {
  constructor() {
    super();
  }

  render() {
          console.log("Message Text" , this.messageText);
    return(
           <ListGroupItem style={bot}><img
                src={require('../botLogo.png')}
                style={{
                marginTop: '-3px',
                width: '25px',
                height: '25px',
                float: 'left'
            }}
                alt="logo"/>{this.props.messageText}
            </ListGroupItem>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}
