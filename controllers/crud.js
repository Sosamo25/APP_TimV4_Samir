//Invocamos a la conexion de la DB
const connection = require('../database/db');

//GUARDAR un REGISTRO
exports.hola = (req, res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    connection.query('INSERT INTO users SET ?',{user:user, rol:rol}, (error, results)=>{
        if(error){
            console.log(error);

        }else{
            //console.log(results);   
            res.redirect('./users');         
        }
});

};
//ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    connection.query('UPDATE users SET ? WHERE id = ?',[{user:user, rol:rol}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};


//Colegio
exports.save_c = (req, res)=>{
    const nombre = req.body.nombre;
    const ciudad = req.body.ciudad;
    const nombre_repre = req.body.nombre_repre;
    const clasificacion = req.body.clasificacion;
    const c_dane = req.body.c_dane;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    
    connection.query('INSERT INTO colegio SET ?', {nombre:nombre, ciudad:ciudad, nombre_repre:nombre_repre, clasificacion:clasificacion, c_dane:c_dane, telefono:telefono, correo:correo}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/index_colegio');
        }
    })
}


exports.update_c = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const ciudad = req.body.ciudad;
    const nombre_repre = req.body.nombre_repre;
    const clasificacion = req.body.clasificacion;
    const c_dane = req.body.c_dane;
    const telefono = req.body.telefono;
    const correo = req.body.correo;
    connection.query('UPDATE colegio SET ? WHERE id = ?', [{nombre:nombre, ciudad:ciudad, nombre_repre:nombre_repre, clasificacion:clasificacion, c_dane:c_dane, telefono:telefono, correo:correo} ,id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/index_colegio');
        }
    })
    
}


//Programa Academico
exports.save_pa = (req, res)=>{
    const nombre = req.body.nombre;
    const ciclo = req.body.ciclo;
    const verbal = req.body.verbal;
    const matematico = req.body.matematico;
    const visualEspacial = req.body.visualEspacial;
    const kinesico = req.body.kinesico;
    const musical = req.body.musical;
    const intrapersonal = req.body.intrapersonal;
    const interpersonal = req.body.interpersonal;
    const naturalista = req.body.naturalista;
    
    connection.query('INSERT INTO Programas_Academicos SET ?', {nombre:nombre, ciclo:ciclo, verbal:verbal, matematico:matematico, visualEspacial:visualEspacial, kinesico:kinesico, musical:musical, intrapersonal:intrapersonal, interpersonal:interpersonal, naturalista:naturalista}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}

exports.update_pa = (req, res)=>{
    const id = req.body.numConsecutivo;
    const nombre = req.body.nombre;
    const ciclo = req.body.ciclo;
    const verbal = req.body.verbal;
    const matematico = req.body.matematico;
    const visualEspacial = req.body.visualEspacial;
    const kinesico = req.body.kinesico;
    const musical = req.body.musical;
    const intrapersonal = req.body.intrapersonal;
    const interpersonal = req.body.interpersonal;
    const naturalista = req.body.naturalista;
    connection.query('UPDATE Programas_Academicos SET ? WHERE numConsecutivo = ?', [{nombre:nombre, ciclo:ciclo, verbal:verbal, matematico:matematico, visualEspacial:visualEspacial, kinesico:kinesico, musical:musical, intrapersonal:intrapersonal, interpersonal:interpersonal, naturalista:naturalista} ,id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/index_pa');
        }
    })
    
}
