import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Prix from './routes/Prix'
import APropos from './routes/APropos'
import Contact from './routes/Contact'
/* Import de React, des routes/route et des liens à mettres dans les routes */

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Prix' element={<Prix />} />
        <Route path='/APropos' element={<APropos />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;