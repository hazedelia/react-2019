import React, { Component } from "react";
import logo from '../../assets/image-placeholder.svg';
import { Button } from "reactstrap";
import PostModal from "../postModal/PostModal";
import "./Header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };

    }

    onOpenModal = () => {
        this.setState({ isOpen: true });
    };

    onCloseModal = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { isOpen } = this.state;
        return (
            <div className="Header">
                <div className="Header__title">
                    <img className="Header__title__logo" src={logo} alt="title logo" />
                    <span className="Header__title__headline"> Bootcamp App </span>
                </div>
                <div className="Header__button">

                </div>
                <Button onClick={this.onOpenModal} color="dark">
                    Upload
                </Button>
                {
                    isOpen && <PostModal onClose={this.onCloseModal} />}
            </div>
        )
    }
};

export default Header;