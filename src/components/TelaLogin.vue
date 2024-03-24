<template>
    <div class="row fundo">
        <div class="container">
            <div class="col-md-12 painel">
    
            <div class="row">
                <div class="col-md-6">
                    <div class="col-md-6 text-center" @click="cadastrar()">
                        <p>Cadastrar-se </p>
                    </div>

                </div>
                    
        </div>
                                             
                <div class="panel borda">
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <a >Login</a>
                        </div>
                    </div>     

                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <form id="login" method="post"
                                    >
                                    <div class="form-group">
                                        <input type="text" name="username" id="username" class="form-control" v-model="login"
                                             placeholder="Login">
                                    </div>


                                    <div class="form-group">
                                        <input type="password" name="password" id="password" class="form-control" v-model="password"
                                        placeholder="Senha">
                                    </div>
                                    
                                    <div class="form-group row">
                                        <div class="row">
                                            <div >
                                                <button  type="button" class="btn btn-primary" @click="entrar()">
                                                    Entrar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
  
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { defineComponent } from 'vue'
import Swal from 'sweetalert2';

export default defineComponent({
data() {
    return {
        login: '',
        password: ''
    };
},

methods: {
    entrar() {
        console.log(this.password);
        if(this.login == '' || this.password == '') {
            Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Preencha todos os dados!',
                })
        } else{
            this.$router.push({ path: '/inicial' });

        }
    },
    cadastrar(){
        this.$router.push({ path: '/cadastro' });
    
    }
}
});
</script>

<style>

.painel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* background-color: blueviolet; */
}

.form-group {
    margin-bottom: 1rem;
}

button {
    padding: 0.5rem 1rem;
}

.borda {
    border-left: 2px solid black;
    padding-left: 10px;
}

.fundo{
    background-image: url('../assets/fundo.jpg');
    background-size: cover;
}
</style>