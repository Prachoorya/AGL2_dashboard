import { Box, IconButton, Typography, useTheme, MenuItem, Menu } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";



const Topbar = ({ selectedChartType, setSelectedVendor }) => {
    
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const vendor = location.pathname.split('/')[2];
        setSelectedItem(vendor);
        setSelectedVendor(vendor);
    }, [location.pathname, setSelectedVendor]);


    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
        setAnchorEl(null);
        setSelectedVendor(item);
        navigate(`/${selectedChartType}/${item}`);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
      <Box display="flex" justifyContent="space-between" p={2}>
        {/*Vendor*/}
        <Box 
          display= "flex" 
          backgroundColor={colors.primary[400]} 
          borderRadius= "5px"
        >
            <Typography
                variant="h3"
                color={colors.grey[100]}
                fontWeight="bold"
                p="10px"
            >
                {selectedItem || "AGL"}
                <IconButton 
                    onClick={handleMenuOpen}
                >
                    {open ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}
                </IconButton>
            </Typography>
        </Box>

        {/*Icons*/}
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton>
            <IconButton>
                <SettingsOutlinedIcon /> 
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => handleMenuItemClick("AGL")}>
                    <Link to="/AGL" style={{ color: "inherit" }}>AGL</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("Armezo")}>
                    <Link to="/Armezo" style={{ color: "inherit" }}>Armezo</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("Nagarro")}>
                    <Link to="/Nagarro" style={{ color: "inherit" }}>Nagarro</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("Techefficio")}>
                    <Link to="/Techefficio" style={{ color: "inherit" }}>Techefficio</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("EY")}>
                    <Link to="/EY" style={{ color: "inherit" }}>EY</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("ClearQuote")}>
                    <Link to="/ClearQuote" style={{ color: "inherit" }}>ClearQuote</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("EccentricEngine")}>
                    <Link to="/EccentricEngine" style={{ color: "inherit" }}>EccentricEngine</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("HappiestMinds")}>
                    <Link to="/HappiestMinds" style={{ color: "inherit" }}>HappiestMinds</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("PhoenixConsulting")}>
                    <Link to="/PhoenixConsulting" style={{ color: "inherit" }}>PhoenixConsulting</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("Intellizest")}>
                    <Link to="/Intellizest" style={{ color: "inherit" }}>Intellizest</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("Sensegiz")}>
                    <Link to="/Sensegiz" style={{ color: "inherit" }}>Sensegiz</Link>
                </MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("XaneAI")}>
                    <Link to="/XaneAI" style={{ color: "inherit" }}>Xane AI</Link>
                </MenuItem>
            </Menu>
        </Box>
    </Box>
  );
};

export default Topbar;