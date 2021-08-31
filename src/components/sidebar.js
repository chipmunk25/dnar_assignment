import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import bxCollection from '@iconify/icons-bx/bx-collection';
import bxBarChart from '@iconify/icons-bx/bx-bar-chart';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleRoute } from '../appRedux/actions';
const Sidebar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { activeMenu } = useSelector(({ coins }) => coins);

    const ActiveMenuHandler = (menu, route) => {
        dispatch(toggleRoute({ route, menu }))
        history.push(route)
    }
    return (
        <div className="left__sidebar">
            <div className="sidebar__menu">
                <i className='bx bx-menu sidebar__hamburger' ></i>
            </div>
            <div className="sidebar__nav">
                <div className={activeMenu ? " menu-item active" : "menu-item"}>
                    <Icon icon={bxCollection} vFlip={true} onClick={() => ActiveMenuHandler(true, "/")} />
                </div>
                <div className={activeMenu ? " menu-item" : "menu-item active"}>
                    <Icon icon={bxBarChart} onClick={() => ActiveMenuHandler(false, "/details")} />
                </div>
            </div>
        </div>

    )
}

export default Sidebar