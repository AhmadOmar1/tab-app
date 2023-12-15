import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import TabIcon from '../../assets/icons/tab-icon.component';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/app-slice';
import { RootState } from '../../redux/store';

export default function NavBar() {

    const theme = useSelector((state: RootState) => state.theme);

    const dispatch = useDispatch()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
               
                    <TabIcon  height='50' width='50' color='white' />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Switch
                        checked={theme.theme === 'dark'}
                        onChange={() => dispatch(toggleTheme())}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}