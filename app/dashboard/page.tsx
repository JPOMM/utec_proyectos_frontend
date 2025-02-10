import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
// import { StackedChart } from "./components/stackedchart"
import { DashPieChart } from "./components/piechart"
import { DashMultipleBarChart } from "./components/Multiplebarchart"
import { Barchart } from "./components/Barchart"
import { DatosInversion } from "./_types"
import { Investcard } from "./components/Investcard"

export default async function Page() {

  const data = await fetch('https://utkmb40zqf.execute-api.eu-north-1.amazonaws.com/dev/finanzas', { cache: 'force-cache' })
  const result = await data.json() as DatosInversion

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4 mr-2" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem> */}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-col flex-1 gap-4 p-4 pt-0">
          <div className="grid gap-4 auto-rows-min md:grid-cols-3">
            <Barchart data={result.top5ProyectosPorInversion} />
            {/* <DashPieChart /> */}
            <DashMultipleBarChart data={result.proyectosFueraDelPresupuesto} />
            <Investcard data={result.promedioInversionPorProyecto} />
            {/* <div className="aspect-video rounded-xl bg-muted/50" /> */}
            {/* <div className="aspect-video rounded-xl bg-muted/50" /> */}
          </div>
          {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
