import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

function useAppConfig() {
  useEffect(() => {
    smoothscroll.polyfill()

    if (window.marked) {
      window.marked.setOptions({
        renderer: new window.marked.Renderer(),
        highlight(code, language) {
          const hljs = window.hljs
          const validLanguage = hljs.getLanguage(language)
            ? language
            : 'plaintext'
          return hljs.highlight(validLanguage, code).value
        },
        gfm: true,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
      })
    }
  }, [])
}

export default useAppConfig
