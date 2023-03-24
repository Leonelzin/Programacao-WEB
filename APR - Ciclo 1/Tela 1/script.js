//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Douglas Leonel de Almeida
//DATA: 24/03/2023

// Função para validar os campos do formulário
function validateForm(e) {
  e.preventDefault();

  // Obter os dados do formulário
  const form = e.target;
  const name = form.name.value.trim();
  const birthdate = form.birthdate.value.trim();
  const cpf = form.cpf.value.trim();
  const address = form.address.value.trim();
  const phone = form.phone.value.trim();

  // Validar campos
  if (!name || !birthdate || !cpf || !address || !phone) {
    alert('Preencha todos os campos obrigatórios.');
    return;
  }

  // paciente (exemplo simples, você pode usar um método mais avançado)
  const patients = JSON.parse(localStorage.getItem('patients')) || [];
  patients.push({ name, birthdate, cpf, address, phone });
  localStorage.setItem('patients', JSON.stringify(patients));

  // Limpar formulário
  form.reset();
}

// Adicionar evento de submit ao formulário
const form = document.getElementById('patient-form');
form.addEventListener('submit', validateForm);
