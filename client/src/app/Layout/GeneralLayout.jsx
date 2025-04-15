import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../../widgets/Header/Header';
import News from '../../page/News/News';
import Main from '../../page/Main/Main';
import Calendar from '../../page/Calendar/Calendar';
import Development from '../../page/Development/Development';
import Workers from '../../page/Workers/Workers';
import Communication from '../../page/Communication/Communication';
import Services from '../../page/Services/Services';


export default function GeneralLayout() {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/news' element={<News />} />

                <Route path='/personal_calendar' element={<Calendar variant='personal' />} />
                <Route path='/company_calendar' element={<Calendar variant='company' />} />
                <Route path='/meeting_calendar' element={<Calendar variant='meeting' />} />

                <Route path='/information_development' element={<Development variant='information' />} />
                <Route path='/training_development' element={<Development variant='training' />} />
                <Route path='/documents_development' element={<Development variant='documents' />} />

                <Route path='/workers' element={<Workers />} />

                <Route path='/forum_communication' element={<Communication variant='forum' />} />
                <Route path='/communication_communication' element={<Communication variant='communication' />} />

                <Route path='/services' element={<Services />} />
            </Routes>
        </>
    )
}
