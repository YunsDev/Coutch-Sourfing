import { Logout, Settings } from '@mui/icons-material';
import { ListItemIcon, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useValue } from '../../context/ContextProvider';

const UserMenu = ({anchorUserMenu,setAnchorUserMenu}) => {
    const handleCloseUserMenu = ()=>{
        setAnchorUserMenu(null); //let the Menu desipare
    }
    const {dispatch} = useValue();
  return (
    <Menu
    anchorEl={anchorUserMenu}
    open={Boolean(anchorUserMenu)}
    onClose={handleCloseUserMenu}
    onClick={handleCloseUserMenu}
    >
        <MenuItem>
            <ListItemIcon>
                <Settings fontSize='small'/>
            </ListItemIcon>
            profile
        </MenuItem>
        <MenuItem onClick={() => {dispatch({type: 'UPDATE_USER', payload:null})}}>
            <ListItemIcon>
                <Logout fontSize='small'/>
            </ListItemIcon>
            Logout
        </MenuItem>

    </Menu>
  )
}

export default UserMenu