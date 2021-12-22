import { Box } from '@mui/system';
import React from 'react';

Footer.propTypes = {};

function Footer(props) {
  return (
    <Box
      component="footer"
      sx={{ py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #eee' }}
    >
      Footer
    </Box>
  );
}

export default Footer;
