import React, {useState} from "react";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { intellizestFrontendLineData as data } from "../../data/data";
import { useNavigate } from "react-router-dom";
import IntellizestApplication_1 from "../../table/intellizest/frontend_applications";
import {Modal, Box} from "@mui/material";

const LineChart1 = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedFrontend, setSelectedFrontend] = useState(null);

    const handleClosePopup = () => {
        setShowPopUp(false);
    };

  return (
   <>
    <ResponsiveLine
        data={data}
        theme={{
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
          }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        colors={['#86F491']}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'frontend technology',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'value',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        onClick={(point) => {
          setSelectedFrontend(point.data);
          setShowPopUp(true);
        }}
        tooltip={({ point }) => (
            <div style={{ padding: "5px", background: "#000", border: "1px solid #ccc" }}>
              <p>{point.data.xFormatted}</p>
              <p>: {point.data.yFormatted}</p>
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
            <IntellizestApplication_1 selectedFrontend={selectedFrontend?.xFormatted} navigate={navigate} />
        </Box>
     </Modal>
    </>
  );
};

export default LineChart1;