import { useEffect, useMemo } from 'react'
import useDispatcher from './useDispatcher'
import useSelector from './useSelector'

function useAsync(asyncFunction, immediate) {
  const loading = useSelector(({ global }) => global.loading)
  const { showLoading, hideLoading } = useDispatcher(({ global }) => ({
    showLoading: global.showLoading,
    hideLoading: global.hideLoading,
  }))

  const isLoading = useMemo(() => {
    return loading > 0
  }, [loading])

  const fetch = () => {
    showLoading()
    return asyncFunction().then((res) => {
      hideLoading()
      return res
    })
  }

  useEffect(() => {
    if (immediate) {
      fetch()
    }
  }, [])

  return {
    fetch,
    isLoading,
  }
}

export default useAsync
