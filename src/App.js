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
  Button,
  Modal
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
      disabled: true,
      modal: false,
      appFuncs: null,
      adGroups: null,
      userDetails: null,
      unixGroups: null,
      userInput: null,
      appFuncStateCount: 0,
      unixStateCount: 0,
      adGroupStateCount: 0,
      messageDetailsHistory: []
    };

    this.handleUserInput = this
      .UserInputHandler
      .bind(this);
    this.submitHandler = this
      .SubmitHandler
      .bind(this);
    this.closeModal = this
      .CloseModal
      .bind(this);
    this.appFuncButtonHandler = this
    .appFuncButtonHandler
    .bind(this);
    this.adGroupButtonHandler = this
    .adGroupButtonHandler
    .bind(this);
    this.unixButtonHandler = this
    .unixButtonHandler
    .bind(this);
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
      .get('http://192.168.1.85:52820/api/chat/getIntent/' + value.messageDetails.messageText)
      .then((response) => {
        console.log("Intent: ", response);
        if (response.data.intent === "inquiry") {

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
          this.setState({userDetails: response.data.user.UserDetails, appFuncs: response.data.user.AppFuncs, adGroups: response.data.user.ADGroups, 
            unixGroups: response.data.user.UnixGroups, messageDetailsHistory: newArrayBot, disabled:true, appFuncStateCount: response.data.user.AppFuncs.length,
          adGroupStateCount: response.data.user.ADGroups.length, unixStateCount: response.data.user.UnixGroups.length});
        } else if (response.data.intent === "lookLike") {
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
          this.setState({userDetails: response.data.user.UserDetails, appFuncs: response.data.user.AppFuncs, adGroups: response.data.user.ADGroups, 
            unixGroups: response.data.user.UnixGroups, messageDetailsHistory: newArrayBot, disabled:false, appFuncStateCount: response.data.user.AppFuncs.length,
          adGroupStateCount: response.data.user.ADGroups.length, unixStateCount: response.data.user.UnixGroups.length});
        } else if (response.data.intent === "grantRole") {
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
          this.setState({userDetails: response.data.user.UserDetails, appFuncs: response.data.user.AppFuncs, adGroups: response.data.user.ADGroups, 
            unixGroups: response.data.user.UnixGroups, messageDetailsHistory: newArrayBot, appFuncStateCount: response.data.user.AppFuncs.length,
          adGroupStateCount: response.data.user.ADGroups.length, unixStateCount: response.data.user.UnixGroups.length});
        } else  if (response.data.intent ==="Invalid"){
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
          this.setState({messageDetailsHistory: newArrayBot});
        }

        else  {
          var newArrayBot = this
            .state
            .messageDetailsHistory
            .slice();
          var data = {
            messageDetails: {
              "messageType": 1,
              "messageText": "Our chat service is currently unavailable. Please call #3824."
            }
          };
          newArrayBot.push(data);
          this.setState({messageDetailsHistory: newArrayBot});
        }


      });
  }

  SubmitHandler(value) {
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
    this.setState({messageDetailsHistory: submitArr, modal: true});
  }

  appFuncButtonHandler(value){
    let count = this.state.appFuncStateCount; 

    this.setState({appFuncStateCount: count + value});
  }

  adGroupButtonHandler(value){
    let count = this.state.adGroupStateCount; 

    this.setState({adGroupStateCount: count + value});
  }

  unixButtonHandler(value){
    let count = this.state.unixStateCount; 

    this.setState({unixStateCount: count + value});
  }

  CloseModal() {
    this.setState({modal: false});
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
          <AppFuncList AppFuncDetails={this.state.appFuncs} ButtonHandler={this.appFuncButtonHandler} disabled={this.state.disabled}/>
        </div>
      );

      //console.log("AD Groups", this.state.adGroups)

      adGroups = (
        <div>
          <ADGroupList ADGroupDetails={this.state.adGroups} ButtonHandler={this.adGroupButtonHandler} disabled={this.state.disabled}/>
        </div>
      );

      //console.log("Unix Groups" , this.state.unixGroups);

      unixGroups = (
        <div>
          <UnixGroupList UnixGroupDetails={this.state.unixGroups} ButtonHandler={this.unixButtonHandler} disabled={this.state.disabled}/>
        </div>
      );
    }

    var appFuncCount = 0; 
    var unixCount = 0; 
    var adGroupCount = 0

    if (this.state.appFuncs === null) {
       appFuncCount = 0;
    }
    else {
       appFuncCount = this.state.appFuncs.length;
    } 

    if (this.state.unixGroups === null) {
       unixCount = 0;
    }
    else {
       unixCount = this.state.unixGroups.length;
    } 

    if (this.state.adGroups === null) {
       adGroupCount = 0;
    }
    else {
       adGroupCount = this.state.adGroups.length;
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
              <Button
                style={{
                backgroundColor: '#FBB81F',
                color: 'white',
                fontWeight: 'bold'
              }}
                disabled={this.state.disabled}
                onClick={this.submitHandler}>
                Submit
              </Button>
            </Col>
          </Row>
        </Grid>

        <Modal show={this.state.modal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title style={{backgroundColor: 'white', justifyContent: 'center',textAlign: 'center', fontWeight: 'bold'}}>
              Submitted Access
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
          <Row>
            <Col sm={12} lg={12}>
            <Panel
              collapsible
              defaultExpanded
              header="App Funcs"
              style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              textAlign: 'center'
              }}>
                   I have submitted {this.state.appFuncStateCount} App Funcs for you!
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col sm={12} lg={12}>
            <Panel
            collapsible
            defaultExpanded
            header="AD Groups"
            style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            textAlign: 'center'
            }}>
              I have submitted {this.state.adGroupStateCount} AD Groups for you!
              </Panel>
            </Col>
          </Row>

          <Row>
            <Col sm={12} lg={12}>
            <Panel
              collapsible
              defaultExpanded
              header="UNIX Groups"
              style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              textAlign: 'center'
              }}>
                I have submitted {this.state.unixStateCount} UNIX Groups for you!
              </Panel>
            </Col>

          </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button 
             style={{
                backgroundColor: '#FBB81F',
                color: 'white',
                fontWeight: 'bold'}}
             onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
