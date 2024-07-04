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

  return (
    <Container>
      <div
        className={styles.markdownContainer}
        dangerouslySetInnerHTML={{ __html: md.html }}
      />
      <iframe
        // frameBorder="0"
        title="JDoodle"
        height="600px"
        src="https://onecompiler.com/embed/c/42j68q6wt"
        width="100%"
      />
    </Container>
  )
}
