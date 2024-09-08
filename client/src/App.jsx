import { Route, Routes } from 'react-router-dom'
import QrPage from './pages/QrPage'
import CountPage from './pages/countPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import UserProvider from './UserContext'
import Admin from './pages/Admin'
import QrScanPage from './pages/QrScanPage'
import Card from './pages/Card'
import QRCodeScanner from './pages/QrScanPage'

function App() {

  return (
    <>
    <UserProvider>
    <Navbar />
      <div>
      <Routes>
        <Route path="/qrpage/:rollNo" element={<QrPage />} />
        <Route path="/countPage" element={<CountPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/scannedPage' element={<QRCodeScanner />} />
        <Route path='/cards' element={<Card />} />
      </Routes>
    </div>
    </UserProvider>
    </>
  )
}

export default App
