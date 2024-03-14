import HeroHeader from "@/components/heroHeader/header";
import { Button } from "@/components/ui/button";

export default function Home() {
  const style = {
    backgroundImage:
      "url(https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <main className="h-screen w-screen" style={style}>
      <HeroHeader />
      <div className="h-full w-full flex flex-col items-center justify-center px-[4rem]">
        <h1 className="text-4xl font-bold text-white mb-4">
          Bem-vindo ao LowMS
        </h1>
        <p className="text-lg text-white mb-8">
          Uma solução moderna para seu próximo LMS - Transforme sua maneira de
          aprender.
        </p>
        <Button className="w-[10rem] py-[6px] rounded-3xl ">Começar Agora</Button>
      </div>
    </main>
  );
}
