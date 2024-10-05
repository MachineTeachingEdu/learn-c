'use client'

import Layout from '@/components/Layout'
import { Embed } from '@/components/md/Addons'
import { H1, H3, P } from '@/components/md/Typography'
import { NavigatorItem } from '@/components/Navigator'
import { useData } from '@/hooks/use-data'
import { Box } from '@mui/material'

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
      <Box>
        <NavigatorItem item={firstMarkdown} direction="next" />
      </Box>
    </Layout>
  )
}
