import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

const StyledTable = styled(MUITable)(({ theme }) => ({
    ...theme.typography.body1,
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    margin: 'auto'
}));

export function Table({values}) {
  // use at minimum 5 rows to match mock
  const rows = values.length > 4 ? values : 
    [...Array(5)].map((_, i) => values[i] ?? {name: '', length: ''});
  return (
    <TableContainer>
      <StyledTable sx={12} aria-label="name and location table">
        <TableHead>
          {/* chose #bbb to match darker color on mock,
            for production system would push back on dark text
            with dark background, would fail color contrast */}
          <TableRow sx={{ background: '#bbb'}}>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name + index}
              sx={{ background: `${index % 2 === 0 ? '#ddd' : '#fff'}` }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}