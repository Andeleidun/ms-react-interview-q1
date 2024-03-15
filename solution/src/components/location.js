import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { getLocations } from '../mock-api/apis';

const LocationSelect = styled(Select)(({ theme }) => ({
    ...theme.typography.body1,
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: 0,
    textAlign: 'left'
}));

export function Location({ location, handleChange}) {
    const [locations, setLocations] = useState([]);
    const onChange = (event) => {
        handleChange(event.target.value);
    };

    useEffect(() => {
        async function fetchLocations() {
            const data = await getLocations();
            setLocations(data);
        }
        fetchLocations();
    }, []);

    return (
        <LocationSelect
            labelId="location-label"
            value={location}
            onChange={onChange}
            fullWidth
        >
            <MenuItem key='0'></MenuItem>
            {
                locations.map((option) => (
                    <MenuItem value={option} key={option}>{option}</MenuItem>
                ))
            }
        </LocationSelect>
    );
}