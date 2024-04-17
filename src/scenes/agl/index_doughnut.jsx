import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Doughnut1 from "../../components/agl_doughnut/Doughnut_1";
import Doughnut2 from "../../components/agl_doughnut/Doughnut_2";
import Doughnut3 from "../../components/agl_doughnut/Doughnut_3";
import Doughnut4 from "../../components/agl_doughnut/Doughnut_4";
import Doughnut5 from "../../components/agl_doughnut/Doughnut_5";
import Doughnut6 from "../../components/agl_doughnut/Doughnut_6";
import { tokens } from "../../theme";


const AglDoughnut = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    

    return (
     <Box display="flex" height="100vh">
        <Box flex="1" overflow="auto" m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="AGL Stats" subtitle="Statistics of AGL"/>
            </Box>

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
                            Frontend Technology
                        </Typography>
                        <Box height="400px" width="100%" display="flex" mt="-20px">
                                <Doughnut2 />
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
                            Backend Technology
                        </Typography>
                        <Box height="400px" width="100%" display="flex" mt="-20px">
                            <Doughnut3 />
                        </Box>
                    </Box>


                    {/* Row 2 */}
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
                            <Doughnut1 />
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
                            <Doughnut4 />
                        </Box>
                    </Box>


                    {/* Row 3 */}
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
                            Code Availability
                        </Typography>
                        <Box height="400px" width="100%" display="flex" mt="-20px">
                            <Doughnut5 />
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
                            In Use
                        </Typography>
                        <Box height="400px" width="100%" display="flex" mt="-20px">
                            <Doughnut6 />
                        </Box>
                    </Box>
            </Box>
        </Box>
     </Box>
    );
};

export default AglDoughnut;