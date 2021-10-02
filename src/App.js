import { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './actions/ItemActions';
import { addStudent, deleteStudent } from './student/actions/StudentActions';

function App(props) {
  const [name, setName] = useState('');
  return (
    <div className="App">
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => props.addItem(name)}>AddItem</button>
      <button onClick={() => props.addStudent(name)}>AddStudent</button>
      <h1>Items</h1>
      <ul>
        {props.items.map((v,i) => <li key={i}>{v}<button onClick={() => props.deleteItem(v)}>Delete</button></li>)}
      </ul>
      <h1>Students</h1>
      <ul>
        {props.students.map((v,i) => <li key={i}>{v}<button onClick={() => props.deleteStudent(v)}>Delete</button></li>)}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.itemsReducer.items,
    students: state.studentsReducer.students
 }
}
 const mapDispatchToProps = (dispatch) => ({
  addItem: (name) => dispatch(addItem(name)),
  deleteItem: (name) => dispatch(deleteItem(name)),
  addStudent: (name) => dispatch(addStudent(name)),
  deleteStudent: (name) => dispatch(deleteStudent(name)),
 })
 

export default connect(mapStateToProps, mapDispatchToProps)(App);
