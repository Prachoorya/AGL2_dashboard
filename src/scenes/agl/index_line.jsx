import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import LineChart_1 from "../../components/agl_linecharts/Linechart_1";
import LineChart_2 from "../../components/agl_linecharts/Linechart_2";
import LineChart_3 from "../../components/agl_linecharts/Linechart_3";
import LineChart_4 from "../../components/agl_linecharts/Linechart_4";
import LineChart_5 from "../../components/agl_linecharts/Linechart_5";
import LineChart_6 from "../../components/agl_linecharts/Linechart_6";
import { tokens } from "../../theme";


const AglLine = () => {
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
                                <LineChart_2 />
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
                            <LineChart_3 />
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
                            <LineChart_1 />
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
                            <LineChart_4 />
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
                            <LineChart_5 />
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
                            <LineChart_6 />
                        </Box>
                    </Box>
            </Box>
        </Box>
     </Box>
    );
};

export default AglLine;