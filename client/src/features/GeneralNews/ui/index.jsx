import './GeneralNews.scss';
import { useState } from 'react';
import { Avatar, Box, Flex, Button, Text, Image } from '@chakra-ui/react';

export default function GeneralNews() {
    const [isTextFull, setIsTextFull] = useState(false);


    return (
        <Box className='general-news'>
            <h2 className='general-news__title'>Заголовок Новости</h2>
            <Flex gap='0.4rem'>
                <Avatar.Root>
                    <Avatar.Fallback name='useranme' />
                </Avatar.Root>

                <div className='general-news__user-meta'>
                    <h3>Username</h3>
                    <p>2 дня назад</p>
                </div>
            </Flex>

            <Image className='general-news__news-img' src='../../../../public/main-news.png' />

            <Text className='general-news__description' lineClamp={isTextFull ? 'full' : '2'}>Кульминацией вечера стало выступление популярной российской группы “Звездный Дождь”, которая
                исполнила свои главные хиты и новые композиции. Публика с восторгом подпевала знакомые песни,
                а танцпол был заполнен энергичными танцами.
            </Text>

            {!isTextFull ?
                <Button variant='subtle' className='general-news__btn-more' onClick={() => setIsTextFull(true)} >
                    подробнее
                </Button>
                :
                <Button variant='subtle' className='general-news__btn-more' onClick={() => setIsTextFull(false)} >
                    скрыть
                </Button>
            }

        </Box>
    )
}
