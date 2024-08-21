import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@mui/material'

const Notes = ({ notes }) => (
  // now the notes are clickable links what rout to notes/id
  //using the Link component imported with React-router-dom
  <div>
    <h2>Notes</h2>
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {notes.map((note) => (
            <TableRow key={note.id}>
              <TableCell>
                <Link to={`/notes/${note.id}`}>{note.content}</Link>
              </TableCell>
              <TableCell>{note.user}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
