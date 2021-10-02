import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addStudent, deleteStudent } from '../actions/StudentActions';

function StudentsPage(props) {
    const [name, setName] = useState('');

    return (
        <div>
            <h2>StudentsPage</h2>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => props.addStudent(name)}>Add Student</button>

            <ul>
                {props.students.map((v, i) => <li key={i}>{v}<button onClick={() => props.deleteStudent(v)}>Delete</button></li>)}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        students: state.studentsReducer.students,
    }
}
const mapDispatchToProps = (dispatch) => ({
    addStudent: (name) => dispatch(addStudent(name)),
    deleteStudent: (name) => dispatch(deleteStudent(name)),
})


export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);