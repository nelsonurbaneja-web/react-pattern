import { useCallback, useEffect, useRef } from 'react';
import { useGiphys } from '../../hooks/useGiphys';
import { useNearScreen } from '../../hooks/useNearScreen';

export const Observer = () => {
  const { giphys, loading, setPage, loadingNext } = useGiphys({ limit: 15 })
  const externalRef = useRef(null)
  const { isIntersecting } = useNearScreen({ 
    externalRef: loading ? null : externalRef, 
    once:false 
  })

  console.log('isIntersecting', isIntersecting)

  const handleNextPage = useCallback(() => {
    console.log('Showing more')
    setPage(prev => prev + 1)
  }, [])

  useEffect(() => {
    if(isIntersecting) {
      handleNextPage()
    }
  }, [isIntersecting])

  return (
      <div>
        {
          loading ? 
          'cargando'
          :
          <>
          <h2>Busqueda</h2>
          <div className="grid">
            {
              giphys.map((giphy: any) => 
                <div key={giphy?.id}>
                  <img src={giphy?.images?.fixed_height?.url} alt={giphy?.title}/>
                </div>
              )
            }
          </div>
          <div id="visor" ref={externalRef}></div>
          {loadingNext && <p>cargando mas</p>}
          </>
        }
      </div>
  )
}

