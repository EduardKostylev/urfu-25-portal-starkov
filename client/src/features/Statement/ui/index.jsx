import './Statement.scss';
import { Select, createListCollection, Portal, Input, Field, Button } from '@chakra-ui/react';
import { useState } from 'react';

const applications = createListCollection({
    items: [
        { label: "Заявка в отдел кадров", value: "hr" },
        { label: "Заявка на кадровое изменение", value: "hr2" },
        { label: "Заявка в бухгалтерию", value: "finance" },
        { label: "Заявка на проведение совещания", value: "admin" },
        { label: "Заявка на командировку", value: "logistics" },

    ],
})

export default function Statement() {
    const [typeApplication, setTypeApplication] = useState([])

    const [theme, setTheme] = useState('');
    const [description, setDescription] = useState('');
    const [mail, setMail] = useState('');

    const onHandleSubmit = (evt) => {
        evt.preventDefault();
        console.log({
            typeApplication,
            theme,
            description,
            mail
        })
    }
    return (
        <div className='statement'>
            <h1 className='statement__title'>Подать заявку</h1>
            <h2 className='statement__title-form'>Тип заявки</h2>

            <form className='statement__form' onSubmit={onHandleSubmit}>

                <Select.Root collection={applications} size="sm" className='statement__form__select' onValueChange={(evt) => setTypeApplication(evt.items)} required>
                    <Select.HiddenSelect />
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Заявка в отдел" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Portal>
                        <Select.Positioner>
                            <Select.Content>
                                {applications.items.map((application) => (
                                    <Select.Item item={application} key={application.value}>
                                        {application.label}
                                        <Select.ItemIndicator />
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Positioner>
                    </Portal>
                </Select.Root>

                <Field.Root className='statement__form__input' required>
                    <Input placeholder="Тема" value={theme} onChange={(evt) => setTheme(evt.target.value)} />
                    <Field.ErrorText>This field is required</Field.ErrorText>
                </Field.Root>

                <Field.Root className='statement__form__input' required>
                    <Input placeholder="Описание" value={description} onChange={(evt) => setDescription(evt.target.value)} />
                    <Field.ErrorText>This field is required</Field.ErrorText>
                </Field.Root>

                <Field.Root className='statement__form__input' required>
                    <Input placeholder="Почта" value={mail} onChange={(evt) => setMail(evt.target.value)} />
                    <Field.ErrorText>This field is required</Field.ErrorText>
                </Field.Root>

                <Button type='submit' className='statement__form__btn' color='white' backgroundColor='green.600' _hover={{ backgroundColor: 'green.700' }}>Отправить</Button>
            </form>


        </div>
    )
}
