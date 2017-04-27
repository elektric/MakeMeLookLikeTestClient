import React from 'react';
import UnixGroupElement from './UnixGroupElement.js';

export default class UnixGroupList extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    let unixGroups = this
            .props
            .UnixGroupDetails
            .map((group, index) => {
                return (<UnixGroupElement key={index} details={group}/>);
            });
        //console.log("insideADGroupList", adGroups);
        return (
            <div>
                {unixGroups}
            </div>
        );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}


