import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../theme";
import { sensegizCodeAvailabilityData as data } from "../../data/data";


const BarChart5 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
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
        indexBy="codeAvailabity"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={['#B8BBFF']}
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
            legend: 'Code Availabity',
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
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in codeAvailibity: "+e.indexValue}
        tooltip={({ legend, value, data }) => (
            <div style={{ padding: "5px", background: "#000", border: "1px solid #ccc" }}>
                <p>{data.codeAvailabity}</p>
                <p>{legend}: {value}</p>
            </div>
        )}
    />
    );
};

export default BarChart5;