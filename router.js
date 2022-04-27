const express = require('express');
const router = express.Router();


const conexion = require('./database/db');

router.get('/', (req, res)=>{     
    conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('users.ejs', {results:results});            
        }   
    })
})

router.get('/create', (req,res)=>{
    res.render('create');
})

router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {user:results[0]});            
        }        
    });
});

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


//Consulta Colegios
router.get('/index_colegio', (req, res)=>{
    conexion.query('SELECT * FROM colegio', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('./Colegio/index_colegio', {results:results});
        }
    }) 
})

//Crear registros Colegio
router.get('/create_colegio', (req,res)=>{
    res.render('./Colegio/create_colegio');
})


//Ruta editar registros colegio
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

//Ruta borrar colegio
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

//Crear registros programas academicos
router.get('/create_pa', (req,res)=>{
    res.render('./pa/create_pa');
})

//Consulta PA
router.get('/index_pa', (req, res)=>{
    conexion.query('SELECT * FROM Programas_Academicos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('./pa/index_pa', {results:results});
        }
    }) 
})

//Ruta editar registros Programa Academico
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


//Borrar Programa academico
router.get('/delete_pa/:numConsecutivo', (req, res)=>{
    const id = req.params.numConsecutivo;
    conexion.query('DELETE FROM Programas_Academicos WHERE numConsecutivo =?', [id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})




const crud = require('./controllers/crud');

router.post('/hola', crud.hola);
router.post('/update', crud.update);
//Colegio
router.post('/save_c', crud.save_c);
router.post('/update_c', crud.update_c);
//Programa Academico
router.post('/save_pa', crud.save_pa);
router.post('/update_pa', crud.update_pa);

module.exports = router;