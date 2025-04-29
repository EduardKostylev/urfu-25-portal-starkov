import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralLayout from './Layout/GeneralLayout';
import SignIn from '../features/Auth/Login/ui';

import News from '../page/News/index';
import Main from '../page/Main/index';
import Calendar from '../page/Calendar/index';
import Development from '../page/Development/index';
import Workers from '../page/Workers/index';
import Communication from '../page/Communication/index';
import Services from '../page/Services/index';
import Profile from '../page/Profile';

function App() {

  return (
    <Router>

      <Routes>
        <Route path='/sign_in' element={<SignIn />} />

        <Route path='/*' element={<GeneralLayout />} >
          <Route index element={<Main />} />
          <Route path='news' element={<News />} />

          <Route path='personal_calendar' element={<Calendar variant='personal' />} />
          <Route path='company_calendar' element={<Calendar variant='company' />} />
          <Route path='meeting_calendar' element={<Calendar variant='meeting' />} />

          <Route path='development' element={<Development />} />

          <Route path='workers' element={<Workers />} />

          <Route path='forum_communication' element={<Communication variant='forum' />} />
          <Route path='communication_communication' element={<Communication variant='communication' />} />

          <Route path='services' element={<Services />} />

          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>

    </Router>
  )
}

export default App
