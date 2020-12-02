import axios from 'axios'

const API_LOCATION = process.env.API_LOCATION || 'localhost'
const API_PORT = process.env.API_PORT || '4000'

const getTodos = () => axios.get(`http://${API_LOCATION}:${API_PORT}/api`).then((res)=>res.data).catch((err)=>console.error(err))
const createTodo = (todo) => axios.post(`http://${API_LOCATION}:${API_PORT}/api`, todo).then((res)=>res.data).catch((err)=>console.error(err))
const deleteTodos = (id) => axios.delete(`http://${API_LOCATION}:${API_PORT}/api`, { data: { id } }).catch((err)=>console.error(err))

export {
  getTodos,
  createTodo,
  deleteTodos
}