document.addEventListener('DOMContentLoaded', (event) => {
    listarRegistros(registros);
});

function listarRegistros(registros) {
    let tbody = document.getElementById("relatorio");
    
    for (let i = 0; i < registros.length; i++) {
        let tr = tbody.insertRow();

        let td_id_catequizando = tr.insertCell();
        let td_catequizando = tr.insertCell();
        let td_paroquia = tr.insertCell();
        let td_email = tr.insertCell();
        let td_data_nascimento = tr.insertCell();
        let td_endereco = tr.insertCell();
        let td_bairro = tr.insertCell();
        let td_cep = tr.insertCell();
        let td_telefone = tr.insertCell();
        let td_nome_pai = tr.insertCell();
        let td_nome_mae = tr.insertCell();
        let td_situacao_pais = tr.insertCell();
        let td_viuva = tr.insertCell();
        let td_mora_vive = tr.insertCell();
        let td_batizado = tr.insertCell();
        let td_data_batismo = tr.insertCell();
        let td_livro = tr.insertCell();
        let td_folha = tr.insertCell();
        let td_paroquia_batismo = tr.insertCell();
        let td_nome_padrinho = tr.insertCell();
        let td_nome_madrinha = tr.insertCell();
        let td_escola = tr.insertCell();
        let td_ano = tr.insertCell();
        let td_horario = tr.insertCell();
        let td_medicamento = tr.insertCell();
        let td_contato_emergencia = tr.insertCell();
        let td_alergico = tr.insertCell();

        td_id_catequizando.innerText = registros[i].id_catequizando;
        td_catequizando.innerText = registros[i].catequizando;
        td_paroquia.innerText = registros[i].paroquia;
        td_email.innerText = registros[i].email;
        td_data_nascimento.innerText = registros[i].data_nascimento;
        td_endereco.innerText = registros[i].endereco;
        td_bairro.innerText = registros[i].bairro;
        td_cep.innerText = registros[i].cep;
        td_telefone.innerText = registros[i].telefone;
        td_nome_pai.innerText = registros[i].nome_pai;
        td_nome_mae.innerText = registros[i].nome_mae;
        td_situacao_pais.innerText = registros[i].situacao_pais;
        td_viuva.innerText = registros[i].viuva;
        td_mora_vive.innerText = registros[i].mora_vive;
        td_batizado.innerText = registros[i].batizado;
        td_data_batismo.innerText = registros[i].data_batismo;
        td_livro.innerText = registros[i].livro;
        td_folha.innerText = registros[i].folha;
        td_paroquia_batismo.innerText = registros[i].paroquia_batismo;
        td_nome_padrinho.innerText = registros[i].nome_padrinho;
        td_nome_madrinha.innerText = registros[i].nome_madrinha;
        td_escola.innerText = registros[i].escola;
        td_ano.innerText = registros[i].ano;
        td_horario.innerText = registros[i].horario;
        td_medicamento.innerText = registros[i].medicamento;
        td_contato_emergencia.innerText = registros[i].contato_emergencia;
        td_alergico.innerText = registros[i].alergico;
    }
}



const registros = [
    {
        id_catequizando: "001",
        catequizando: "João Silva",
        paroquia: "Paróquia São José",
        email: "joao.silva@example.com",
        data_nascimento: "12/05/2010",
        endereco: "Rua das Flores, 123",
        bairro: "Centro",
        cep: "12345-678",
        telefone: "(11) 98765-4321",
        nome_pai: "Carlos Silva",
        nome_mae: "Maria Silva",
        situacao_pais: "Casados",
        viuva: "Não",
        mora_vive: "Com os Pais",
        batizado: "Sim",
        data_batismo: "15/06/2011",
        livro: "Livro A",
        folha: "Folha 12",
        paroquia_batismo: "Paróquia São José",
        nome_padrinho: "Pedro Souza",
        nome_madrinha: "Ana Souza",
        escola: "Escola ABC",
        ano: "5º Ano",
        horario: "Manhã",
        medicamento: "Não",
        contato_emergencia: "Carlos Silva - (11) 98765-4321",
        alergico: "Não"
    },
    {
        id_catequizando: "002",
        catequizando: "Ana Pereira",
        paroquia: "Paróquia Santa Maria",
        email: "ana.pereira@example.com",
        data_nascimento: "23/08/2009",
        endereco: "Avenida Paulista, 456",
        bairro: "Jardins",
        cep: "98765-432",
        telefone: "(11) 91234-5678",
        nome_pai: "João Pereira",
        nome_mae: "Clara Pereira",
        situacao_pais: "Divorciados",
        viuva: "Não",
        mora_vive: "Com a Mãe",
        batizado: "Sim",
        data_batismo: "30/09/2010",
        livro: "Livro B",
        folha: "Folha 45",
        paroquia_batismo: "Paróquia Santa Maria",
        nome_padrinho: "Rafael Lima",
        nome_madrinha: "Juliana Lima",
        escola: "Escola XYZ",
        ano: "6º Ano",
        horario: "Tarde",
        medicamento: "Sim",
        contato_emergencia: "Clara Pereira - (11) 91234-5678",
        alergico: "Sim"
    },
    {
        id_catequizando: "003",
        catequizando: "Carlos Mendes",
        paroquia: "Paróquia Nossa Senhora",
        email: "carlos.mendes@example.com",
        data_nascimento: "15/02/2008",
        endereco: "Rua das Palmeiras, 789",
        bairro: "Vila Nova",
        cep: "54321-987",
        telefone: "(11) 97654-3210",
        nome_pai: "Paulo Mendes",
        nome_mae: "Laura Mendes",
        situacao_pais: "Casados",
        viuva: "Não",
        mora_vive: "Com os Pais",
        batizado: "Sim",
        data_batismo: "20/03/2009",
        livro: "Livro C",
        folha: "Folha 78",
        paroquia_batismo: "Paróquia Nossa Senhora",
        nome_padrinho: "Fernando Costa",
        nome_madrinha: "Beatriz Costa",
        escola: "Escola Alpha",
        ano: "7º Ano",
        horario: "Noite",
        medicamento: "Não",
        contato_emergencia: "Paulo Mendes - (11) 97654-3210",
        alergico: "Não"
    },    {
        id_catequizando: "004",
        catequizando: "Maria Fernandes",
        paroquia: "Paróquia Santo Antônio",
        email: "maria.fernandes@example.com",
        data_nascimento: "10/11/2007",
        endereco: "Avenida Central, 101",
        bairro: "Centro",
        cep: "65432-198",
        telefone: "(11) 93456-7890",
        nome_pai: "Rafael Fernandes",
        nome_mae: "Ana Fernandes",
        situacao_pais: "Viúvo",
        viuva: "Sim",
        mora_vive: "Com o Pai",
        batizado: "Sim",
        data_batismo: "25/12/2008",
        livro: "Livro D",
        folha: "Folha 89",
        paroquia_batismo: "Paróquia Santo Antônio",
        nome_padrinho: "Gabriel Souza",
        nome_madrinha: "Clara Souza",
        escola : "Escola Beta",
        ano: "8º Ano",
        horario: "Integral",
        medicamento: "Sim",
        contato_emergencia: "Rafael Fernandes - (11) 93456-7890",
        alergico: "Não"
    },    {
        id_catequizando: "005",
        catequizando: "Lucas Almeida",
        paroquia: "Paróquia São Pedro",
        email: "lucas.almeida@example.com",
        data_nascimento: "28/03/2011",
        endereco: "Rua Nova, 202",
        bairro: "Jardim",
        cep: "87654-321",
        telefone: "(11) 94321-6789",
        nome_pai: "Marcos Almeida",
        nome_mae: "Carla Almeida",
        situacao_pais: "Casados",
        viuva: "Não",
        mora_vive: "Com os Pais",
        batizado: "Sim",
        data_batismo: "15/04/2012",
        livro: "Livro E",
        folha: "Folha 34",
        paroquia_batismo: "Paróquia São Pedro",
        nome_padrinho: "Felipe Lima",
        nome_madrinha: "Sofia Lima",
        escola: "Escola Gama",
        ano: "4º Ano",
        horario: "Manhã",
        medicamento: "Não",
        contato_emergencia: "Marcos Almeida - (11) 94321-6789",
        alergico: "Sim"
    }
]