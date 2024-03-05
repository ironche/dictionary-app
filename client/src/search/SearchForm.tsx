import { FormControl, InputLabel, Select, MenuItem, TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { Header } from './fragments'

interface Limit {
  value: number
  label: string
}

export const limits: Limit[] = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
]

interface SearchFormProps {
  word: string
  setWord: (word: string) => void
  limit: number
  setLimit: (limit: number) => void
  exact: boolean
  setExact: (exact: boolean) => void
}

export function SearchForm(props: SearchFormProps) {
  return (
    <Header>
      <TextField
        label="Search for word"
        variant="outlined"
        value={props.word}
        onChange={(e) => props.setWord(e.target.value)}
      />
      <FormControl>
        <InputLabel>Limit</InputLabel>
        <Select
          value={props.limit}
          label="Age"
          onChange={(e) => props.setLimit(e.target.value as number)}
        >
          {limits.map((l) => (
            <MenuItem
              key={l.value}
              value={l.value}
            >
              {`${l.label} examples`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value={props.exact}
              onChange={() => props.setExact(!props.exact)}
            />
          }
          label="Exact match"
        />
      </FormGroup>
    </Header>
  )
}
