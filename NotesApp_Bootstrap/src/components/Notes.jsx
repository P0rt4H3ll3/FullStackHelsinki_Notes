import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const Notes = ({ notes }) => (
  // now the notes are clickable links what rout to notes/id
  //using the Link component imported with React-router-dom
  <div>
    <h2>Notes</h2>
    <Table striped>
      <tbody>
        {notes.map((note) => (
          <tr key={note.id}>
            <td>
              <Link to={`/notes/${note.id}`}>{note.content}</Link>
            </td>
            <td>{note.user}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)

Notes.proptypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      important: PropTypes.bool.isRequired,
      user: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
export default Notes
