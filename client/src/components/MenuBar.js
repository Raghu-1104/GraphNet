import React, { useState } from 'react'
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function MenuBar() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu pointing secondary>
          <Link to={"/"}>
          <MenuItem
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <MenuItem
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          </Link>
          <Link to={"/register"}>
          <MenuMenu position='right'>
            
            <MenuItem
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
            />
          </MenuMenu>
          </Link>
          
          
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