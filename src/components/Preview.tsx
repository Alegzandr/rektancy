import { useContext } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import FilesContext from '../contexts/FilesContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'FPS Comparison Chart',
        },
    },
};

function Preview() {
    const { datas } = useContext(FilesContext);

    const chartData = {
        labels:
            datas?.[0]?.data?.Runs?.[0]?.CaptureData?.TimeInSeconds?.map(
                (seconds: any) =>
                    `${Math.floor(parseFloat(seconds) / 60)}:${Math.floor(
                        parseFloat(seconds) % 60
                    )
                        .toString()
                        .padStart(2, '0')}`
            ) || [],
        datasets: datas.map((item) => ({
            label: item.name.substring(0, item.name.length - 5),
            data: item.data.Runs[0].CaptureData.MsBetweenPresents.map(
                (currentMs: any) => 1000 / currentMs
            ),
            borderColor: item.color,
            fill: false,
        })),
    };

    return (
        <div>
            {datas.length > 0 && (
                <div>
                    <h3>Received Data:</h3>
                    <Line options={options} data={chartData} />
                </div>
            )}
        </div>
    );
}

export default Preview;
