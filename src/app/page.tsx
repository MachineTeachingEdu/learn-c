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
        Bem-vindo ao curso de Algoritmos e Programação! Neste espaço, você irá
        explorar os conceitos fundamentais que formam a base da programação
        moderna.
      </P>
      <P>
        Este site é uma coletânea de vídeos de diversos autores, todos
        projetados para enriquecer seu aprendizado. Ao final de cada módulo,
        você encontrará exercícios práticos essenciais para consolidar seu
        conhecimento, então não se esqueça de praticar!
      </P>
      <P>
        Assista ao vídeo abaixo para descobrir por que a programação é tão
        crucial nos dias de hoje.
      </P>
      <Embed src="https://www.youtube.com/embed/Dv7gLpW91DM?si=Fh2IZPmGAGdoojvV" />
      <H3>Vamos começar?</H3>
      <Box>
        <NavigatorItem item={firstMarkdown} direction="next" />
      </Box>
    </Layout>
  )
}
