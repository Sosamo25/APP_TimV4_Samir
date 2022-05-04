const express = require('express');
const router = express.Router();
const conexion = require('./database/db');


//Consulta Usuarios ************************
router.get('/users', (req, res)=>{     
    conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('./Usuarios/users.ejs', {results:results});            
        }   
    })
})

//Crear Usuarios ************************
router.get('/register', (req,res)=>{
    res.render('./Usuarios/register.ejs');
})

//Editar Usuarios ************************
router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('./Usuarios/edit.ejs', {user:results[0]});            
        }        
    });
});

//Eliminar Usuarios ************************

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/users');         
        }
    })
});


//Consulta colegios ************************
router.get('/index_colegio', (req, res)=>{
    conexion.query('SELECT * FROM colegio', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('./Colegio/index_colegio', {results:results});
        }
    }) 
})

//Crear registros Colegio ************************
router.get('/create_colegio', (req,res)=>{
    res.render('./Colegio/create_colegio');
})


//Ruta editar registros colegio ************************
router.get('/edit_colegio/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM colegio WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('./Colegio/edit_colegio', {nombre:results[0]});
        }
    })
})

//Ruta borrar colegio ************************
router.get('/delete_colegio/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM colegio WHERE id = ?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/index_colegio');
        }
    })
})


//Consulta Programa Académico ************************
router.get('/index_pa', (req, res)=>{
    conexion.query('SELECT * FROM Programas_Academicos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('./pa/index_pa', {results:results});
        }
    }) 
})

//Crear registros programas académicos ************************
router.get('/create_pa', (req,res)=>{
    res.render('./pa/create_pa');
})

//Ruta editar registros Programa Academico ************************
router.get('/edit_pa/:numConsecutivo', (req, res)=>{
    const id = req.params.numConsecutivo;
    conexion.query('SELECT * FROM Programas_Academicos WHERE numConsecutivo=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('./pa/edit_pa', {nombre:results[0]});
        }
    })
})


//Borrar Programa academico ************************
router.get('/delete_pa/:numConsecutivo', (req, res)=>{
    const id = req.params.numConsecutivo;
    conexion.query('DELETE FROM Programas_Academicos WHERE numConsecutivo =?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('./pa/index_pa');
        }
    })
})

//Consulta test ************************
router.get('/test', (req, res)=>{
    conexion.query('SELECT * FROM test', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('./Test/test', {results:results});
        }
    }) 
})

//Crear test ************************
router.get('/crear_test', (req,res)=>{
    res.render('./Test/crear_test');
})

//Editar test ************************
router.get('/editar_test/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM test WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('./Test/editar_test', {test:results[0]});
        }
    })
})


//Borrar test ************************
router.get('/delete_test/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM test WHERE id=?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/test');
        }
    })
})
const crud = require('./controllers/crud');


//usuarios
router.post('/save_us', crud.save_us);
router.post('/update_us', crud.update_us);
//Colegio
router.post('/save_c', crud.save_c);
router.post('/update_c', crud.update_c);
//Programa Academico
router.post('/save_pa', crud.save_pa);
router.post('/update_pa', crud.update_pa);
//test
router.post('/save_te', crud.save_te);
router.post('/update_te', crud.update_te);

module.exports = router;