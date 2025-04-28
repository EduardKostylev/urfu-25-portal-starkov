import './TrainingList.scss';

export default function TrainingList() {
    return (
        <div className='training-list'>
            <h2 className='training-list__title'>Обучение</h2>
            <ul className='training-list__list'>

                <li className='training-list__list__item'>
                    <div className='training-list__list__item__wrapper'>
                        <div className='training-list__list__item__wrapper__date'>17 Марта</div>
                    </div>
                    <p className='training-list__list__item__description'>Очень очень очень  очень очень очень очень важдый текст</p>
                </li>

                <li className='training-list__list__item'>
                    <div className='training-list__list__item__wrapper'>
                        <div className='training-list__list__item__wrapper__date'>17 Марта</div>
                    </div>
                    <p className='training-list__list__item__description'>Очень очень очень  очень очень очень очень важдый текст</p>
                </li>


                <li className='training-list__list__item'>
                    <div className='training-list__list__item__wrapper'>
                        <div className='training-list__list__item__wrapper__date'>17 Марта</div>
                    </div>
                    <p className='training-list__list__item__description'>Очень очень очень  очень очень очень очень важдый текст</p>
                </li>


            </ul>
        </div>
    )
}
