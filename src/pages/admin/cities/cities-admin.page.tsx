import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { DeleteOutline, EditNoteSharp } from '@mui/icons-material'
import RightSidebar from '../components/sidebar/right-sidebar.component'
import UpdateCity from './components/update-city.component'
import AddCity from './components/add-city.component'
import SearchBar from '../../../components/common/search-bar/search-bar.component'
import CustomPopup from '../../../components/popups/popup.component'
import { City } from '../../../models/trending-destination'
import CustomTable, { TableColumn } from '../components/table/custom-table.component'
import { useDeleteCityMutation, useGetCitiesQuery } from '../../../redux/admin/city/city-api'
import style from '../admin.module.css'
import Loading from '../../../components/common/loading/loading.component'
import DeleteItem from '../components/delete-item.component'


const citiesColumns: TableColumn[] = [

  {
    label: 'City Name',
    field: 'name',
  },
  {
    label: 'Description',
    field: 'description',
  },
  {
    label: 'Actions',
    field: 'actions',
  }

]



const CitiesAdmin = () => {
  const [openAddCity, setIsOpenAddCity] = useState(false);
  const [openEditCity, setIsOpenEditCity] = useState(false);
  const [openDeleteCity, setIsOpenDeleteCity] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const { data, isLoading } = useGetCitiesQuery()
  const [filterdCities, setFilterdCities] = useState<City[]>(data as City[]);
  const [searchValue, setSearchValue] = useState<string>('');
  const deleteCityMessage = `Are you sure you want to delete ${selectedCity?.name} city?`
  const [deleteCityMutation, { isLoading: isCityDeleting }] = useDeleteCityMutation();

  const handleToggleAddSidebar = () => {
    setIsOpenAddCity(!openAddCity);
  };

  const handleToggleEditSidebar = () => {
    setIsOpenEditCity(!openEditCity);
  }

  const handleCityDelete = async () => {
    try {

      await deleteCityMutation({ cityId: selectedCity?.id as number });

      setFilterdCities((prevCities) => prevCities.filter((city) => city.id !== selectedCity?.id));
      setIsOpenDeleteCity(false);
      !isLoading && alert('City deleted successfully');

    } catch (error) {
      console.error('Error deleting city:', error);
    }
  };

  useEffect(() => {
    const newFilteredCities = data?.filter((city) => {
      return (
        city.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        city.description?.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setFilterdCities(newFilteredCities as City[]);
  }, [searchValue, data]);

  { if (isLoading) return <Loading /> }

  return <Box>
    <RightSidebar
      onClick={handleToggleEditSidebar}
      open={openEditCity}
      children={<UpdateCity selectedCity={selectedCity as City} />}
    />
    <RightSidebar
      onClick={handleToggleAddSidebar}
      open={openAddCity}
      children={<AddCity />}
    />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Box className={style.adminHeader}>
        <Typography variant="h5" component="div" >
          Manage Cities
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggleAddSidebar}
          sx={{ width: 200 }}>Add City</Button>
      </Box>
      <Paper elevation={10} className={style.searchArea}>
        <Typography variant="h6" component="div"> City List</Typography>
        <Box>
          <SearchBar placeholder="Search for cities..." onChange={(e) => setSearchValue(e.target.value)} />
        </Box>
      </Paper>
      <CustomPopup
        dialogState={openDeleteCity}
        content={
          <DeleteItem
            deleteMessage={deleteCityMessage}
            isLoading={isCityDeleting}
            onDelete={handleCityDelete}
          />}
        handleClose={() => {
          setIsOpenDeleteCity(false);
        }}
      />
      <CustomTable
        columns={citiesColumns}
        data={
          filterdCities?.map((city) => {
            return {
              ...city,
              actions:
                <Box>
                  <IconButton
                    onClick={() => {
                      setSelectedCity(city);
                      setIsOpenEditCity(true);
                    }}
                  >
                    <EditNoteSharp />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setSelectedCity(city);
                      setIsOpenDeleteCity(true);
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

export default CitiesAdmin