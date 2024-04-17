import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import PieChart1 from "../../components/nagarro_piecharts/Piechart_1";
import PieChart2 from "../../components/nagarro_piecharts/Piechart_2";
import PieChart3 from "../../components/nagarro_piecharts/Piechart_3";
import PieChart4 from "../../components/nagarro_piecharts/Piechart_4";
import PieChart5 from "../../components/nagarro_piecharts/Piechart_5";
import { tokens } from "../../theme";


const NagarroPie = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    

    return (
     <Box display="flex" height="100vh">
        <Box flex="1" overflow="auto" m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Nagarro Stats" subtitle="Statistics of Nagarro"/>
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
                                <PieChart1 />
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
                            <PieChart2 />
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
                            <PieChart3 />
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
                            <PieChart4 />
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
                            <PieChart5 />
                        </Box>
                    </Box>
            </Box>
        </Box>
     </Box>
    );
};

export default NagarroPie;