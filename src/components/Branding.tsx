import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

function Branding() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box component="img" width="40px" src="/unirio.png" alt="Unirio logo" />
      <Typography
        variant="h5"
        sx={{
          color: blue[700],
          fontWeight: 700,
          // display: { xs: 'none', md: 'block' },
        }}
      >
        Técnicas de Programação I
      </Typography>
    </Box>
  )
}

export default Branding
