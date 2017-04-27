import React from 'react';
import {
    FormControl,
    Form,
    FormGroup,
    Grid,
    Col,
    Row,
    PageHeader,
    Panel,
    Glyphicon,
    Button,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

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
        return (
            <Panel
                collapsible
                defaultExpanded
                header="Interactive Chat"
                style={{
                backgroundColor: 'white'
            }}>
                <ListGroup fill>

                    <ListGroupItem style={bot}><img
                        src={"https://image.freepik.com/free-icon/robot_318-81201.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'left'
            }}
                        alt="logo"/>Hello User how are you today?
                    </ListGroupItem>
                    <ListGroupItem style={person}><img
                        src={"http://people.nml.com/User%20Photos/Profile%20Pictures/kal1730_LThumb.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'right'
            }}
                        alt="logo"/>I am great bot!</ListGroupItem>
                    <ListGroupItem style={bot}><img
                        src={"https://image.freepik.com/free-icon/robot_318-81201.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'left'
            }}
                        alt="logo"/>What would you like to do today?</ListGroupItem>
                    <ListGroupItem style={person}><img
                        src={"http://people.nml.com/User%20Photos/Profile%20Pictures/kal1730_LThumb.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'right'
            }}
                        alt="logo"/>Make KAL1730 look like ISE8912</ListGroupItem>
                    <ListGroupItem style={bot}><img
                        src={"https://image.freepik.com/free-icon/robot_318-81201.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'left'
            }}
                        alt="logo"/>I've completed your request</ListGroupItem>
                    <ListGroupItem style={person}><img
                        src={"http://people.nml.com/User%20Photos/Profile%20Pictures/kal1730_LThumb.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'right'
            }}
                        alt="logo"/>Thanks Mr. Robot!</ListGroupItem>
                    <ListGroupItem style={bot}><img
                        src={"https://image.freepik.com/free-icon/robot_318-81201.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'left'
            }}
                        alt="logo"/>I've completed your request</ListGroupItem>
                    <ListGroupItem style={person}><img
                        src={"http://people.nml.com/User%20Photos/Profile%20Pictures/kal1730_LThumb.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'right'
            }}
                        alt="logo"/>Thanks Mr. Robot!</ListGroupItem>
                    <ListGroupItem style={bot}><img
                        src={"https://image.freepik.com/free-icon/robot_318-81201.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'left'
            }}
                        alt="logo"/>I've completed your request</ListGroupItem>
                    <ListGroupItem style={person}><img
                        src={"http://people.nml.com/User%20Photos/Profile%20Pictures/kal1730_LThumb.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'right'
            }}
                        alt="logo"/>Thanks Mr. Robot!</ListGroupItem>
                    <ListGroupItem style={bot}><img
                        src={"https://image.freepik.com/free-icon/robot_318-81201.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'left'
            }}
                        alt="logo"/>I've completed your request</ListGroupItem>
                    <ListGroupItem style={person}><img
                        src={"http://people.nml.com/User%20Photos/Profile%20Pictures/kal1730_LThumb.jpg"}
                        style={{
                width: '32px',
                height: '32px',
                float: 'right'
            }}
                        alt="logo"/>Thanks
                        Mr. Robot! or are you a human? you are so smart that sometimes I cant tell what
                        you are!
                    </ListGroupItem>
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
