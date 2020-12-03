import axios from 'axios';

const fetchStudents = (isGraduate) => {
  return axios
    .get(
      `https://nc-student-tracker.herokuapp.com/api/students?graduated=${isGraduate}`
    )
    .then((res) => {
      return res.data.students;
    });
};

export default fetchStudents;
