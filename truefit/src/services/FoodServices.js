import Client from './api'

export const AddFoodToDiary = async (data) => {
    try {
      const res = await Client.post('/food-diary/:user_id', data)
      return res.data
    } catch (error) {
      throw error
    }
  }


  export const GetFoodById = async (data) => {
    try{
      const res = await Client.get('/food-diary/:user_id', data)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const GetFoodByIdNew = async (id) => {
    try{
      const res = await Client.get(`/food-diary/edit/${id}`)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const DeleteFood = async (id) => {
    try{
      const res = await Client.delete(`/food-diary/edit/${id}`)
      return res.data 
    } catch (error) {
      throw error
    }
  }

  export const UpdateFood = async (id,userNumber, foodName, calories, carbs, fat, protein, date, meal) => {
    try{
      const res = await Client.put(`/food-diary/edit/${id}`)
      return res.data
    } catch (error) {
      throw error
    }
  }

  