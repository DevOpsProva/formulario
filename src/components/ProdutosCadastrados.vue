
<template>
    <div>
        <h1>Lista de Produtos</h1>
        <ul>
            <li v-for="produto in produtos" :key="produto.id">
                {{ produto.nome }} - R$ {{ produto.preco }}
            </li>
        </ul>
    </div>
</template>

    <script>
    export default {
        data() {
            return {
                produtos: [
                    { id: 1, nome: 'Produto 1', preco: 10.99 },
                    { id: 2, nome: 'Produto 2', preco: 19.99 },
                    { id: 3, nome: 'Produto 3', preco: 5.99 },
                    { id: 4, nome: 'Produto 4', preco: 7.99 },
                ]
            }
        }
    }
    </script>

    <style scoped>
    h1 {
        color: blue;
    }
    </style>
