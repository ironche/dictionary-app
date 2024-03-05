import sql from '../utils/db'

export interface WordInfo {
  id: number
  melingoid: number
  entry: string
  translationfull: string
  translationflash: string
  text: string
}

export function selectWordInfo(word: string, limit?: number, exactMatch = false): Promise<WordInfo[]> {
  return sql`
    SELECT
      examples.id,
      entries.melingoid,
      entries.entry,
      entries.translationfull,
      entries.translationflash,
      examples.text
    FROM entries
    LEFT JOIN examples
      ON entries.melingoid = examples.melingoid
    WHERE entry LIKE ${exactMatch ? sql`${word}` : sql`${word + '%'}`}
    LIMIT ${limit || 10}
  `
}
