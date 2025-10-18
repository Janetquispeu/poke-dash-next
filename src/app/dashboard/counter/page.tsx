import { Metadata } from "next";
import { Title } from "@/components";
import { CartCounter } from "@/shopping-cart/components/CartCounter";

export const metadata: Metadata = {
  title: 'Shopping cart',
  description: 'Un simple contador',
};

export default function CounterPage() {

  return (
    <div className="text-black p-2">
      <Title text="Contador de Pokemones" subText="Aumenta o reduce la cantidad de pokemones atrapados manualmente." />
      <div className="flex flex-col items-center justify-center w-full h-full mt-20">
        <span>Pókemones atrapados</span>
        <CartCounter />
      </div>
    </div>
  );
}