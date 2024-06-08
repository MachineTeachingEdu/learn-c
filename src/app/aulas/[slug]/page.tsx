import MdRender from '@/components/md-render';
import { getMarkdown } from '@/utils/get-markdown';
import { getMarkdownListMetadata } from '@/utils/md-file-handlers';

export async function generateStaticParams() {
  const markdownListMetadata = getMarkdownListMetadata();
  return markdownListMetadata.map((metadata) => ({ slug: metadata.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getMarkdown(params.slug);
  return (
    <div className="p-6 w-full max-w-[1000px] m-auto">
      <MdRender content={data.content} />
    </div>
  );
}
