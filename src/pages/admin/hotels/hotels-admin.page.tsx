import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { DeleteOutline, EditNoteSharp } from '@mui/icons-material'
import RightSidebar from '../components/sidebar/right-sidebar.component'
import SearchBar from '../../../components/common/search-bar/search-bar.component'
import CustomPopup from '../../../components/popups/popup.component'
import CustomTable, { TableColumn } from '../components/table/custom-table.component'
import UpdateHotel from './components/update-hotel.component'
import { AddHotel as AddHotelModel, Hotel } from '../../../models/hotel'
import DeleteHotel from './components/delete-hotel.component'
import { useGetHotelsQuery } from '../../../redux/admin/hotel/hotel-api'
import AddHotel from './components/add-hotel.component'
import { hotelTypes } from './components/add-hotel.component'
import style from '../admin.module.css'
import Loading from '../../../components/common/loading/loading.component'

const citiesColumns: TableColumn[] = [

    {
        label: 'Hotel Name',
        field: 'name',
    },
    {
        label: 'Description',
        field: 'description',
    },
    {
        label: 'Hotel Type',
        field: 'hotelType'
    },
    {
        label: 'Star Rating',
        field: 'starRating'
    },
    {
        label: 'latitude',
        field: 'latitude'
    },
    {
        label: 'longitude',
        field: 'longitude'
    },
    {
        label: 'Actions',
        field: 'actions',
    }

]



const HotelsAdmin = () => {

    const [openAddHotel, setIsOpenAddHotel] = useState(false);
    const [openEditHotel, setIsOpenEditHotel] = useState(false);
    const [openDeleteHotel, setIsOpenDeleteHotel] = useState(false);
    const [selectedHotel, setSelectedHotel] = useState<AddHotelModel | null>(null);

    const { data, isLoading } = useGetHotelsQuery();

    const [filterdHotels, setFilterdHotels] = useState<AddHotelModel[]>(data as AddHotelModel[]);
    const [searchValue, setSearchValue] = useState<string>('');

    const handleToggleAddSidebar = () => {
        setIsOpenAddHotel(!openAddHotel);
    };

    const handleToggleEditSidebar = () => {
        setIsOpenEditHotel(!openEditHotel);
    }


    useEffect(() => {
        const newFilteredCities = data?.filter((hotel) => {
            return (
                hotel.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                hotel.description.toLowerCase().includes(searchValue.toLowerCase()) ||
                hotelTypes.find((hotelType) => hotelType.id === hotel.hotelType)?.type.toLowerCase().includes(searchValue.toLowerCase()) ||
                hotel.starRating?.toString().includes(searchValue) ||
                hotel.latitude?.toString().includes(searchValue) ||
                hotel.longitude?.toString().includes(searchValue)

            );
        });

        setFilterdHotels(newFilteredCities as AddHotelModel[]);
    }, [searchValue, data]);


    { if (isLoading) return <Loading /> }

    return <Box>
        <RightSidebar
            onClick={handleToggleEditSidebar}
            open={openEditHotel}
            children={<UpdateHotel hotel={selectedHotel as AddHotelModel} />}
        />
        <RightSidebar
            onClick={handleToggleAddSidebar}
            open={openAddHotel}
            children={<AddHotel />}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box className={style.adminHeader}>
                <Typography variant="h5" component="div" >
                    Manage Hotels
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleToggleAddSidebar}
                    sx={{ width: 200 }}>Add Hotel</Button>
            </Box>
            <Paper className={style.searchArea}>
                <Typography variant="h6" component="div"> Hotel List</Typography>
                <Box>
                    <SearchBar placeholder="Search for hotels..." onChange={(e) => setSearchValue(e.target.value)} />
                </Box>
            </Paper>
            <CustomPopup
                dialogState={openDeleteHotel}
                content={<DeleteHotel setIsOpen={setIsOpenDeleteHotel} hotel={selectedHotel as AddHotelModel} />}
                handleClose={() => {
                    setIsOpenDeleteHotel(false);
                }}
            />
            <CustomTable
                columns={citiesColumns}
                data={
                    filterdHotels?.map((hotel) => {
                        return {
                            ...hotel,
                            hotelType: hotelTypes.find((hotelType) => hotelType.id === hotel.hotelType)?.type,
                            actions: <Box>
                                <IconButton
                                    onClick={() => {
                                        setSelectedHotel(hotel);
                                        setIsOpenEditHotel(true);
                                    }}
                                >
                                    <EditNoteSharp />
                                </IconButton>
                                <IconButton
                                    onClick={() => {
                                        setSelectedHotel(hotel);
                                        setIsOpenDeleteHotel(true);
                                    }}
                                >
                                    <DeleteOutline />
                                </IconButton>
                            </Box>
                        }
                    })
                }
            />
        </Box>
    </Box >
}



export default HotelsAdmin