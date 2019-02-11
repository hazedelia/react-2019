import React, { Component} from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';  
import "./PostCard.css";

class PostCard extends Component {
    render() {
        const { title, description, image } = this.props;

        return (
            <div className="Posts"> 


            <Card className="mb-5">
                    <CardImg top width="100%" src={image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="Posts__card-title">{title}</CardTitle>
                            
                            <CardText>{description}</CardText>
                                
                        </CardBody>
                </Card>   
            </div>
        
        )
    }
}


export default PostCard;