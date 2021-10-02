import { ADD_STUDENT, DELETE_STUDENT} from "../constants/StudentActionTypes";

const initialState = {
  students: ["Zafer", "Ahmet"]
}

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return { ...state, students: [...state.students, action.studentName] }
      case DELETE_STUDENT:
          console.log(state, action);
        return { ...state, students: state.students.filter((v, i) => (
          v !== action.studentName
        )) }
    default:
      return state
  }
}
export default studentsReducer;