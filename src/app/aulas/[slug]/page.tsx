import { processMarkdown } from '@/utils/markdown-parser'
import { getMarkdown, getMarkdowns } from '@/utils/get-markdown'
import Container from '@/components/container'
import styles from './page.module.scss'

export async function generateStaticParams() {
  const markdowns = await getMarkdowns()
  return markdowns.map((markdown) => ({ slug: markdown.slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content } = await getMarkdown(params.slug)
  const md = await processMarkdown(content)

  console.log(md.headings)

  return (
    <Container>
      <div
        className={styles.markdownContainer}
        dangerouslySetInnerHTML={{ __html: md.html }}
      />
    </Container>
  )
}
