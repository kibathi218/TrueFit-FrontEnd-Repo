import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { GetFoodById } from "../services/FoodServices";
import { useNavigate } from 'react-router-dom'

const FoodDiary = () => {
    let navigate = useNavigate()


    const [myFoods, setMyFoods] = useState([])

    useEffect(() => {
        const handleFoods = async () => {
            const data = await GetFoodById()
            console.log(data)
            setMyFoods(data)
        }
        handleFoods()
    }, [])

    const work = myFoods.map((food) => {
        console.log(food.foodName)
        if (food.foodName === 'French Fries') {
            return "hi"
            console.log(work)
        }

    })

    const addFood = () => {
        navigate('/add-food')
    }

    // const sportsTeams = [
    //     {
    //         city: 'Miami',
    //         name: 'Heat',
    //         weather: 'warm'
    //     },
    //     {
    //         city: 'New York',
    //         name: 'Knicks',
    //         weather: 'ehh'
    //     },
    //     {
    //         city: 'Chicago',
    //         name: 'Bulls',
    //         weather: 'windy'
    //     }
    // ]

   


    return (
        <div>
            <div className="container foods-page">
                <div>
                    <h2>Breakfast</h2>


                    <button onClick={() => addFood()}>Add Food</button>
                </div>

                <div>
                    <h2>Lunch</h2>

                    {myFoods.map((food) => (

                        <div>
                            <p>{food.foodName}</p>
                            <p>{food.calories} calories</p>
                            <p>{food.carbs}g of carbs</p>
                            <p>{food.fat}g of fat</p>
                            <p>{food.protein}g of protein</p>
                            <hr />
                        </div>
                    ))}

                    <button onClick={() => addFood()}>Add Food</button>
                </div>

                <div>
                    <h2>Dinner</h2>

                    <button onClick={() => addFood()}>Add Food</button>
                </div>

                <div>
                    <h2>Snacks</h2>
                    <button onClick={() => addFood()}>Add Food</button>
                </div>

                <div>
                    <h2>Water</h2>
                    <button onClick={() => addFood()}>Add Water</button>
                </div>
            </div>

            {/* {sportsTeams.map((item) => (
                <div>
                    {item}
                </div>
            ))} */}


            {/* <Footer /> */}

            
        </div>
    )
}

export default FoodDiary