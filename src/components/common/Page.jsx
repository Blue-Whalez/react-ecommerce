import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';

Page.propTypes = {
  title: PropTypes.string,
};

Page.defaultProps = {
  title: 'React eCommerce',
};

function Page(props) {
  useEffect(() => {
    document.title = props.title;
    window.scrollTo(0, 0);
  }, [props.title]);

  return (
    <Box component="main" flexGrow={1} bgcolor="#f9fafb">
      <Container sx={{ py: 3 }}>{props.children}</Container>
    </Box>
  );
}

export default Page;
