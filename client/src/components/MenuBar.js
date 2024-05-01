import React, { useState } from 'react'
import { MenuMenu, MenuItem, Menu } from 'semantic-ui-react'

function MenuBar() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => setActiveItem(name);

    return (
        <Menu pointing secondary>
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
          <MenuMenu position='right'>
            <MenuItem
              name='register'
              active={activeItem === 'register'}
              onClick={handleItemClick}
            />
          </MenuMenu>
          <MenuItem
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
          />
        </Menu>
    )
}

export default MenuBar;