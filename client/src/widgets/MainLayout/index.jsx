import MainNews from '../../features/MainNews/ui';
import MainEvents from '../../features/MainEvents/ui/index';
import './MainLayout.scss';
import NewOnPortal from '../NewOnPortal';

export default function MainLayout() {
    return (
        <div className='main-layout'>
            <div className='main-layout__left-section'>
                <MainNews />
            </div>
            <div className='main-layout__right-section'>
                <MainEvents />
                <NewOnPortal />
            </div>
        </div>
    )
}
