import { WidgetGrid } from "@/components/dashboard/WidgetGrid";
import { Chart, Title } from "@/components";

export const metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title'
}
export default function MainPage() {
  return (
    <div className="text-black p-2">
      <Title text="Dashboard" subText="Información general" />
      <WidgetGrid />
      <Chart />
    </div>
  );
}