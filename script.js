// Armazene as informações em um objeto
let dadosAgendamento = {
  logo: logo != '' ? logo.name : null,
  whatsapp: whatsapp != '' ? whatsapp : null,
  redesSociais: [],
  descricao: descricao != '' ? descricao : null,
  dias: [],
  horarioInicio: horarioInicio,
  horarioFim: horarioFim,
  horarioInicioSabado: checkboxSabado.checked ? horarioInicioSabado : null,
  horarioFimSabado: checkboxSabado.checked ? horarioFimSabado : null,
  horarioInicioDomingo: checkboxDomingo.checked ? horarioInicioDomingo : null,
  horarioFimDomingo: checkboxDomingo.checked ? horarioFimDomingo : null,
  endereco: endereco != '' ? endereco : null
};

// Armazene as redes sociais selecionadas
for (let i = 0; i < redesSociais.length; i++) {
  if (redesSociais[i].checked) {
    dadosAgendamento.redesSociais.push({
      redeSocial: redesSociais[i].value,
      usuario: document.getElementsByName('usuario[]')[i].value
    });
  }
}

// Armazene os dias selecionados
for (let i = 0; i < dias.length; i++) {
  if (dias[i].checked) {
    dadosAgendamento.dias.push(dias[i].value);
  }
}

// Codifique o objeto em formato JSON
let dadosCodificados = encodeURIComponent(JSON.stringify(dadosAgendamento));

// Redirecione o usuário para a página agendamento.html com os dados na URL
window.location.href = 'agendamento.html?dados=' + dadosCodificados;
