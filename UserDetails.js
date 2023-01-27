
  import React from "react";
  const UserDetails = ({ user = { } }) => {
    let user = props.user;
    return (
      <div>
        <h3>{user.name}</h3>
          <h5>
            Email: (user.email)
            <br />
            Phone Number: (user.phoneNumber}
        </h5>
      </div>
    );
  };
   

   class UserDetails extends Component {
    
    render() {
        class UserDetails extends Component {
            render()
              this.props.user = {
                name: "Alex",
                email: "alex@email.com",
                phoneNumber: 123456,
              }; 
      return 
          <div> I
            <h3>{this.user.name}</h3>
            <h5>
              Email: {this.user.email)
              <br />
              Phone Number: {this.user.phoneNumber}
            </h5>
          </div>
          );
              }
              }
    export default UserDetails;
