import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { xaneBusinessAreaApplications } from "../../data/data";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import BulletIcon from "@mui/icons-material/FiberManualRecord";

const XaneApplication_3 = ({ selectedBusinessArea, navigate }) => {
    const location = useLocation();
    
    const simulatedLocation = {
      ...location,
      state: { businessArea: selectedBusinessArea },
    };

    const applications = xaneBusinessAreaApplications.find(
      (entry) => entry.businessArea === selectedBusinessArea
    )?.applications || [];

  return (
    <Box mt={4} p={5}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Applications for {selectedBusinessArea}
      </Typography>
      <List>
        {applications.map((app, index) => (
          <ListItem key={index} disableGutters>
            <ListItemIcon>
              <BulletIcon fontSize="xs" />
            </ListItemIcon>
            <ListItemText primary={app.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default XaneApplication_3;