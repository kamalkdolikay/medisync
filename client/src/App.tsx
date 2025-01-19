// App.tsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Importing page components
import HomeComponent from "./pages/home/home-component";
import MedicineInputComponent from './pages/medicine-input/medicine-input-component';

const App = () => {
  return (
    <Router>
        <Routes>
            {/* Unprotected routes */}
            <Route path='/' element={<HomeComponent />} />
            <Route path='/medicine-input' element={<MedicineInputComponent/>} />
        </Routes>
    </Router>
  )
}

export default App;