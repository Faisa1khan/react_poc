import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'


function AuthComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        console.log('useEffect running')
        axios.get('https://api.myjson.com/bins/qb0e8')
            .then((res) => {
                setUsers(res.data)

            })
            .catch((err) => {
                //error.message
                setError(err)
            })
    }, [])

    //email password
    const authenticate = (email, password) => {
        setLoading(true)
        const filteredUsers = users.filter((user) => { return user.email.toLowerCase() === email.toLowerCase() && user.password.toLowerCase() === password.toLowerCase() })
        const verifiedUser = filteredUsers.length === 0 ? null : filteredUsers[0].id

        if (verifiedUser) {
            setLoading(false)
            localStorage.setItem('userId', verifiedUser)
            console.log('authenticated')
        } else {
            setLoading(false)
            console.log('Inavlid Email id / Password')
        }


    }

    return (

        <Form style={{width:'25%',padding:20}}>
            <Form.Group controlId='authEmail'>
                <Form.Label>Username / Email Id</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Username / Email-id' />
            </Form.Group>
            <Form.Group controlId='authPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            </Form.Group>
            <Form.Text style={{ color: error ? 'red' : 'green' }} >
                {error ? error.message : null}
            </Form.Text>
            <Button variant='primary' onClick={() => authenticate(email, password)}>
                {loading ? 'Loading..' : 'Login'}
            </Button>

        </Form>

    )
}


export default AuthComponent;