import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Header from "../header";
import TodoInputList from "../TodoInputList";
import TodoItemList from "../TodoItemList";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Build Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <Header />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-6 md:grid-cols-3">
            {/* Total Tasks */}
            <div className="flex flex-col items-center justify-center text-center rounded-2xl bg-background border shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <p className="text-sm font-medium text-muted-foreground">
                Total Tasks
              </p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight">12</h2>
            </div>

            {/* Completed Tasks */}
            <div className="flex flex-col items-center justify-center text-center rounded-2xl bg-background border shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <p className="text-sm font-medium text-muted-foreground">
                Completed Tasks
              </p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-green-600">
                8
              </h2>
            </div>

            {/* Pending Tasks */}
            <div className="flex flex-col items-center justify-center text-center rounded-2xl bg-background border shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <p className="text-sm font-medium text-muted-foreground">
                Pending Tasks
              </p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-yellow-600">
                4
              </h2>
            </div>
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
            <div>
              <TodoInputList />
              <TodoItemList />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
