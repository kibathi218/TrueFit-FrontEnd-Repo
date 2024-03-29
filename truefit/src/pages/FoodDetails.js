import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { GetFoodById } from "../services/FoodServices";
import { useNavigate } from 'react-router-dom'

const FoodDetails = () => {
    let navigate = useNavigate()


    const [myFoods, setMyFoods] = useState([])

    const [totalCalories, settotalCalories] = useState([])

    useEffect(() => {
        const handleFoods = async () => {
            const data = await GetFoodById()
            console.log(data)
            setMyFoods(data)
        }
        handleFoods()
    }, [])


    const addFood = () => {
        navigate('/add-food')
    }


    return (
        <div>
            <div className="container foods-page">
                <div>
                    <h2>Breakfast</h2>

                    <button className="btn btn-dark" onClick={() => addFood()}>Add Food</button>
                </div>

                <div>
                    <h2>Lunch</h2>

                    {myFoods.map((food) => (
                        <div>
                            {food.foodName === 'French Fries' ? (
                                <div>
                                    <p>{food.foodName}</p>
                                    <p>{food.calories} calories</p>
                                    <p>{food.carbs}g of carbs</p>
                                    <p>{food.fat}g of fat</p>
                                    <p>{food.protein}g of protein</p>
                                    <hr />
                                </div>
                            ) : (
                                console.log("hi")
                            )}
                        </div>
                    ))}

                    <button className="btn btn-dark" onClick={() => addFood()}>Add Food</button>
                </div>

                <div>
                    <h2>Dinner</h2>

                    {myFoods.map((food) => (
                        <div>
                            {food.foodName === 'Chicken Alfredo' ? (
                                <div>
                                    <p>{food.foodName}</p>
                                    <p>{food.calories} calories</p>
                                    <p>{food.carbs}g of carbs</p>
                                    <p>{food.fat}g of fat</p>
                                    <p>{food.protein}g of protein</p>
                                    <hr />
                                </div>
                            ) : (
                                console.log("hi")
                            )}
                        </div>
                    ))}



                    <button className="btn btn-dark" onClick={() => addFood()}>Add Food</button>
                </div>

                <div>
                    <h2>Snacks</h2>

                    {myFoods.map((food) => (
                        <div>
                            {food.foodName === 'Strawberries' ? (
                                <div>
                                    <p>{food.foodName}</p>
                                    <p>{food.calories} calories</p>
                                    <p>{food.carbs}g of carbs</p>
                                    <p>{food.fat}g of fat</p>
                                    <p>{food.protein}g of protein</p>
                                    <hr />
                                </div>
                            ) : (
                                console.log("hi")
                            )}
                        </div>
                    ))}

                    <button className="btn btn-dark" onClick={() => addFood()}>Add Food</button>
                </div>

                <div>
                    <h2>Water</h2>
                    <button className="btn btn-dark" onClick={() => addFood()}>Add Water</button>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default FoodDetails