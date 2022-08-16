const departamento = {template:`
<div>

<button type="button" 
class="btn btn-primary m-2 float-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="agregarClick()" >
    Agregar Departamento
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            <div class="d-flex flex-row">
            <input class="form-control m-2"
                v-model="DepartamentoFiltroId"
                v-on:keyup="FiltroFuncion()"
                placeholder="Filtro Por ID">
                <button type="button" class="btn btn-light"
                @click="ordenarResultado('DepartamentoId',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>
                <button type="button" class="btn btn-light"
                @click="ordenarResultado('DepartamentoId',false)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
                </button>
            </div>
            Departamento ID
        </th>
        <th>
            <div class="d-flex flex-row">
            <input class="form-control m-2"
                v-model="DepartamentoFiltroNombre"
                v-on:keyup="FiltroFuncion()"
                placeholder="Filtro por Nombre">
                <button type="button" class="btn btn-light"
                @click="ordenarResultado('DepartamentoNombre',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>
                <button type="button" class="btn btn-light"
                @click="ordenarResultado('DepartamentoNombre',False)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
                </button>
            </div>
            Departamento Nombre
        </th>
        <th>
            Departamento Id
        </th>
        <th>
            Departamento Nombre
        </th>
        <th>
            Opciones
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="dep in departamentos">
        <td>{{dep.DepartamentoId}}</td>
        <td>{{dep.DepartamentoNombre}}</td>
        <td>
        <button
        class="btn btn-light mr-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="editarClick(dep)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
        </button></td>
        <td>
        <button class="btn btn-light mr-1" @click="borrarClick(dep.DepartamentoId)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </button></td>
    </tr>
</tbody>
</thead>

</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="ModalEditar" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        arial-label="cerrar">
        </button>
    </div>
    <div class="modal-body">
        <div class="input-group mb-3">
            <span class="input-group-text">Nombre Departamento</span>
            <input type="text" class="form-control" v-model="DepartamentoNombre">
        </div>
        <button type="button" @click="crearClick()" v-if="DepartamentoId==0" class="btn btn-primary" >
            Crear
        </button>
        <button type="button" @click="actualizarClick()" v-if="DepartamentoId!=0" class="btn btn-primary" >
            Actualizar
        </button>
    </div>

</div>
</div>

</div>
`,

data(){
    return{
        departamentos:[],
        modalTitle:"",
        DepartamentoId:0,
        DepartamentoNombre:"",
        DepartamentoFiltroNombre:"",
        DepartamentoFiltroId:"",
        DepartamentoSinFiltro:[]
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"departamento")
        .then((response)=>{
            this.departamentos=response.data;
            this.DepartamentoSinFiltro=response.data;
        });
    },
    agregarClick(){
        this.modalTitle="Agregar Departamento";
        this.DepartamentoId = 0;
        this.DepartamentoNombre="";
    },
    editarClick(depart){
        this.modalTitle="Editar Departamento";
        this.DepartamentoId=depart.DepartamentoId;
        this.DepartamentoNombre=depart.DepartamentoNombre;
    },
    crearClick(){
        axios.post(variables.API_URL+"departamento",{
            DepartamentoNombre:this.DepartamentoNombre
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
            
        });
    },
    actualizarClick(){
        axios.put(variables.API_URL+"departamento",{
            DepartamentoId:this.DepartamentoId,
            DepartamentoNombre:this.DepartamentoNombre
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    borrarClick(id){
        if(!confirm("¿Estas Seguro que quieres eliminar esto?")){
            return;
        }
        axios.delete(variables.API_URL+"departamento/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    FiltroFuncion(){
        var DepartamentoFiltroId=this.DepartamentoFiltroId;
        var DepartamentoFiltroNombre=this.DepartamentoFiltroNombre;

        this.departamentos=this.DepartamentoSinFiltro.filter(
            function(el){
                console.log(el.DepartamentoId.toString())
                return el.DepartamentoId.toString().toLowerCase().includes(
                    DepartamentoFiltroId.toString().trim().toLowerCase()
                )&&
                el.DepartamentoNombre.toString().toLowerCase().includes(
                    DepartamentoFiltroNombre.toString().trim().toLowerCase()
                )
            });
    },
    ordenarResultado(prop,asc){
        this.departamentos= this.DepartamentoSinFiltro.sort(function(a,b){
            if(asc){
                return (a[prop]>b[prop])?1:((a[prop]<b[prop])?-1:0);
            }
            else{
                return (b[prop]>a[prop])?1:((b[prop]<a[prop])?-1:0);
            }
        })
    }
    

},
mounted:function(){
    this.refreshData();
}

}