import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { GetFoodById, DeleteFood } from "../services/FoodServices";
import { useNavigate } from 'react-router-dom'

const FoodDiary = ({ setUser }) => {
    let navigate = useNavigate()


    const [myFoods, setMyFoods] = useState([])

    const [totalCalories, settotalCalories] = useState([])

    const [totalCarbs, settotalCarbs] = useState([])
    const [totalFat, settotalFat] = useState([])

    const [totalProtein, settotalProtein] = useState([])

    const showFood = (food) => {
        navigate(`edit/${food.id}`)
    }

    const deleteFood = async (food) => {
        await DeleteFood(food.id)
        alert("Food Removed")
    }



    useEffect(() => {
        const handleFoods = async () => {
            const data = await GetFoodById()
            console.log(data)
            setMyFoods(data)

            const result = data.reduce(function (sum, item) {
                return sum = sum + item.calories;
            }, 0);

            const totCarbs = data.reduce(function (sum, item) {
                return sum = sum + item.carbs;
            }, 0);

            const totFat = data.reduce(function (sum, item) {
                return sum = sum + item.fat;
            }, 0);

            const totProtein = data.reduce(function (sum, item) {
                return sum = sum + item.protein;
            }, 0);

            settotalCalories(result);
            settotalCarbs(totCarbs)
            settotalFat(totFat)
            settotalProtein(totProtein)
        }
        handleFoods()
    }, [])


    const addFood = () => {
        navigate(`/add-food`)
    }


    const kcal = myFoods.map((food) => (
        <div>
            {food.userId === 1 ? (
                <p>{food.calories}</p>
            ) : (
                console.log("hi")
            )}
        </div>
    ))


    return (
        <div>
            <div className="container foods-page">
                <div>
                    <div >
                        <div class="row">
                            <div class="col">
                                <h2>Breakfast</h2>
                            </div>
                            <div class="col macro-header">
                                <h3>Calories</h3>
                            </div>
                            <div class="col macro-header">
                                <h3>Carbs</h3>
                            </div>
                            <div class="col macro-header">
                                <h3>Fat</h3>
                            </div>
                            <div class="col macro-header">
                                <h3>Protein</h3>
                            </div>
                        </div>
                    </div>
                    <div className="diary-meal">


                        {myFoods.map((food) => (
                            <div className="mb-2">
                                {food.meal === 'breakfest' ? (
                                    <div class="row">
                                        <div class="col">
                                            <p onClick={() => showFood(food)}>{food.foodName}</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.calories} calories</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.fat}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.protein}g</p>
                                        </div>
                                        <hr />
                                    </div>

                                ) : (
                                    console.log("error - foodDiary line 105")
                                )}
                            </div>
                        ))}

                        <button className="btn btn-dark" onClick={() => addFood()}>Add Food</button>
                    </div>

                    <div className="diary-meal">
                        <h2>Lunch</h2>

                        {myFoods.map((food) => (
                            <div className="mb-2">
                                {food.meal === 'lunch' ? (
                                    <div class="row">
                                        <div class="col">
                                            <p onClick={() => showFood(food)}>{food.foodName}</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.calories} calories</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <hr />
                                    </div>

                                ) : (
                                    console.log("error - foodDiary line 105")
                                )}
                            </div>
                        ))}

                        <button className="btn btn-dark" onClick={() => addFood()}>Add Food</button>
                    </div>

                    <div className="diary-meal">
                        <h2>Dinner</h2>

                        {myFoods.map((food) => (
                            <div className="mb-2">
                                {food.meal === 'dinner' ? (
                                    <div class="row">
                                        <div class="col">
                                            <p onClick={() => showFood(food)}>{food.foodName}</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.calories} calories</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <hr />
                                    </div>

                                ) : (
                                    console.log("error - foodDiary line 105")
                                )}
                            </div>
                        ))}



                        <button className="btn btn-dark" onClick={() => addFood()}>Add Food</button>
                    </div>

                    <div className="diary-meal">
                        <h2>Snacks</h2>

                        {myFoods.map((food) => (
                            <div className="mb-2">
                                {food.meal === 'snack' ? (
                                    <div class="row">
                                        <div class="col">
                                            <p>{food.foodName}</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.calories} calories</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <div class="col">
                                            <p>{food.carbs}g</p>
                                        </div>
                                        <hr />
                                    </div>

                                ) : (
                                    console.log("error - foodDiary line 105")
                                )}
                            </div>
                        ))}

                        <button className="btn btn-dark add-food-btn" onClick={() => addFood()}>Add Food</button>
                    </div>

                    <div className="diary-meal">
                        <h2>Water</h2>
                        <button className="btn btn-dark" onClick={() => addFood()}>Add Water</button>
                    </div>

                    <div className="diary-meal">

                        <div className="">
                            <div >
                                <div class="row">
                                    <div class="col">
                                        <h1>Totals:</h1>
                                    </div>
                                    <div class="col macro-header">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FoodDiary