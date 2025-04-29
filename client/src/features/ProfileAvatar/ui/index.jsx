import { Avatar } from '@chakra-ui/react';
import './ProfileAvatar.scss';

export default function ProfileAvatar() {
    return (
        <div className='profile-avatar'>
            <Avatar.Root className='profile-avatar__avatar' w='550px' h='550px'>
                <Avatar.Fallback name='username' />
                {/* <Avatar.Image src=''/> */}
            </Avatar.Root>

            <h1 className='profile-avatar__fullname'>Евгений Иванов Иванович</h1>

            <h2 className='profile-avatar__post'>Главный главный</h2>
        </div>
    )
}
