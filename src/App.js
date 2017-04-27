import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LoremIpsum from './LoremIpsum.js';
import UserDetails from './UserDetails.js';
import ADGroupList from './components/ADGroupList.js';
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

const floatBottomRightStyle = {
  position: 'fixed',
  bottom: 0,
  right: 0,
  height: 600,
  width: 400,
  border: '1px solid black',
  display: 'block',
  backgroundColor: 'white'
}

const floatInputBottomRightStyle = {
  position: 'fixed',
  bottom: -20,
  right: 0,
  // width: 396, border: '1px solid grey', display: 'table-cell', backgroundColor:
  // 'purple',
  overflow: 'hidden',
  whiteDpace: 'nowrap',
  textOverflow: 'ellipsis',
  //width:'100%',
  display: 'block',
  marginLeft: '0px',
  marginRight: '0px',
  padding: '0px 0px 0px 0px',
  marginBottom: '0px'
}

const tbl = {
  //backgroundColor: 'green'
}

const bot = {
  textAlign: 'right',
  //padding: '0px 0px 0px 0px'
}
const person = {
  //padding: '0px 0px 0px 0px'
}

const whiteBoarder = {
  border: '1px solid white'
}

const chatHeader = {
  backgroundColor: 'blue',
  marginLeft: '0px',
  marginRight: '0px'
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      diffGroups: null,
      sameGroups: null,
      primaryUser: null,
      secondaryUser: null
    };
  }
  componentWillMount() {
    axios
      .get('http://192.168.1.85:52820/api/users/Details/KAL1730')
      .then((response) => {
        console.log(response.data);
        this.setState({primaryUser: response.data});
        console.log("primary user: ", this.state.primaryUser.UserDetails)
      });
    // axios   .get('http://192.168.1.85:52820/api/users/Details/ISE8912')
    // .then((response) => {     console.log(response.data);
    // this.setState({secondaryUser: response.data});   }); axios
    // .get('http://192.168.1.85:52820/api/userCompare/getDiffGroups/KAL1730/ISE8912'
    // )   .then((response) => {     console.log(response.data);
    // this.setState({diffGroups: response.data});   }); axios
    // .get('http://192.168.1.85:52820/api/userCompare/getSameGroups/KAL1730/ISE8912'
    // )   .then((response) => {     console.log(response.data);
    // this.setState({sameGroups: response.data});   });
  }
  render() {
    let primaryUser = null;
    let secondaryUser = null;
    let sameUser = null;
    let diffUser = null;
    if (this.state.primaryUser === null) {
      primaryUser = (
        <h2>
          no user details loaded
        </h2>
      );
    } else {
      primaryUser = (
        <div>
          <UserDetails UserDetails={this.state.primaryUser}/>
          <ADGroupList ADGroupDetails={this.state.primaryUser.ADGroups}/>
        </div>
      );
    }

    if (this.state.secondaryUser === null) {
      secondaryUser = (
        <h2>
          no user details loaded
        </h2>
      );
    } else {
      secondaryUser = <UserDetails UserDetails={this.state.secondaryUser}/>;
    }

    if (this.state.diffGroups === null) {
      diffUser = (
        <h2>
          no user details loaded
        </h2>
      );
    } else {
      diffUser = <UserDetails UserDetails={this.state.diffGroups}/>;
    }

    if (this.state.sameGroups === null) {
      sameUser = (
        <h2>
          no user details loaded
        </h2>
      );
    } else {
      sameUser = <UserDetails UserDetails={this.state.sameGroups}/>;
    }
    return (
      <div>
        {/*<LoremIpsum/>
        <div style={floatBottomRightStyle}>
          <Form horizontal>
              <FormControl type='text' label='chat' placeholder='Enter Text' style={floatInputBottomRightStyle} />
          </Form>
        </div>*/}
        <Grid>
          <Row>
            <PageHeader>Make Me Look Like
              <small>Chatbot Hackathon 2017
              </small>
            </PageHeader>

          </Row>
          <Row>
            {primaryUser}
            {secondaryUser}
            {sameUser}
            {diffUser}

          </Row>
          <Row >
            <Col sm={6} lg={8} style={tbl}>
              {/*<LoremIpsum/>*/}
              <text>
                <h3>Try talking to the bot in the lower right chat window!
                </h3>
              </text>
              <text>
                <h4>
                  Try telling the bot the following commands:
                  <br/>
                  <li>
                    Make me look like Cole Isenberger
                  </li>
                  <li>
                    Give me New Business Underwriter Access
                  </li>
                  <li>
                    What groups do people in my role have?
                  </li>
                </h4>
              </text>
            </Col>
            {/*Right side chat box
            */}
            <Col sm={4} lg={3} style={floatInputBottomRightStyle}>

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

            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default App;
