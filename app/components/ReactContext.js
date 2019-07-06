import React from 'react'
import ReactDOM from 'react-dom'

const ExpletiveContext = React.createContext('shit')

function ContextualExclamation(){
  return(
    <ExpletiveContext.Consumer>
      {(word)=> <span>oh {word}</span>}
    </ExpletiveContext.Consumer>
    )
}

function VisitGrandmaHouse(){
  return (
      <ExpletiveContext.Provider value='poop'>
          <h1>Grandma's House</h1>
          <ContextualExclamation />
      </ExpletiveContext>
    )
}

function VisitFriendHouse(){
  return(
      <React.Fragment>
        <h1>Friend's House</h1>
        <ContextualExclamation />
      </React.Fragment>
    )
}

function App(){
  return (
      <React.Fragment>
        <VisitFriendHouse />
        <VisitGrandmaHouse />
      </React.Fragment>
    )
}