import { useEffect, useState, useRef } from 'react'

interface useNearScreenProps {
  externalRef: any
  once: boolean
}
export const useNearScreen = ({ externalRef, once = true } : useNearScreenProps) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const fromRef = useRef<HTMLDivElement>(null)
 
  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current

    const options = {
      rootMargin: '100px'
    }
  
    console.log({once})
  
    const onChange = (entries: any, observer: any) => {
      const ele = entries[0]
      if(ele.isIntersecting) {
        setIsIntersecting(true)
        once && observer.disconnect()
      } else {
        !once && setIsIntersecting(false)
      }
    }
  
    const observer = new IntersectionObserver(onChange, options);

    console.log(element)
    
    element && observer.observe(element as HTMLDivElement)

  }, [externalRef, fromRef])

  return { isIntersecting, fromRef }
}