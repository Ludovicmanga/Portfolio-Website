import { Button } from '@mui/material'
import React from 'react'
import styles from './ExperiencesAndFormation.module.css'

type Props = {}

const ExperiencesAndFormation = (props: Props) => {
  return (
    <div className={styles.btnContainer}>
        <Button variant='contained'>Voir mes expériences</Button>
    </div>
  )
}

export default ExperiencesAndFormation