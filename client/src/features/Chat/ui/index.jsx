import './Chat.scss';
import { Avatar, Box, Button, Center, Flex, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IoSendOutline } from "react-icons/io5";

export default function Chat() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);


    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box className='chat' height={`${windowHeight - 170}px`}>
            <ul className='chat__message-list'>

                <li className='chat__message-list__message'>
                    <Avatar.Root className='chat__message-list__message__avatar'>
                        <Avatar.Fallback name='me' />
                        {/* <Avatar.Image src=''/> */}
                    </Avatar.Root>

                    <div>
                        <Flex gap='0.5rem' className='chat__message-list__message__meta-data'>
                            <h3 className='chat__message-list__message__meta-data__username'>Me</h3>
                            <p className='chat__message-list__message__meta-data__time'>4:27pm</p>
                        </Flex>

                        <p className='chat__message-list__message__description'>text text text text text text text text text text text text text text text text text text text text text text text text text</p>
                    </div>
                </li>


                <li className='chat__message-list__message'>
                    <Avatar.Root className='chat__message-list__message__avatar'>
                        <Avatar.Fallback name='ope' />
                        {/* <Avatar.Image src=''/> */}
                    </Avatar.Root>

                    <div>
                        <Flex gap='0.5rem' className='chat__message-list__message__meta-data'>
                            <h3 className='chat__message-list__message__meta-data__username'>Ope</h3>
                            <p className='chat__message-list__message__meta-data__time'>4:27pm</p>
                        </Flex>

                        <p className='chat__message-list__message__description'>text text text text text text text text text text text text text text text text text text text text text text text text text</p>
                    </div>
                </li>


                <li className='chat__message-list__message'>
                    <Avatar.Root className='chat__message-list__message__avatar'>
                        <Avatar.Fallback name='me' />
                        {/* <Avatar.Image src=''/> */}
                    </Avatar.Root>

                    <div>
                        <Flex gap='0.5rem' className='chat__message-list__message__meta-data'>
                            <h3 className='chat__message-list__message__meta-data__username'>Me</h3>
                            <p className='chat__message-list__message__meta-data__time'>4:27pm</p>
                        </Flex>

                        <p className='chat__message-list__message__description'>text text text text text text text text text text text text text text text text text text text text text text text text text</p>
                    </div>
                </li>


            </ul>


            <form className='chat__message-form'>
                <Flex >
                    <Input className='chat__message-form__input' w='full' rounded='md' />
                    <Button className='chat__message-form__btn' variant='solid'>
                        <IoSendOutline />
                    </Button>
                </Flex>
            </form>
        </Box>
    )
}
