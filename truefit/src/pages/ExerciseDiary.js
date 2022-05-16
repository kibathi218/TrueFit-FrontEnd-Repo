import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { GetExerciseById, DeleteExercise } from "../services/ExerciseServices";
import { useNavigate } from 'react-router-dom'

const ExerciseDiary = ({setUser}) => {
    let navigate = useNavigate()


    const [myExercises, setMyExercises] = useState([])

    // const [totalCalories, settotalCalories] = useState([])

    // const [totalCarbs, settotalCarbs] = useState([])
    // const [totalFat, settotalFat] = useState([])

    // const [totalProtein, settotalProtein] = useState([])

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

            // const result = data.reduce(function(sum, item){
            //     return sum = sum+item.calories;
            // },0);

            // const totCarbs = data.reduce(function(sum, item){
            //     return sum = sum+item.carbs;
            // },0);

            // const totFat = data.reduce(function(sum, item){
            //     return sum = sum+item.fat;
            // },0);

            // const totProtein = data.reduce(function(sum, item){
            //     return sum = sum+item.protein;
            // },0);
            
            // settotalCalories(result);
            // settotalCarbs(totCarbs)
            // settotalFat(totFat)
            // settotalProtein(totProtein)
        }
        handleExercises()
    }, [])


    const addExercise = () => {
        navigate(`/add-exercise`)
    }


    // const kcal = myFoods.map((food) => (
    //     <div>
    //         {food.userId === 1 ? (
    //             <p>{food.calories}</p>
    //         ) : (
    //             console.log("hi")
    //         )}
    //     </div>
    // ))


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
                            {/* <div class="col macro-header">
                                <h4>{totalCalories} Calories</h4>
                            </div>
                            <div class="col macro-header">
                                <h4>{totalCarbs}g of carbs</h4>
                            </div>
                            <div class="col macro-header">
                                <h4>{totalFat}g of fat</h4>
                            </div>
                            <div class="col macro-header">
                                <h4>{totalProtein}g of protein</h4>
                            </div> */}
                        </div>
                    </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ExerciseDiary