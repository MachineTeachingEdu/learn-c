'use client'

import Layout from '@/components/Layout'
import { Embed } from '@/components/md/Addons'
import { H1, H3, H6, P } from '@/components/md/Typography'
import { useData } from '@/hooks/use-data'
import { Box, Paper } from '@mui/material'
import { blue } from '@mui/material/colors'
import Link from 'next/link'
import { AiFillCaretRight } from 'react-icons/ai'

export default function Page() {
  const { markdownMetadatas } = useData()
  const firstMarkdown = markdownMetadatas[0]

  return (
    <Layout>
      <H1>Curso de Algoritmos e Programação</H1>
      <P>
        Seja muito bem-vindo ao curso de Algoritmos e Programação! Ao longo
        deste curso, você terá a oportunidade de explorar e entender os
        principais conceitos que guiam o mundo da programação.
      </P>
      <P>
        Esse site possui uma coletânea de diversos vídeos de autores diferentes
        que auxiliarão no seu aprendizado. Além disso, ao fim de cada módulo,
        você poderá fazer exercícios que serão essenciais nessa jornada,
        portanto, não esqueça de fazer.
      </P>
      <P>
        No vídeo abaixo, você entenderá o por que programação é tão importante
        nos dias atuais.
      </P>
      <Embed src="https://www.youtube.com/embed/Dv7gLpW91DM?si=Fh2IZPmGAGdoojvV" />
      <H3>Vamos começar?</H3>
      <Paper
        variant="outlined"
        component={Link}
        href={firstMarkdown.path}
        sx={{
          p: 1,
          display: 'flex',
          gap: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          textDecoration: 'none',
          '&:hover': {
            color: blue[700],
          },
        }}
      >
        <Box>
          <H6>{firstMarkdown.title}</H6>
          <P>
            Introdução a disciplina de algoritmos e programação. Você aprenderá
            o que são algoritmos e o que é uma linguagem de programação.
          </P>
        </Box>
        <Box>
          <AiFillCaretRight size={38} />
        </Box>
      </Paper>
    </Layout>
  )
}
