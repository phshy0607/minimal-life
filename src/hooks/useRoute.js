import { useHistory, useParams, useLocation } from 'react-router-dom'
import UrlParser from 'url-parse'

function useRoute() {
  const history = useHistory()
  const params = useParams()
  const location = useLocation()
  const query = UrlParser.qs.parse(location.search)

  return {
    history,
    params,
    location,
    query,
  }
}

export default useRoute
