import './InformationList.scss';

export default function InformationList() {
    return (
        <div className='information-list'>
            <h2 className='information-list__title'>Знания</h2>
            <ul className='information-list__list'>
                <li className='information-list__list__item'>
                    <button type='button' className='information-list__list__item__btn'>СТАРКОВ BOOK</button>
                </li>

                <li className='information-list__list__item'>
                    <button type='button' className='information-list__list__item__btn'>WIKI</button>
                </li>
            </ul>
        </div>
    )
}
