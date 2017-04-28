import React from 'react';
import {Row, Col, Grid, Panel, ListGroup} from 'react-bootstrap';

const primaryUserDetails = { 
  backgroundColor: "#fff"
}

const info = { 

}

class UserDetails extends React.Component {
    constructor() {
        super();
        // this.state = { someKey: 'someValue' };
    }

    render() {
        console.log("in UserDetails: ", this.props.UserDetails);
        /*let adGroups = this
            .props
            .UserDetails
            .ADGroups
            .map((group, index) => {
                return (
                    <h4 key={index}>{group.Name}</h4>
                );
            });

        let unixGroups = this
            .props
            .UserDetails
            .UnixGroups
            .map((group, index) => {
                return (
                    <h4 key={index}>{group.Name}</h4>
                );
            });

        let appFuncGroups = this
            .props
            .UserDetails
            .AppFuncs
            .map((group, index) => {
                return (
                    <div>
                        <h4 key={index}>{group.Name}({group.AuthLevel})
                            <small>{group.Description}</small>
                        </h4>
                    </div>
                );
            });*/
        return (
            <Panel
                style={primaryUserDetails}
                header="User Details"
                defaultExpanded>
                <ListGroup>
                    <Grid>
                        <Row>
                            <Col sm={1} lg={1}>
                                <small
                                    style={{
                                    fontWeight: "bold"
                                }}>
                                    Name:
                                </small>
                            </Col>
                            <Col sm={11} lg={11}>
                                <small>{this.props.UserDetails.displayname}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1} lg={1}>
                                <small
                                    style={{
                                    fontWeight: "bold"
                                }}>ID:
                                </small>
                            </Col>
                            <Col sm={11} lg={11}>
                                <small>{this.props.UserDetails.samaccountname}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1} lg={1}>
                                <small
                                    style={{
                                    fontWeight: "bold"
                                }}>Department:
                                </small>
                            </Col>
                            <Col sm={11} lg={11}>
                                <small>{this.props.UserDetails.department}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1} lg={1}>
                                <small
                                    style={{
                                    fontWeight: "bold"
                                }}>Email:
                                </small>
                            </Col>
                            <Col sm={11} lg={11}>
                                <small>{this.props.UserDetails.mail}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1} lg={1}>
                                <small
                                    style={{
                                    fontWeight: "bold"
                                }}>Manager:</small>
                            </Col>
                            <Col sm={11} lg={11}>
                                <small>{this.props.UserDetails.manager}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1} lg={1}>
                                <small
                                    style={{
                                    fontWeight: "bold"
                                }}>Phone:
                                </small>
                            </Col>
                            <Col sm={11} lg={11}>
                                <small>{this.props.UserDetails.telephonenumber}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1} lg={1}>
                                <small
                                    style={{
                                    fontWeight: "bold"
                                }}>Location:
                                </small>
                            </Col>
                            <Col sm={11} lg={11}>
                                <small>{this.props.UserDetails.physicaldeliveryofficename}</small>
                            </Col>
                        </Row>
                    </Grid>

                </ListGroup>
            </Panel>
        );
    }

    componentDidMount() {}
}

export default UserDetails;
