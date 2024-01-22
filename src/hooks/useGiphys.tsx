import  { useState, useEffect } from 'react'
import { fetchGiphy } from '../services/getGiphys'

interface useGiphysProps {
  limit: number
  page?: number
}

const INITIAL_PAGE = 0

export const useGiphys = ({ limit } : useGiphysProps) => {
  const [giphys, setGiphys] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingNext, setLoadingNext] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  
  useEffect(() => {
    setLoading(true)
    fetchGiphy({ limit}).then(data => {
      setGiphys(data)  
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if(page === INITIAL_PAGE) return
    setLoadingNext(true)
    fetchGiphy({ limit, page }).then(data => {
      setGiphys(prevData => [...prevData, ...data] as any) 
      setLoadingNext(false)
    })
  }, [page])

  return { giphys, loadingNext, loading, setPage }
}
