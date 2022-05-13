import React, { useState } from 'react'
import Footer from '../components/Footer'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const LogIn = (props) => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ email: '', password: '' })
        props.setUser(payload)
        props.toggleAuthenticated(true)
        navigate('/garage')
    }

    return (
        <div className='container login'>
            <body class="text-center">
                <div class="form-signin">
                    <form>
                        <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>

                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="email@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="checkbox mb-3">
                        </div>
                        <button class="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-muted">© TrueFit</p>
                    </form>
                </div>





            </body>

            <Footer />
        </div>
    )

}

export default LogIn