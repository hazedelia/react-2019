import React, { Component } from "react";
import { connect } from "react-redux";
//import placeHolderImage from '../../assets/image-placeholder.svg';
import { getPosts } from '../redux/actions/postsActions';
import Posts from "../components/Posts/Posts";

// const posts = [
//     { title: "First title", description: "desc", image: placeHolderImage },
//     { title: "Second title", description: "x", image: placeHolderImage },
//     { title: "Third title", description: "y", image: placeHolderImage },
// ];


class PostsContainer extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return <Posts posts={this.props.posts} />;
    }
}


const mapStateToProps = state => {
    return {
        posts: state.getPostsReducer.posts
    };
};


const mapDispatchToProps = {
    getPosts
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
