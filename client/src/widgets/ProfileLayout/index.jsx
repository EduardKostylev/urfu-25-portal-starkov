import { Center, Flex } from '@chakra-ui/react';
import './Profilelayout.scss';
import ProfileForm from '../../features/ProfileForm/ui';
import ProfileAvatar from '../../features/ProfileAvatar/ui';

export default function ProfileLayout() {
    return (
        <Center textAlign='center' gap='7.5rem' className='profile-layout'>
            <ProfileAvatar />
            <div className='profile-layout__form-wrapper'>
                <ProfileForm />
            </div>
        </Center>
    )
}
