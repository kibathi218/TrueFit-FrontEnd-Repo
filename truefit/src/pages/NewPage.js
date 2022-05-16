import React from "react";
import { useParams } from "react-router-dom";
import { GetFoodByIdNew } from "../services/FoodServices";

const NewPage = () => {

    let {id} = useParams

    const handleWork = async () => {
        const data = await GetFoodByIdNew()
        console.log(data)
        // setMyFoods(data)
    }



    return (
        <div></div>
    )
}

export default NewPage