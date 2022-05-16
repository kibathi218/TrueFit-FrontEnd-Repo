import Client from './api'

export const AddExerciseToDiary = async (data) => {
    try {
      const res = await Client.post('/exercise-diary/:user_id', data)
      return res.data
    } catch (error) {
      throw error
    }
  }


  export const GetExerciseById = async (data) => {
    try{
      const res = await Client.get('/exercise-diary/:user_id', data)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const GetExerciseByIdNew = async (id) => {
    try{
      const res = await Client.get(`/exercise-diary/edit/${id}`)
      return res.data
    } catch (error) {
      throw error
    }
  }

  export const DeleteExercise = async (id) => {
    try{
      const res = await Client.delete(`/exercise-diary/edit/${id}`)
      return res.data 
    } catch (error) {
      throw error
    }
  }

  export const UpdateExercise = async (id,userNumber, exerciseName, calories, carbs, fat, protein, date, meal) => {
    try{
      const res = await Client.put(`/exercise-diary/edit/${id}`)
      return res.data
    } catch (error) {
      throw error
    }
  }

  