import './Events.scss';
import { Box, Heading } from '@chakra-ui/react';


export default function MainEvents() {
    return (
        <Box className='main-events'>
            <ul className='main-events__list'>
                <li className='main-events__list__item'>
                    <Heading as='h3' className='main-events__list__item__date' backgroundColor='gray.500' >17 Марта</Heading>
                    <p className='main-events__list__item__description'>Очень очень очень  очень очень очень очень важдый текст</p>
                </li>

                <li className='main-events__list__item'>
                    <Heading as='h3' backgroundColor='gray.500' className='main-events__list__item__date'>17 Марта</Heading>
                    <p className='main-events__list__item__description'>Очень очень очень  очень очень очень очень важдый текст</p>
                </li>

                <li className='main-events__list__item'>
                    <Heading as='h3' backgroundColor='gray.500' className='main-events__list__item__date'>17 Марта</Heading>
                    <p className='main-events__list__item__description'>Очень очень очень  очень очень очень очень важдый текст</p>
                </li>

            </ul>
        </Box>
    )
}
