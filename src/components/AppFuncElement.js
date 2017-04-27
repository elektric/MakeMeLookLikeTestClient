import React from 'react';

export default class AppFuncElement extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false
        };
    }

    render() {
        //console.log("app Func group element", this.props.details);
        return (
            <div>
                <h4 key={this.props.index}>{this.props.details.Name}</h4>
                <div><small>{this.props.details.AuthLevel}</small></div>
                <div><small>{this.props.details.Description}</small></div>
            </div>
        );
    }

    componentDidMount() {
        //this.setState({ someKey: 'otherValue' });
    }
}
