import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
  LinearProgress,
  Typography,
} from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import { useWordInfo } from './models'

export default function SearchForm() {
  const { loading, data } = useWordInfo('null', 10, false)

  return (
    <TableContainer component={Paper}>
      <LinearProgress sx={{ visibility: loading ? 'visible' : 'hidden' }} />
      {data.length === 0 && !loading ? (
        <Typography variant="h4">No results</Typography>
      ) : (
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Melingo ID</TableCell>
              <TableCell>Entry</TableCell>
              <TableCell>Full translation</TableCell>
              <TableCell>Flash translation</TableCell>
              <TableCell>Examples</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                >
                  {row.id}
                </TableCell>
                <TableCell>{row.entry}</TableCell>
                <TableCell>{row.full}</TableCell>
                <TableCell>{row.flash}</TableCell>
                <TableCell>
                  {row.examples.length > 0 && (
                    <List dense>
                      {row.examples.map((example, i) => (
                        <ListItem key={i}>
                          <DoubleArrowIcon />
                          <div dangerouslySetInnerHTML={{ __html: example }}></div>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  )
}
