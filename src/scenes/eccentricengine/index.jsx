import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart1 from "../../components/eccentricengine_barcharts/Barchart_1";
import BarChart2 from "../../components/eccentricengine_barcharts/Barchart_2";
import { tokens } from "../../theme";

const EccentricEngine = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Eccentric Engine Stats" subtitle="Statistics of Eccentric Engine"/>
            </Box>

            {/* Grids & charts */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(8, 1fr)"
                gridAutoRows="140px"
                gap="30px"
                padding="0 80px"
            >
                {/* Row 1 */}
                    <Box 
                        gridColumn="span 4"
                        gridRow="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="space-between"
                        borderRadius="15px"
                        p="10px"
                    >
                        <Typography variant="h5" fontWeight="600" textAlign="center" mt="20px">
                            Business Area
                        </Typography>
                        <Box height="400px" width="100%" display="flex" mt="-20px">
                                <BarChart1 />
                        </Box>
                    </Box>

                    <Box 
                        gridColumn="span 4"
                        gridRow="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="space-between"
                        borderRadius="15px"
                        p="10px"
                    >
                        <Typography variant="h5" fontWeight="600" textAlign="center" mt="20px">
                            Business Department
                        </Typography>
                        <Box height="400px" width="100%" display="flex" mt="-20px">
                            <BarChart2 />
                        </Box>
                    </Box>
            </Box>
        </Box>
    );
};

export default EccentricEngine;