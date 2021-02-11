import React, { useEffect, useMemo } from 'react'
import _take from 'lodash/take'
import { useDispatcher, useSelector } from '../hooks'
import RepoItem from './RepoItem'
import ListHeader from './ListHeader'

function RecentRepoList() {
  const repoList = useSelector(({ repos }) => repos.repoList)
  const { getRepos } = useDispatcher(({ repos }) => ({
    getRepos: repos.getRepos,
  }))

  useEffect(() => {
    if (repoList.length === 0) {
      getRepos()
    }
  }, [])

  const recentRepos = useMemo(() => {
    return _take(repoList, 5)
  }, [repoList])

  return (
    <div>
      <ListHeader left="Recent Repos" />
      <div className="space-y-4">
        {recentRepos.map((o) => {
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
      </div>
    </div>
  )
}
export default RecentRepoList
