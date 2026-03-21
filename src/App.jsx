import Home from './components/pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PossLayout from './components/pages/poss/PossLayout.jsx'
import Poss from './components/pages/poss/Poss.jsx'
import Billing from './components/pages/poss/Billing/Billing.jsx'
import Inventory from './components/pages/poss/inventory/Inventory.jsx'
import Order from './components/pages/poss/onlline-order/Online-Order.jsx'
import Reporting from './components/pages/poss/reporting/Reporting.jsx'
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Poss' element={<Poss />} />
        <Route path='/Poss/Billing' element={<Billing />} />
        <Route path='/Poss/Inventory' element={<Inventory />} />
        <Route path='/Poss/Online-Order' element={<Order />} />
        <Route path='/Poss/Reporting' element={<Reporting />} />
        <Route path='*' element={<h1>note found</h1>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
