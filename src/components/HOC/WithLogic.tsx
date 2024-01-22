import { ComponentType, useEffect, useState } from 'react'

export const withLogic= (WrappedComponent: ComponentType< any>) => (
  function Component(props: any) {
    const [loading, setLoading] = useState(true)
    const style = { padding: '1.2rem', margin: '1rem' }
    
    useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }, [])
    
    if(loading) return <p>loading</p>

    return (
      <div style={style}>
        <WrappedComponent style={style} {...props} />
      </div>
    )
  }
)