import React, { useState } from 'react'
import './Header.scss'
import { Input, InputGroup, IconButton, Avatar, Box, Flex, Button, Menu, Portal } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { ColorModeButton } from '../../components/ui/color-mode';

import { LuSearch } from "react-icons/lu"
import { FaVk } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

import useHeader from '../../app/stores/useHeader';


export default function Header() {
    const { activeTab, setActiveTab } = useHeader();
    const [isActiveCalendarTab, setIsActiveCalendarTab] = useState(false);
    const [isActiveDevelopmentTab, setIsActiveDevelopmentTab] = useState(false);
    const [isActiveCommunicationTab, setIsActiveCommunicationTab] = useState(false);

    return (
        <header className="header">
            <Box className="header__main">

                <div className="header__main-left">

                    <div className='header__main-left__nav-sidebar'>
                        <Menu.Root size='sm'>
                            <Menu.Trigger asChild>
                                <Button variant='default'>
                                    <FiMenu className='header__main-left__nav-sedibar__menu-icon' />
                                </Button>
                            </Menu.Trigger>

                            <Portal>
                                <Menu.Positioner>
                                    <Menu.Content>
                                        <Menu.Item value='main' p='0'>
                                            <Link to='/' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('main')}>ГЛАВНАЯ</Link>
                                        </Menu.Item>

                                        <Menu.Item value='news' p='0'>
                                            <Link to='/news' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('news')}>НОВОСТИ</Link>
                                        </Menu.Item>

                                        <Menu.Root positioning={{ placement: 'right-start', gutter: 2 }} size='sm'>
                                            <Menu.TriggerItem p='0'>
                                                <span className='header__main-left__nav-sidebar__link' >КАЛЕНДАРЬ</span> <IoIosArrowForward />
                                            </Menu.TriggerItem>

                                            <Portal>
                                                <Menu.Positioner>
                                                    <Menu.Content>
                                                        <Menu.Item value='personal-calendar' p='0'>
                                                            <Link to='/personal_calendar' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('calendar')}>Календарь личное</Link>
                                                        </Menu.Item>

                                                        <Menu.Item value='company-calendar' p='0'>
                                                            <Link to='/company_calendar' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('calendar')}>Календарь компании</Link>
                                                        </Menu.Item>

                                                        <Menu.Item value='meeting-calendar' p='0'>
                                                            <Link to='/meeting_calendar' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('calendar')}>Переговорки</Link>
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
                                                            <Link to='/information_development' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('development')}>Знания</Link>
                                                        </Menu.Item>

                                                        <Menu.Item value='training-development' p='0'>
                                                            <Link to='/training_development' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('development')}>Обучение</Link>
                                                        </Menu.Item>

                                                        <Menu.Item value='docuements-development' p='0'>
                                                            <Link to='/documents_development' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('development')}>Документы</Link>
                                                        </Menu.Item>
                                                    </Menu.Content>
                                                </Menu.Positioner>
                                            </Portal>
                                        </Menu.Root>

                                        <Menu.Item value='workers' p='0'>
                                            <Link to='/workers' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('workers')}>СОТРУДНИКИ</Link>
                                        </Menu.Item>

                                        <Menu.Root positioning={{ placement: 'right-start', gutter: 2 }} size='sm'>
                                            <Menu.TriggerItem p='0'>
                                                <span className='header__main-left__nav-sidebar__link'>ОБЩЕНИЕ</span> <IoIosArrowForward />
                                            </Menu.TriggerItem>

                                            <Portal>
                                                <Menu.Positioner >
                                                    <Menu.Content>
                                                        <Menu.Item value='forum-communication' p='0'>
                                                            <Link to='/forum_communication' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('communication')}>Форум</Link>
                                                        </Menu.Item>

                                                        <Menu.Item value='communication-communication' p='0'>
                                                            <Link to='/communication_communication' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('communication')}>Общение</Link>
                                                        </Menu.Item>
                                                    </Menu.Content>
                                                </Menu.Positioner>
                                            </Portal>
                                        </Menu.Root>

                                        <Menu.Item value='services' p='0'>
                                            <Link to='/services' className='header__main-left__nav-sidebar__link' onClick={() => setActiveTab('services')}>СЕРВИСЫ</Link>
                                        </Menu.Item>
                                    </Menu.Content>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>
                    </div>

                    <Link to='/' className="header__main-left-link">
                        <img
                            className="header__main-left-link-logo"
                            src="logo.png"
                            alt="logo"
                        />
                    </Link>
                    <InputGroup className="header__search" flex="1" endElement={<LuSearch />} >
                        <Input placeholder="Поиск" />
                    </InputGroup>
                </div>
                <div className="header__main-right">

                    <div className="header__main-right-links">
                        <IconButton aria-label="VK" variant="gost" color="green.600">
                            <FaVk />
                        </IconButton>

                        <IconButton aria-label="VK" variant="gost" color="green.600">
                            <FaVk />
                        </IconButton>

                        <IconButton aria-label="VK" variant="gost" color="green.600">
                            <FaVk />
                        </IconButton>
                    </div>
                    <ColorModeButton />
                    <Avatar.Root>
                        <Avatar.Fallback name="Segun Adebayo" />
                        <Avatar.Image src="#" />
                    </Avatar.Root>
                </div>
            </Box>

            <Box py='1.5rem' px='2rem' className="header__nav">

                <Flex justify='space-between' wrap='wrap' align='center' className='header__nav__container'>

                    <Button variant='default' className='header__nav__btn' onClick={() => setActiveTab('main')} >
                        <Link to='/' className={`header__nav__btn__link ${activeTab === 'main' && 'header__nav__btn__link--active'}`}>ГЛАВНАЯ</Link>
                    </Button>

                    <Button variant='default' className='header__nav__btn' onClick={() => setActiveTab('news')}>
                        <Link to='/news' className={`header__nav__btn__link ${activeTab === 'news' && 'header__nav__btn__link--active'}`}>НОВОСТИ</Link>
                    </Button>


                    <Menu.Root size='md' open={isActiveCalendarTab} onOpenChange={() => setIsActiveCalendarTab(!isActiveCalendarTab)} >

                        <Menu.Trigger asChild>
                            <Button variant='default' className={`header__nav__btn ${activeTab === 'calendar' && 'header__nav__btn--active'}`} >
                                <span>КАЛЕНДАРЬ</span> {!isActiveCalendarTab ? <IoIosArrowDown /> : <IoIosArrowUp />}
                            </Button>
                        </Menu.Trigger>

                        <Menu.Positioner>
                            <Menu.Content borderRadius='xl' >
                                <Menu.Item value='personal-calendar' onClick={() => setActiveTab('calendar')} p='0'>
                                    <Link className='header__nav__link' to='/personal_calendar'>Календарь личное</Link>
                                </Menu.Item>

                                <Menu.Item value='company-calendar' onClick={() => setActiveTab('calendar')} p='0'>
                                    <Link className='header__nav__link' to='/company_calendar'>Календарь компании</Link>
                                </Menu.Item>

                                <Menu.Item value='meeting-calendar' onClick={() => setActiveTab('calendar')} p='0'>
                                    <Link className='header__nav__link' to='/meeting_calendar'>Переговорки</Link>
                                </Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>

                    </Menu.Root>


                    <Menu.Root size='md' open={isActiveDevelopmentTab} onOpenChange={() => setIsActiveDevelopmentTab(!isActiveDevelopmentTab)} >

                        <Menu.Trigger asChild>
                            <Button variant='default' className={`header__nav__btn ${activeTab === 'development' && 'header__nav__btn--active'}`}>
                                <span>РАЗВИТИЕ</span> {!isActiveDevelopmentTab ? <IoIosArrowDown /> : <IoIosArrowUp />}
                            </Button>
                        </Menu.Trigger>

                        <Menu.Positioner>
                            <Menu.Content borderRadius='xl' >
                                <Menu.Item value='information-development' onClick={() => setActiveTab('development')} p='0'>
                                    <Link className='header__nav__link' to='/information_development' >Знания</Link>
                                </Menu.Item>

                                <Menu.Item value='training-develpment' onClick={() => setActiveTab('development')} p='0'>
                                    <Link className='header__nav__link' to='/training_development'>Обучение</Link>
                                </Menu.Item>

                                <Menu.Item value='documents-development' onClick={() => setActiveTab('development')} p='0'>
                                    <Link className='header__nav__link' to='/documents_development'>Документы</Link>
                                </Menu.Item>
                            </Menu.Content>
                        </Menu.Positioner>

                    </Menu.Root>

                    <Button variant='default' className='header__nav__btn' onClick={() => setActiveTab('workers')}>
                        <Link to='/workers' className={`header__nav__btn__link ${activeTab === 'workers' && 'header__nav__btn__link--active'}`} >СОТРУДНИКИ</Link>
                    </Button>

                    <Menu.Root size='md' open={isActiveCommunicationTab} onOpenChange={() => setIsActiveCommunicationTab(!isActiveCommunicationTab)} >

                        <Menu.Trigger asChild>
                            <Button variant='default' className={`header__nav__btn ${activeTab === 'communication' && 'header__nav__btn--active'}`}>
                                <span>ОБЩЕНИЕ</span> {!isActiveCommunicationTab ? <IoIosArrowDown /> : <IoIosArrowUp />}
                            </Button>
                        </Menu.Trigger>

                        <Menu.Positioner>
                            <Menu.Content borderRadius='xl' >
                                <Menu.Item value='forum-communication' onClick={() => setActiveTab('communication')} p='0'>
                                    <Link className='header__nav__link' to='/forum_communication'>Форум</Link>
                                </Menu.Item>

                                <Menu.Item value='communication-communication' onClick={() => setActiveTab('communication')} p='0'>
                                    <Link className='header__nav__link' to='/communication_communication'>Общение</Link>
                                </Menu.Item>

                            </Menu.Content>
                        </Menu.Positioner>

                    </Menu.Root>

                    <Button variant='default' className='header__nav__btn' onClick={() => setActiveTab('services')}>
                        <Link to='/services' className={`header__nav__btn__link ${activeTab === 'services' && 'header__nav__btn__link--active'}`}>СЕРВИСЫ</Link>
                    </Button>

                </Flex>
            </Box>
        </header>
    )
}
