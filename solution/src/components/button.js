import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(MUIButton)(({ theme }) => ({
    backgroundColor: '#fff',
    color: theme.palette.text.primary,
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    padding: '3px 10px',
  }));

export function Button(props) {
    return (
        <StyledButton {...props} />
    );
}