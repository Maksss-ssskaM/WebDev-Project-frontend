import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { IAreaChartProps } from "../../../common/types/assets";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

const AreaChart = (props: IAreaChartProps) => {
    const { data } = props;

    const options = {
        responsive: true,
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const values = {
        labels: data.map((element: number[]): string => {
            return moment(element[0]).format("DD.MM.YY");
        }),
        datasets: [
            {
                label: "Цена",
                data: data.map((element: number[]): number => {
                    return element[1];
                }),
                fill: "start",
                backgroundColor: "#82a31d",
            },
        ],
    };
    return <Line options={options} data={values} width={300} height={100} />;
};

export default AreaChart;
