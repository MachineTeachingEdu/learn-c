import React from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
} from '@mui/material'
import { Home, Info } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { grey } from '@mui/material/colors'
import Link from 'next/link'
import Branding from './Branding'

interface NavBarProps {
  open: boolean
  onToggle: () => void
}

const NavBar: React.FC<NavBarProps> = ({ open, onToggle }) => (
  <AppBar
    position="relative"
    variant="outlined"
    sx={{
      background: grey[100],
      px: 1,
      zIndex: 2,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Toolbar>
      <Branding />
    </Toolbar>

    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button
        LinkComponent={Link}
        href="/"
        variant="contained"
        size="small"
        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
      >
        <Home />
        <Typography>Início</Typography>
      </Button>
      <Button
        LinkComponent={Link}
        href="/sobre"
        variant="contained"
        color="success"
        size="small"
        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
      >
        <Info />
        <Typography>Sobre</Typography>
      </Button>
      <IconButton onClick={onToggle}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Box>
  </AppBar>
)

export default NavBar
