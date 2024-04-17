import React, {useState} from "react";
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../theme";
import { mockDepartmentData as data } from "../../data/data";
import { useNavigate } from "react-router-dom";
import ApplicationTable4 from "../../table/agl/dept_applications";
import { Modal, Box } from "@mui/material";


const BarChart4 = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState('');


    const handleBarClick = (bar) => {
        const businessDepartment = bar.indexValue;
        setSelectedDepartment(businessDepartment);
        setShowPopUp(true);
    };

    const handleClosePopup = () => {
        setShowPopUp(false);
    };

    return (
      <>
        <ResponsiveBar
        data={data}

        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.grey[100]
                    },
                },
            },
            legends: {
                text: {
                    fill: colors.grey[100],
                },
            },
        }}

        keys={[
            'legend',
        ]}
        indexBy="businessDepartment"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#FFA767']}
        colorBy="index"
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Business Department',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Number',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in businessDepartment: "+e.indexValue}
        onClick={handleBarClick}
        tooltip={({ legend, value, data }) => (
            <div style={{ padding: "5px", background: "#000", border: "1px solid #ccc" }}>
                <p>{data.businessDepartment}</p>
                <p>{legend}: {value}</p>
            </div>
        )}
    />

     <Modal open={showPopUp} onClose={handleClosePopup}>
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
            }}
        >
            <ApplicationTable4 selectedDepartment={selectedDepartment} navigate={navigate} />
        </Box>
     </Modal>

   </>
  );
};

export default BarChart4;