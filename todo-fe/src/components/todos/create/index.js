import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const CreateTodo = ({ onAdd }) => {
  const inputRef = React.useRef(null)
  const onClick = React.useCallback(async () => {
    if(inputRef && inputRef.current) {
      onAdd(inputRef.current.value)
      inputRef.current.value = ''
    }
  }, [onAdd])

  return (
    <Grid container spacing={2} item justify="center" alignItems="center">
      <Grid item>
        <TextField inputRef={inputRef} id="input-todo" label="Enter a task" variant="outlined" />
      </Grid>
      <Grid item>
        <Button onClick={onClick} variant="contained" color="primary">
          Add task
        </Button>
      </Grid>
    </Grid>
  )
}

export default CreateTodo
