import './WorkersTable.scss';
import { Table } from '@chakra-ui/react';

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


export default function WorkersTable() {
    return (
        <div className='workers-table'>
            <Table.Root size="sm" striped variant='outline' stickyHeader='true' rounded='md'>
                <Table.Header >
                    <Table.Row>
                        <Table.ColumnHeader p='0.75rem' color='gray.700'>ФИО</Table.ColumnHeader>
                        <Table.ColumnHeader p='0.75rem' color='gray.700'>Отдел</Table.ColumnHeader>
                        <Table.ColumnHeader p='0.75rem' color='gray.700'>Номер</Table.ColumnHeader>
                        <Table.ColumnHeader p='0.75rem' color='gray.700'>EMAIL</Table.ColumnHeader>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {employeesFullData.map((item) => (
                        <Table.Row key={item.id}>
                            <Table.Cell p='0.75rem' color='gray.700'>{item.fullName}</Table.Cell>
                            <Table.Cell p='0.75rem' color='gray.700'>{item.department}</Table.Cell>
                            <Table.Cell p='0.75rem' color='gray.700'>{item.phone}</Table.Cell>
                            <Table.Cell p='0.75rem' color='gray.700'>{item.email}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    )
}
