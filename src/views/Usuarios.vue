<template>
  <div class="container">
    <div class="col">
      <h1 v-if="usuario.id">{{ title }}</h1>
      <h1 v-else>Cadastrar novo Usuário</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="usuario.nome" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="usuario.email" required />
        </div>
        <div>
          <label for="senha">Senha:</label>
          <input type="password" id="senha" v-model="usuario.senha" required />
        </div>
        <div>
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" v-model="usuario.telefone" required />
        </div>
        <button type="button" class="btn btn-primary">Salvar</button>
      </form>
    </div>

    <div class="col">
      <h1>Crachá do Usuário</h1>
      <div class="badge">
        <img src="../assets/user2.png" alt="User Image" class="user-image" />
        <p>{{ usuario.nome }}</p>
        <p v-if="usuario.tipo === 1">Aluno</p>
        <p v-if="usuario.tipo === 2">PRAE</p>
        <p v-if="usuario.tipo === 3">Manutenção</p>
        <p>{{ usuario.telefone }}</p>
        <div v-if="qrCodeUrl">
          <img :src="qrCodeUrl" alt="QR Code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';
import { fetchUserData } from '../services/UsuarioService'

export default {
  name: "Usuarios",

  data() {
    return {
      title: 'Editar Dados do Usuário',
      usuario: {
        id: '',
        nome: '',
        email: '',
        senha: '',
        tipo: 'usuario',
        telefone: ''
      },
      qrCodeUrl: ''
    };
  },

  watch: {
    usuario: {
      handler() {
        this.generateQRCode();
      },
      deep: true
    }
  },
  
  mounted() {},
  async created() {
    await this.getUserData()
  },

  methods: {
    async getUserData(){
      const userData = await fetchUserData()
      this.usuario = userData
    },
    handleSubmit() {
      // Handle form submission
      console.log('Form data:', this.usuario);
      alert('Formulário enviado com sucesso!');
    },
    async generateQRCode() {
      const userDataString = JSON.stringify(this.usuario);
      try {
        this.qrCodeUrl = await QRCode.toDataURL(userDataString);
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
}

.col {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
}

form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

form div {
  margin-bottom: 10px;
  width: 100%;
}

label {
  margin-right: 10px;
}

input, select {
  padding: 5px;
  font-size: 1em;
  width: calc(100% - 10px);
}

button {
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}

.badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.badge p {
  margin: 5px 0;
  color: #000;
}

.badge img.user-image {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.badge img.qr-code {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}
</style>
