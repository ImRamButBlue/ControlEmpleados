const empleado = {template:`
<div>

<button type="button" 
class="btn btn-primary m-2 float-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="agregarClick()" >
    Agregar Empleado
</button>

<table class="table table-striped">
<thead>
    <tr>
        <th>
            Empleado Id
        </th>
        <th>
            Empleado Nombre
        </th>
        <th>
            Empleado Departamento
        </th>
        <th>
            Fecha Ingreso
        </th>
        <th>
            Foto Empleado
        </th>
        <th>
            Opciones
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="emp in empleados">
        <td>{{emp.EmpleadoId}}</td>
        <td>{{emp.EmpleadoNombre}}</td>
        <td>{{emp.Departamento}}</td>
        <td>{{emp.FechaIngreso}}</td>
        <td>{{emp.FotoEmpleado}}</td>
        <td>
        <button
        class="btn btn-light mr-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        @click="editarClick(emp)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
        </button></td>
        <td>
        <button class="btn btn-light mr-1" @click="borrarClick(emp.EmpleadoId)">
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
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 w-50 bd-highlight">
            <div class="input-group mb-3">
                <span class="input-group-text">Nombre Empleado</span>
                <input type="text" class="form-control" v-model="EmpleadoNombre">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Departamento Empleado</span>
                <select class="form-select" v-model="Departamento">
                    <option v-for="dep in departamentos">
                        {{dep.DepartamentoNombre}}
                    </option>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Fecha Ingreso</span>
                <input type="date" class="form-control" v-model="FechaIngreso">
            </div>
        </div>
        <div class="p-2 w-50 bd-highlight">
            <img width="250" height="250"
                :src="FotoPath+FotoFileName"/>
            <input class="m-2" type="file" @change="subirImagen">
        </div>
    </div>
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
        empleados:[],
        departamentos:[],
        modalTitle:"",
        EmpleadoId:0,
        EmpleadoNombre:"",
        Departamento:"",
        FechaIngreso:"",
        FotoFileName:"fake.png",
        FotoPath:variables.FOTOS_URL
    }
},
methods:{
    refreshData(){
        axios.get(variables.API_URL+"empleado")
        .then((response)=>{
            this.empleados=response.data;
        });
        axios.get(variables.API_URL+"departamento")
        .then((response)=>{
            this.departamentos=response.data;
        });
    },
    agregarClick(){
        this.modalTitle="Agregar Empleado";
        this.EmpleadoId = 0;
        this.EmpleadoNombre="";
        this.Departamento="";
        this.FechaIngreso="";
        this.FotoFileName="fake.png"
    },
    editarClick(emp){
        print(emp)
        this.modalTitle="Editar Empleado";
        this.EmpleadoId=emp.EmpleadoId;
        this.EmpleadoNombre=emp.EmpleadoNombre;
        this.Departamento=emp.Departamento;
        this.FechaIngreso=emp.FechaIngreso;
        this.FotoFileName=emp.FotoEmpleado;
    },
    crearClick(){
        axios.post(variables.API_URL+"empleado",{
            EmpleadoNombre:this.EmpleadoNombre,
            Departamento:this.Departamento,
            FechaIngreso:this.FechaIngreso,
            FotoFileName:this.FotoFileName
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
            
        });
    },
    actualizarClick(){
        axios.put(variables.API_URL+"empleado",{
            EmpleadoId:this.EmpleadoId,
            EmpleadoNombre:this.EmpleadoNombre,
            Departamento:this.Departamento,
            FechaIngreso:this.FechaIngreso,
            FotoEmpleado:this.FotoFileName
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
        axios.delete(variables.API_URL+"empleado/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        });
    },
    subirImagen(event){
        let formData = new FormData();
        formData.append('file',event.target.files[0]);
        axios.post(
            variables.API_URL+"empleado/guardararchivo",
            formData)
            .then((response)=>{
                this.FotoFileName= response.data;
            });
    }
    

},
mounted:function(){
    this.refreshData();
}

}