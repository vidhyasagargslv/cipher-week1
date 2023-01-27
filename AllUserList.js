
import React from "react";
import UserDetails from "./UserDetails";

class AllUserList extends React.Component {
  allUsers = [
    { name: "sagar", email: "sagar@email.com", phoneNumber: "+91-9595565625" },
    {   
        name: "raju", "raju": Unknown word
        email: "raju@email.com",
        phoneNumber: "+91-7845423265",
    },
              I
    {
        name: "nani", "nani": Unknown word.
        email: "nani@email.com",
        phoneNumber: "+91-8656265666",
    },
  ]; 

  render() {
    return (
      <div>
          {this.allUsers.map[(user, index)  (
            <UserDetails key={index} user={user} />
        ))}
      </div>
    );
  }
}