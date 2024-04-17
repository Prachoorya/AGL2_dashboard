import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import LineChart1 from "../../components/techefficio_linecharts/Linechart_1";
import LineChart2 from "../../components/techefficio_linecharts/Linechart_2";
import LineChart3 from "../../components/techefficio_linecharts/Linechart_3";
import LineChart4 from "../../components/techefficio_linecharts/Linechart_4";
import { tokens } from "../../theme";


const TechefficioLine = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    

    return (
     <Box display="flex" height="100vh">
        <Box flex="1" overflow="auto" m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Techefficio Stats" subtitle="Statistics of Techefficio"/>
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
                                <LineChart1 />
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
                            <LineChart2 />
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
                            <LineChart3 />
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
                            <LineChart4 />
                        </Box>
                    </Box>
            </Box>
        </Box>
     </Box>
    );
};

export default TechefficioLine;