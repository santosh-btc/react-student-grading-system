import React from 'react';
import PropTypes from 'prop-types';
import StudentRow from './StudentRow'

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, sort } = this.props;
    const rows = []
    data.map((student, index) => {
      rows.push(
        <StudentRow
          student={student}
          rank={index}
          key={index}
          sort={sort}
        />)
    })

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>{sort ? 'Rank' : ''}</th>
              <th>Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

StudentTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default StudentTable;


