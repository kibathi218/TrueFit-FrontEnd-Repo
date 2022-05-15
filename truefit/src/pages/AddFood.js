import React, {useState} from "react";
import Footer from "../components/Footer";
import { AddFoodToDiary } from "../services/FoodServices";
import { useNavigate } from 'react-router-dom'


const AddFood = () => {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ 
        userId: '',
        foodName: '', 
        calories: '', 
        carbs: '',
        fat: '',
        protein: '',
        date: '',
        meal: ''
        })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await AddFoodToDiary({
          userId: formValues.userId,
          foodName: formValues.foodName,
          calories: formValues.calories,
          carbs: formValues.carbs,
          fat: formValues.fat,
          protein: formValues.protein,
          date: formValues.date,
          meal: formValues.meal
        })
        setFormValues({
            userId: '',
          foodName: '',
          calories: '',
          carbs: '',
          fat: '',
          protein: '',
          date: '',
          meal: ''
        })
        navigate('/food-diary/4')
    }


    return(
        <div className='container login'>
            <div className="text-center">
                <div className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Add Food</h1>

                        <div className="form-floating">
                            <input type="name" class="form-control" id="floatingInput" placeholder="email@example.com" 
                            onChange={handleChange}
                            value={formValues.userId}
                            required
                            name='userId'
                            
                            />
                            <label for="floatingInput">User Id</label>
                        </div>

                        <div class="form-floating">
                            <input type="name" class="form-control" id="floatingInput" placeholder="email@example.com" 
                            onChange={handleChange}
                            value={formValues.foodName}
                            required
                            name='foodName'
                            
                            />
                            <label for="floatingInput">Food Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control" placeholder="Password" 
                            onChange={handleChange}
                            value={formValues.calories}
                            required
                            name='calories'
                            />
                            <label for="floatingPassword">Calories</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" class="form-control"  placeholder="Password"
                            onChange={handleChange}
                            value={formValues.carbs}
                            required
                            name='carbs'
                            />
                            <label for="floatingPassword">Carbs</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" class="form-control"  placeholder="Password"
                            onChange={handleChange}
                            value={formValues.fat}
                            required
                            name='fat'
                            />
                            <label for="floatingPassword">Fat</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control"  placeholder="Password"
                            onChange={handleChange}
                            value={formValues.protein}
                            required
                            name='protein'
                            />
                            <label for="floatingPassword">Protein</label>
                        </div>
                        <div class="form-floating">
                            <input type="name" className="form-control"  placeholder="Password"
                            onChange={handleChange}
                            value={formValues.date}
                            required
                            name='date'
                            />
                            <label for="floatingPassword">Date</label>
                        </div>

                        <div className="form-floating">
                            <input type="name" class="form-control" id="floatingInput" placeholder="email@example.com" 
                            onChange={handleChange}
                            value={formValues.meal}
                            required
                            name='meal'
                            
                            />
                            <label for="floatingInput">Meal</label>
                        </div>


                        <button class="w-100 btn btn-lg btn-dark" type="submit">Add To Food Diary</button>
                        <p className="mt-5 mb-3 text-muted">© TrueFit</p>
                    </form>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default AddFood