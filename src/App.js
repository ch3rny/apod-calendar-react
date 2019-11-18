import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Calendar } from "./pages/calendar";
import { CalendarProvider } from "./components/calendarContext";
import { Apod } from "./pages/apod";
function App() {
  return (
    <div className="App">
      <CalendarProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route path="/:date" component={Apod} />
          </Switch>
        </Router>
      </CalendarProvider>
    </div>
  );
}

export default App;
