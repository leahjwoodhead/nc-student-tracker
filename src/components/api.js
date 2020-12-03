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
