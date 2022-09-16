import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { GetExerciseById, DeleteExercise } from "../services/ExerciseServices";
import { useNavigate } from 'react-router-dom'

const ExerciseDiary = ({setUser}) => {
    let navigate = useNavigate()


    const [myExercises, setMyExercises] = useState([])

    const showExercise= (exercise) => {
        navigate(`edit/${exercise.id}`)
    }

    const deleteExercise = async (exercise) => {
        await DeleteExercise(exercise.id)
        alert("Exercise Removed")
    } 



    useEffect(() => {
        const handleExercises = async () => {
            const data = await GetExerciseById()
            console.log(data)
            setMyExercises(data)

        }
        handleExercises()
    }, [])


    const addExercise = () => {
        navigate(`/add-exercise`)
    }

    return (
        <div>
            <div className="container exercises-page">
                <div>
                    <div >
                        <div class="row">
                            <div class="col">
                                <h2>Exercises</h2>
                            </div>
                            <div class="col macro-header">
                                <h3>Calories Burned</h3>
                            </div>
                            <div class="col macro-header">
                                <h3>Time</h3>
                            </div>
                            
                        </div>
                    </div>
                    <div className="diary-meal">


                        {myExercises.map((exercise) => (
                            <div className="mb-2">
                                    <div class="row">
                                        <div class="col">
                                            <p onClick={() => showExercise(exercise)}>{exercise.exerciseName}</p>
                                        </div>
                                        <div class="col">
                                            <p>{exercise.calories} calories</p>
                                        </div>
                                        <div class="col">
                                            <p>{exercise.carbs}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{exercise.fat}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{exercise.protein}g</p>
                                        </div>
                                        <p>x</p>
                                        <hr />
                                    </div>
                            </div>
                        ))}

                        <button className="btn btn-dark" onClick={() => addExercise()}>Add Exercise</button>
                    </div>

                    <div className="diary-meal">

                        <div className="">
                        <div >
                        <div class="row">
                            <div class="col">
                                <h1>Totals:</h1>
                            </div>

                        </div>
                    </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default ExerciseDiary