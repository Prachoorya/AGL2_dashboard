import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { xaneFrontendApplications } from "../../data/data";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import BulletIcon from "@mui/icons-material/FiberManualRecord";

const XaneApplication_1 = ({ selectedFrontend, navigate }) => {
    const location = useLocation();
    
    const simulatedLocation = {
      ...location,
      state: { frontendTechnology: selectedFrontend },
    };

    const applications = xaneFrontendApplications.find(
      (entry) => entry.frontendTechnology === selectedFrontend
    )?.applications || [];

  return (
    <Box mt={4} p={5}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Applications for {selectedFrontend}
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

export default XaneApplication_1;