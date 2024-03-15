import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Location, Name, Table } from './components/';
import { Box, InputLabel } from '@mui/material';
import { isNameValid } from './mock-api/apis';
import './App.css';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
}));

const Label = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const InnerGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row wrap',
  alignContent: 'center',
}));

const rightStyle = { justifyContent: 'flex-end' };
const grow = { flexGrow: 1 };

function App() {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [location, setLocation] = useState();
  const [values, setValues] = useState([]);

  const clear = () => {
    setName('');
    setLocation('');
    setError(false);
  }

  const add = () => {
    if (!error) {
      const newValues = [...values];
      newValues.push({name, location});
      setValues(newValues);
    }
  }

  const handleName = async (newValue) => {
    setName(newValue);
    const checkError = await isNameValid(newValue);
    setError(checkError);
  }


  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} component="form">
        <Grid container spacing={2}>
          <InnerGrid xs={3} md={2} style={rightStyle}>
            <Item>
              <Label id="name-label">Name</Label>
            </Item>
          </InnerGrid>
          <InnerGrid xs={9} md={10}>
            <Item style={grow}>
              <Name name={name} handleChange={handleName} error={error} />
            </Item>
          </InnerGrid>

          <InnerGrid xs={3} md={2} style={rightStyle}>
            <Item>
              <Label id="location-label">Location</Label>
            </Item>
          </InnerGrid>
          <InnerGrid xs={9} md={10}>
            <Item style={grow}>
              <Location location={location} handleChange={setLocation} />
            </Item>
          </InnerGrid>

          <Grid xs={6} md={8}></Grid>
          <InnerGrid xs={3} md={2} style={rightStyle}>
            <Item>
              <Button variant="contained" onClick={clear}>Clear</Button>
            </Item>
          </InnerGrid>
          <InnerGrid xs={3} md={2} style={rightStyle}>
            <Item>
              <Button variant="contained" onClick={add}>Add</Button>
            </Item>
          </InnerGrid>

          <Grid xs={12}>
            <Item>
              <Table values={values} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
