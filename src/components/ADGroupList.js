import React from 'react';
import ADGroupElement from './ADGroupElement.js'
export default class ADGroupList extends React.Component {
    constructor() {
        super();
        //this.state = { someKey: 'someValue' };
    }

    render() {
        let adGroups = this
            .props
            .ADGroupDetails
            .map((group, index) => {
                return (<ADGroupElement key={index} details={group}/>);
            });
        //console.log("insideADGroupList", adGroups);
        return (
            <div>
                {adGroups}
            </div>
        );
    }

    componentDidMount() {
        //this.setState({ someKey: 'otherValue' });
    }
}
