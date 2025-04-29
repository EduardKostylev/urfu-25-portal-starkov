import './ui/Header.scss'
import { Input, InputGroup, IconButton, Avatar, Box, Flex, Button, Menu, Portal } from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom';
import { ColorModeButton } from '../../components/ui/color-mode';

import { LuSearch } from "react-icons/lu"
import { FaVk } from "react-icons/fa";

import Sidebar from './ui/Sidebar';
import Navbar from './ui/Navbar';



export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="header">
            <Box className="header__main">

                <div className="header__main-left">

                    {/* Появляется при (width < 500px) */}
                    <Sidebar />

                    <Link to='/' className="header__main-left-link">
                        <img
                            className="header__main-left-link-logo"
                            src="logo.png"
                            alt="logo"
                        />
                    </Link>
                    <InputGroup className="header__main-left__search" flex="1" endElement={<LuSearch />} >
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
                    <Avatar.Root onClick={() => navigate('/profile')}>
                        <Avatar.Fallback name="Segun Adebayo" />
                        <Avatar.Image src="#" />
                    </Avatar.Root>
                </div>
            </Box>

            {/* Исчезнет при (width < 500px) */}
            <Navbar />

        </header >
    )
}
