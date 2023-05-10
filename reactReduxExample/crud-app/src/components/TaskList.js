import {useSelector, useDispatch} from 'react-redux';
import {deleteTask} from '../features/tasks/taskSlice';
import {Link} from 'react-router-dom';

function TaskList() {
const tasks= useSelector(state => state.tasks);
console.log(tasks);
const dispatch = useDispatch();

const handleDelete = (id) => {
  //console.log(id);
  dispatch(deleteTask(id));
};

  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center py-4'>
        <h1>Tasks {tasks.length}</h1>
        <Link to='/create-task' className='bg-indigo-600 px-2 py-1 rounded-md text-sm' >Create Task</Link>
      </header>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {tasks.map(task =>(
          <div key={task.id} className='bg-neutral-800 p-4 rounded-md'>
            <header className='flex justify-between'>
              <h3>{task.title}</h3>
              <div className='flex gap-x-2'>
                <Link className='bg-neutral-600 px-2 py-1 text-sm rounded-md '
                to= {`/edit-task/${task.id}`} >Edit</Link>
                <button  className='bg-red-900 px-2 py-1 text-sm rounded-md'
                 onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList