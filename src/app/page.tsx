import styles from "./page.module.css";
import fs from 'fs'

type MarkdownMetadata = {
  title?: string
  description?: string
  slug: string
}

const getMetadata = () => {
  const files = fs.readdirSync('./md')
  const markdown = files.filter(file => file.endsWith('.md'))
  const slugs = markdown.map(file => file.replace('.md', ''))
  return slugs;
}

export default function Home() {
  const slugs = getMetadata()

  return (
    <main className={styles.main}>
      {slugs.map((slug) => <h1 key={slug}>{slug}</h1>)}
    </main>
  );
}
