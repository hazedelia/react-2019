import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Login.css";


class Login extends Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
        }
        console.log("constructor");

    }


    static getDerivedStateFromProps(props, state) {
        console.log('get derived state')
    }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('on input change');
    }



    render() {
        const { email, password } = this.state;
        const { onLogin } = this.props;
        return (
            < div className="Login" >
                <div className="Login__content">

                    <h2>Login</h2>

                    <form>
                        <div className="form-group">

                            <label> email  </label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="email"
                                name="email"
                                value={this.state.email} />
                        </div>

                        <div className="form-group">
                            <label>password</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="password"
                                name="password"
                                value={this.state.password}
                            />

                        </div>
                        <Button
                            onClick={() => onLogin(email, password)}

                            color="dark">Login</Button>
                    </form>
                    <div className="Register__content__link">

                        <Link to="/register">not registered? register</Link>
                    </div>
                </div>

                render () {
                    console.log('render')
                }

            </div >

        )

    };
    componentDidMount() {
        console.log('component did mount')
    };



};




export default Login;