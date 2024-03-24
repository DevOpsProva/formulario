<template>
    <painel titulo="Filtro" :footer="true">
                    <form class="form">
                        <div class="row">
                            <div class="form-group col-xs-12 col-sm-3">
                                <label>Data Início</label>
                                <div class="row">
                                    <div class="col-xs-5">
                                        <input type="date" class="form-control" >
                                    </div>                          
                                    <div class="col-xs-2 text-center"> até </div>
                                    <div class="col-xs-5">
                                        <input type="date" class="form-control" >
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-xs-12 col-sm-3">
                                <label>Data Fim</label>
                                <div class="row">
                                    <div class="col-xs-5">
                                        <input type="date" class="form-control">
                                    </div>                          
                                    <div class="col-xs-2 text-center"> até </div>
                                    <div class="col-xs-5">
                                        <input type="date" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-xs-12 col-sm-3">
                                <label>Etiqueta</label>
                                <select class="form-control" >
                                    <option value=""> --Selecione--</option>
                                   
                                </select>
                            </div>
                            <div class="form-group col-xs-12 col-sm-3">
                                <label>Usuário</label>
                                <select class="form-control">
                                    <option value=""> --Selecione--</option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                    </form>
                    <template slot="footer">  
                    <div class="row">
                            <div class="col-xs-8 col-xs-offset-2 text-center">
                                <button type="button" v-on:click="" class="btn btn-primary"> <i class="fa fa-search"> </i> Buscar </button>
                                <button type="button" v-on:click="" class="btn btn-danger"> <i class="fa fa-trash"> </i> Limpar </button>
                                <button type="button" v-on:click="" class="btn btn-success"> <i class="fa fa-file-excel-o"> </i> Exportar </button>
                            </div>
                        </div>
                    </template>
                </painel>
</template>