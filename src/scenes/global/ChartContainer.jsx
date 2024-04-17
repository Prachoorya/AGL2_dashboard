import React from "react";
import Agl from "../agl/index";
import AglPie from "../agl/index_pie";
import AglLine from "../agl/index_line";
import AglDoughnut from "../agl/index_doughnut";
import Armezo from "../armezo/index";
import ArmezoPie from "../armezo/index_pie";
import ArmezoLine from "../armezo/index_line";
import ArmezoDoughnut from "../armezo/index_doughnut";
import Nagarro from "../nagarro/index";
import NagarroPie from "../nagarro/index_pie";
import NagarroLine from "../nagarro/index_line";
import NagarroDoughnut from "../nagarro/index_doughnut";
import Techefficio from "../techefficio/index";
import TechefficioPie from "../techefficio/index_pie";
import TechefficioLine from "../techefficio/index_line";
import TechefficioDoughnut from "../techefficio/index_doughnut";
import EY from "../ey/index";
import EYPie from "../ey/index_pie";
import EyLine from "../ey/index_line";
import EyDoughnut from "../ey/index_doughnut";
import ClearQuote from "../clearquote/index";
import ClearQuotePie from "../clearquote/index_pie";
import ClearQuoteLine from "../clearquote/index_line";
import ClearQuoteDoughnut from "../clearquote/index_doughnut";
import EccentricEngine from "../eccentricengine/index";
import EccentricEnginePie from "../eccentricengine/index_pie";
import EccentricEngineLine from "../eccentricengine/index_line";
import EccentricEngineDoughnut from "../eccentricengine/index_doughnut";
import HappiestMinds from "../happiestminds/index";
import HappiestMindsPie from "../happiestminds/index_pie";
import HappiestMindsLine from "../happiestminds/index_line";
import HappiestMindsDoughnut from "../happiestminds/index_doughnut";
import PhoenixConsulting from "../phoenixconsulting/index";
import PhoenixConsultingPie from "../phoenixconsulting/index_pie";
import PhoenixConsultingLine from "../phoenixconsulting/index_line";
import PhoenixConsultingDoughnut from "../phoenixconsulting/index_doughnut";
import Intellizest from "../intellizest/index";
import IntellizestPie from "../intellizest/index_pie";
import IntellizestLine from "../intellizest/index_line";
import IntellizestDoughnut from "../intellizest/index_doughnut";
import Sensegiz from "../sensegiz/index";
import SensegizPie from "../sensegiz/index_pie";
import SensegizLine from "../sensegiz/index_line";
import SensegizDoughnut from "../sensegiz/index_doughnut";
import XaneAI from "../xane/index";
import XaneAIPie from "../xane/index_pie";
import XaneAILine from "../xane/index_line";
import XaneAIDoughnut from "../xane/index_doughnut";

const ChartContainer = ({ selectedChartType, selectedVendor }) => {
  const renderChart = () => {
    if (selectedVendor === "AGL") {
      if (selectedChartType === "barchart") {
        return <Agl />;
      } else if (selectedChartType === "piechart") {
        return <AglPie />;
      } else if (selectedChartType === "linechart") {
        return <AglLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <AglDoughnut />;
      }
    }
    else if (selectedVendor === "Armezo") {
      if (selectedChartType === "barchart") {
        return <Armezo />;
      } else if (selectedChartType === "piechart") {
        return <ArmezoPie />;
      } else if (selectedChartType === "linechart") {
        return <ArmezoLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <ArmezoDoughnut />;
      }
    }
    else if (selectedVendor === "Nagarro") {
      if (selectedChartType === "barchart") {
        return <Nagarro />;
      } else if (selectedChartType === "piechart") {
        return <NagarroPie />;
      } else if (selectedChartType === "linechart") {
        return <NagarroLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <NagarroDoughnut />;
      }
    }
    else if (selectedVendor === "Techefficio") {
      if (selectedChartType === "barchart") {
        return <Techefficio />;
      } else if (selectedChartType === "piechart") {
        return <TechefficioPie />;
      } else if (selectedChartType === "linechart") {
        return <TechefficioLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <TechefficioDoughnut />;
      }
    }
    else if (selectedVendor === "EY") {
      if (selectedChartType === "barchart") {
        return <EY />;
      } else if (selectedChartType === "piechart") {
        return <EYPie />;
      } else if (selectedChartType === "linechart") {
        return <EyLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <EyDoughnut />;
      }
    }
    else if (selectedVendor === "ClearQuote") {
      if (selectedChartType === "barchart") {
        return <ClearQuote />;
      } else if (selectedChartType === "piechart") {
        return <ClearQuotePie />;
      } else if (selectedChartType === "linechart") {
        return <ClearQuoteLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <ClearQuoteDoughnut />;
      }
    }
    else if (selectedVendor === "EccentricEngine") {
      if (selectedChartType === "barchart") {
        return <EccentricEngine />;
      } else if (selectedChartType === "piechart") {
        return <EccentricEnginePie />;
      } else if (selectedChartType === "linechart") {
        return <EccentricEngineLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <EccentricEngineDoughnut />;
      }
    }
    else if (selectedVendor === "HappiestMinds") {
      if (selectedChartType === "barchart") {
        return <HappiestMinds />;
      } else if (selectedChartType === "piechart") {
        return <HappiestMindsPie />;
      } else if (selectedChartType === "linechart") {
        return <HappiestMindsLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <HappiestMindsDoughnut />;
      }
    }
    else if (selectedVendor === "PhoenixConsulting") {
      if (selectedChartType === "barchart") {
        return <PhoenixConsulting />;
      } else if (selectedChartType === "piechart") {
        return <PhoenixConsultingPie />;
      } else if (selectedChartType === "linechart") {
        return <PhoenixConsultingLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <PhoenixConsultingDoughnut />;
      }
    }
    else if (selectedVendor === "Intellizest") {
      if (selectedChartType === "barchart") {
        return <Intellizest />;
      } else if (selectedChartType === "piechart") {
        return <IntellizestPie />;
      } else if (selectedChartType === "linechart") {
        return <IntellizestLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <IntellizestDoughnut />;
      }
    }
    else if (selectedVendor === "Sensegiz") {
      if (selectedChartType === "barchart") {
        return <Sensegiz />;
      } else if (selectedChartType === "piechart") {
        return <SensegizPie />;
      } else if (selectedChartType === "linechart") {
        return <SensegizLine />;
      } else if (selectedChartType === "doughnutchart") {
        return <SensegizDoughnut />;
      }
    }
    else if (selectedVendor === "XaneAI") {
      if (selectedChartType === "barchart") {
        return <XaneAI />;
      } else if (selectedChartType === "piechart") {
        return <XaneAIPie />;
      } else if (selectedChartType === "linechart") {
        return <XaneAILine />
      } else if (selectedChartType === "doughnutchart") {
        return <XaneAIDoughnut />;
      }
    }
    return null;
  };
  return <>{renderChart()}</>
};

export default ChartContainer;
