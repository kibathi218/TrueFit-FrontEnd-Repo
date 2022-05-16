import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetFoodByIdNew, DeleteFood, UpdateFood } from "../services/FoodServices";
import { useNavigate } from 'react-router-dom'


const NewPage = ({user}) => {
    let userNumber = (user.id)


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

    let { id } = useParams();

    let navigate = useNavigate();

    const [selectedFood, setSelectedFood] = useState([])

    useEffect(() => {
        const handleFoods = async () => {
            console.log(id)
            const data = await GetFoodByIdNew(1)
            console.log(data)
            setSelectedFood(data)
        }
        handleFoods()
    }, [])

    const deleteFood = async () => {
        await DeleteFood(2)
        navigate('/food-diary')
    }

    const updateFood = async (e) => {
        e.preventDefault()
        await UpdateFood(1,
             userNumber,
             formValues.foodName,
             formValues.calories,
             formValues.carbs,
             formValues.fat,
             formValues.protein,
             formValues.date,
             formValues.meal)
             navigate('/food-diary')
    }


    return (
        <div>
            <div class="container newPage">
                <div class="col">
                    <h2>{selectedFood.foodName}</h2>
                </div>
                <div class="col">
                    <h3>{selectedFood.calories} calories</h3>
                </div>
                <div class="col">
                    <h3>{selectedFood.carbs}g</h3>
                </div>
                <div class="col">
                    <h3>{selectedFood.fat}g</h3>
                </div>
                <div class="col">
                    <h3>{selectedFood.protein}g</h3>
                </div>
                <p onClick={() => deleteFood()}>x</p>
                <hr />
            </div>



            <div className='container login'>
            <div className="text-center">
                <div className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Add Food</h1>

                        {/* <div className="form-floating">
                            <input type="name" class="form-control" id="floatingInput" placeholder="email@example.com" 
                            onChange={handleChange}
                            value={formValues.userId}
                            required
                            name='userId'
                            
                            />
                            <label for="floatingInput">User Id</label>
                        </div> */}

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


                        <button onClick={updateFood} class="w-100 btn btn-lg btn-dark" type="submit">Add To Food Diary</button>
                        <p className="mt-5 mb-3 text-muted">© TrueFit</p>
                    </form>
                </div>

            </div>

        </div>
        </div>
    )
}

export default NewPage