<template>
  <div class="container">
    <div class="col shadow">
      <h1>Editar Dados de Usuário</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="usuario.nome" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="usuario.email" required />
        </div>
        <div class="form-group">
          <label for="senha">Senha:</label>
          <div class="input-group">
            <input type="password" id="senha" v-model="usuario.senha" disabled />
            <button type="button" class="btn btn-secondary" @click="showPasswordModal = true">Alterar Senha</button>
          </div>
        </div>
        <div class="form-group">
          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" v-model="usuario.telefone" required />
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-outline-success">Salvar</button>
          <button type="button" class="btn btn-outline-danger">Cancelar</button>
        </div>
      </form>
    </div>

    <div class="col shadow">
      <h1>Crachá do Usuário</h1>
      <div class="badge">
        <img src="../assets/user2.png" alt="User Image" class="user-image" />
        <p>{{ usuario.nome }}</p>
        <p v-if="usuario.tipo === 1">Aluno</p>
        <p v-if="usuario.tipo === 2">PRAE</p>
        <p v-if="usuario.tipo === 3">Manutenção</p>
        <p>{{ usuario.telefone }}</p>
        <div v-if="qrCodeUrl">
          <img :src="qrCodeUrl" alt="QR Code" class="qr-code" />
        </div>
      </div>
    </div>

    <div v-if="showPasswordModal" class="modal-overlay">
      <div class="modal">
        <h2>Alterar Senha</h2>
        <div class="form-group">
          <label for="newSenha">Nova Senha:</label>
          <input type="password" id="newSenha" v-model="newPassword" required />
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-outline-success" @click="updatePassword">Salvar</button>
          <button type="button" class="btn btn-outline-danger" @click="closeModal">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';
import { fetchUserData, getUser } from '../services/UsuarioService';

export default {
  name: "Usuarios",

  data() {
    return {
      idUsuario: null,
      usuario: {
        id: '',
        nome: '',
        email: '',
        senha: '',
        tipo: 'usuario',
        telefone: ''
      },
      qrCodeUrl: '',
      showPasswordModal: false,
      newPassword: ''
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
    this.idUsuario = this.$route.params.id;
    if (this.idUsuario) await this.getUser();
    else await this.getUserData();
  },

  methods: {
    async getUserData() {
      const userData = await fetchUserData();
      this.usuario = userData;
    },

    async getUser() {
      const userData = await getUser(this.idUsuario);
      this.usuario = userData;
    },

    async generateQRCode() {
      const userDataString = JSON.stringify(this.usuario);
      try {
        this.qrCodeUrl = await QRCode.toDataURL(userDataString);
      } catch (error) {
        console.error(error);
      }
    },

    showPasswordModal() {
      this.showPasswordModal = true;
    },

    closeModal() {
      this.showPasswordModal = false;
      this.newPassword = '';
    },

    updatePassword() {
      this.usuario.senha = this.newPassword;
      this.closeModal();
      alert('Senha alterada com sucesso!');
    },

    handleSubmit() {
      // Handle form submission
      console.log('Form data:', this.usuario);
      alert('Formulário enviado com sucesso!');
    }
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

input, select {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

input:focus, select:focus {
  border-color: #007bff;
  outline: none;
}

.input-group {
  display: flex;
  align-items: center;
}

.input-group input {
  flex: 1;
}

.input-group button {
  margin-left: 10px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
}

.btn-outline-success {
  border: 1px solid #28a745;
  color: #28a745;
}

.btn-outline-success:hover {
  background-color: #28a745;
  color: #fff;
}

.btn-outline-danger {
  border: 1px solid #dc3545;
  color: #dc3545;
}

.btn-outline-danger:hover {
  background-color: #dc3545;
  color: #fff;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal h2 {
  margin-bottom: 20px;
  font-size: 20px;
}

.modal .form-group {
  margin-bottom: 15px;
}

.modal .form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
