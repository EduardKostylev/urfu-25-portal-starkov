import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralLayout from './Layout/GeneralLayout';
import SignIn from '../page/SignIn/SignIn';

function App() {

  return (
    <Router>

      <Routes>
        <Route path='/' element={<GeneralLayout />} />
        <Route path='/sign_in' element={<SignIn />} />
      </Routes>

    </Router>
  )
}

export default App
