/* eslint-disable react/function-component-definition */
import React from 'react'
import Typography from '@mui/material/Typography'

export interface TypographyProps {
  children: React.ReactNode
  id?: string
}

export const H1: React.FC<TypographyProps> = ({ children, id }) => (
  <Typography
    id={id}
    variant="h1"
    component="h2"
    fontSize="3.25rem"
    fontWeight={700}
    mb={2}
  >
    {children}
  </Typography>
)

export const H2: React.FC<TypographyProps> = ({ children, id }) => (
  <Typography
    id={id}
    variant="h2"
    component="h2"
    fontSize="2.5rem"
    fontWeight={700}
    mb={1.5}
  >
    {children}
  </Typography>
)

export const H3: React.FC<TypographyProps> = ({ children, id }) => (
  <Typography
    id={id}
    variant="h3"
    component="h3"
    fontSize="2.25rem"
    fontWeight={700}
    mb={1.5}
  >
    {children}
  </Typography>
)

export const H4: React.FC<TypographyProps> = ({ children, id }) => (
  <Typography
    id={id}
    variant="h4"
    component="h4"
    fontSize="2rem"
    fontWeight={700}
    mb={1.5}
  >
    {children}
  </Typography>
)

export const H5: React.FC<TypographyProps> = ({ children, id }) => (
  <Typography
    id={id}
    variant="h5"
    component="h5"
    fontSize="1.785rem"
    fontWeight={700}
    mb={1.5}
  >
    {children}
  </Typography>
)

export const H6: React.FC<TypographyProps> = ({ children, id }) => (
  <Typography
    id={id}
    variant="h6"
    component="h6"
    fontSize="1.475rem"
    fontWeight={700}
    mb={1.5}
  >
    {children}
  </Typography>
)

export const P: React.FC<TypographyProps> = ({ children, id }) => (
  <Typography id={id} fontSize="1.2rem" mb={1.45}>
    {children}
  </Typography>
)
