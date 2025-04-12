import './UpcomingEvents.scss';
import { Box, Heading } from '@chakra-ui/react';

export default function UpcomingEvents() {
    return (
        <Box className='upcoming-events'>
            <ul className='upcoming-events__list'>
                <li className='upcoming-events__list__item'>
                    <Heading as='h3' className='upcoming-events__list__item__date' backgroundColor='gray.500' >17 Марта</Heading>
                    <p className='upcoming-events__list__item__description'>Очень очень очень  очень очень очень очень важдый текст</p>
                </li>

                <li className='upcoming-events__list__item'>
                    <Heading as='h3' backgroundColor='gray.500' className='upcoming-events__list__item__date'>17 Марта</Heading>
                    <p className='upcoming-events__list__item__description'>Очень очень очень  очень очень очень очень важдый текст</p>
                </li>

                <li className='upcoming-events__list__item'>
                    <Heading as='h3' backgroundColor='gray.500' className='upcoming-events__list__item__date'>17 Марта</Heading>
                    <p className='upcoming-events__list__item__description'>Очень очень очень  очень очень очень очень важдый текст</p>
                </li>

            </ul>
        </Box>
    )
}
