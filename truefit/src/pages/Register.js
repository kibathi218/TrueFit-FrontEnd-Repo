import React, { useState } from 'react'
import Footer from '../components/Footer'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            email: formValues.email,
            password: formValues.password
        })
        setFormValues({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
        navigate('/login')
    }

    return (
        <div className='container login'>
            <div class="text-center">
                <div class="form-signin">
                    <form onSubmit={handleSubmit}>
                        <h1 class="h3 mb-3 fw-normal">Create An Account</h1>

                        <div class="form-floating">
                            <input type="name" class="form-control" id="floatingInput" placeholder="email@example.com"
                                onChange={handleChange}
                                value={formValues.firstName}
                                required
                                name='firstName'

                            />
                            <label for="floatingInput">First Name</label>
                        </div>
                        <div class="form-floating">
                            <input type="name" class="form-control" placeholder="Password"
                                onChange={handleChange}
                                value={formValues.lastName}
                                required
                                name='lastName'
                            />
                            <label for="floatingPassword">Last Name</label>
                        </div>
                        <div class="form-floating">
                            <input type="email" class="form-control" placeholder="Password"
                                onChange={handleChange}
                                value={formValues.email}
                                required
                                name='email'
                            />
                            <label for="floatingPassword">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" placeholder="Password"
                                onChange={handleChange}
                                value={formValues.password}
                                required
                                name='password'
                            />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" placeholder="Password" />
                            <label for="floatingPassword">Confirm Password</label>
                        </div>

                        <div class="checkbox mb-3">
                        </div>
                        <button class="w-100 btn btn-lg btn-dark" type="submit">Submit</button>
                        <p class="mt-5 mb-3 text-muted">© TrueFit</p>
                    </form>
                </div>

            </div>

            <Footer />
        </div>
    )

}

export default Register