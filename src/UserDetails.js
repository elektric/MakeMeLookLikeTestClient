import React from 'react';

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
            <div>
                <h2>{this.props.UserDetails.UserDetails.displayname}</h2>
                <h3>{this.props.UserDetails.UserDetails.samaccountname}</h3>
                <h3>{this.props.UserDetails.UserDetails.department}</h3>
                <h3>{this.props.UserDetails.UserDetails.mail}</h3>
                <h3>{this.props.UserDetails.UserDetails.manager}</h3>
                <h3>{this.props.UserDetails.UserDetails.telephonenumber}</h3>
                <h3>{this.props.UserDetails.UserDetails.physicaldeliveryofficename}</h3>
            </div>
        );
    }

    componentDidMount() {}
}

export default UserDetails;
