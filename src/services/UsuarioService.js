import api from '../js/axiosConfig'

async function login(credentials) {
    try {
        const response = await api.post('auth', {
            email: credentials.email,
            senha: credentials.senha
        })

        sessionStorage.setItem('authToken', response.data.token)

        return response.data
    } catch (error) {
        console.error("Erro no login:", error)
        throw error
    }
}

async function fetchUserData() {
    try {
        const response = await api.get('/user/data')
        console.log("🚀 ~ fetchUserData ~ response:", response)
        return response.data
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error)
        throw error
    }
}

function logout() {
    sessionStorage.removeItem('authToken')
}

export { 
    login,
    logout,

    fetchUserData
}