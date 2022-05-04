//Invocamos a la conexion de la DB
const connection = require('../database/db');
const express = require('express');
const bcryptjs = require("bcryptjs");
const crud = express();

//Usuarios
exports.save_us = async (req, res)=>{
    const documentType = req.body.documentType;
	const Document = req.body.Document;
	const user = req.body.user;
	const name = req.body.name;
	const lastName = req.body.lastName;
    const rol = req.body.rol;
	const pass = req.body.pass;
	let passwordHash = await bcryptjs.hash(pass, 8);
	const Title = req.body.Title;
	const titleArea = req.body.titleArea;
    connection.query('INSERT INTO users SET ?',{documentType:documentType, Document:Document, user:user, name:name, lastName:lastName, rol:rol, pass:passwordHash, Title:Title, titleArea:titleArea}, async (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/users');
        }
    })
}

//Actualizar un usuario
exports.update_us = async (req, res)=>{
    const id = req.body.id;
    const documentType = req.body.documentType;
	const Document = req.body.Document;
	const user = req.body.user;
	const name = req.body.name;
	const lastName = req.body.lastName;
    const rol = req.body.rol;
	const pass = req.body.pass;
	let passwordHash = await bcryptjs.hash(pass, 8);
	const Title = req.body.Title;
	const titleArea = req.body.titleArea;
    connection.query('UPDATE users SET ? WHERE id = ?', [{documentType:documentType, Document:Document, user:user, name:name, lastName:lastName, rol:rol, pass:passwordHash, Title:Title, titleArea:titleArea}, id], async (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/users');
        }
    })
}


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
            res.redirect('/index_pa');
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


//Test
exports.save_te = (req, res)=>{
    const codigo_unico = req.body.codigo_unico;
    const colegio = req.body.colegio;
    const ciudad = req.body.ciudad;
    const estado = req.body.estado;
    const fecha_creacion = req.body.fecha_creacion;

    connection.query('INSERT INTO test SET ?', {codigo_unico:codigo_unico, colegio:colegio, ciudad:ciudad, estado:estado, fecha_creacion:fecha_creacion}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/test');
        }
    })
}

exports.update_te = (req, res)=>{
    const id = req.body.id;
    const codigo_unico = req.body.codigo_unico;
    const colegio = req.body.colegio;
    const ciudad = req.body.ciudad;
    const estado = req.body.estado;
    const fecha_creacion = req.body.fecha_creacion;
    connection.query('UPDATE test SET ? WHERE id = ?', [{codigo_unico:codigo_unico, colegio:colegio, ciudad:ciudad, estado:estado, fecha_creacion:fecha_creacion},id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/test');
        }
    })
}
    
