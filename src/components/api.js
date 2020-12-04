import axios from 'axios';

export const fetchStudents = (isGraduate) => {
  return axios
    .get(
      `https://nc-student-tracker.herokuapp.com/api/students?graduated=${isGraduate}`
    )
    .then((res) => {
      return res.data.students;
    });
};

export const editStudentProgress = (studentId, advance) => {
  return axios
    .patch(
      `https://nc-student-tracker.herokuapp.com/api/students/${studentId}?progress=${advance}`
    )
    .then((res) => {
      return res.data.student;
    })
    .catch((err) => {
      console.log(err);
    });
};
