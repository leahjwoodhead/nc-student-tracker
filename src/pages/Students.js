import React, { Component } from 'react';
import Grid from '../components/Grid';
import fetchStudents from '../components/api'

class Students extends Component {
    state = {
        students: [],
        isLoading: true,
    }

    componentDidMount() {
        fetchStudents().then(students => {
            this.setState({students, isLoading: false})
        })
    }


    render() {
        const {students, isLoading} = this.state;
        if (isLoading) { 
            return <p>Loading...</p>
        }


    //     <form action = ">
    //     <h1>Please select a color</h1>
    //     <fieldset>
    //     <select id = "selColor">
    //      <option value = "#FFFFFF">White</option>
    //      <option value = "#FF0000">Red</option>
    //      <option value = "#FFCC00">Orange</option>
    //      <option value = "#FFFF00">Yellow</option>
    //      <option value = "#00FF00">Green</option>
    //      <option value = "#0000FF">Blue</option>
    //      <option value = "#663366">Indigo</option>
    //      <option value = "#FF00FF">Violet</option>
    //     </select>
    //     <input type = "button"
    //       value = "change color"
    //       onclick = "changeColor()" />
    //     </fieldset>
    //    </form>
        return (
            <div>
                <form>
                    <h3>Filter by block:</h3>
                    <select>
                    <option value="fun">Fundamentals</option>
                    <option value="be">Backend</option>
                    <option value="fe">Frontend</option>
                    <option value="p">Project</option>
                    </select>
                    <input type="button" onClick={(event) => console.log(event.target.value)}></input>
                </form>
               <Grid students={students}/>
            </div>
        );
    }
}

export default Students;