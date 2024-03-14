import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JSX, SVGProps } from "react";

export default function Home() {
  return (
    <div className="bg-[#1e1e2f] min-h-screen text-white">
      <nav className="bg-[#161625] p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Dice4Icon className="h-6 w-6" />
          <h1 className="text-xl font-bold">ROOBuilds.gg</h1>
        </div>
        <div className="flex space-x-6">
          <Link className="text-gray-400 hover:text-white" href="#">
            Meta Builds
          </Link>
          <Link className="text-gray-400 hover:text-white" href="#">
            Tierlist
          </Link>
          <Link className="text-gray-400 hover:text-white" href="#">
            Minhas Builds
          </Link>
          <Link className="text-gray-400 hover:text-white" href="#">
            Planejador de Builds
          </Link>
          <Link className="text-gray-400 hover:text-white" href="/rodex">
            Arquivo de Monstros
          </Link>
          <Link className="text-gray-400 hover:text-white" href="#">
            Rankings
          </Link>
          <Badge variant="secondary">NEW</Badge>
          <Link className="text-gray-400 hover:text-white" href="#">
            Eventos Semanais
          </Link>
          <Link className="text-gray-400 hover:text-white" href="#">
            Database
          </Link>
        </div>
        <Button
          className="text-gray-400 border-gray-600 hover:border-white hover:text-white"
          variant="outline"
        >
          Login/Registro
        </Button>
      </nav>
      <div className="flex">
        <aside className="w-60 bg-[#161625] p-4">
          <nav>
            <ul>
              <li className="flex items-center justify-between p-6 hover:bg-[#2c2c3d] rounded bg-cover">
                {/*{style={{ backgroundImage: "url('https://browiki.org/images/5/59/Arqueirossprite.png')"}}} */}
                <a className="flex items-center space-x-2 bg-" href="#">
                  <TreeDeciduousIcon className="h-6 w-6" />
                  <span>Arqueiro</span>
                </a>
              </li>
              <li className="flex items-center justify-between p-6 hover:bg-[#2c2c3d] rounded">
                <a className="flex items-center space-x-2" href="#">
                  <TreeDeciduousIcon className="h-6 w-6" />
                  <span>Espadachim</span>
                </a>
              </li>
              <li className="flex items-center justify-between p-6 hover:bg-[#2c2c3d] rounded">
                <a className="flex items-center space-x-2" href="#">
                  <GhostIcon className="h-6 w-6" />
                  <span>Gatuno</span>
                </a>
              </li>
              <li className="flex items-center justify-between p-6 hover:bg-[#2c2c3d] rounded">
                <a className="flex items-center space-x-2" href="#">
                  <WandIcon className="h-6 w-6" />
                  <span>Mago</span>
                </a>
              </li>
              <li className="flex items-center justify-between p-6 hover:bg-[#2c2c3d] rounded">
                <a className="flex items-center space-x-2" href="#">
                  <WandIcon className="h-6 w-6" />
                  <span>Mercador</span>
                </a>
              </li>
              <li className="flex items-center justify-between p-6 hover:bg-[#2c2c3d] rounded">
                <a className="flex items-center space-x-2" href="#">
                  <WandIcon className="h-6 w-6" />
                  <span>Noviço</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">ROO Meta Builds</h2>
            <Input
              className="bg-[#2c2c3d] border-none"
              placeholder="Search by Build or Skill..."
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <Button className="text-gray-400" variant="ghost">
              Leveling
            </Button>
            <Button className="text-gray-400" variant="ghost">
              Endgame
            </Button>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Builds Populares</h3>
            <div className="space-y-4">
              <div className="bg-[#2c2c3d] p-4 rounded">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-bold">Sniper ADL</h4>
                    <p className="text-gray-400">
                      Tipo: Alvo único - MVP - Dano em área - Criar tags
                    </p>
                    <p className="text-red-500">Por: RooBuilds</p>
                  </div>
                  <div className="flex space-x-2">
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="bg-[#2c2c3d] p-4 rounded">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-bold">Sniper ADL</h4>
                    <p className="text-gray-400">
                      Tipo: Alvo único - MVP - Dano em área - Criar tags
                    </p>
                    <p className="text-red-500">Por: RooBuilds</p>
                  </div>
                  <div className="flex space-x-2">
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="bg-[#2c2c3d] p-4 rounded">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-bold">Sniper ADL</h4>
                    <p className="text-gray-400">
                      Tipo: Alvo único - MVP - Dano em área - Criar tags
                    </p>
                    <p className="text-red-500">Por: RooBuilds</p>
                  </div>
                  <div className="flex space-x-2">
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="bg-[#2c2c3d] p-4 rounded">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-bold">Sniper ADL</h4>
                    <p className="text-gray-400">
                      Tipo: Alvo único - MVP - Dano em área - Criar tags
                    </p>
                    <p className="text-red-500">Por: RooBuilds</p>
                  </div>
                  <div className="flex space-x-2">
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                    <BadgeIcon className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function BadgeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function Dice4Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M16 8h.01" />
      <path d="M8 8h.01" />
      <path d="M8 16h.01" />
      <path d="M16 16h.01" />
    </svg>
  );
}

function GhostIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
    </svg>
  );
}

function TreeDeciduousIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 19h8a4 4 0 0 0 3.8-2.8 4 4 0 0 0-1.6-4.5c1-1.1 1-2.7.4-4-.7-1.2-2.2-2-3.6-1.7a3 3 0 0 0-3-3 3 3 0 0 0-3 3c-1.4-.2-2.9.5-3.6 1.7-.7 1.3-.5 2.9.4 4a4 4 0 0 0-1.6 4.5A4 4 0 0 0 8 19Z" />
      <path d="M12 19v3" />
    </svg>
  );
}

function WandIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h0" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </svg>
  );
}
