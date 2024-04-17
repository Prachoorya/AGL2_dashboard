import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { eyBackendApplications } from "../../data/data";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import BulletIcon from "@mui/icons-material/FiberManualRecord";

const EyApplication_2 = ({ selectedBackend, navigate }) => {
    const location = useLocation();
    
    const simulatedLocation = {
      ...location,
      state: { backendTechnology: selectedBackend },
    };;

    const applications = eyBackendApplications.find(
      (entry) => entry.backendTechnology === selectedBackend
    )?.applications || [];

  return (
    <Box mt={4} p={5}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Applications for {selectedBackend}
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

export default EyApplication_2;