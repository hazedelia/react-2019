import React, { Component} from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import "./UserCard.css";



class UserCard extends Component {
    render() {
        const { username, description, image } = this.props;

        return (
            <div className="UserList"> 


            <Card className="mb-5 user_image">
                    <CardImg className="imageU" top width="100%" src={image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="UserList__card-username">{username}</CardTitle>
                            
                            <CardText>{description}</CardText>
                                
                        </CardBody>
                </Card>   
            </div>
        
        )
    }
}


export default UserCard;