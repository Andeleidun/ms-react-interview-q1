import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextInput = styled(TextField)(({ theme }) => ({
    ...theme.typography.body1,
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
}));

export function Name({ name, handleChange, error }) {
    const onChange = (event) => {
        const newValue = event.target.value;
        handleChange(newValue);
    };
    const helperText = error ? 'this name has already been taken' : '';
    return (
        <TextInput
            inputProps={{'aria-labelledby': 'name-label'}}
            id="name" 
            variant="outlined" 
            fullWidth
            value={name}
            onChange={onChange}
            error={error}
            helperText={helperText}
        />
    );
}