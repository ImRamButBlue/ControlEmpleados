const sueldo = {template:
`
<div>

<button type="button" 
class="btn btn-primary m-2 float-end"
data-bs-toggle="modal"
data-bs-target="#modalVista"
@click="agregarClick()" >
    Agregar Sueldo
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
        <div class="d-flex flex-row">
            <input class="form-control m-2"
                v-model="SueldoFiltroNombre"
                v-on:keyup="FiltroFuncion()"
                placeholder="Filtro por Nombre">
                <button type="button" class="btn btn-light"
                @click="ordenarResultado('SueldoNombre',true)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </button>
                <button type="button" class="btn btn-light"
                @click="ordenarResultado('SueldoNombre',False)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
                </button>
            </div>
            Empleado Nombre
        </th>
        <th>
            
            Sueldo Base
        </th>
        <th>
            Descuentos
        </th>
        <th>
            Bonificaciones
        </th>
        <th>
            Sueldo Liquido
        </th>
        <th>
            Opciones
        </th>
    </tr>
</thead>
<tbody v-for="sue in sueldos">
    <tr v-for="emp in empleados">
        <td v-if="sue.Empleado==emp.EmpleadoId">{{emp.EmpleadoNombre}}</td>
        <td v-if="sue.Empleado==emp.EmpleadoId">{{sue.SueldoBase}}</td>
        <td v-if="sue.Empleado==emp.EmpleadoId">{{sue.Descuentos}}</td>
        <td v-if="sue.Empleado==emp.EmpleadoId">{{sue.Bonificaciones}}</td>
        <td v-if="sue.Empleado==emp.EmpleadoId">{{sue.SueldoLiquido}}</td> 
        <td v-if="sue.Empleado==emp.EmpleadoId">
            <button
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#modalVista"
            @click="editarClick(sue)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>
        </td>
        <td v-if="sue.Empleado==emp.EmpleadoId">
            <button class="btn btn-light mr-1" @click="borrarClick(sue.SueldoId)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>
        </td>
    </tr>
</tbody>
</thead>

</table>

<div class="modal fade" id="modalVista" tabindex="-1"
    aria-labelledby="ModalEditar" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="modalVistaLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        arial-label="cerrar">
        </button>
    </div>
    <div class="modal-body">
    <div class="d-flex flex-row bd-highlight mb-3">
    <div class="p-5 w-100 bd-highlight">
        <div class="input-group mb-3" >
            <span class="input-group-text">Empleado Nombre</span>
            <select class="form-select" v-model="Empleado">
                <option v-bind:value="emp.EmpleadoId" v-for="emp in empleados" >
                    {{emp.EmpleadoNombre}}
                </option>
            </select>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Sueldo Base</span>
            <input type="number" class="form-control" v-model="SueldoBase">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Descuentos</span>
            <input type="number" class="form-control" v-model="Descuentos">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Bonificaciones</span>
            <input type="number" class="form-control" v-model="Bonificaciones">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">Sueldo Liquido</span>
            <input type="number" class="form-control" v-model="SueldoLiquido">
        </div>
        </div>
    </div>
        <label class="d-none empleado-value">
            {{EmpleadoId}}
        </label>
        <button type="button" @click="crearClick()" v-if="EmpleadoId==0" class="btn btn-primary" >
            Crear
        </button>
        <button type="button" @click="actualizarClick()" v-if="EmpleadoId!=0" class="btn btn-primary" >
            Actualizar
        </button>
    </div>

</div>
</div>

</div>
`,
data(){
    return{
        sueldos:[],
        empleados:[],
        modalTitle:"",
        SueldoBase:0,
        Descuentos:0,
        Bonificaciones:0,
        SueldoLiquido:0,
        Empleado:0,
        EmpleadoFiltrado:"",
        EmpleadosSinFiltro:[],
        SueldoSinFiltro:[],
        SueldoFiltroId:0,
        EmpleadoId:0
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"sueldo")
        .then((response)=>{
            this.sueldos=response.data;
            this.SueldoSinFiltro = response.data;
        });
        axios.get(variables.API_URL+"empleado")
        .then((response)=>{
            this.empleados=response.data;
            
            this.EmpleadosSinFiltro = response.data;
        });
    },
    agregarClick(){
        this.modalTitle="Agregar Sueldo";
        this.Empleado = 0;
        this.SueldoBase=0;
        this.Descuentos=0;
        this.Bonificaciones=0;
        this.SueldoLiquido=0;
        this.EmpleadoId=0
    },
    editarClick(sue){
        print(sue)
        this.modalTitle="Editar Sueldo";
        this.Empleado = sue.Empleado;
        this.SueldoBase=sue.SueldoBase;
        this.Descuentos=sue.Descuentos;
        this.Bonificaciones=sue.Bonificaciones;
        this.SueldoLiquido=sue.SueldoLiquido;
        this.EmpleadoId=sue.Empleado;
    },
    crearClick(){
        axios.post(variables.API_URL+"sueldo",{
            SueldoBase:this.SueldoBase,
            Descuentos:this.Descuentos,
            Bonificaciones:this.Bonificaciones,
            SueldoLiquido:this.SueldoLiquido,
            Empleado:this.Empleado
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
            
        });
    },
    actualizarClick(){
        axios.put(variables.API_URL+"sueldo",{
            SueldoBase:this.SueldoBase,
            Descuentos:this.Descuentos,
            Bonificaciones:this.Bonificaciones,
            SueldoLiquido:this.SueldoLiquido,
            Empleado:this.Empleado
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    borrarClick(id){
        if(!confirm("¿Estas Seguro que quieres eliminar esto?"))
        {
            return;
        }
        axios.delete(variables.API_URL+"sueldo/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    filtrarPorId(id){
        this.EmpleadoFiltrado=this.EmpleadosSinFiltro.filter(function(element){
            return element.EmpleadoId.toString().toLowerCase().includes(
                id.toString().trim().toLowerCase()
            )
        });
    },
    FiltroFuncion(){
        var SueldoFiltroNombre=this.SueldoFiltroNombre;
        var EmpleadoFiltrado;
        var empleadosEntran;


        EmpleadoFiltrado = this.EmpleadosSinFiltro.filter(
            el =>{
                  return el.EmpleadoNombre.toString().toLowerCase().includes(
                    SueldoFiltroNombre.toString().trim().toLowerCase()
            );
        });
        empleadosEntran = EmpleadoFiltrado;
        var listaEntran = [];

        var recorrerArray = (arr) => {
            for(let i=0;i<=arr.length-1;i++){
                listaEntran.push(arr[i].EmpleadoId);
            }
        }
        recorrerArray(EmpleadoFiltrado)

        let filtroEmp = listaEntran.map(item => {return item;});

        this.sueldos = this.SueldoSinFiltro.filter(
            el => {
                return filtroEmp.includes(el.Empleado);
        });
    }
},
mounted:function(){
    this.refreshData();
}

}