import React, { useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface PropsTitle {
  children: React.ReactNode
}

interface PropsSubTitle {
  name: string
}


const Title = ({ children } : PropsTitle) => {
  const style = { display: 'flex'}
  return (
    <div style={style}>
      <h1>title header </h1>
      subtitle: {children}
    </div>
  )
}

const SubTitle = ({ name } : PropsSubTitle) => {
  return (
    <span>{ name }</span>
  )
}

const Header = ({ children } : Props) => {
  return (
    <header>
      { children }
    </header>
  )
}

const AppComposition = () => {
  const [stateName, setStateName] = useState("subtitle desde el state")

  return (
    <>
      <Header>
        <Title>
          <SubTitle name={stateName} />
        </Title>
      </Header>
    </>
  )
}

const PatternComposition = () => {
  return (
    <div>
      <AppComposition />
    </div>
  )
}

export default PatternComposition