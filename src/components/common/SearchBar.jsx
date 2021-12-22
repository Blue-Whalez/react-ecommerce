import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

SearchBar.propTypes = {};

function SearchBar(props) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: (theme) => theme.spacing(50),
        display: 'flex',
        ml: 8,
        sm: {
          ml: 3,
          width: 'auto',
        },
        bgcolor: 'grey.200',
        borderRadius: (theme) => theme.shape.borderRadius,
        '&:hover': {
          bgcolor: 'grey.300',
        },
      }}
    >
      <InputBase
        placeholder="Search products..."
        sx={{
          color: 'inherit',
          width: '100%',
          '& .MuiInputBase-input': {
            p: (theme) => theme.spacing(1.2, 2),
            width: '100%',
          },
        }}
      />
      <IconButton variant="contained" size="large">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}

export default SearchBar;
