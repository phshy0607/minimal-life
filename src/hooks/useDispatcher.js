import { useDispatch } from 'react-redux'

const useDispatcher = (selector) => {
  const dispatch = useDispatch()
  return selector(dispatch)
}

export default useDispatcher
