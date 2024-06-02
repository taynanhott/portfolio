import Graph from "@/components/Resources/Graph";

export default function Perfil() {

    const graph = [
        {
            options: {
                chart: {
                    id: "polarArea" as const,
                    foreColor: '#6b7280'
                },
                stroke: {
                    colors: ['#6b7280']
                },
                labels: [
                    `Capacidade analítica`,
                    `Pensamento conceitual`,
                    `Reflexão`,
                    `Pensamento criativo`,
                    `Planejamento e organização`,
                    `Comunicação`,
                    `Consideração pelos outros`,
                    `Influência`,
                    `Sociabilidade`,
                    `Facilitação`,
                    `Flexibilidade`,
                    `Estabilidade emocional`,
                    `Ambição`,
                    `Iniciativa`,
                    `Assertividade`,
                    `Tomada de risco`,
                ],
                legend: {
                    position: 'right' as const,
                    horizontalAlign: 'left',
                },
                responsive: [{
                    breakpoint: 640,
                    options: {
                        labels: [
                            `Capacidade analítica&emsp;&emsp;&emsp;&emsp;&emsp;`,
                            `Pensamento conceitual&emsp;&emsp;&emsp;`,
                            `Reflexão&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`,
                            `Pensamento criativo&emsp;&emsp;&emsp;`,
                            `Planejamento e organização&emsp;&emsp;`,
                            `Comunicação&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`,
                            `Consideração pelos outros&emsp;&emsp;&emsp;`,
                            `Influência&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`,
                            `Sociabilidade&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`,
                            `Facilitação&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`,
                            `Flexibilidade&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;`,
                            `Estabilidade emocional&emsp;&emsp;&emsp;`,
                            `Ambição&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`,
                            `Iniciativa&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`,
                            `Assertividade&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;`,
                            `Tomada de risco&emsp;&emsp;&emsp;`,
                        ],
                        legend: {
                            position: 'bottom',
                        },
                    },
                }],
                fill: {
                    opacity: 0.9,
                    colors: [
                        '#1e293b',
                        '#64748b',
                        '#94a3b8',
                        '#475569',
                    ]
                },
                colors: [
                    '#1e293b',
                    '#64748b',
                    '#94a3b8',
                    '#475569',
                ],
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0.3,
                            strokeColor: '#6b7280',
                        },
                        spokes: {
                            strokeWidth: 0,
                        },
                    },
                },
            },
            series: [77.8, 73.25, 64.16, 66.43, 86.88, 80.07, 84.62, 64.17, 80.07, 84.62, 70.97, 91.43, 77.8, 77.8, 64.16, 55.07],
            height: 500
        },
    ]

    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex justify-center text-xl font-poppins text-center pointer-events-none border-b border-gray-500 border-current mb-4">
                <h1>Mapeamento de Perfil</h1>
            </div>
            <div className="mx-auto backdrop-blur-sm rounded-xl border shadow-lg p-6">
                <Graph components={graph} />
            </div>
        </div >
    )
}