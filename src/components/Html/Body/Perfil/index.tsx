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
                    `Capacidade analítica: 77.8`,
                    `Pensamento conceitual: 73.25`,
                    `Reflexão: 64.16`,
                    `Pensamento criativo: 66.43`,
                    `Planejamento e organização: 86.88`,
                    `Comunicação: 80.07`,
                    `Consideração pelos outros: 84.62`,
                    `Influência: 64.17`,
                    `Sociabilidade: 80.07`,
                    `Facilitação: 84.62`,
                    `Flexibilidade: 70.97`,
                    `Estabilidade emocional: 81.43`,
                    `Ambição: 77.8`,
                    `Iniciativa: 77.8`,
                    `Assertividade: 64.16`,
                    `Tomada de risco: 55.07`,
                ],
                legend: {
                    position: 'right' as const
                },
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
            series: [77.8, 73.25, 64.16, 66.43, 86.88, 80.07, 84.62, 64.17, 80.07, 84.62, 70.97, 81.43, 77.8, 77.8, 64.16, 55.07],
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