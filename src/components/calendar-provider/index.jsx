import React, { useState } from 'react';

const CalendarContext = React.createContext([{}, () => { }]);

const CalendarProvider = (props) => {
  const [state, setState] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
  });
  return (
    <CalendarContext.Provider value={[state, setState]}>
      {props.children}
    </CalendarContext.Provider>
  );
}

export { CalendarContext, CalendarProvider };