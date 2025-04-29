import { useState } from 'react';
import './SignIn.scss';
import { Box, Button, Center, Field, Input, Stack } from '@chakra-ui/react';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log({
            login: username,
            password,
        })
    }

    return (
        <Center className='sign-in' >
            <Stack textAlign='center'>
                <h1 className='sign-in__title'>Портал Directium RX</h1>

                <form onSubmit={handleSubmit}>
                    <Field.Root>
                        <Input
                            size='md'
                            className='sign-in__input'
                            placeholder='Логин' type='text'
                            value={username}
                            onChange={(evt) => setUsername(evt.target.value)}
                            required />
                    </Field.Root>

                    <Field.Root>
                        <Input
                            size='md'
                            className='sign-in__input'
                            placeholder='Пароль'
                            type='password'
                            value={password}
                            onChange={(evt) => setPassword(evt.target.value)}
                            required />
                    </Field.Root>

                    <button className='sign-in__btn' type='submit'>Вход</button>
                </form>
            </Stack>

        </Center>
    )
}
