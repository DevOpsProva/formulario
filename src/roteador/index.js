import {createRouter, createWebHashHistory } from "vue-router";
import TelaInicial from '@/components/TelaInicial.vue';
import TelaLogin from '@/components/TelaLogin.vue';


const rotas = [{
        path: '/inicial',
        name: 'TelaInicial',
        component: TelaInicial
    },
    {
        path: '/',
        name: 'TelaLogin',
        component: TelaLogin
    },
    {
        path: '/cadastro',
        name: 'CadastrarLogin',
        component: () => import('@/components/CadastrarLogin.vue') 
    },
    {
        path: '/produto',
        name: 'ProdutosCadastrados',
        component:() => import('@/components/ProdutosCadastrados.vue'),
        // {
            // default: () => import('@/components/ProdutosCadastrados.vue'),
            // menu: () => import('@/components/MenuLateral.vue') 
        // } 
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,
})



export default roteador; 