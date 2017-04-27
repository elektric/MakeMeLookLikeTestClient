import React from 'react';
import {FormControl} from 'react-bootstrap';


export default class UserTextBox extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  handleKeyPress = (e) => {
  
  if(e.target.value.replace(/\s/g, "") && e.key === 'Enter'){
    var data = {messageDetails: {
                   "messageType": 2,
                   "messageText": e.target.value,
               }
           };

      this.props.handleUserInput(data);
      e.target.value = "";  
  }
}

  render() {
      
    return (
        <div>
             <FormControl type='text' label='chat' placeholder='Enter Text' onKeyPress={this.handleKeyPress}/>
        </div>
    )
  }



  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

