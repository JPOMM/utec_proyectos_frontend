"use client"

// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { ProyectoFueraPresupuesto } from "../_types"

interface MultiplebarchartProps {
  data: ProyectoFueraPresupuesto[]
}

const chartConfig = {
  inversionAcumulada: {
    label: "Inversión Acumulada",
    color: "hsl(var(--chart-1))",
  },
  presupuestoAsignado: {
    label: "Presupuesto Asignado",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Multiplebarchart({ data }: MultiplebarchartProps) {
  const chartData = data.map((item) => {
    return item
  })
  return (
    <Card>
      <CardHeader>
        <CardTitle>Proyectos fuera del presupuesto</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="nombre"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="inversionAcumulada" fill="var(--color-inversionAcumulada)" radius={4} />
            <Bar dataKey="presupuestoAsignado" fill="var(--color-presupuestoAsignado)" radius={4} />
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
