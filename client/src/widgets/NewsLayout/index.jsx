import './NewsLayout.scss';
import GeneralNews from '../../features/GeneralNews/ui/index'
import NewsSidebar from '../../features/NewsSidebar/ui';

export default function NewsLayout() {
    return (
        <div className='news-layout'>
            <div className='news-layout__left'>
                <GeneralNews />
            </div>

            <div className='news-layout__right'>
                <NewsSidebar />
            </div>
        </div>
    )
}
