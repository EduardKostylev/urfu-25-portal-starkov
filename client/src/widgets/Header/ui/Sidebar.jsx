import React from 'react'
import { Menu, Button, Portal } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export default function Sidebar() {
    return (
        <div className='header__main-left__nav-sidebar'>
            <Menu.Root size='sm'>
                <Menu.Trigger asChild>
                    <Button variant='default' p='0'>
                        <FiMenu className='header__main-left__nav-sedibar__menu-icon' />
                    </Button>
                </Menu.Trigger>

                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Item value='main' p='0'>
                                <Link to='/' className='header__main-left__nav-sidebar__link'>ГЛАВНАЯ</Link>
                            </Menu.Item>

                            <Menu.Item value='news' p='0'>
                                <Link to='/news' className='header__main-left__nav-sidebar__link' >НОВОСТИ</Link>
                            </Menu.Item>

                            <Menu.Root positioning={{ placement: 'right-start', gutter: 2 }} size='sm'>
                                <Menu.TriggerItem p='0'>
                                    <span className='header__main-left__nav-sidebar__link' >КАЛЕНДАРЬ</span> <IoIosArrowForward />
                                </Menu.TriggerItem>

                                <Portal>
                                    <Menu.Positioner>
                                        <Menu.Content>
                                            <Menu.Item value='personal-calendar' p='0'>
                                                <Link to='/personal_calendar' className='header__main-left__nav-sidebar__link' >Календарь личное</Link>
                                            </Menu.Item>

                                            <Menu.Item value='company-calendar' p='0'>
                                                <Link to='/company_calendar' className='header__main-left__nav-sidebar__link' >Календарь компании</Link>
                                            </Menu.Item>

                                            <Menu.Item value='meeting-calendar' p='0'>
                                                <Link to='/meeting_calendar' className='header__main-left__nav-sidebar__link' >Переговорки</Link>
                                            </Menu.Item>
                                        </Menu.Content>
                                    </Menu.Positioner>
                                </Portal>
                            </Menu.Root>

                            <Menu.Root positioning={{ placement: 'right-start', gutter: 2 }} size='sm'>
                                <Menu.TriggerItem p='0'>
                                    <span className='header__main-left__nav-sidebar__link' >РАЗВИТИЕ</span> <IoIosArrowForward />
                                </Menu.TriggerItem>

                                <Portal>
                                    <Menu.Positioner>
                                        <Menu.Content>
                                            <Menu.Item value='information-development' p='0'>
                                                <Link to='/information_development' className='header__main-left__nav-sidebar__link' >Знания</Link>
                                            </Menu.Item>

                                            <Menu.Item value='training-development' p='0'>
                                                <Link to='/training_development' className='header__main-left__nav-sidebar__link' >Обучение</Link>
                                            </Menu.Item>

                                            <Menu.Item value='docuements-development' p='0'>
                                                <Link to='/documents_development' className='header__main-left__nav-sidebar__link' >Документы</Link>
                                            </Menu.Item>
                                        </Menu.Content>
                                    </Menu.Positioner>
                                </Portal>
                            </Menu.Root>

                            <Menu.Item value='workers' p='0'>
                                <Link to='/workers' className='header__main-left__nav-sidebar__link' >СОТРУДНИКИ</Link>
                            </Menu.Item>

                            <Menu.Root positioning={{ placement: 'right-start', gutter: 2 }} size='sm'>
                                <Menu.TriggerItem p='0'>
                                    <span className='header__main-left__nav-sidebar__link'>ОБЩЕНИЕ</span> <IoIosArrowForward />
                                </Menu.TriggerItem>

                                <Portal>
                                    <Menu.Positioner >
                                        <Menu.Content>
                                            <Menu.Item value='forum-communication' p='0'>
                                                <Link to='/forum_communication' className='header__main-left__nav-sidebar__link' >Форум</Link>
                                            </Menu.Item>

                                            <Menu.Item value='communication-communication' p='0'>
                                                <Link to='/communication_communication' className='header__main-left__nav-sidebar__link' >Общение</Link>
                                            </Menu.Item>
                                        </Menu.Content>
                                    </Menu.Positioner>
                                </Portal>
                            </Menu.Root>

                            <Menu.Item value='services' p='0'>
                                <Link to='/services' className='header__main-left__nav-sidebar__link' >СЕРВИСЫ</Link>
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </div>
    )
}
