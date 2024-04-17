import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, colors, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined"; 
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";


const DropdownItem = ({ title, items, selected, navigate, handleItemClick }) => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const[isCollapsed, setIsCollapsed] = useState(false);
   const [open, setOpen] = useState(false);

   return (
      <>
      <Box mb="25px">
         <Box textAlign="center">
            <Typography
               variant="h3"
               color={colors.grey[100]}
               fontWeight="bold"
               sx={{ m: "10px 0 0 0" }}
            >
               {title}
               <IconButton onClick={() => setOpen(!open)}>
                  {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
               </IconButton>
            </Typography>
         </Box>
      </Box>

      {open && (
         <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {items.map((item) => (
               <MenuItem
                  key={item.title}
                  active={selected === item.route}
                  style={{
                     color: colors.grey[100],
                  }}
                  onClick={() => handleItemClick(item.route)}
               >
                  <Typography>{item.title}</Typography>
               </MenuItem>
            ))}
         </Box>
      )}
    </>
   );
};


const Sidebar = ({ setChartType, setSelectedVendor }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState(null);


    const menuData = [
      {
         title: "Chart Type",
         items: [
            {title: "Bar Chart", route: "/barchart/AGL"},
            {title: "Pie Chart", route: "/piechart/AGL"},
            {title: "Doughnut Chart", route: "/doughnutchart/AGL"},
            {title: "Line Chart", route: "/linechart/AGL"},
         ]
      },
    ];

    const handleItemClick = (route) => {
      const chartType = route.split('/')[1];
      setSelected(route);
      setChartType(chartType);
      setSelectedVendor("agl");
      navigate(route);
    };


    return (
        <Box
           sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
             "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
                borderRadius: "0 15px 15px 0"
             },
             "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
             },
             "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
             },
             "& .pro-inner-item:hover": {
                color: "#868dfb !important" 
             },
             '& .pro-menu-item.active': {
                color: "#6870fa !important"
             },
           }}
        >
          <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
               {/* Menu */}
               <MenuItem 
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                  style={{
                     margin: "10px 0 20px 0",
                     color: colors.grey[100],
                  }}
               >
                  {!isCollapsed && (
                     <Box
                       display="flex"
                       justifyContent="right"
                       alignItems="center"
                       ml="15px"
                     >
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                           <MenuOutlinedIcon />
                        </IconButton>
                     </Box>
                  )}
               </MenuItem>

               {menuData.map((menu) => (
                  <DropdownItem 
                     key={menu.title}
                     title={menu.title}
                     items={menu.items}
                     selected={selected}
                     setSelected={setSelected}
                     handleItemClick={handleItemClick}
                  />
               ))}
            </Menu>
          </ProSidebar>
        </Box>
    );
};

export default Sidebar;