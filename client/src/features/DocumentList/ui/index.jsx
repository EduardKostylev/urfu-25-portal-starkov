import { Flex, Image } from '@chakra-ui/react';
import './DocumentList.scss';


export default function DocumentList() {
    return (
        <div className='document-list'>
            <h2 className='document-list__title'>Документы</h2>
            <ul className='document-list__list'>
                <li className='document-list__list__item'>
                    <img className='document-list__list__item__wrapper__image' src='public/png-icon.svg' />
                    <p className='document-list__list__item__description'>Книга нового сотрудника</p>
                </li>

                <li className='document-list__list__item'>
                    <img className='document-list__list__item__wrapper__image' src='public/doc-icon.svg' />
                    <p className='document-list__list__item__description'>Книга нового сотрудника</p>
                </li>

                <li className='document-list__list__item'>
                    <img className='document-list__list__item__wrapper__image' src='public/xls-icon.svg' />
                    <p className='document-list__list__item__description'>Книга нового сотрудника</p>
                </li>
            </ul>
        </div>
    )
}
