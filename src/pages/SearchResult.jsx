import React, { useCallback, useEffect, useMemo } from 'react'
import _isEmpty from 'lodash/isEmpty'
import _trim from 'lodash/trim'
import ListHeader from '../components/ListHeader'
import PostItem from '../components/PostItem'
import RepoItem from '../components/RepoItem'
import { useDispatcher, useRoute, useSelector } from '../hooks'

function SearchResult() {
  const { history } = useRoute()
  const keyword = useSelector(({ search }) => search.keyword)

  const { searchedIssues, searchedRepos } = useSelector(({ search }) => ({
    searchedIssues: search.searchedIssues,
    searchedRepos: search.searchedRepos,
  }))

  const { setKeyword } = useDispatcher(({ search }) => ({
    setKeyword: search.setKeyword,
  }))

  const navToPost = useCallback((number) => {
    history.push(`/post/${number}`)
  }, [])

  const goBack = useCallback(() => {
    setKeyword('')
    history.goBack()
  }, [])

  useEffect(() => {
    if (_trim(keyword) === '') {
      goBack()
    }
  }, [])

  const isEmpty = useMemo(() => {
    return _isEmpty(searchedIssues) && _isEmpty(searchedRepos)
  })

  const renderIssues = useCallback(() => {
    if (_isEmpty(searchedIssues)) {
      return null
    }
    return (
      <>
        <ListHeader right="Searched Posts" />
        {searchedIssues.map((o) => {
          const { number, title, updated_at: updatedAt } = o
          return (
            <PostItem
              key={number}
              title={title}
              date={updatedAt}
              onClick={() => {
                navToPost(number)
              }}
            />
          )
        })}
      </>
    )
  }, [searchedIssues])

  const renderRepos = useCallback(() => {
    if (_isEmpty(searchedRepos)) {
      return null
    }
    return (
      <>
        <ListHeader left="Searched Repos" />
        {searchedRepos.map((o) => {
          const {
            id,
            full_name: fullName,
            forks,
            stargazers_count: stars,
            html_url: url,
          } = o
          return (
            <RepoItem
              key={id}
              name={fullName}
              forks={forks}
              stars={stars}
              onClick={() => {
                window.open(url, '__blank')
              }}
            />
          )
        })}
      </>
    )
  }, [searchedRepos])

  if (isEmpty) {
    return (
      <div className="space-y-4">
        <ListHeader left="&lt;Go Back" onLeftClick={goBack} />
        No Results.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <ListHeader
        left="&lt;Go Back"
        onLeftClick={goBack}
        right={`Keywords: ${keyword}`}
      />
      {renderIssues()}
      {renderRepos()}
    </div>
  )
}

export default SearchResult
