import { WidgetGrid } from "@/components/dashboard/WidgetGrid";
import { Chart, Title } from "@/components";

export const metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title'
}
export default function MainPage() {
  return (
    <div className="text-black p-[10px] h-full">
      <Title text="Dashboard" subText="Información general" />
      <WidgetGrid />
      <Chart />
    </div>
  );
}