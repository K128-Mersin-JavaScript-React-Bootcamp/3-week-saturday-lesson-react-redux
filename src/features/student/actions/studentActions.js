import { ADD_STUDENT, DELETE_STUDENT } from "../constants/studentActionTypes";

export const addStudent = studentName => ({
    type: ADD_STUDENT,
    studentName: studentName
  })
  export const deleteStudent = studentName => ({
      type: DELETE_STUDENT,
      studentName: studentName
    })