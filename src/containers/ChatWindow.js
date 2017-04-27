import React from 'react';
import {FormControl, Panel, ListGroup} from 'react-bootstrap';
import BotInput from '../components/BotInput.js';

var axios = require('axios');

const bot = {
    textAlign: 'right',
    //padding: '0px 0px 0px 0px'
}
const person = {
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
        let messageHistory = this
            .props
            .messageDetailsHistory
            .map((message, index) => {
                return (<BotInput key={index} messageText={message}/>);
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
                <FormControl type='text' label='chat' placeholder='Enter Text'/>
            </Panel>
        );
    }

    componentDidMount() {
        this.setState({someKey: 'otherValue'});
    }
}

export default ChatWindow;
