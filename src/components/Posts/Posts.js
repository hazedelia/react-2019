import React, { Component } from "react";
import PostCard from '../PostCard/PostCard'
import placeHolderImage from '../../assets/image-placeholder.svg';
import "./Posts.css";




class Posts extends Component {
    render() {
        return (
            <div className="Posts">
                {this.props.posts &&
                    this.props.posts.map((post, index) => (
                        <PostCard
                            key={`post${index}`}
                            image={post.media.path || placeHolderImage}
                            username={post.username}
                            title={post.title}
                        />
                    ))
                }

            </div>
        );
    }
}
console.log("post")
export default Posts;