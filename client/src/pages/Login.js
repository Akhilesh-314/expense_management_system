import React, { useState, useEffect } from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'
import "../styles/LoginPage.css"

const Login = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    //from submit
    const submitHandler = async (values) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/users/login', values)
            setLoading(false)
            message.success('Login Successfully')
            localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }))
            navigate('/')
        } catch (error) {
            setLoading(false)
            message.error('invalid email or password')
        }
    }
    //prevent for login user
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/')
        }
    }, [navigate])
    return (
        <>
            <div className='login-container'>
                {loading && <Spinner />}
                <h1>Expense Management System - MERN STACK</h1>
                <div className='login-page'>
                    <Form className='login-form' layout='vertical' onFinish={submitHandler}>
                        <h2>Login Form</h2>
                        <Form.Item label="Email" name="email">
                            <Input type='email' required />
                        </Form.Item>
                        <Form.Item label="Password" name="password">
                            <Input type='password' required />
                        </Form.Item>
                        <div className='d-flex justify-content-between'>
                            <Link to='/register'>Not a user ? Click Here to register!</Link>
                            <button className='btn btn-primary'>Login</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login