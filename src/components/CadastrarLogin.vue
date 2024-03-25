




<template>
    <div class="row fundo">
        <div class="container">
            <div class="col-md-12 painel">
                                             
                <div class="panel">   

                    <div class="panel-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <form>
                <div class="form-group">
                    <label for="name">Nome completo</label>
                    <input type="text" class="form-control" id="name" placeholder="Nome completo">                   
                </div>

                <div class="form-group">
                    <label for="nasc">Data Nascimento</label>
                    <input type="date" class="form-control" id="nasc">                   
                </div>

                <div class="form-group">
                    <label for="telefone">Telefone</label>
                    <input type="text" class="form-control" id="telefone" placeholder="Telefone">                   
                </div>

                <div class="form-group">
                    <label for="emal">Email</label>
                    <input type="text" class="form-control" id="emal" placeholder="Email">                   
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>

                
                <button type="submit" class="btn btn-primary" @click="cadastrar()">Cadastrar</button>
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
            form: {
                name: '',
                phone: '',
                nasc: '',
                email: '',
                password: ''
            }
        };
},

methods: {
    cadastrar() {
        console.log(this.form);
        if(this.form['email'] == '' || this.form['password'] == '' || this.form['name'] == '' || this.form['phone'] == '' || this.form['nasc'] == '') {
            Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Preencha todos os dados!',
                })
        } else{
            this.$router.push({ path: '/inicial' });

        }
    },
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

.fundo{
    background-image: url('../assets/fundo.jpg');
    background-size: cover;
}
</style>