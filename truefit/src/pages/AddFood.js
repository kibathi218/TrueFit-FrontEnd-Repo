import React, {useState} from "react";
import Footer from "../components/Footer";
import { AddFoodToDiary } from "../services/AddFoodServices";

const AddFood = () => {

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
        await AddFoodToDiary({
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
    }




    return(
        <div className="container add-food-page">

            


            <Footer/>
        </div>
    )
}

export default AddFood