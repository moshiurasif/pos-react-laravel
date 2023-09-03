import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [input, setInput] = useState({});
    const handleInput = (e) =>{
        setInput(prevState=>({...prevState, [e.target.name] : e.target.value}));
        console.log(input);
    }
    const handleLogin = ()=>{
        axios.post("http://127.0.0.1:8000/api/login",input).then(res=> console.log(res.data))
    }
    return (
        <div className='container-fluid bg-theme' id="login">
            <div className="row">
                <div className="col-md-6">
                    <div className="card modal-header py-5">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <label className={'w-100'} htmlFor="">
                                <p>Email/Phone</p>
                                <input 
                                className={'form-control mt-2'}
                                type={'text'}
                                name={'email'}
                                value={input.email}
                                onChange={handleInput}
                                 />
                            </label>
                            <label className={'w-100 mt-4'} htmlFor="">
                                <p>Password</p>
                                <input 
                                className={'form-control mt-2'}
                                type={'password'}
                                name={'password'}
                                value={input.password}
                                onChange={handleInput}
                                 />
                            </label>

                            <div className="d-grid mt-4">
                                <button onClick={handleLogin} className={'btn btn-outline-info'}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;