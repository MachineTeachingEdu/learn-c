import { generateMarkdownSlugs, getMarkdownBySlug } from '@/utils/markdown-slug'
import Markdown from '@/components/Markdown'
import TestLayout from '@/components/CustomLayout'
// import Layout from '@/components/Layout'

export const dynamicParams = false

export async function generateStaticParams() {
  const slugs = await generateMarkdownSlugs()
  return slugs.map((slug) => ({
    slug: slug.split('/'),
  }))
}

// pathname={`/${params.slug.join('/')}`}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { content } = await getMarkdownBySlug(params.slug)
  return (
    <TestLayout>
      <Markdown text={content} />
    </TestLayout>
  )
}
