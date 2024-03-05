import { useState } from 'react'
import { SearchForm, limits } from './SearchForm'
import { SearchResults } from './SearchResults'
import { Page } from './fragments'

export function Search() {
  const [word, setWord] = useState<string>('')
  const [limit, setLimit] = useState<number>(limits[0].value)
  const [exact, setExact] = useState<boolean>(false)

  return (
    <Page>
      <SearchForm
        word={word}
        setWord={setWord}
        limit={limit}
        setLimit={setLimit}
        exact={exact}
        setExact={setExact}
      />
      <SearchResults
        word={word}
        limit={limit}
        exact={exact}
      />
    </Page>
  )
}
