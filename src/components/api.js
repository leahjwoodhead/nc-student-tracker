import axios from 'axios'

const fetchStudents = () => {
    return axios.get('https://nc-student-tracker.herokuapp.com/api/students?graduated=false').then(res => {
        return res.data.students
    })
}

export default fetchStudents