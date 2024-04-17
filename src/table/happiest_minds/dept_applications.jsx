import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { happiestDepartmentApplications } from "../../data/data";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import BulletIcon from "@mui/icons-material/FiberManualRecord";

const HappiestApplication_2 = ({ selectedDepartment, navigate }) => {
    const location = useLocation();
    
    const simulatedLocation = {
      ...location,
      state: { businessDepartment: selectedDepartment },
    };

    const applications = happiestDepartmentApplications.find(
      (entry) => entry.businessDepartment === selectedDepartment
    )?.applications || [];

  return (
    <Box mt={4} p={5}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Applications for {selectedDepartment}
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

export default HappiestApplication_2;