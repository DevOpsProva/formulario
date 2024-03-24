<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px; height: 630px;">
    <a href="#menu" class="align-items-center text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"></svg>
      <span class="fs-4">Nome do cliente</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#produto" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"></svg>
          Produtos
        </a>
      </li>
      <li>
        <a href='#venda' class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"></svg>
          Vendas
        </a>
      </li>
      <li>
        <a href='#estoque' class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"></svg>
          Estoque
        </a>
      </li>
      <li>
        <a href='/' class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"></svg>
          Sair
        </a>
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