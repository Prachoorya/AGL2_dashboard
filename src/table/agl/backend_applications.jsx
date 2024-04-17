import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { aglBackendApplications } from "../../data/data";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Grid } from "@mui/material";
import BulletIcon from "@mui/icons-material/FiberManualRecord";

const ApplicationTable3 = ({ selectedBackend, navigate }) => {
    const location = useLocation();
    
    const simulatedLocation = {
      ...location,
      state: { backendTechnology: selectedBackend },
    };

    const applications = aglBackendApplications.find(
      (entry) => entry.backendTechnology === selectedBackend
    )?.applications || [];

    const sortedApplications = [...applications].sort((a, b) => a.name.localeCompare(b.name));

    const midPoint = Math.ceil(sortedApplications.length / 2);

    const firstHalf = sortedApplications.slice(0, midPoint);
    const secondHalf = sortedApplications.slice(midPoint);

  return (
    <Box mt={4} p={5}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Applications for {selectedBackend}
          </Typography>
          <List>
            {firstHalf.map((app, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon>
                <BulletIcon fontSize="xs" />
              </ListItemIcon>
              <ListItemText primary={app.name} />
            </ListItem>
          ))}
          </List>
          </Grid>
        <Grid item xs={6}>
          <List>
              {secondHalf.map((app, index) => (
              <ListItem key={index} disableGutters>
              <ListItemIcon>
                <BulletIcon fontSize="xs" />
              </ListItemIcon>
              <ListItemText primary={app.name} />
            </ListItem>
          ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApplicationTable3;