import { Avatar, Flex } from '@chakra-ui/react';
import './ChatsSidevar.scss';
import { useEffect, useState } from 'react';


const employeesFullData = [
    {
        id: 1,
        fullName: "Иванов Иван Иванович",
        department: "Отдел разработки",
        phone: "+79261234567",
        email: "ivanov@company.ru"
    },
    {
        id: 2,
        fullName: "Петрова Анна Сергеевна",
        department: "Отдел маркетинга",
        phone: "+79167778899",
        email: "petrova@company.ru"
    },
    {
        id: 3,
        fullName: "Сидоров Дмитрий Алексеевич",
        department: "Отдел тестирования",
        phone: "+79031112233",
        email: "sidorov@company.ru"
    },
    {
        id: 4,
        fullName: "Кузнецова Елена Викторовна",
        department: "Отдел кадров",
        phone: "+79509998877",
        email: "kuznetsova@company.ru"
    },
    {
        id: 5,
        fullName: "Смирнов Алексей Николаевич",
        department: "Финансовый отдел",
        phone: "+79654443322",
        email: "smirnov@company.ru"
    },
    {
        id: 6,
        fullName: "Васильева Ольга Дмитриевна",
        department: "Техническая поддержка",
        phone: "+79136665544",
        email: "vasilieva@company.ru"
    },
    {
        id: 7,
        fullName: "Попов Михаил Андреевич",
        department: "Аналитический отдел",
        phone: "+79201234567",
        email: "popov@company.ru"
    },
    {
        id: 8,
        fullName: "Лебедева Татьяна Владимировна",
        department: "Отдел дизайна",
        phone: "+79091112233",
        email: "lebedeva@company.ru"
    },
    {
        id: 9,
        fullName: "Козлов Артем Игоревич",
        department: "Отдел продаж",
        phone: "+79557778899",
        email: "kozlov@company.ru"
    },
    {
        id: 10,
        fullName: "Новиков Денис Сергеевич",
        department: "Администрация",
        phone: "+79601234567",
        email: "novikov@company.ru"
    }
];

export default function ChatsSidebar() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);


    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ul className='chats-sidebar' style={{ height: `${windowHeight - 170}px` }}>

            {employeesFullData.map((employes) => (
                <>
                    <li className='chats-sidebar__chat' >
                        <Avatar.Root className='chats-sidebar__chat__avatar '>
                            <Avatar.Fallback name={employes.fullName} />
                            {/* <Avatar.Image src='' /> */}
                        </Avatar.Root>

                        <div className='chats-sidebar__chat__info'>
                            <Flex gap='0.5rem'>
                                <h3 className='chats-sidebar__chat__info__username'>{employes.fullName}</h3>
                                <p className='chats-sidebar__chat__info__time'>4:27pm</p>
                            </Flex>

                            <p className='chats-sidebar__chat__info__last-message'>text text text text text text text text text text text text text text text text text text text text text</p>
                        </div>
                    </li>
                </>
            ))}



        </ul>
    )
}
