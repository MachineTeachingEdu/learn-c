'use client'

import Layout from '@/components/Layout'
import { H1, H4, P } from '@/components/md/Typography'
import PersonCard from '@/components/PersonCard'
import { Box } from '@mui/material'

export default function Sobre() {
  return (
    <Layout>
      <H1>Sobre</H1>
      <P>
        Esse site foi desenvolvido como um projeto de tutoria da disciplina de
        Algoritmos e Programação na Universidade Federal do Estado do Rio de
        Janeiro e tem como intenção auxiliar os alunos no aprendizado.
      </P>
      <H4>Desenvolvido por</H4>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <PersonCard
          name="Laura Moraes"
          img="/Foto-Laura-Moraes.jpg"
          description="É professora adjunta A da Universidade Federal do Estado do Rio de
          Janeiro (UNIRIO). Possui mestrado e doutorado em Engenharia de
          Sistemas e Computação pela COPPE/UFRJ, na linha de inteligência
          artificial."
        />
        <PersonCard
          name="João Guilherme Cansi"
          img="/Foto-Joao-Guilherme.jpeg"
          description="É discente no curso de bacharelado em Sistemas de Informação pela
          Universidade Federal do Estado do Rio de Janeiro (UNIRIO). Também atua
          como tutor na disciplina de Algoritmos e Programação."
        />
      </Box>
    </Layout>
  )
}
