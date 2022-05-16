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
      const res = await Client.get('/food-diary/:user_id', {where: {id: id}})
      return res.data
    } catch (error) {
      throw error
    }
  }

  