import axios from "axios"

// Função assíncrona para realizar o login
async function login(url, credentials) {
    try {
        // Realiza uma requisição POST com as credenciais do usuário
        const response = await axios.post(url, credentials)
        // Retorna os dados da resposta (e.g., token de acesso)
        return response.data;
    } catch (error) {
        // Em caso de erro, retorna ou manipula o erro
        console.error("Erro no login:", error);
        // Pode-se escolher lançar o erro ou retornar um valor específico
        throw error;
    }
}