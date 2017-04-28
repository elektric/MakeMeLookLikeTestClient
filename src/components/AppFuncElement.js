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
            this.props.ButtonHandler(-1);  
        } else {
            this.setState({selected: true, selectedText: 'Selected'})
            this.props.ButtonHandler(1);
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
        var selButton;
        if (this.props.disabled == false) {
            var selButton = (
                <Button
                    onClick={this.handleClick}
                    bsStyle={this.state.selected
                    ? 'success'
                    : 'danger'}
                    disabled={this.props.disabled}>{this.state.selectedText}</Button>
            )
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
                                {selButton}
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
