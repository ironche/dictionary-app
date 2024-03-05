import { useEffect, useState, useDeferredValue } from 'react'

interface WordInfoResponse {
  id: number
  melingoid: number
  entry: string
  translationfull: string
  translationflash: string
  text: string
}

interface WordInfo {
  id: number
  entry: string
  full: string
  flash: string
  examples: string[]
}

interface WordInfoHook {
  loading: boolean
  data: WordInfo[]
}

export function useWordInfo(word: string, limit: number, exactMatch = false): WordInfoHook {
  const [loading, setLoading] = useState(false)
  const [wordInfo, setWordInfo] = useState<WordInfo[]>([])
  const w = useDeferredValue(encodeURIComponent(word))
  const l = useDeferredValue(encodeURIComponent(limit.toString()))
  const e = useDeferredValue(exactMatch ? '1' : '0')

  useEffect(() => {
    if (w && +l > 0) {
      setLoading(true)
      fetch(`/api/word/${w}/${l}/${e}`)
        .then((response) => response.json())
        .then((data: { result: WordInfoResponse[] }) => {
          const uniqueEntries = new Map<number, WordInfo>()
          data.result.forEach((r) => {
            const entry = uniqueEntries.get(r.melingoid)
            if (entry) {
              entry.examples.push(r.text)
            } else {
              uniqueEntries.set(r.melingoid, {
                id: r.melingoid,
                entry: r.entry,
                full: r.translationfull,
                flash: r.translationflash,
                examples: [r.text],
              })
            }
          })
          const res: WordInfo[] = Array.from(uniqueEntries.values())
          setWordInfo(res)
        })
        .catch((error) => {
          console.error(error)
          setWordInfo([])
        })
        .finally(() => setLoading(false))
    }
  }, [w, l, e])

  return { loading, data: wordInfo }
}
