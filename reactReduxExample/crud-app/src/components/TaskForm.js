//rfce
//import {useSelector} from 'react-redux'
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../features/tasks/taskSlice';
import {v4 as uuid} from 'uuid';

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const dispatch = useDispatch();

  const handleChange = e => {
    //console.log(e.target.name, e.target.value);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(task);
    dispatch(addTask({
      ...task,
      id: uuid(),
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type='text' placeholder='title' onChange={handleChange}/>
      <textarea name="description" placeholder='description' cols="30" rows="10" onChange={handleChange}></textarea>
      <button>Save</button>
    </form>
  )
}

export default TaskForm