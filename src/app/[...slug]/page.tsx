import { generateMarkdownSlugs, getMarkdownBySlug } from '@/utils/markdown-slug'
import Markdown from '@/components/Markdown'
import Layout from '@/components/Layout'

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await generateMarkdownSlugs()
  const slugParams = slugs.map((slug) => ({
    slug: slug.split('/'),
  }))

  return slugParams
}

export default async function Page({
  params,
}: {
  params: { slug: string[] | undefined }
}) {
  const { content } = await getMarkdownBySlug(params.slug)
  return (
    <Layout>
      <Markdown text={content} />
    </Layout>
  )
}
