import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'App.css'
import { Calendar } from 'pages/calendar'
import { CalendarProvider } from 'components/calendar-provider'
import { SearchBar } from 'components/search-bar'
import { Search } from 'pages/search'
import { Apod } from 'pages/apod'
function App() {
  return (
    <div className="App">
      <CalendarProvider>
        <Router>
          <SearchBar />
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route exact path="/:date" component={Apod} />
            <Route path="/search/:search" component={Search} />
          </Switch>
        </Router>
      </CalendarProvider>
    </div>
  )
}

export default App
