import './SignIn.scss';
import { Box, Button, Field, Input, Stack } from '@chakra-ui/react';

export default function SignIn() {
    return (
        <Box className='sign-in' w='100vw' h='100vh' >
            <Stack>
                <h1>Портал Directium RX</h1>

                <form>
                    <Field.Root>
                        <Input placeholder='Логин' />
                    </Field.Root>

                    <Field.Root>
                        <Input placeholder='Пароль' />
                    </Field.Root>

                    <Button borderRadius='md' variant='surface' backgroundColor='green.600' _hover={{ backgroundColor: 'green.700' }} type='submit'>Вход</Button>
                </form>

            </Stack>
        </Box>
    )
}
