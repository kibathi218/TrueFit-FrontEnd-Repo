import React, {useState} from "react";
import Footer from "../components/Footer";
import { AddExerciseToDiary } from "../services/ExerciseServices";
import { useNavigate } from 'react-router-dom'


const AddExercise = ({user}) => {

    let navigate = useNavigate()
    let userNumber = (user.id)

    const [formValues, setFormValues] = useState({ 
        userId: '',
        exerciseName: '', 
        caloriesBurned: '', 
        time: '',
        date: '',
        })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await AddExerciseToDiary({
          userId: userNumber,
          exerciseName: formValues.exerciseName,
          caloriesBurned: formValues.calories,
          time: formValues.carbs,
          date: formValues.fat,
        })
        setFormValues({
            userId: '',
          exerciseName: '',
          caloriesBurned: '',
          time: '',
          date: '',
        })
        navigate('/exercise-diary')

    }


    return(
        <div className='container login'>
            <div className="text-center">
                <div className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <h1 className="h3 mb-3 fw-normal">Add Exercise</h1>

                        <div class="form-floating">
                            <input type="name" class="form-control" id="floatingInput" placeholder="email@example.com" 
                            onChange={handleChange}
                            value={formValues.exerciseName}
                            required
                            name='exerciseName'
                            
                            />
                            <label for="floatingInput">Exercise Name</label>
                        </div>
                        <div className="form-floating">
                            <input type="number" className="form-control" placeholder="Password" 
                            onChange={handleChange}
                            value={formValues.caloriesBurned}
                            required
                            name='caloriesBurned'
                            />
                            <label for="floatingPassword">Calories Burned</label>
                        </div>
                        <div class="form-floating">
                            <input type="number" class="form-control"  placeholder="Password"
                            onChange={handleChange}
                            value={formValues.time}
                            required
                            name='time'
                            />
                            <label for="floatingPassword">Time</label>
                        </div>
                        <div class="form-floating">
                            <input type="string" class="form-control"  placeholder="Password"
                            onChange={handleChange}
                            value={formValues.date}
                            required
                            name='date'
                            />
                            <label for="floatingPassword">Date</label>
                        </div>
            
                        <button class="w-100 btn btn-lg btn-dark" type="submit">Add To Exercise Diary</button>
                        <p className="mt-5 mb-3 text-muted">© TrueFit</p>
                    </form>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default AddExercise