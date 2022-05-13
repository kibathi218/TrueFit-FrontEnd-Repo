import Client from './api'

export const AddFoodToDiary = async (data) => {
    try {
      const res = await Client.post('/food-diary/4', data)
      return res.data
    } catch (error) {
      throw error
    }
  }