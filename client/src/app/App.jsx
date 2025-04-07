import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../widgets/Header/Header"
import News from '@/page/News/News';
import Main from '@/page/Main/Main';
import Calendar from '@/page/Calendar/Calendar';
import Development from '@/page/Development/Development';
import Workers from '@/page/Workers/Workers';
import Communication from '@/page/Communication/Communication';
import Services from '@/page/Services/Services';

function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/news' element={<News />} />

        <Route path='/personal_calendar' element={<Calendar />} />
        <Route path='/company_calendar' element={<Calendar />} />
        <Route path='/meeting_calendar' element={<Calendar />} />

        <Route path='/information_development' element={<Development />} />
        <Route path='/training_development' element={<Development />} />
        <Route path='/documents_development' element={<Development />} />

        <Route path='/workers' element={<Workers />} />

        <Route path='/forum_communication' element={<Communication />} />
        <Route path='/communication_communication' element={<Communication />} />

        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
