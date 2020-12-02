import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import ListTodo from './list'
import { getTodos, createTodo, deleteTodos } from '../../utils/apiCalls'
import CreateTodo from './create'

const Todo = () => {
  const [todos, setTodos] = React.useState([])

  const onAdd = React.useCallback(async (value) => {
    if(value.trim() !== '') {
      const todo = {
        id: todos.length + 1,
        task: value
      }
      const newTodo = await createTodo(todo)
      setTodos([...todos, newTodo])
    }
  }, [todos])

  const onDelete = React.useCallback(async (id)=> {
    await deleteTodos(id)
    const todos = await getTodos()
    setTodos(todos)
  }, [])

  React.useEffect(()=>{
    getTodos().then((todos)=>setTodos(todos))
  }, [])

  return (
    <Box m={8}>
      <Grid container spacing={2} justify="center" alignItems="center">
        <CreateTodo {...{ onAdd }}/>
        <Grid container spacing={2} item direction="column" justify="center" alignItems="center">
          {todos.map((todo, index)=>
            <ListTodo key={index} {...{todo, onDelete }}/>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Todo
