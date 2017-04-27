import React from 'react';

export default class ADGroupElement extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: true
        };
    }

    render() {
        //console.log("ad group element", this.props.details);
        return (
            <h4 key={this.props.index}>{this.props.details.Name}</h4>
        );
    }

    componentDidMount() {

        this.setState({selected: false});
    }
}
