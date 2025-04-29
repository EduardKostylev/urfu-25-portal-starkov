import { Button, Field, Input } from '@chakra-ui/react';
import './ProfileForm.scss';

export default function ProfileForm() {
    const handleSubmit = async (evt) => {
        evt.preventDefautl();
    }

    return (
        <div className='profile-form'>
            <form className='profile-form__form' onSubmit={handleSubmit}>

                <Field.Root className='profile-form__form__input' required>
                    <Input placeholder="Логин" />
                    <Field.ErrorText>This field is required</Field.ErrorText>
                </Field.Root>

                <Field.Root className='profile-form__form__input' required>
                    <Input placeholder="Пароль" type='password' />
                    <Field.ErrorText>This field is required</Field.ErrorText>
                </Field.Root>

                <Field.Root className='profile-form__form__input' required>
                    <Input placeholder="Почта" />
                    <Field.ErrorText>This field is required</Field.ErrorText>
                </Field.Root>

                <Field.Root className='profile-form__form__input' required>
                    <Input placeholder="ID сотрудника" />
                    <Field.ErrorText>This field is required</Field.ErrorText>
                </Field.Root>

                <Button type='submit' className='profile-form__form__btn' color='white' backgroundColor='green.600' _hover={{ backgroundColor: 'green.700' }}>СОХРАНИТЬ</Button>
            </form>

        </div>
    )
}
