import './Main.scss';

import UpcomingEvents from '../../widgets/UpcomingEvents/UpcomingEvents'
import MainNews from '../../widgets/MainNews/MainNews'
import { Button } from '@chakra-ui/react';
import NewOnPortal from '../../widgets/NewOnPortal/NewOnPortal';

export default function Main() {
    return (
        <div className='general'>
            <div className='general__left-section'>
                <MainNews />
            </div>
            <div className='general__right-section'>
                <UpcomingEvents />
                <NewOnPortal />
            </div>
        </div>
    )
}
