import React from 'react';
import PropTypes from 'prop-types';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      marks:''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMarksChange = this.handleMarksChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMarksChange(event) {
    this.setState({marks: event.target.value});
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    this.props.addStudent(this.state.name, this.state.marks);
    this.setState({
      name: '',
      marks: ''
    });
    // this.props.sortStudents();
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          Marks:
          <input type="number" value={this.state.marks} onChange={this.handleMarksChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

StudentForm.propTypes = {
  addStudent: PropTypes.func.isRequired
};

export default StudentForm;
