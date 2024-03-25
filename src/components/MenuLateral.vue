<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px; height: 630px;">
    <a class="align-items-center text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"></svg>
      <span class="fs-4">Nome do cliente</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link :to="{name: 'ProdutosCadastrados'}" class="nav-link">Produtos</router-link>
      </li>
      <li>
        <router-link :to="{name: 'ProdutosCadastrados'}" class="nav-link">Vendas</router-link>
      </li>
      
      <li>
        <router-link :to="{name: 'ProdutosCadastrados'}" class="nav-link">Estoque</router-link>
      </li>
     
      <li>
        <router-link :to="{name: 'TelaLogin'}" class="nav-link">Sair</router-link>
      
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
        };
    }
};
</script>

<style scoped>

.container {
    background-color: rgb(60, 130, 221);
    height: max-content;
}


.opcoes-menu {
    list-style-type: none;
    padding: 0;
}

.opcao-menu {
    margin-bottom: 5px;
    cursor: pointer;
}
</style>