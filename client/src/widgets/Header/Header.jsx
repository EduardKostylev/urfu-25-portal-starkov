import React from 'react'
import './Header.scss'
import { Input, InputGroup, IconButton, Avatar, Box } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { LuSearch } from "react-icons/lu"
import { FaVk } from "react-icons/fa";
import { ColorModeButton } from '../../components/ui/color-mode';

export default function Header() {
    return (
        <header className="header">
            <div className="header__main">
                <div className="header__main-left">
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
            </div>
            <div className="header__nav">nav</div>
        </header>
    )
}
