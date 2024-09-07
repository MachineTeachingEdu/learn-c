/* eslint-disable react/no-danger */
import { generateMarkdownSlugs, getMarkdownBySlug } from '@/utils/markdown-slug'
import { processMarkdown } from '@/utils/markdown-parser'
import Layout from '@/components/Layout'
import styles from './page.module.scss'

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await generateMarkdownSlugs()
  return slugs.map((slug) => ({
    slug: slug.split('/'),
  }))
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { content } = await getMarkdownBySlug(params.slug)
  const md = await processMarkdown(content)

  return (
    <Layout pathname={`/${params.slug.join('/')}`}>
      <div
        className={styles.markdownContainer}
        dangerouslySetInnerHTML={{ __html: md.html }}
      />
    </Layout>
  )
}
