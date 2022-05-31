export interface UserAdot{
        cpf: string,
        rg: string,
        sexo: string,
        status: string,
        estadoCivil: string,
        phone: string,
        rendaFamiliar: string,
        castrado: string,
        statusAdocao: string,
        quantFilhos: string,
        tipoResidencia: string
    User :{
    id: number,
    nome: string,
    sobreNome: string,
    email: string,

    }

    Endereco:{
        logradouro: string,
        numero: string,
        bairro: string,
        cep: string,
        estado: string,
        cidade: string

    }

}

// cpf: "1234567889"
// endereco: {logradouro: "Rua Esperanto", numero: "45", bairro: "Jardim Jira", cep: "063254125",…}
// estadoCivil: "CASADO"
// phone: "151528898"
// quantFilhos: "DOIS"
// rendaFamiliar: "DE_MIL_A_DOIS_MIL"
// rg: "45616543"
// sexo: "MASC"
// tipoResidencia: "CASA"
// user: {login: null, senha: null, email: "oliveira@email.com", nome: "Marta", sobreNome: "Oliveira",…}
// email: "oliveira@email.com"
// login: null
// nome: "Marta"
// perfis: []
// senha: null
// sobreNome: 