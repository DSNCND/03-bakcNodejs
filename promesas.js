
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

const id=1;
let nombre;
const getSueldoById = (id) =>
{
    return new Promise((resolve, reject) => 
    {
        const sueldo = sueldos.find((e)=>e.id===id);
        
        if(sueldo)
        {
            resolve(sueldo);
            return;
        }
        reject(`El sueldo del empleado con un id ${id} no existe`);

    });


}

////////promesas

const getEmpleadoById = (id) =>
{
    return new Promise((resolve, reject) => 
    {
        const empleado = empleados.find((e)=>e.id===id);
        
        if(empleado)
        {
            resolve(empleado);
            return;
        }
        reject(`El empleado con un id ${id} no existe`);

    });


}



getEmpleadoById(id)
.then((empleado)=>
{   nombre = empleado.nombre;
    return getSueldoById(empleado.id);
    }).then(sueldo=>
        {
            console.log(`El empleado ${nombre} con id: ${id} tiene un sueldo de ${sueldo.sueldo}`)

        }
    ).catch(error => console.log(error));

/*
getSueldoById(id).then(sueldo => 
{
    console.log(`El empleado con id: ${id} tiene un sueldo de ${sueldo.sueldo}`)
}).catch(error => console.log(error));
*/

////////////////



















//////////////////////////
///metodos

/*
const getSalarioById = (id, callback) =>
{
    const sueldo = sueldos.find((e)=>e.id===id);

    if(sueldo)
    {
        callback(null, sueldo)
        return;
    }
    callback(new Error(`El sueldo con id: ${id} no existe`))
};


getSalarioById(id, (error, sueldo)=>
    {
        if(error)
        {
        console.log(`ERROR!!!`);
        console.log(error);
        return;
        }
        console.log(`El empleado con id: ${sueldo.id} tiene un sueldo de: ${sueldo.sueldo}...`)
    }
    );


////////////////////////

const getEmpleadoById = (id, callback) =>
{
    const empleado = empleados.find((e)=>e.id===id);
    
    if(empleado)
    {
        callback(null, empleado);
        return;
    }
    callback(new Error(`El empleado no existe`));

}



getEmpleadoById(id, (error, empleado) => 
{
    if(error)
    {
        console.log(`ERROR!!!`);
        console.log(error);
        return;
    }
    console.log(`El empleado: ${empleado.nombre}...`)
    getSalarioById(id, (error, sueldo)=>
    {
        if(error)
        {
        console.log(`ERROR!!!`);
        console.log(error);
        return;
        }
        console.log(`El empleado: ${empleado.nombre} con id: ${sueldo.id} tiene un sueldo de: ${sueldo.sueldo}...`)
    })
});

*/



