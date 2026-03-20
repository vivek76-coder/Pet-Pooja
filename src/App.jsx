import Home from './components/pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PossLayout from './components/pages/poss/PossLayout.jsx'
import Poss from './components/pages/poss/Poss.jsx'
import Billing from './components/pages/poss/Billing/Billing.jsx'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='poss' element={<PossLayout />} >
            <Route index element={<Poss />} />
            <Route path='billing' element={<Billing />} />
          </Route>
        </Route>
        <Route path='*' element={<h2>not define</h2>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
