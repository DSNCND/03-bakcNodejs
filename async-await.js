
const empleados = 
[
{
    id:1,
    nombre: 'Fernando'
},
{
    id:2,
    nombre: 'Marta'
},
{
    id:3,
    nombre: 'Manuel'
},

]

const sueldos =
[
    {
        id:1,
        sueldo:1500,
    },
    {
        id:2,
        sueldo:2000,
    },
]

///////////////////////////////

const id=1;
let nombre;


const getSueldoById = async (id) =>
{
    try
    {
        const sueldo = sueldos.find((e)=>e.id===id);
        
        if(sueldo)
        {
            return sueldo;
        }
        throw new Error(`El sueldo con id ${id} no existe`);
    }catch (error)
    {
        throw error;
    }
}



///////
const getEmpleadoById = async (id) =>
{
    try
    {
        const empleado = empleados.find((e)=>e.id===id);
        
        if(empleado)
        {
            return empleado;
        }
        throw new Error(`El empleado con id ${id} no existe`);
    }catch(error)
    {
    throw error;
    }
}

const getDatosCompletosEmpleado = async (id)=>
{
    try{
    const empleado=await getEmpleadoById(id);
    const sueldo=await getSueldoById(id);
        
    //return `El empleado con id: ${id} es ${empleado.nombre} y tiene un sueldo de: ${sueldo.sueldo}`;
    return{
        id,
        nombre: empleado.nombre,
        sueldo: sueldo.sueldo,
    }
    
    }catch(error)
    {
        throw error
    }

}

getDatosCompletosEmpleado(id)
.then(mensaje=>{console.log(`El empleado con id: ${mensaje.id} es ${mensaje.nombre} y tiene un sueldo de: ${mensaje.sueldo}`)})
.catch(error=>console.log(error.message))
