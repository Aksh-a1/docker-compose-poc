import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const ListTodo = ({ todo, onDelete }) => {
  const onClick = React.useCallback(()=>{
    onDelete(todo.id)
  }, [onDelete, todo])
  return (
    <Grid container spacing={2} item justify="center" alignItems="center">
      <Grid item>
        {todo.task}
      </Grid>
      <Grid item>
        <Button onClick={onClick} variant="text" color="secondary">
          Delete
        </Button>
      </Grid>
    </Grid>
  )
}

export default ListTodo
