import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { DeleteOutline, EditNoteSharp } from '@mui/icons-material'
import RightSidebar from '../components/sidebar/right-sidebar.component'
import SearchBar from '../../../components/common/search-bar/search-bar.component'
import CustomPopup from '../../../components/popups/popup.component'
import CustomTable, { TableColumn } from '../components/table/custom-table.component'
import { Room } from '../../../models/room'
import { useGetHotelsQuery } from '../../../redux/admin/hotel/hotel-api'
import UpdateRoom from './components/update-room.component'
import AddRoom from './components/addroom/add-room.component'
import DeleteRoom from './components/delete-room.component'
import { useGetHotelRoomsMutation } from '../../../redux/admin/room/room-api'
import style from '../admin.module.css'
import Loading from '../../../components/common/loading/loading.component'

const roomsColumns: TableColumn[] = [

    {
        label: 'Room Number',
        field: 'roomNumber',
    },
    {
        label: 'Room Type',
        field: 'roomType',
    },
    {
        label: 'Room Price',
        field: 'price',

    },

    {
        label: 'availability',
        field: 'availability'
    },
    {
        label: 'Capacity of Adults',
        field: 'capacityOfAdults',

    },
    {
        label: 'Capacity of Children',
        field: 'capacityOfChildren',

    },
    {
        label: 'Room Amenities',
        field: 'roomAmenities',
    },
    {
        label: 'Actions',
        field: 'actions',
    },

]



const CitiesAdmin = () => {
    const [openAddRoom, setIsOpenAddRoom] = useState(false);
    const [openEditRoom, setIsOpenEditRoom] = useState(false);
    const [openDeleteRoom, setIsOpenDeleteRoom] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const { data: hotelsData } = useGetHotelsQuery();
    const [filterdRooms, setFilterdRooms] = useState<Room[]>();
    const [searchValue, setSearchValue] = useState<string>('');
    const [rooms, setRooms] = useState<Room[]>([]);

    const [getRoomsMutation, { isLoading }] = useGetHotelRoomsMutation();

    const handleToggleAddSidebar = () => {
        setIsOpenAddRoom(!openAddRoom);
    };

    const handleToggleEditSidebar = () => {
        setIsOpenEditRoom(!openEditRoom);
    }


    const hotels = hotelsData?.map((hotel) => (hotel.id));


    useEffect(() => {
        hotels?.forEach((id) => {
            getRoomsMutation({ checkIn: 'test', checkOut: 'test', hotelId: id as number }).unwrap().then((res) => {
                setRooms(prevRooms => [...prevRooms, ...res]);
            }
            ).catch((err) => console.log(err))
        })
    }, [])

    console.log(rooms);




    useEffect(() => {
        const newFilteredRooms = rooms?.filter((room) => {
            return (
                room.roomNumber?.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
                room.roomType?.toLowerCase().includes(searchValue.toLowerCase()) ||
                room.price?.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
                room.capacityOfAdults?.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
                room.capacityOfChildren?.toString().toLowerCase().includes(searchValue.toLowerCase()) ||
                (room.roomAmenities?.some((amenity) => amenity.name.toLowerCase().includes(searchValue.toLowerCase())) ?? false)
            );
        });
    
        setFilterdRooms(newFilteredRooms as Room[]);
    }, [searchValue, rooms]);

    {
        if (isLoading) {
            return <Loading />;
        }
    }
    return <Box>
        <RightSidebar
            onClick={handleToggleEditSidebar}
            open={openEditRoom}
            children={<UpdateRoom room={selectedRoom as Room} />}
        />
        <RightSidebar
            onClick={handleToggleAddSidebar}
            open={openAddRoom}
            children={<AddRoom />}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box className={style.adminHeader}>
                <Typography variant="h5" component="div" >
                    Manage Rooms
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleToggleAddSidebar}
                    sx={{ width: 200 }}>Add Room</Button>
            </Box>
            <Paper className={style.searchArea}>
                <Typography variant="h6" component="div"> Room List</Typography>
                <Box>
                    <SearchBar placeholder="Search for rooms..." onChange={(e) => setSearchValue(e.target.value)} />
                </Box>
            </Paper>
            <CustomPopup
                dialogState={openDeleteRoom}
                content={<DeleteRoom setIsOpen={setIsOpenDeleteRoom} room={selectedRoom as Room} />}
                handleClose={() => {
                    setIsOpenDeleteRoom(false);
                }}
            />
            <CustomTable
                columns={
                    roomsColumns.map((column) => {
                        return {
                            ...column,
                            label: column.label,
                            field: column.field,
                        };
                    }) as any
                }
                data={
                    filterdRooms?.map((room) => {
                        return {
                            ...room,
                            roomAmenities: room.roomAmenities?.map((amenity) => amenity.name + ', '),
                            availability: room.availability ? 'Available' : 'Not Available',
                            actions:
                                <Box>
                                    <IconButton
                                        onClick={() => {
                                            setSelectedRoom(room);
                                            setIsOpenEditRoom(true);
                                        }}
                                    >
                                        <EditNoteSharp />
                                    </IconButton>
                                    <IconButton
                                        onClick={() => {
                                            setSelectedRoom(room);
                                            setIsOpenDeleteRoom(true);
                                        }}
                                    >
                                        <DeleteOutline />
                                    </IconButton>
                                </Box>
                        }
                    }) as any
                }
            />

        </Box>
    </Box >
}



export default CitiesAdmin