import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import './MainNews.scss';
import { useState } from 'react';

export default function MainNews() {
    const [isTextFull, setIsTextFull] = useState(false);

    return (
        <Box className='main-news'>
            <h1 className='main-news__title'>Заголовок H1</h1>

            <Image width='full' src='../../../public/main-news.png' className='main-news__img' />

            <Text className='main-news__description' lineClamp={isTextFull ? 'full' : '2'}>Кульминацией вечера стало выступление популярной российской группы “Звездный Дождь”, которая
                исполнила свои главные хиты и новые композиции. Публика с восторгом подпевала знакомые песни,
                а танцпол был заполнен энергичными танцами.
                Помимо выступления хедлайнеров, гостей ждала насыщенная развлекательная программа: выступление
                талантливых сотрудников компании с музыкальными и танцевальными номерами, интерактивные конкурсы и розыгрыши призов.
            </Text>

            <Flex mt='1rem' justify='space-between'>
                {!isTextFull ?
                    <Button variant='subtle' className='main-news__btn-more' onClick={() => setIsTextFull(true)} >
                        подробнее
                    </Button>
                    :
                    <Button variant='subtle' className='main-news__btn-more' onClick={() => setIsTextFull(false)} >
                        скрыть
                    </Button>
                }

                <Button size='md' backgroundColor='green.600' _hover={{ backgroundColor: 'green.700' }} className='main-news__btn-news'>ВСЕ НОВОСТИ</Button>
            </Flex>


        </Box >
    )
}
