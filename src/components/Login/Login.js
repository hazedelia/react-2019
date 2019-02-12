import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Login.css";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
        }
    }


    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
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

                        <Button color="dark">Login</Button>
                    </form>

                </div>



            </div >


        )
    }
}




export default Login;