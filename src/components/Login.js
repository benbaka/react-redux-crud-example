import React, {useState, useContext} from 'react';

import {Route, Link} from 'react-router-dom'
import {Context} from "../store";


const Login = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [state, dispatch] = useContext(Context);


    const handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log(state.posts.length);


    }



    return(
        <>

            <div className="container">
                <br/><p className="text-center">Not on the intended page ?

                <Link to="/home" replace>
                    Go Back
                </Link></p>

                <div className="row">
                    <aside className="col-sm-4">
                    </aside>
                    <aside className="col-sm-4">
                        <p>Login form style 3</p>

                        <div className="card">
                            <article className="card-body">
                                <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                                <hr/>
                                <p className="text-success text-center">Some message goes here</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                            </div>
                                            <input value={name}
                                                   onChange={e=>setName(e.target.value)}
                                                   name="" className="form-control" placeholder="Email or login"
                                                   type="text"/>
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                            </div>
                                            <input
                                                value = {password}
                                                onChange={e=>setPassword(e.target.value)}
                                                className="form-control" placeholder="******" type="password"/>
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Login</button>
                                    </div>

                                    <p className="text-center"><a href="s" className="btn">Forgot password?</a></p>
                                </form>
                            </article>
                        </div>


                    </aside>

                    <aside className="col-sm-4">
                    </aside>

                </div>
            </div>
        </>
    )
};

export default Login;