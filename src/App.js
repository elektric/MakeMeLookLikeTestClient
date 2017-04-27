import React, {Component} from 'react';
import './App.css';
import '../node_modules/react-bootstrap-switch/src/less/bootstrap3/react-bootstrap-switch.less'
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
      messageDetailsHistory: [] 
    };
  }
  componentWillMount() {
    axios
      .get('http://192.168.1.85:52820/api/users/Details/KAL1730')
      .then((response) => {
        //console.log(response.data);
        this.setState({userDetails: response.data.UserDetails, appFuncs: response.data.AppFuncs, adGroups: response.data.ADGroups, unixGroups: response.data.UnixGroups});
        //console.log("primary user: ", this.state.userDetails.UserDetails)
      });
    // axios   .get('http://192.168.1.85:52820/api/users/Details/ISE8912')
    // .then((response) => {     console.log(response.data);
    // this.setState({secondaryUser: response.data});   }); axios
    // .get('http://192.168.1.85:52820/api/userCompare/getDiffGroups/KAL1730/ISE8912
    // ' )   .then((response) => {     console.log(response.data);
    // this.setState({diffGroups: response.data});   }); axios
    // .get('http://192.168.1.85:52820/api/userCompare/getSameGroups/KAL1730/ISE8912
    // ' )   .then((response) => {     console.log(response.data);
    // this.setState({sameGroups: response.data});   });

    var newArray = this.state.messageDetailsHistory.slice();    
    newArray.push("Hi User, How can I help you?");  
    this.setState({messageDetailsHistory:newArray})
    //console.log("New Array: " , newArray);

  }
  render() {
    let userDetails = null;
    let appFuncs = null;
    let adGroups = null;
    let unixGroups = null;
    if (this.state.userDetails === null) {
      userDetails = (
        <text>
          No User Details loaded
        </text>
      );
      appFuncs = (
        <text>
          No App Funcs loaded
        </text>
      );
      adGroups = (
        <text>
          No Ad Groups loaded
        </text>
      );
     unixGroups = (
        <text>
          No UNIX Groups loaded
        </text>
      );
    } else {
      userDetails = (
        <div>
          <UserDetails UserDetails={this.state.userDetails}/>
        </div>
      );
      appFuncs = (<div>
          <AppFuncList AppFuncDetails={this.state.appFuncs}/>
      </div>
      );

      //console.log("AD Groups", this.state.adGroups)

      adGroups = (<div>
          <ADGroupList ADGroupDetails={this.state.adGroups}/>
      </div>
      );

      //console.log("Unix Groups" , this.state.unixGroups);

      unixGroups = (<div>
          <UnixGroupList UnixGroupDetails={this.state.unixGroups}/>    
      </div>
      );
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
              <small> &nbsp; Chatbot Hackathon 2017
              </small>
            </PageHeader>

          </Row>
          <Row>
            <Col sm={6} lg={9}>
                 {userDetails} 
            </Col> 
          </Row>

           <Row>
            <Col sm={6} lg={9}>
                 {appFuncs} 
            </Col> 
          </Row>

           <Row>
            <Col sm={6} lg={9}>
                 {adGroups} 
            </Col> 
          </Row>
          
           <Row>
            <Col sm={6} lg={9}>
                 {unixGroups} 
            </Col> 

          </Row>
          <Row >
            <Col xs={6} sm={6} lg={8} style={tbl}></Col>
            <Col xs={5} sm={4} lg={3} style={floatInputBottomRightStyle}>
              <ChatWindow messageDetailsHistory={this.state.messageDetailsHistory}/>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default App;
