import React from 'react';
import PropTypes from 'prop-types';
import StudentRow from './StudentRow';

class StudentPerfomance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // console.log(this.props.)
  }

  render() {
    const { sortedData } = this.props;
    const rows = []
    sortedData.map((student, index) => {
      rows.push(
        <StudentRow
          student={student}
          rank={index}
          key={index} 
        />)
    })

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
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

StudentPerfomance.propTypes = {};

export default StudentPerfomance;
