import { Routes, Route } from "react-router-dom";
import AdmissionDashboard from './pages/AdmissionDashboard'

const App = () => {
  return (
   <>
    <Routes>
      <Route path="/" element={<AdmissionDashboard />} />
    </Routes>
   </>
  )
}

export default App