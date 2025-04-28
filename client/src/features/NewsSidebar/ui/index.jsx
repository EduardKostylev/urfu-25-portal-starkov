import { Text, Image } from '@chakra-ui/react';
import './NewsSidebar.scss';

export default function NewsSidebar() {
    return (
        <div className='news-sidebar'>
            <h2 className='news-sidebar__title'>Другие новости</h2>
            <ul className='news-sidebar__news-list'>
                <li className='news-sidebar__news-list__item'>
                    <h3 className='news-sidebar__news-list__item__title'>Заголовок Новости</h3>

                    <Image className='news-sidebar__news-list__item__news-img' src='../../../../public/main-news.png' />

                    <Text className='news-sidebar__news-list__item__description' lineClamp='2'>Кульминацией вечера стало выступление популярной российской группы “Звездный Дождь”, которая
                        исполнила свои главные хиты и новые композиции. Публика с восторгом подпевала знакомые песни,
                        а танцпол был заполнен энергичными танцами.
                    </Text>
                </li>

                <li className='news-sidebar__news-list__item'>
                    <h3 className='news-sidebar__news-list__item__title'>Заголовок Новости</h3>

                    <Image className='news-sidebar__news-list__item__news-img' src='../../../../public/main-news.png' />

                    <Text className='news-sidebar__news-list__item__description' lineClamp='2'>Кульминацией вечера стало выступление популярной российской группы “Звездный Дождь”, которая
                        исполнила свои главные хиты и новые композиции. Публика с восторгом подпевала знакомые песни,
                        а танцпол был заполнен энергичными танцами.
                    </Text>
                </li>

                <li className='news-sidebar__news-list__item'>
                    <h3 className='news-sidebar__news-list__item__title'>Заголовок Новости</h3>

                    <Image className='news-sidebar__news-list__item__news-img' src='../../../../public/main-news.png' />

                    <Text className='news-sidebar__news-list__item__description' lineClamp='2'>Кульминацией вечера стало выступление популярной российской группы “Звездный Дождь”, которая
                        исполнила свои главные хиты и новые композиции. Публика с восторгом подпевала знакомые песни,
                        а танцпол был заполнен энергичными танцами.
                    </Text>
                </li>
            </ul>
        </div>
    )
}
