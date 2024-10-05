import { Box, Paper } from '@mui/material'
import { H5, P } from '@/components/md/Typography'

type PersonCardProps = {
  name: string
  img: string
  description: string
}

function PersonCard({ name, img, description }: PersonCardProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        display: 'flex',
        gap: 2,
        p: 2,
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 200,
          objectFit: 'cover',
          borderRadius: '50%',
        }}
        component="img"
        src={img}
      />
      <Box flex={1}>
        <H5>{name}</H5>
        <P>{description}</P>
      </Box>
    </Paper>
  )
}

export default PersonCard
