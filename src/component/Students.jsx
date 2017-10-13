import React from 'react';
import PropTypes from 'prop-types';
import StudentTable from './StudentTable';
import StudentForm from './StudentForm';
import sortBy from "lodash/sortBy"

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{"id":1,"name":"Barrie","marks":56},
              {"id":2,"name":"Trace","marks":8},
              {"id":3,"name":"Vallie","marks":100},
              {"id":4,"name":"Llewellyn","marks":88},
              {"id":5,"name":"Maritsa","marks":56},
              {"id":6,"name":"Zelda","marks":94},
              {"id":7,"name":"Audrye","marks":63},
              {"id":8,"name":"Conway","marks":31},
              {"id":9,"name":"Nessi","marks":92},
              {"id":10,"name":"Kory","marks":12}],
      sortdata: []
    };

    this.fetchStudents = this.fetchStudents.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.sortStudents = this.sortStudents.bind(this);
  }

  fetchStudents(){
    fetch("https://my.api.mockaroo.com/students.json?key=5dde5e00")
    .then(result=>result.json())
    .then(items=>this.setState({data: items}))
  }

  addStudent(name, marks){
    let student = {name, marks}
    console.log(student);

    this.setState({
      data: [...this.state.data, student]
    },() => this.sortStudents());
  }

  sortStudents(){
    let sortdata = sortBy(this.state.data, "marks").reverse();
    this.setState({sortdata})
  }

  componentDidMount() {
    this.sortStudents();
  }

  render() {
    return (
      <div>
        <StudentForm addStudent={this.addStudent} />
        <StudentTable data={this.state.data} sort={false} />
        <StudentTable data={this.state.sortdata} sort={true} />
      </div>
    );
  }
}

Students.propTypes = {};

export default Students;
