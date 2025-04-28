import { useColorMode } from '../../../components/ui/color-mode';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Box, Flex, Button, Menu } from '@chakra-ui/react';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export default function Navbar() {
    const [isActiveCalendarTab, setIsActiveCalendarTab] = useState(false);
    const [isActiveDevelopmentTab, setIsActiveDevelopmentTab] = useState(false);
    const [isActiveCommunicationTab, setIsActiveCommunicationTab] = useState(false);

    const location = useLocation();
    const pathname = location.pathname;

    const { colorMode } = useColorMode();


    return (
        <Box className="header__nav">

            <Flex justify='space-between' wrap='wrap' align='center' className='header__nav__container'>

                <Button variant='default' className='header__nav__btn'>
                    <Link to='/' className={`header__nav__btn__link ${pathname === '/' && 'header__nav__btn__link--active'}`} style={{ borderBottom: pathname === '/' && `2px solid ${colorMode === 'dark' ? '#fff' : "#000"}` }}>ГЛАВНАЯ</Link>
                </Button>

                <Button variant='default' className='header__nav__btn'>
                    <Link to='/news' className={`header__nav__btn__link ${pathname === '/news' && 'header__nav__btn__link--active'}`} style={{ borderBottom: pathname === '/news' && `2px solid ${colorMode === 'dark' ? '#fff' : "#000"}` }}>НОВОСТИ</Link>
                </Button>


                <Menu.Root size='md' open={isActiveCalendarTab} onOpenChange={() => setIsActiveCalendarTab(!isActiveCalendarTab)} >

                    <Menu.Trigger asChild>
                        <Button variant='default'
                            className={`header__nav__btn ${(pathname === '/personal_calendar' ||
                                pathname === '/company_calendar' ||
                                pathname === '/meeting_calendar') &&
                                'header__nav__btn--active'}`} >
                            <span style={{
                                borderBottom: (pathname === '/personal_calendar' ||
                                    pathname === '/company_calendar' ||
                                    pathname === '/meeting_calendar') && `2px solid ${colorMode === 'dark' ? '#fff' : "#000"}`
                            }}>КАЛЕНДАРЬ</span> {!isActiveCalendarTab ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </Button>
                    </Menu.Trigger>

                    <Menu.Positioner>
                        <Menu.Content borderRadius='xl' >
                            <Menu.Item value='personal-calendar' p='0'>
                                <Link className='header__nav__link' to='/personal_calendar' >Календарь личное</Link>
                            </Menu.Item>

                            <Menu.Item value='company-calendar' p='0'>
                                <Link className='header__nav__link' to='/company_calendar'>Календарь компании</Link>
                            </Menu.Item>

                            <Menu.Item value='meeting-calendar' p='0'>
                                <Link className='header__nav__link' to='/meeting_calendar'>Переговорки</Link>
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>

                </Menu.Root>

                {/* 
                <Menu.Root size='md' open={isActiveDevelopmentTab} onOpenChange={() => setIsActiveDevelopmentTab(!isActiveDevelopmentTab)} >

                    <Menu.Trigger asChild>
                        <Button variant='default' className={`header__nav__btn ${(pathname === '/information_development' ||
                            pathname === '/training_development' ||
                            pathname === '/documents_development'
                        ) && 'header__nav__btn--active'}`}>
                            <span style={{
                                borderBottom: (pathname === '/information_development' ||
                                    pathname === '/training_development' ||
                                    pathname === '/documents_development'
                                ) && `2px solid ${colorMode === 'dark' ? '#fff' : "#000"}`
                            }}>РАЗВИТИЕ</span> {!isActiveDevelopmentTab ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </Button>
                    </Menu.Trigger>

                    <Menu.Positioner>
                        <Menu.Content borderRadius='xl' >
                            <Menu.Item value='information-development' p='0'>
                                <Link className='header__nav__link' to='/information_development' >Знания</Link>
                            </Menu.Item>

                            <Menu.Item value='training-develpment' p='0'>
                                <Link className='header__nav__link' to='/training_development'>Обучение</Link>
                            </Menu.Item>

                            <Menu.Item value='documents-development' p='0'>
                                <Link className='header__nav__link' to='/documents_development'>Документы</Link>
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>

                </Menu.Root> */}

                <Button variant='default' className='header__nav__btn'>
                    <Link to='/development' className={`header__nav__btn__link ${pathname === '/development' && 'header__nav__btn__link--active'}`} style={{ borderBottom: pathname === '/development' && `2px solid ${colorMode === 'dark' ? '#fff' : "#000"}` }}>РАЗВИТИЕ</Link>
                </Button>

                <Button variant='default' className='header__nav__btn'>
                    <Link to='/workers' className={`header__nav__btn__link ${pathname === '/workers' && 'header__nav__btn__link--active'}`} style={{ borderBottom: pathname === '/workers' && `2px solid ${colorMode === 'dark' ? '#fff' : "#000"}` }}>СОТРУДНИКИ</Link>
                </Button>

                <Menu.Root size='md' open={isActiveCommunicationTab} onOpenChange={() => setIsActiveCommunicationTab(!isActiveCommunicationTab)} >

                    <Menu.Trigger asChild>
                        <Button variant='default' className={`header__nav__btn ${(pathname === '/forum_communication' ||
                            pathname === '/communication_communication'
                        ) && 'header__nav__btn--active'}`}>
                            <span style={{
                                borderBottom: (pathname === '/forum_communication' ||
                                    pathname === '/communication_communication'
                                ) && `2px solid ${colorMode === 'dark' ? '#fff' : "#000"}`
                            }}>ОБЩЕНИЕ</span> {!isActiveCommunicationTab ? <IoIosArrowDown /> : <IoIosArrowUp />}
                        </Button>
                    </Menu.Trigger>

                    <Menu.Positioner>
                        <Menu.Content borderRadius='xl' >
                            <Menu.Item value='forum-communication' p='0'>
                                <Link className='header__nav__link' to='/forum_communication' >Форум</Link>
                            </Menu.Item>

                            <Menu.Item value='communication-communication' p='0'>
                                <Link className='header__nav__link' to='/communication_communication'>Общение</Link>
                            </Menu.Item>

                        </Menu.Content>
                    </Menu.Positioner>

                </Menu.Root>

                <Button variant='default' className='header__nav__btn'>
                    <Link to='/services' className={`header__nav__btn__link ${pathname === '/services' && 'header__nav__btn__link--active'}`} style={{ borderBottom: pathname === '/services' && `2px solid ${colorMode === 'dark' ? '#fff' : "#000"}` }}>СЕРВИСЫ</Link>
                </Button>

            </Flex>
        </Box>
    )
}
