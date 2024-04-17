import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sensegizDepartmentApplications} from "../../data/data";
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import BulletIcon from "@mui/icons-material/FiberManualRecord";

const SensegizApplication_4 = ({ selectedDepartment, navigate }) => {
    const location = useLocation();
    
    const simulatedLocation = {
      ...location,
      state: { businessDepartment: selectedDepartment },
    };

    const applications = sensegizDepartmentApplications.find(
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

export default SensegizApplication_4;