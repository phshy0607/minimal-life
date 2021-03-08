import React, { useCallback } from 'react'
import _trim from 'lodash/trim'
import Input from '@/components/Input'
import { useDispatcher, useRoute, useSelector } from '@/hooks'

function Search() {
  const { history } = useRoute()
  const keyword = useSelector(({ search }) => search.keyword)
  const { searchByKeyword, setKeyword } = useDispatcher(({ search }) => ({
    searchByKeyword: search.searchByKeyword,
    setKeyword: search.setKeyword,
  }))

  const doSearch = useCallback(() => {
    if (!_trim(keyword)) {
      history.replace('/')
      return
    }
    searchByKeyword(_trim(keyword)).then(() => {
      history.push('/search/results')
    })
  }, [keyword])

  return (
    <div className="flex items-center justify-center">
      <Input
        value={keyword}
        onChange={setKeyword}
        onKeyPress={(e) => {
          if (e.code === 'Enter') {
            doSearch()
          }
        }}
      />
      <i
        className="iconfont icon-chazhao text-4xl cursor-pointer"
        onClick={doSearch}
      />
    </div>
  )
}

export default Search
