import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Register.css";


class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            email: "",
            password: "",
        }
    }


    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (

            < div className="Register" >
                <div className="Register__content">

                    <h2>Register</h2>

                    <form>
                        <div className="form-group">

                            <label> username  </label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="username"
                                name="username"
                                value={this.state.username} />
                        </div>

                        <div className="form-group">
                            <label>email</label>
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

                        <Button color="dark">Register</Button>
                    </form>

                </div>



            </div >



        )
    }
}


export default Register;