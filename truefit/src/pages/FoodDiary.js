import React from "react";
import Footer from "../components/Footer";

const FoodDiary = () => {
    return (
        <div>
            <div className="container foods-page">
                <div>
                <h2>Breakfast</h2>
                <a href="/add-food">Add Food</a>
                </div>

                <div>
                <h2>Lunch</h2>
                <a href="/add-food">Add Food</a>
                </div>

                <div>
                <h2>Dinner</h2>
                <a href="/add-food">Add Food</a>
                </div>

                <div>
                <h2>Snacks</h2>
                <a href="/add-food">Add Food</a>
                </div>

                <div>
                <h2>Water</h2>
                <a href="/add-food">Add Food</a>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default FoodDiary