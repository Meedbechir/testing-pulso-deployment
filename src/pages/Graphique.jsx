/* eslint-disable no-unused-vars */
import { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Graphique extends Component {
  render() {
    const options = {
      title: {
        text: "Basic Column Chart",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "Laravel", y: 10 },
            { label: "React", y: 15 },
            { label: "Django", y: 25 },
            { label: "PHP", y: 30 },
            { label: "Python", y: 28 },
          ],
        },
      ],
    };
    return (
      <div className="w-full text-center">
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default Graphique;