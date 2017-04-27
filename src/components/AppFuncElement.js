import React from 'react';
import {ListGroupItem, Button, Grid, Row, Col,} from 'react-bootstrap';
export default class AppFuncElement extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: true,
            selectedText: 'Selected',
        };
        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick(e) {
        if (this.state.selected) {
            this.setState({selected: false, selectedText: 'Not Selected'})
        } else {
            this.setState({selected: true, selectedText: 'Selected'})
        }
    }

    render() {
        //console.log("app Func group element", this.props.details);
        let AppFuncWithAuthLevel = null;
        if (this.props.details.AuthLevel.length > 0) {
            AppFuncWithAuthLevel = <h5 key={this.props.index}>{this.props.details.Name}
                ({this.props.details.AuthLevel})</h5>
        } else {
            AppFuncWithAuthLevel = <h5 key={this.props.index}>{this.props.details.Name}</h5>
        }
        return (
            <ListGroupItem>
                <Grid>
                    <Row>
                        <Col sm={6} lg={6}>
                            {AppFuncWithAuthLevel}
                            <small>{this.props.details.Description}</small>
                        </Col>
                        <Col sm={2} lg={2}>
                                <Button onClick={this.handleClick} bsStyle={this.state.selected ? 'success' : 'danger'}>{this.state.selectedText}</Button>
                        </Col>
                    </Row>
                </Grid>

            </ListGroupItem>
        );
    }

    componentDidMount() {
        //this.setState({ someKey: 'otherValue' });
    }
}
