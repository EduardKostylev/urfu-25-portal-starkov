import { useState } from 'react';
import './WorkersFilter.scss';
import { Flex, Select, createListCollection, Portal } from '@chakra-ui/react';

const employees = createListCollection({
    items: [
        { label: "Иванов Иван Иванович", value: "ivanov_ii" },
        { label: "Петров Петр Петрович", value: "petrov_pp" },
        { label: "Сидорова Анна Михайловна", value: "sidorova_am" },
        { label: "Кузнецов Дмитрий Сергеевич", value: "kuznetsov_ds" },
        { label: "Смирнова Екатерина Викторовна", value: "smirnova_ev" },
        { label: "Васильев Алексей Николаевич", value: "vasiliev_an" },
        { label: "Попова Ольга Дмитриевна", value: "popova_od" },
        { label: "Соколов Михаил Андреевич", value: "sokolov_ma" },
        { label: "Лебедева Татьяна Владимировна", value: "lebedeva_tv" },
        { label: "Козлов Артем Игоревич", value: "kozlov_ai" },
        { label: "Новикова Юлия Александровна", value: "novikova_ya" },
        { label: "Морозов Сергей Васильевич", value: "morozov_sv" },
        { label: "Волкова Надежда Павловна", value: "volkova_np" },
        { label: "Алексеев Павел Олегович", value: "alekseev_po" },
        { label: "Павлова Марина Сергеевна", value: "pavlova_ms" },
        { label: "Семенов Игорь Дмитриевич", value: "semenov_id" },
        { label: "Голубева Елена Валерьевна", value: "golubeva_ev" },
        { label: "Виноградов Андрей Петрович", value: "vinogradov_ap" },
        { label: "Богданова Анастасия Игоревна", value: "bogdanova_ai" },
        { label: "Федоров Денис Викторович", value: "fedorov_dv" },
        { label: "Михайлова Светлана Борисовна", value: "mikhailova_sb" },
        { label: "Белов Константин Александрович", value: "belov_ka" },
        { label: "Комаров Виталий Сергеевич", value: "komarov_vs" },
        { label: "Орлова Людмила Николаевна", value: "orlova_ln" },
        { label: "Жуков Арсений Владимирович", value: "zhukov_av" }
    ],
})

const departments = createListCollection({
    items: [
        { label: "Отдел разработки", value: "dev" },
        { label: "Отдел тестирования", value: "qa" },
        { label: "Отдел маркетинга", value: "marketing" },
        { label: "Отдел продаж", value: "sales" },
        { label: "Отдел кадров", value: "hr" },
        { label: "Финансовый отдел", value: "finance" },
        { label: "Техническая поддержка", value: "support" },
        { label: "Аналитический отдел", value: "analytics" },
        { label: "Отдел дизайна", value: "design" },
        { label: "Администрация", value: "management" }
    ]
})

const phoneNumbers = createListCollection({
    items: [
        { label: "89261234567", value: "79261234567" },
        { label: "89167778899", value: "79167778899" },
        { label: "89031112233", value: "79031112233" },
        { label: "89509998877", value: "79509998877" },
        { label: "89654443322", value: "79654443322" },
        { label: "89136665544", value: "79136665544" },
        { label: "89201234567", value: "79201234567" },
        { label: "89091112233", value: "79091112233" },
        { label: "89557778899", value: "79557778899" },
        { label: "89601234567", value: "79601234567" }
    ]
})

const emails = createListCollection({
    items: [
        { label: "ivanov@company.ru", value: "ivanov@company.ru" },
        { label: "petrov@company.ru", value: "petrov@company.ru" },
        { label: "sidorova@company.ru", value: "sidorova@company.ru" },
        { label: "kuznetsov@company.ru", value: "kuznetsov@company.ru" },
        { label: "smirnova@company.ru", value: "smirnova@company.ru" },
        { label: "vasiliev@company.ru", value: "vasiliev@company.ru" },
        { label: "popova@company.ru", value: "popova@company.ru" },
        { label: "sokolov@company.ru", value: "sokolov@company.ru" },
        { label: "lebedeva@company.ru", value: "lebedeva@company.ru" },
        { label: "kozlov@company.ru", value: "kozlov@company.ru" }
    ]
})

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


export default function WorkersFilter() {
    const [workers, setWorkers] = useState([]);
    const [department, setDepartment] = useState([]);
    const [number, setNumber] = useState([]);
    const [mail, setMail] = useState([]);


    return (
        <Flex gap='2rem' justify='space-between' wrap='wrap'>
            <Select.Root multiple collection={employees} size="md" width="300px" border='1px solid gray.200' backgroundColor='white' onValueChange={(evt) => setWorkers(evt.items)}>
                <Select.HiddenSelect />
                {/* <Select.Label>Select framework</Select.Label> */}
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Сотрудники" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {employees.items.map((w) => (
                                <Select.Item item={w} key={w.value}>
                                    {w.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>

            <Select.Root multiple collection={departments} size="md" width="300px" border='1px solid gray.200' backgroundColor='white' onValueChange={(evt) => setDepartment(evt.items)}>
                <Select.HiddenSelect />
                {/* <Select.Label>Select framework</Select.Label> */}
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Отдел" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {departments.items.map((d) => (
                                <Select.Item item={d} key={d.value}>
                                    {d.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>

            <Select.Root multiple collection={phoneNumbers} size="md" width="300px" border='1px solid gray.200' backgroundColor='white' onValueChange={(evt) => setNumber(evt.items)}>
                <Select.HiddenSelect />
                {/* <Select.Label>Select framework</Select.Label> */}
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Телефон" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {phoneNumbers.items.map((p) => (
                                <Select.Item item={p} key={p.value}>
                                    {p.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>

            <Select.Root multiple collection={emails} size="md" width="300px" border='1px solid gray.200' backgroundColor='white' onValueChange={(evt) => setMail(evt.items)}>
                <Select.HiddenSelect />
                {/* <Select.Label>Select framework</Select.Label> */}
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Почта" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {emails.items.map((e) => (
                                <Select.Item item={e} key={e.value}>
                                    {e.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
        </Flex>
    )
}
