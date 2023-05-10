//rfce
//import {useSelector} from 'react-redux'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, editTask} from '../features/tasks/taskSlice';
import {v4 as uuid} from 'uuid';
import {useNavigate, useParams} from 'react-router-dom';

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks)

  const handleChange = e => {
    //console.log(e.target.name, e.target.value);
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(params.id){
      dispatch(editTask(task));
    } else{
      dispatch(addTask({
        ...task,
        id: uuid(),
      }));
    }

    navigate('/');
  }

  useEffect(() => {
    console.log(params);
    if(params.id){
      setTask(tasks.find(task => task.id === params.id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input 
      name='title' 
      type='text' 
      placeholder='title' 
      onChange={handleChange}
      value={task.title}
      />
      <textarea 
      name="description" 
      placeholder='description' 
      cols="30" rows="10" 
      onChange={handleChange}
      value={task.description}
      ></textarea>
      <button>Save</button>
    </form>
  )
}

export default TaskForm;