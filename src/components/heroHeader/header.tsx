export default function HeroHeader() {
  return (
    <div className="absolute w-full h-{4rem}  py-4 ">
      <ul className="flex flex-row items-center justify-center space-x-10 w-full px-6">
        <li className="font-bold text-[1.1rem] cursor-pointer hover:animate-pulse">Home</li>
        <li className="font-bold text-[1.1rem] cursor-pointer hover:animate-pulse">Planos</li>
        <li className="font-bold text-[1.1rem] cursor-pointer hover:animate-pulse">Contato</li>
        <li className="font-bold text-[1.1rem] cursor-pointer hover:animate-pulse">Sobre</li>
      </ul>
    </div>
  );
}

