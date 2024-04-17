import React, {useState} from "react";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { xaneFrontendPieData as data } from "../../data/data";
import { useNavigate } from "react-router-dom";
import XaneApplication_1 from "../../table/xane/frontend_applications";
import {Modal, Box} from "@mui/material";

const PieChart1 = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showPopUp, setShowPopUp] = useState(false);
    const [selectedFrontend, setSelectedFrontend] = useState('');

    const handlePieClick = (pie) => {
        const frontendTechnology = pie.id;
        setSelectedFrontend(frontendTechnology);
        setShowPopUp(true);
    };

    const handleClosePopup = () => {
        setShowPopUp(false);
    };

    return (
     <>
      <ResponsivePie
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
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0}
      padAngle={0}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 60,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
      onClick={handlePieClick}
      tooltip={({ datum }) => (
        <div style={{ padding: "5px", background: "#000", border: "1px solid #ccc" }}>
          <p>{datum.id}</p>
          <p>: {datum.value}</p>
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
            <XaneApplication_1 selectedFrontend={selectedFrontend} navigate={navigate} />
        </Box>
     </Modal>
    </>
    );
};

export default PieChart1;