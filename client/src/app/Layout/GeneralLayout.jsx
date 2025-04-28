import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../widgets/Header/index';

export default function GeneralLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
