import Chat from '../../features/Chat/ui';
import ChatsSidebar from '../../features/ChatsSidebar/ui';
import './CommunicationLayout.scss';

export default function CommunicationLayout() {
    return (
        <div className='communication-layout'>
            <div className='communication-layout__chats-sidebar'>
                <ChatsSidebar />
            </div>

            <div className='communication-layout__chat'>
                <Chat />
            </div>
        </div>
    )
}
