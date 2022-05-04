const formulario = document.getElementById('formulario');
        const inputs = document.querySelectorAll('#formulario input');

        const expresiones = {
            usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
            nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            password: /^.{4,12}$/, // 4 a 12 digitos.
            correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            telefono: /^\d{7,20}$/ // 7 a 14 numeros.
        }

        const campos ={
            nombre: false,
            correo: false,
            telefono: false
        }


        const validarFormulario = (e) => {
            switch (e.target.id) {
                case "nombre":
                    validarCampo(expresiones.nombre, e.target, 'nombre');
                break;
                case "ciudad":
                    validarCampo(expresiones.nombre, e.target, 'ciudad');
                break;
                case "nombre_repre":
                    validarCampo(expresiones.nombre, e.target, 'nombre_repre');
                break;
                case "clasificacion":
                    
                break;
                case "c_dane":
                    
                break;
                case "telefono":
                    validarCampo(expresiones.telefono, e.target, 'telefono');
                break;
                case "correo":
                    validarCampo(expresiones.correo, e.target, 'correo');
                break;
            }
        }

        const validarCampo = (expresion, input, campo) =>{
            if(expresion.test(input.value)){
                        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
                        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-formulario__grupo-correcto');
                        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-activo');
                        campos[campo] = true;

                    }else{
                        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
                        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
                        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-activo');
                        campos[campo] = false;
                    }
        }

        inputs.forEach((input) =>{
            input.addEventListener('Keyup', validarFormulario);
            input.addEventListener('blur', validarFormulario);
        })

        formulario.addEventListener('submit', (e) =>{
            e.defaultPrevented();

            if(campos.nombre && campos.ciudad && campos.nombre_repre && campos.telefono && campos.correo){
                formulario.submit();
            }
        });