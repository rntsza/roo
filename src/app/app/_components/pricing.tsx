
import { Button } from '@/components/ui/button'

export default function PricingPage() {
  return (
    <div className="text-white ">
      <h1 className="text-4xl font-bold text-center text-white mb-4">
        Planos
      </h1>
      <p className="text-center text-lg mb-12">
        Planos para você e para o seu time e que cabem no seu bolso.
      </p>
      <div className="flex justify-center gap-8">
        <div className="bg-[#494e54] p-8 rounded-lg w-80">
          <h2 className="text-2xl font-bold text-[#58a6ff] mb-4">Free trial</h2>
          <p className="mb-6">
            Teste a plataforma, afinal, não dá pra saber o que vem por ai ainda.
          </p>
          <div className="text-[#58a6ff] text-5xl font-bold mb-2">
            R$ 0<span className="text-xl font-medium">/mês</span>
          </div>
          <p className="text-[#8b949e] mb-6">+ Uso de recursos</p>
          <ul className="mb-6">
            <li className="mb-2">Até R$ 10 de uso mensal</li>
            <li className="mb-2">8 GB RAM / 8 vCPU por serviço</li>
            <li className="mb-2">Permissões de Projeto</li>
            <li className="mb-2">Suporte da comunidade</li>
            <li className="mb-2">Integração com Power BI</li>
            <li className="mb-2">7 dias de avaliação</li>
            <li>Latência não prioritária</li>
          </ul>
          <Button className="w-full bg-[#238636]">Crie sua conta no ZZZZZ</Button>
        </div>
        <div className="bg-[#494e54] p-8 rounded-lg w-80">
          <h2 className="text-2xl font-bold text-[#a371f7] mb-4">Pro</h2>
          <p className="mb-6">
            Para empresas de médio porte prontas para integração.
          </p>
          <div className="text-[#a371f7] text-5xl font-bold mb-2">
            $ 20
            <span className="text-xl font-medium">/mês/pessoa</span>
          </div>
          <p className="text-[#8b949e] mb-6">+ Uso de recursos</p>
          <ul className="mb-6">
            <li className="mb-2">Todas as opções do plano Free e:</li>
            <li className="mb-2">32 GB RAM / 32 vCPU por serviço</li>
            <li className="mb-2">Gerenciamento de usuários em escala</li>
            <li className="mb-2">Suporte prioritário 24/7</li>
            <li className="mb-2">Um time de onboarding dedicado</li>
            <li>Latência Nacional</li>
          </ul>
          <Button className="w-full bg-[#a371f7]">Upgrade para o Pro</Button>
        </div>
        <div className="bg-[#494e54] p-8 rounded-lg w-80">
          <h2 className="text-2xl font-bold text-[#ffd33d] mb-4">Enterprise</h2>
          <p className="mb-6">
            Para grandes empresas com suporte a SLA e necessidade de compliance.
          </p>
          <div className="text-[#ffd33d] text-3xl font-bold mb-2">
            Fale com um especialista
          </div>
          <p className="text-[#8b949e] mb-6">Pacote tudo em um</p>
          <ul className="mb-6">
            <li className="mb-2">Todas as funções do Free, Pro e:</li>
            <li className="mb-2">White label</li>
            <li className="mb-2">Compliance e TOTP</li>
            <li className="mb-2">Canal de suporte direto</li>
            <li className="mb-2">120 dias de backup e +</li>
            <li>Multiplas instâncias pelo globo</li>
          </ul>
          <Button className="w-full bg-[#238636]">Entre em contato</Button>
        </div>
      </div>
      <p className="text-center text-[#8b949e] mt-12">
        Ainda tem dúvidas se esse software é pra você? Tente me mandar um {" "}
        <a className="text-[#58a6ff]" href="#">
          e-mail
        </a>{" "}
        que eu irei tirar todas as suas dúvidas.
      </p>
    </div>
  );
}
