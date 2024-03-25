// export default function jsonToHtml(data) {
//   return `
//     <h1>Tipo de Inicial: ${data.nomeDaPeca}</h1>
//     <p><strong>Vara do Trabalho:</strong> ${data.varaDoTrabalho}</p>
//     <h1>AO JUÍZO DA VARA DO TRABALHO DE ${data.varaDoTrabalho}</h1>
//     <p><strong>Endereço:</strong> ${data.autor.endereco.logradouro}, ${data.autor.endereco.numero} - ${data.autor.endereco.cidade}/${data.autor.endereco.estado}</p>
//     <p><strong>autor:</strong> ${data.autor.nome}, CPF: ${data.autor.cpf}</p>
//     <p><strong>Motivo da Reclamação:</strong> ${data.motivoDaReclamacao}</p>
//     <p><strong>Endereço:</strong> ${data.autor.endereco.logradouro}, ${data.autor.ctps} - ${data.autor.nomeDaMae}/${data.autor.pis}</p>
//     `;
// }

export default function jsonToHtml(data) {
  return `
  <p class="bold">AO DOUTO JUÍZO DE DIREITO DA 1ª VARA DO JUIZADO ESPECIAL CÍVEL DO FORO DE JABAQUARA – SÃO PAULO - SP</p>
  <p><span class="bold">Cumprimento de Sentença</span> <br> Autos principais nº 1029446-22.2023.8.26.0003</p>
  <p class="bold">FABIO AUGUSTO ITO</p>, brasileiro, gerente de vendas, portador da cédula de identidade RG nº 37.423.931-9, e do CPF nº 407.340.738-44, residente e domiciliário à Avenida Itaboraí, 311, apto. 21, São Paulo/SP, CEP: 04135-001, e-mail <a href="mailto:fabio_ito91@yahoo.com.br">fabio_ito91@yahoo.com.br</a>, vem com o devido acatamento perante Vossa Excelência, requerer o cumprimento da sentença proferida às fls. 191-193, em face da 123 Viagens e Turismo Ltda, CNPJ: 26.669.170/0001-57, pelas razões de fato e de direito a seguir aduzidas.
  <h2>DA SÍNTESE DOS FATOS</h2>
  <p>Em 02 de fevereiro de 2024, o exequente obteve sentença favorável ao seu pleito inicial.</p>
  
    `;
}
