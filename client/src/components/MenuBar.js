import React, { useState } from 'react'
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function MenuBar() {
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substring(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu pointing secondary size="massive" color="teal">
          <Link to={"/"}>

          <MenuItem
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          </Link>
          <MenuItem
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <MenuMenu position='right'>
            <Link to={"/register"}>
            <MenuItem
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
            />
            </Link>
          </MenuMenu>
          <Link to={"/login"}>
          <MenuItem
          
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
          />
          </Link>
        </Menu>
    )
}

export default MenuBar;