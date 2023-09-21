import { useEffect, useState } from 'react'

export const useGetData = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url)
        const json = await res.json()

        setData(json)
        setError(null)
      } catch (error) {
        console.error(error)
        setError('Houve um erro no carregamento dos dados!!')
      }

      setLoading(false)
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
