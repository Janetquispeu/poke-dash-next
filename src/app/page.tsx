import { redirect } from "next/navigation";

export default function Home() {
  // Para que cargue por defecto en la ruta /dashboard/main
  redirect("/dashboard/main");
}
