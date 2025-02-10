"use client"

// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    // ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { ProyectoInversion } from "../_types"

interface BarchartProps {
    data: ProyectoInversion[]
}

export function Barchart({ data }: BarchartProps) {
    const chartData = data.map((item, index) => {
        return {
            ...item, fill: `hsl(var(--chart-${index + 1}))`
        }
    })
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top 5 proyectos por inversión</CardTitle>
                {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent>
                <ChartContainer config={{}}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: 0,
                        }}
                    >
                        <YAxis
                            dataKey="nombre"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}

                        />
                        <XAxis dataKey="inversion" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="inversion" layout="vertical" radius={5} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter> */}
        </Card>
    )
}
