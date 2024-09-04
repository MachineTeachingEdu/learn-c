import fs from 'fs'

export const readFile = (filePath: string): string | null => {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch (error) {
    return null
  }
}

export default {}
