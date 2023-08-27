import React from 'react'
import styles from './style'
import { Box, Button } from '@mui/material'

const RightSideProfile = () => {
  return (
      <Box sx={styles.profileRight}>
          <img src='https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265_1280.jpg' alt='text' />
          <Box sx={styles.buttonGroup}>
              <Button sx={styles.followBtn}>Follow</Button>
              <Button sx={styles.subscribe}>Subscribe</Button>
          </Box>
      </Box>
  )
}

export default RightSideProfile