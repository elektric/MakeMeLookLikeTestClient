import React from 'react';
import {ListGroupItem, Checkbox} from 'react-bootstrap';

export default class ADGroupElement extends React.Component {
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
        //console.log("ad group element", this.props.details);
        return (
            <ListGroupItem key={this.props.index}>
                <span>{this.props.details.Name}
                </span>
                <span>
                    <Checkbox
                        defaultChecked={true}
                        checked={this.state.selected}
                        onClick={this.handleClick}>{this.state.selectedText}</Checkbox>
                </span>
            </ListGroupItem>
        );
    }

    componentDidMount() {
        this.setState({selected: true});
    }

}
