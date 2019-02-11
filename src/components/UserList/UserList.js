import React, { Component} from "react";
import placeHolderImage from '../../assets/image-placeholder.svg';
import UserCard from '../UserCard/UserCard';  


const users = [
    { username: "First title", description: "desc", image: placeHolderImage },
    { username: "Second title", description: "x", image: placeHolderImage },
    { username: "Third title", description: "y", image: placeHolderImage },
];





class UserList extends Component {

    render() {


        return (
        <div className="UserList"> 
        {users.map(user => (
            <UserCard
                username={user.username}
                description={user.description}
                image={user.image}
            />

            ))}
        </div>
        )
    }
}


export default UserList;