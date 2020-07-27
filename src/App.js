import React, { Fragment, useContext } from 'react'
import { Context } from './context'
import { Header, Button, CardList, Aside, Footer } from './components'

const App = () => {
  const { addCard, sortCards } = useContext(Context)

  return (
    <Fragment>
      <div className="content-wrapper">
        <Header>
          <Button className="button header__button" onClick={addCard}>
            Add card
          </Button>
          <Button className="button header__button" onClick={sortCards}>
            Sort cards
          </Button>
        </Header>
        <CardList />
        <Footer>Footer</Footer>
      </div>
      <Aside />
    </Fragment>
  )
}
export default App
