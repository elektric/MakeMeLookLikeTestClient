import React from 'react';
import ADGroupElement from './ADGroupElement.js'
import {Row, Col, Grid, Panel, ListGroup} from 'react-bootstrap';

const primaryUserDetails = {
  backgroundColor: "#fff"
}

const info = {}

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
                <Panel
                    style={primaryUserDetails}
                    header="AD Groups"
                    collapsible
                    defaultExpanded>
                    <ListGroup>
                        {adGroups}
                    </ListGroup>
                </Panel>
            </div>
        );
    }

    componentDidMount() {
        //this.setState({ someKey: 'otherValue' });
    }
}
