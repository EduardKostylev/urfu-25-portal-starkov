import React from 'react'
import './Header.scss'
import { Input,InputGroup,IconButton, Avatar} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import { LuSearch } from "react-icons/lu"
import { FaVk } from "react-icons/fa";

export default function Header() {
    return (
    <div class="header">
        <div class="header__main">
            <div class="header__main-left">
            <a class="header__main-left-link">
                <img
                class="header__main-left-link-logo"
                src="logo.png"
                alt="logo"
                />
            </a>
            <InputGroup className="header__search" flex="1" endElement={<LuSearch />}>
                <Input placeholder="Поиск" />
            </InputGroup>
            </div>
            <div class="header__main-right">
            <div class="header__main-right-links">
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
            <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="" />
            </Avatar.Root>
            </div>
        </div>
        <div class="header__nav">nav</div>
    </div>
    )
}
