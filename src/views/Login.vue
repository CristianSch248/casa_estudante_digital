<template>
  <div class="container">
    <div class="cardLogin">
      <h1>Casa do Estudante Digital</h1>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="Email" v-model="email" placeholder="E-mail" class="form-control"/>
      </div>
      <div class="form-group">
        <label for="senha">Senha:</label>
        <input type="password" id="senha" name="Senha" v-model="senha" placeholder="Senha" class="form-control"/>
      </div>
      <button type="button" class="btn btn-primary" @click="handleLogin">Entrar</button>
    </div>
  </div>
</template>

<script>
import { login } from '../services/UsuarioService'
export default {
  name: "Login",
  data() {
    return {
      email: null,
      senha: null
    }
  },
  methods: {
    async handleLogin() {
      const credentials = {
        email: this.email,
        senha: this.senha
      }

      try {
        const response = await login(credentials)
        if (response.auth === true) this.$router.push({ name: 'Dashboard' })
      } catch (error) {
        console.log("🚀 ~ login ~ error:", error) 
      }
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5; /* Definindo o fundo azul */
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.cardLogin {
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.cardLogin h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
