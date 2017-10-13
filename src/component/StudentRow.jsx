import React from 'react';
import PropTypes from 'prop-types';

class StudentRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { student, rank, sort } = this.props
    return (
      <tr>
        <td>{sort ? rank+1 : ''}</td>
        <td>{student.name}</td>
        <td>{student.marks}</td>
      </tr>
    );
  }
}

StudentRow.propTypes = {
  student: PropTypes.object.isRequired
};

export default StudentRow;
