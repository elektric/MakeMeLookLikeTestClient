import React, {Component} from 'react';
import './App.css';
import UserDetails from './UserDetails.js';
import ADGroupList from './components/ADGroupList.js';
import AppFuncList from './components/AppFuncList.js';
import UnixGroupList from './components/UnixGroupList.js';
import ChatWindow from './containers/ChatWindow.js';
import {
  Grid,
  Col,
  Row,
  PageHeader,
  Panel,
  ListGroup, 
  Button
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

const whiteBoarder = {
  border: '1px solid white'
}

const chatHeader = {
  backgroundColor: 'blue',
  marginLeft: '0px',
  marginRight: '0px'
}

const primaryUserDetails = {
  backgroundColor: "#fff"
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      appFuncs: null,
      adGroups: null,
      userDetails: null,
      unixGroups: null,
      userInput: null,
      messageDetailsHistory: []
    };

    this.handleUserInput = this.UserInputHandler.bind(this);
    this.submitHandler = this.SubmitHandler.bind(this);
  }

  componentWillMount() {
    // axios   .get('http://192.168.1.85:52820/api/users/Details/KAL1730')
    // .then((response) => {     //console.log(response.data);
    // this.setState({userDetails: response.data.UserDetails, appFuncs:
    // response.data.AppFuncs, adGroups: response.data.ADGroups, unixGroups:
    // response.data.UnixGroups});     //console.log("primary user: ",
    // this.state.userDetails.UserDetails)   }); axios
    // .get('http://192.168.1.85:52820/api/users/Details/ISE8912') .then((response)
    // => {     console.log(response.data); this.setState({secondaryUser:
    // response.data});   }); axios
    // .get('http://192.168.1.85:52820/api/userCompare/getDiffGroups/KAL1730/ISE8912
    // ' )   .then((response) => {     console.log(response.data);
    // this.setState({diffGroups: response.data});   }); axios
    // .get('http://192.168.1.85:52820/api/userCompare/getSameGroups/KAL1730/ISE8912
    // ' )   .then((response) => {     console.log(response.data);
    // this.setState({sameGroups: response.data});   });

    var data = {
      messageDetails: {
        "messageType": 1,
        "messageText": "Hi user, how can I help you?"
      }
    };

    var newArray = this
      .state
      .messageDetailsHistory
      .slice();
    newArray.push(data);
    this.setState({messageDetailsHistory: newArray})

  }

   UserInputHandler(value) {
    var newArray = this
      .state
      .messageDetailsHistory
      .slice();
    newArray.push(value);
    this.setState({messageDetailsHistory: newArray})

      axios
        .get('http://192.168.1.85:52820/api/chat/getIntent/'+ value.messageDetails.messageText)
        .then((response) => {
            console.log("Intent: ", response);
          if(response.data.intent === "single"){

          var newArrayBot = this
            .state
            .messageDetailsHistory
            .slice();
          var data = {
            messageDetails: {
              "messageType": 1,
              "messageText": response.data.botMessage 
            }
          };
          newArrayBot.push(data);
          this.setState({userDetails: response.data.user.UserDetails, appFuncs: response.data.user.AppFuncs, adGroups: response.data.user.ADGroups, unixGroups: response.data.user.UnixGroups, messageDetailsHistory: newArrayBot});
        }
        
        else if(response.data.intent==="lookLike") {
          var newArrayBot = this
            .state
            .messageDetailsHistory
            .slice();
          var data = {
            messageDetails: {
              "messageType": 1,
              "messageText": response.data.botMessage 
            }
          };
          newArrayBot.push(data);
          this.setState({userDetails: response.data.user.UserDetails, appFuncs: response.data.user.AppFuncs, adGroups: response.data.user.ADGroups, unixGroups: response.data.user.UnixGroups, messageDetailsHistory: newArrayBot});
        }

        else if(response.data.intent==="grantRole"){
        var newArrayBot = this
            .state
            .messageDetailsHistory
            .slice();
          var data = {
            messageDetails: {
              "messageType": 1,
              "messageText": response.data.botMessage 
            }
          };
          newArrayBot.push(data);
          this.setState({userDetails: response.data.user.UserDetails, appFuncs: response.data.user.AppFuncs, adGroups: response.data.user.ADGroups, unixGroups: response.data.user.UnixGroups, messageDetailsHistory: newArrayBot});
        }

        else {
        var newArrayBot = this
            .state
            .messageDetailsHistory
            .slice();
          var data = {
            messageDetails: {
              "messageType": 1,
              "messageText": response.data
            }
          };
          newArrayBot.push(data);
          this.setState({messageDetailsHistory: newArrayBot});
        }
        
      });
  }

  SubmitHandler(value){
  var submitArr = this
            .state
            .messageDetailsHistory
            .slice();
  var data = {
            messageDetails: {
              "messageType": 1,
              "messageText": "I've submitted the access requests for you!" 
            }
          };
   submitArr.push(data); 
   this.setState({messageDetailsHistory: submitArr});
  }

  render() {
    let userDetails = null;
    let appFuncs = null;
    let adGroups = null;
    let unixGroups = null;
    if (this.state.userDetails === null) {
      userDetails = (
        <Panel
          collapsible
          defaultExpanded
          header="User Details"
          style={{
          backgroundColor: 'white'
        }}>
          No User Details Loaded.
        </Panel>
      );
      appFuncs = (
        <Panel
          collapsible
          defaultExpanded
          header="App Funcs"
          style={{
          backgroundColor: 'white'
        }}>
          No App Funcs Loaded.
        </Panel>
      );
      adGroups = (
        <Panel
          collapsible
          defaultExpanded
          header="AD Groups"
          style={{
          backgroundColor: 'white'
        }}>
          No AD Groups Loaded.
        </Panel>
      );
      unixGroups = (
        <Panel
          collapsible
          defaultExpanded
          header="UNIX Groups"
          style={{
          backgroundColor: 'white'
        }}>
          No UNIX Groups Loaded.
        </Panel>
      );
    } else {
      userDetails = (
        <div>
          <UserDetails UserDetails={this.state.userDetails}/>
        </div>
      );
      appFuncs = (
        <div>
          <AppFuncList AppFuncDetails={this.state.appFuncs}/>
        </div>
      );

      //console.log("AD Groups", this.state.adGroups)

      adGroups = (
        <div>
          <ADGroupList ADGroupDetails={this.state.adGroups}/>
        </div>
      );

      //console.log("Unix Groups" , this.state.unixGroups);

      unixGroups = (
        <div>
          <UnixGroupList UnixGroupDetails={this.state.unixGroups}/>
        </div>
      );
    }

    return (
      <div>
        <Grid>
          <Row >
            <PageHeader>
              Make Me Look Like
              <small>
                &nbsp; Chatbot Hackathon 2017
              </small>
            </PageHeader>

          </Row>
          <Row>
            <Col sm={9} lg={9}>
              {userDetails}
            </Col>
          </Row>

          <Row>
            <Col sm={9} lg={9}>
              {appFuncs}
            </Col>
          </Row>

          <Row>
            <Col sm={9} lg={9}>
              {adGroups}
            </Col>
          </Row>

          <Row>
            <Col sm={9} lg={9}>
              {unixGroups}
            </Col>

          </Row>
          <Row >
            <Col xs={6} sm={6} lg={8} style={tbl}></Col>
            <Col xs={5} sm={4} lg={3} style={floatInputBottomRightStyle}>
              <ChatWindow
                messageDetailsHistory={this.state.messageDetailsHistory}
                handleUserInput={this.handleUserInput}/>
            </Col>
          </Row>
          <Row>
             <Col sm={9} lg={9}>
                <Button style={{backgroundColor: '#FBB81F', color: 'white', fontWeight: 'bold'}} onClick={this.submitHandler}>
                  Submit
                </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
