import React from 'react';
import AppFuncElement from './AppFuncElement.js'
export default class AppFuncList extends React.Component {
  constructor() {
    super();
    //this.state = { someKey: 'someValue' };
  }

  render() {
    let appFuncs = this
            .props
            .AppFuncDetails
            .map((group, index) => {
                return (<AppFuncElement key={index} details={group}/>);
            });
        //console.log("insideADGroupList", adGroups);
        return (
            <div>
                {appFuncs}
            </div>
        );
  }

  componentDidMount() {
    //this.setState({ someKey: 'otherValue' });
  }
}

