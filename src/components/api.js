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

export const fetchOneStudent = (studentId) => {
  return axios
    .get(`https://nc-student-tracker.herokuapp.com/api/students/${studentId}`)
    .then((res) => {
      return res.data.student;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postStudent = (info) => {
  return axios
    .post('https://nc-student-tracker.herokuapp.com/api/students', info)
    .then((res) => {
      return res.data.student;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const countRepeats = (arr) => {
  let repeats = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      repeats.push(arr[i]);
    }
  }

  return repeats;
};
