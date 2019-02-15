import React, { Component } from "react";
import logo from '../../assets/image-placeholder.svg';
import { Button } from "reactstrap";
import PostModal from "../postModal/PostModal";
import "./Header.css";

class Header extends Component {

    render() {
        const { isOpen, toggleModal, onInputChange, onImageUpload, onPostSubmit } = this.props;

        return (
            <div className="Header">
                <div className="Header__title">
                    <img className="Header__title__logo" src={logo} alt="title logo" />
                    <span className="Header__title__headline"> Bootcamp App </span>
                </div>
                <div className="Header__button">

                </div>
                <Button onClick={toggleModal} color="dark">
                    Upload
                </Button>
                {
                    isOpen && <PostModal
                        onImageUpload={onImageUpload}
                        onInputChange={onInputChange}
                        onPostSubmit={onPostSubmit}
                        onClose={toggleModal} />
                }
            </div>
        )
    }
};

export default Header;