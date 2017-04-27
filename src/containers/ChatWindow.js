import React from 'react';
import {Panel, ListGroup} from 'react-bootstrap';
import BotInput from '../components/BotInput.js';
import UserResponse from '../components/UserResponse.js';
import UserTextBox from '../components/UserTextBox.js';

var axios = require('axios');

const bot = {
    textAlign: 'right',
    //padding: '0px 0px 0px 0px'
}
const person = {
    textAlign: 'left',
    //padding: '0px 0px 0px 0px'
}

class ChatWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            someKey: 'someValue'
        };
    }

    render() {
        console.log("message details" , this.props.messageDetailsHistory);
        let messageHistory = this
            .props
            .messageDetailsHistory
            .map((message, index) => {
                if (message.messageDetails.messageType === 1) {
                    console.log("Message type 1" , message.messageDetails.messageText);
                    return (<BotInput key={index} messageText={message.messageDetails.messageText}/>);
                    
                } else {
                    console.log("Message type 2" , message.messageDetails.messageText);
                    return (<UserResponse key={index} messageText={message.messageDetails.messageText}/>);
                    
                }
            });

        return (
            <Panel
                collapsible
                defaultExpanded
                header="Chat Bot"
                style={{
                backgroundColor: 'white'
            }}>
                <ListGroup fill>
                    {messageHistory}
                </ListGroup>
                <UserTextBox handleUserInput={this.props.handleUserInput}/>
            </Panel>
        );
    }

    componentDidMount() {
        this.setState({someKey: 'otherValue'});
    }
}

export default ChatWindow;
