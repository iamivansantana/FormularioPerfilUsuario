import React, {  useState } from 'react'

const FormPerfilUsuario = () => {

    //Estado Inicial.
    const [datosUsuarios, setDatosUsuarios] = useState({
        razonSocial:'',
        nombreComercial:'',
        nacionalidad:'',
        fechaDeConstitucion:'',
        fechaDeInicioDeOperaciones:'',
        rfc:'',
        regimenFiscal:'',
        industria:'',
        domicilio: {
            calleOAvenida:'',
            numeroExterior:'',
            numeroInterior:'',
            codigoPostal:'',
            coloniaOUrbanizacion:'',
            delegacionOMunicipio:'',
            ciudadOPoblacion:'',
            entidadFederativaOEstado:'',
            pais:'',
        },
        comprobanteDeDomicilio:'',
        numeroTelefonicoDelDomicilio:'',
        direccionDeCorreoElectronico:'',
        representanteLegal:{
            nombre:'',
            genero:'',
            fechaDeNacimiento:'',
            entidadFederativaDeNacimiento:'',
            paisDeNacimiento:'',
            nacionalidad:'',
            curp:'',
            rfc:'',
            domicilioParticular:'',
            estadoCivil:'',
            correoElectronico:'',
            telefono:'',
            documentoDeIdentificacion:'',
        },
        cuentaBancaria:{
            clabe:'',
            banco:'',
        },
        beneficiario:{
            nombre:'',
            fechaDeNacimiento:'',
            curp:'',
            genero:'',
            domicilioParticular:'',
            numeroTelefonico:'',
            correoElectronico:'',
        }
    
    });
    //Estado Error
    const [errorDeLlenado, setErrorDeLlenado] = useState(false);

    //Funciones para actualizar State    
    const actualizarState = (e)=>{
        setDatosUsuarios({...datosUsuarios,[e.target.name]: e.target.value.trim()})
     }
    const actualizarStateDomicilio = (e)=>{
        setDatosUsuarios({...datosUsuarios,domicilio:{...datosUsuarios.domicilio,[e.target.name]: e.target.value.trim()}})
     }
    const actualizarStateRepresentanteLegal = (e)=>{
        setDatosUsuarios({...datosUsuarios,representanteLegal:{...datosUsuarios.representanteLegal,[e.target.name]: e.target.value.trim()}})
     }
    const actualizarStatecuentaBancaria = (e)=>{
        setDatosUsuarios({...datosUsuarios,cuentaBancaria:{...datosUsuarios.cuentaBancaria,[e.target.name]: e.target.value.trim()}})
     }
    const actualizarStateBeneficiario = (e)=>{
        setDatosUsuarios({...datosUsuarios,beneficiario:{...datosUsuarios.beneficiario,[e.target.name]: e.target.value.trim()}})
     }


     //Arreglos para crear elementos HTMML (inputs).
     const datosUsuariosArr = [ {name:'razonSocial',id:'razonSocial',titulo:'Razón social*',type:'text',autoComplete:'off',required:true,onChange:actualizarState},
                                {name:'nombreComercial',id:'nombreComercial',titulo:'Nombre comercial*',type:'text',autoComplete:'off',required:true,onChange:actualizarState},
                                {name:'nacionalidad',id:'nacionalidad',titulo:'Nacionalidad*',type:'text',autoComplete:'off',required:true,onChange:actualizarState},
                                {name:'fechaDeConstitucion',id:'fechaDeConstitucion',titulo:'Fecha de constitución*',type:'date',autoComplete:'off',required:true,onChange:actualizarState},
                                {name:'fechaDeInicioDeOperaciones',id:'fechaDeInicioDeOperaciones',titulo:'Fecha de inicio de operaciones*',type:'date',autoComplete:'off',required:true,onChange:actualizarState},
                                {name:'rfc',id:'rfc',titulo:'RFC*',type:'text',autoComplete:'off',required:true,onChange:actualizarState},
                                {name:'regimenFiscal',id:'regimenFiscal',titulo:'Régimen Fiscal*',type:'text',autoComplete:'off',required:true,onChange:actualizarState},
                                {name:'industria',id:'industria',titulo:'Industria*',type:'text',autoComplete:'off',required:true,onChange:actualizarState},
                                {name:'direccionDeCorreoElectronico',id:'direccionDeCorreoElectronico',titulo:'Dirección de correo electrónico*',type:'email',autoComplete:'off',required:true,onChange:actualizarState},
                            ];
    const datosUsuariosDomicilioArr = [ {name:'calleOAvenida',id:'calleOAvenida',titulo:'Calle o Avenida*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateDomicilio},
                                        {name:'numeroExterior',id:'numeroExterior',titulo:'Numero exterior*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateDomicilio},
                                        {name:'numeroInterior',id:'numeroInterior',titulo:'Numero interior',type:'text',autoComplete:'off',required:false,onChange:actualizarStateDomicilio},
                                        {name:'codigoPostal',id:'codigoPostal',titulo:'Codigo Postal*',type:'number',autoComplete:'off',required:true,onChange:actualizarStateDomicilio},
                                        {name:'coloniaOUrbanizacion',id:'coloniaOUrbanizacion',titulo:'Colonia o Urbanización*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateDomicilio},
                                        {name:'pais',id:'pais',titulo:'País*',type:'text',autoComplete:'off',list:'paises-formularioList',required:true,onChange:actualizarStateDomicilio},
                                        {name:'entidadFederativaOEstado',id:'entidadFederativaOEstado',titulo:'Entidad Federativa o Estado*',type:'text',autoComplete:'off',list:'estados-formularioList',required:true,onChange:actualizarStateDomicilio},
                                        {name:'ciudadOPoblacion',id:'ciudadOPoblacion',titulo:'Ciudad o Población*',type:'text',autoComplete:'off',list:'ciudad-formulario',required:true,onChange:actualizarStateDomicilio},
                                        {name:'delegacionOMunicipio',id:'delegacionOMunicipio',titulo:'Delegación o Município*',type:'text',autoComplete:'off',list:'delegacion-formulario',required:true,onChange:actualizarStateDomicilio},
                                    ];
    const datosUsuariosDosArr = [   {name:'comprobanteDeDomicilio',id:'comprobanteDeDomicilio',titulo:'Comprobante de domicilio*',type:'text',autoComplete:'off',list:'comprobanteDomicilo-formularioList',required:true,onChange:actualizarState},
                                    {name:'numeroTelefonicoDelDomicilio',id:'numeroTelefonicoDelDomicilio',titulo:'Número telefónico del domicilio*',type:'tel',autoComplete:'off',required:true,onChange:actualizarState},
                                ];
    const datosUsuariosrepresentanteLegalArr = [   {name:'nombre',id:'nombre',titulo:'Nombre*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'genero',id:'genero',titulo:'Género*',type:'text',autoComplete:'off',list:'genero-formularioList',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'fechaDeNacimiento',id:'fechaDeNacimiento',titulo:'Fecha de nacimiento*',type:'date',autoComplete:'off',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'paisDeNacimiento',id:'paisDeNacimiento',titulo:'País de nacimiento*',type:'text',autoComplete:'off',list:'paises-formularioList',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'entidadFederativaDeNacimiento',id:'entidadFederativaDeNacimiento',titulo:'Entidad Federativa de nacimiento*',type:'text',autoComplete:'off',list:'estados-formularioList',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'nacionalidad',id:'nacionalidad',titulo:'Nacionalidad*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'curp',id:'curp',titulo:'CURP*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'rfc',id:'rfc',titulo:'RFC*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'domicilioParticular',id:'domicilioParticular',titulo:'Domicilio particular*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'estadoCivil',id:'estadoCivil',titulo:'Estado civil*',type:'text',autoComplete:'off',list:'estadoCivil-formularioList',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'correoElectronico',id:'correoElectronico',titulo:'Correo electrónico*',type:'email',autoComplete:'off',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'telefono',id:'telefono',titulo:'Teléfono*',type:'tel',autoComplete:'off',required:true,onChange:actualizarStateRepresentanteLegal},
                                    {name:'documentoDeIdentificacion',id:'documentoDeIdentificacion',titulo:'Documento de identificación*',type:'text',autoComplete:'off',list:'documentoDeIdentificacion-formularioList2',required:true,onChange:actualizarStateRepresentanteLegal},
                                ];
    const datosUsuarioscuentaBancariaArr = [   {name:'clabe',id:'clabe',titulo:'clabe*',type:'text',autoComplete:'off',required:true,onChange:actualizarStatecuentaBancaria},
                                    {name:'banco',id:'banco',titulo:'banco*',type:'tel',autoComplete:'off',required:true,onChange:actualizarStatecuentaBancaria},
                                ];
    const datosUsuariosbeneficiarioArr = [   {name:'nombre',id:'nombre',titulo:'Nombre*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateBeneficiario},
                                    {name:'fechaDeNacimiento',id:'fechaDeNacimiento',titulo:'Fecha de nacimiento*',type:'date',autoComplete:'off',required:true,onChange:actualizarStateBeneficiario},
                                    {name:'curp',id:'curp',titulo:'CURP*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateBeneficiario},
                                    {name:'genero',id:'genero',titulo:'Género*',type:'text',autoComplete:'off',list:'genero-formularioList',required:true,onChange:actualizarStateBeneficiario},
                                    {name:'domicilioParticular',id:'domicilioParticular',titulo:'domicilioParticular*',type:'text',autoComplete:'off',required:true,onChange:actualizarStateBeneficiario},
                                    {name:'numeroTelefonico',id:'numeroTelefonico',titulo:'Numero telefónico*',type:'tel',autoComplete:'off',required:true,onChange:actualizarStateBeneficiario},
                                    {name:'correoElectronico',id:'correoElectronico',titulo:'Correo electrónico*',type:'email',autoComplete:'off',required:true,onChange:actualizarStateBeneficiario},
                                ];

    //Funcion para Botones siguiente y atrás (Con validación de entradas vacías )
    const siguiente = (id1, id2)=>{
            const formularioID = document.querySelector(`#${id1}`);
            const formularioID2 = document.querySelector(`#${id2}`);

            //Validacion Paso1
            if(id1 === 'formularioPaso1'){
                
                const{razonSocial,nombreComercial,nacionalidad,fechaDeConstitucion,fechaDeInicioDeOperaciones,rfc,regimenFiscal,industria,direccionDeCorreoElectronico}=datosUsuarios;

                if(razonSocial==='' || nombreComercial===''|| nacionalidad===''|| fechaDeConstitucion===''|| fechaDeInicioDeOperaciones===''|| rfc===''|| regimenFiscal===''|| industria===''|| direccionDeCorreoElectronico===''){
                    
                    setErrorDeLlenado(true);
                    datosUsuariosArr.forEach(item=>{

                        if(datosUsuarios[`${item.id}`]===''){
                            const spanItem = document.getElementById(`${item.id}`);
                            spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                        }else{
                            const spanItem = document.getElementById(`${item.id}`);
                            spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                        }
                    });
                    return;
                }else{
                    datosUsuariosArr.forEach(item=>{

                        if(datosUsuarios[`${item.id}`]===''){
                            const spanItem = document.getElementById(`${item.id}`);
                            spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                        }else{
                            const spanItem = document.getElementById(`${item.id}`);
                            spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                        }
                    });
                } 
                setErrorDeLlenado(false);
            }

            //Validacion Paso2
            if(id1 === 'formularioPaso2'){
                
                const{calleOAvenida,numeroExterior,numeroInterior,codigoPostal,coloniaOUrbanizacion,delegacionOMunicipio,ciudadOPoblacion,entidadFederativaOEstado,pais}=datosUsuarios.domicilio;
                const{comprobanteDeDomicilio,numeroTelefonicoDelDomicilio}=datosUsuarios;

                if(calleOAvenida==='' || numeroExterior===''|| numeroInterior===''|| codigoPostal===''|| coloniaOUrbanizacion===''|| delegacionOMunicipio===''|| ciudadOPoblacion===''|| entidadFederativaOEstado===''|| pais===''||comprobanteDeDomicilio===''||numeroTelefonicoDelDomicilio===''){
                    
                    setErrorDeLlenado(true);

                    datosUsuariosDomicilioArr.forEach(item=>{

                        if(datosUsuarios.domicilio[`${item.id}`]===''){
                            const spanItem = document.getElementById(`paso2${item.id}`);
                            spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                        }else{
                            const spanItem = document.getElementById(`paso2${item.id}`);
                            spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                        }
                    });

                    datosUsuariosDosArr.forEach(item=>{

                        if(datosUsuarios[`${item.id}`]===''){
                            const spanItem = document.getElementById(`paso2${item.id}`);
                            spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                        }else{
                            const spanItem = document.getElementById(`paso2${item.id}`);
                            spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                        }
                    });

                    return;

                }else{

                    datosUsuariosDomicilioArr.forEach(item=>{

                        if(datosUsuarios[`${item.id}`]===''){
                            const spanItem = document.getElementById(`paso2${item.id}`);
                            spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                        }else{
                            const spanItem = document.getElementById(`paso2${item.id}`);
                            spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                        }
                    });
                    datosUsuariosDosArr.forEach(item=>{

                        if(datosUsuarios[`${item.id}`]===''){
                            const spanItem = document.getElementById(`paso2${item.id}`);
                            spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                        }else{
                            const spanItem = document.getElementById(`paso2${item.id}`);
                            spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                        }
                    });

                } 
                setErrorDeLlenado(false);
            }

            //Validacion Paso3
            if(id1 === 'formularioPaso3'){
                
                const{nombre,genero,fechaDeNacimiento,entidadFederativaDeNacimiento,paisDeNacimiento,nacionalidad,curp,rfc,domicilioParticular,estadoCivil,correoElectronico,telefono,documentoDeIdentificacion}=datosUsuarios.representanteLegal;

                if(nombre==='' || genero===''|| fechaDeNacimiento===''|| entidadFederativaDeNacimiento===''|| paisDeNacimiento===''|| nacionalidad===''|| curp===''|| rfc===''|| domicilioParticular===''|| estadoCivil===''|| correoElectronico===''|| telefono===''|| documentoDeIdentificacion===''){
                    
                    setErrorDeLlenado(true);
                    datosUsuariosrepresentanteLegalArr.forEach(item=>{

                        if(datosUsuarios.representanteLegal[`${item.id}`]===''){
                            const spanItem = document.getElementById(`paso3${item.id}`);
                            spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                        }else{
                            const spanItem = document.getElementById(`paso3${item.id}`);
                            spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                        }
                    });
                    return;
                }else{
                    datosUsuariosrepresentanteLegalArr.forEach(item=>{

                        if(datosUsuarios.representanteLegal[`${item.id}`]===''){
                            const spanItem = document.getElementById(`paso3${item.id}`);
                            spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                        }else{
                            const spanItem = document.getElementById(`paso3${item.id}`);
                            spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                        }
                    });
                } 
                setErrorDeLlenado(false);
            }







            setTimeout(() => {
                formularioID.classList.add('to-left');
            }, 200);
            formularioID.classList.remove('ventana-Activa');

            formularioID2.classList.remove('to-left');     
            setTimeout(() => {
                
                formularioID2.classList.add('ventana-Activa');     
            }, 200);
    }

    //Validacion Paso4
    const enviar = (id)=>{
        
        //Validacion Paso4
        if(id === 'formularioPaso4'){
                
            const{clabe,banco}=datosUsuarios.cuentaBancaria;
            const{nombre,fechaDeNacimiento,curp,genero,domicilioParticular,numeroTelefonico,correoElectronico}=datosUsuarios.beneficiario;

            if(clabe==='' || banco===''|| nombre===''|| fechaDeNacimiento===''|| curp===''|| genero===''|| domicilioParticular===''|| numeroTelefonico===''|| correoElectronico===''){
                
                setErrorDeLlenado(true);

                datosUsuarioscuentaBancariaArr.forEach(item=>{

                    if(datosUsuarios.cuentaBancaria[`${item.id}`]===''){
                        const spanItem = document.getElementById(`paso4${item.id}`);
                        spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                    }else{
                        const spanItem = document.getElementById(`paso4${item.id}`);
                        spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                    }
                });

                datosUsuariosbeneficiarioArr.forEach(item=>{

                    if(datosUsuarios.beneficiario[`${item.id}`]===''){
                        const spanItem = document.getElementById(`paso4${item.id}`);
                        spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                    }else{
                        const spanItem = document.getElementById(`paso4${item.id}`);
                        spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                    }
                });

                return;
            }else{

                datosUsuarioscuentaBancariaArr.forEach(item=>{

                    if(datosUsuarios.cuentaBancaria[`${item.id}`]===''){
                        const spanItem = document.getElementById(`paso4${item.id}`);
                        spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                    }else{
                        const spanItem = document.getElementById(`paso4${item.id}`);
                        spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                    }
                });
                datosUsuariosbeneficiarioArr.forEach(item=>{

                    if(datosUsuarios.beneficiario[`${item.id}`]===''){
                        const spanItem = document.getElementById(`paso4${item.id}`);
                        spanItem.innerHTML = '<img class="itemFalta" src="assets&#47;icons&#47;cruz.svg" alt="cruz"/>';
                    }else{
                        const spanItem = document.getElementById(`paso4${item.id}`);
                        spanItem.innerHTML = '<img  class="itemFalta" src="assets&#47;icons&#47;paloma.svg" alt="paloma"/>';
                    }
                });

            } 
            setErrorDeLlenado(false);
        }

    }
        
    const atras = (id1,id2)=>{
            //anterior
            const formularioID = document.querySelector(`#${id1}`);
            //Actual
            const formularioID2 = document.querySelector(`#${id2}`);

            formularioID2.classList.remove('ventana-Activa');
            setTimeout(() => {
                formularioID2.classList.add('to-left');          
            }, 200);     
            formularioID.classList.add('ventana-Activa');          
            setTimeout(() => {
                formularioID.classList.remove('to-left');          
            }, 200);
    }

    const handdleSubmit =(e)=>{
        e.preventDefault();
        console.log(datosUsuarios);
    }

    return (
        <>
            <div className="contenedorApp">
                <form className="flex-row" onSubmit={handdleSubmit}>
                    <div className="form-body">

                        <div id="formularioPaso1"className="ventana-Activa contenedor-formulario">
                            
                            <div><h2 className="input-tittle-form" style={{color:'var(--colorPrimario)',fontWeight:'bold',fontSize:'2rem'}}>Datos de usuarios</h2></div>

                                {datosUsuariosArr.map(item=>(
                                    <div key={item.name}>
                                        <div ><span className="input-tittle-form">{item.titulo}</span></div>
                                        <input 
                                            type={item.type}
                                            name={item.name}
                                            className="input-form"
                                            placeholder={item.titulo}
                                            autoComplete={item.autoComplete}
                                            required={item.required}
                                            onChange={item.onChange}
                                        />
                                        <span id={item.id}></span>
                                    </div>
                                ))}
                                {(errorDeLlenado
                                ?<div className="form-body msg-error"><span>¡por favor rellene los campos faltantes!</span></div>
                                : null
                                )}
                                <div className="form-body" style={{justifyContent:'center'}}>
                                
                                    <button type="button" className="form-input-next" onClick={()=>siguiente('formularioPaso1','formularioPaso2')}> siguiente </button>
                                
                                </div> 
                                <div className="form-body" style={{justifyContent:'center',padding:'1rem'}}>
                                    <span className="dots-Active">●</span>
                                    <span className="dots">●</span>
                                    <span className="dots">●</span>
                                    <span className="dots">●</span>
                                </div>
                            </div>

                        <div id="formularioPaso2" className="to-left contenedor-formulario ">
                                <div><span className="input-tittle-form" style={{color:'var(--colorPrimario)',fontWeight:'bold'}}>Domicilio:</span></div>
                                <div style={{marginLeft:'40px'}}>

                                    {datosUsuariosDomicilioArr.map(item=>(
                                        <div key={item.name}>
                                            <div ><span className="input-tittle-form">{item.titulo}</span></div>
                                            <input 
                                                type={item.type}
                                                name={item.name}
                                                className="input-form"
                                                placeholder={item.titulo}
                                                autoComplete={item.autoComplete}
                                                list={item.list}
                                                required={item.required}
                                                onChange={item.onChange}
                                            />
                                            <span id={`paso2${item.id}`}></span>
                                        </div>
                                    ))}
                                </div>
                                {datosUsuariosDosArr.map(item=>(
                                        <div key={item.name}>
                                            <div ><span className="input-tittle-form">{item.titulo}</span></div>
                                            <input 
                                                type={item.type}
                                                name={item.name}
                                                className="input-form"
                                                placeholder={item.titulo}
                                                autoComplete={item.autoComplete}
                                                list={item.list}
                                                required={item.required}
                                                onChange={item.onChange}
                                            />
                                            <span id={`paso2${item.id}`}></span>
                                        </div>
                                    ))}
                                
                            {(errorDeLlenado
                            ?<div className="form-body msg-error"><span>¡por favor rellene los campos faltantes!</span></div>
                            : null
                            )}

                            <div className="form-body" style={{justifyContent:'center'}}>
                                <button type="button" className="form-input-next form-input-back" onClick={()=>atras('formularioPaso1','formularioPaso2')}> Atrás </button>
                                <button type="button" className="form-input-next" onClick={()=>siguiente('formularioPaso2','formularioPaso3')}> siguiente </button>
                            </div>    
                            <div className="form-body" style={{justifyContent:'center',padding:'1rem'}}>
                                    <span className="dots">●</span>
                                    <span className="dots-Active">●</span>
                                    <span className="dots">●</span>
                                    <span className="dots">●</span>
                            </div> 
                            
                        </div>

                        <div id="formularioPaso3" className="to-left contenedor-formulario ">
                                <div><span className="input-tittle-form" style={{color:'var(--colorPrimario)',fontWeight:'bold'}}>Representante Legal:</span></div>
                                <div style={{marginLeft:'40px'}}>

                                    {datosUsuariosrepresentanteLegalArr.map(item=>(
                                        <div key={item.name}>
                                            <div ><span className="input-tittle-form">{item.titulo}</span></div>
                                            <input 
                                                type={item.type}
                                                name={item.name}
                                                className="input-form"
                                                placeholder={item.titulo}
                                                autoComplete={item.autoComplete}
                                                list={item.list}
                                                required={item.required}
                                                onChange={item.onChange}
                                            />
                                            <span id={`paso3${item.id}`}></span>
                                        </div>
                                    ))}
                                </div>

                                {(errorDeLlenado
                                ?<div className="form-body msg-error"><span>¡por favor rellene los campos faltantes!</span></div>
                                : null
                                )}

                                <div className="form-body" style={{justifyContent:'center'}}>
                                    <button type="button" className="form-input-next form-input-back" onClick={()=>atras('formularioPaso2','formularioPaso3')}> Atrás </button>
                                    <button type="button" className="form-input-next" onClick={()=>siguiente('formularioPaso3','formularioPaso4')}> siguiente </button>
                                </div>    
                                <div className="form-body" style={{justifyContent:'center',padding:'1rem'}}>
                                    <span className="dots">●</span>
                                    <span className="dots">●</span>
                                    <span className="dots-Active">●</span>
                                    <span className="dots">●</span>
                                </div> 
                        </div>

                        <div id="formularioPaso4" className="to-left contenedor-formulario">

                                <div><span className="input-tittle-form" style={{color:'var(--colorPrimario)',fontWeight:'bold'}}>Cuenta bancaria:</span></div>
                                <div style={{marginLeft:'40px'}}>

                                        {datosUsuarioscuentaBancariaArr.map(item=>(
                                            <div key={item.name}>
                                                <div ><span className="input-tittle-form">{item.titulo}</span></div>
                                                <input 
                                                    type={item.type}
                                                    name={item.name}
                                                    className="input-form"
                                                    placeholder={item.titulo}
                                                    autoComplete={item.autoComplete}
                                                    list={item.list}
                                                    required={item.required}
                                                    onChange={item.onChange}
                                                />
                                                <span id={`paso4${item.id}`}></span>
                                            </div>
                                        ))}
                                </div>

     
                                <div><span className="input-tittle-form" style={{color:'var(--colorPrimario)',fontWeight:'bold'}}>Beneficiario:</span></div>
                                <div style={{marginLeft:'40px'}}>

                                        {datosUsuariosbeneficiarioArr.map(item=>(
                                            <div key={item.name}>
                                                <div ><span className="input-tittle-form">{item.titulo}</span></div>
                                                <input 
                                                    type={item.type}
                                                    name={item.name}
                                                    className="input-form"
                                                    placeholder={item.titulo}
                                                    autoComplete={item.autoComplete}
                                                    list={item.list}
                                                    required={item.required}
                                                    onChange={item.onChange}
                                                />
                                                <span id={`paso4${item.id}`}></span>
                                            </div>
                                        ))}
                                </div>

                                {(errorDeLlenado
                                ?<div className="form-body msg-error"><span>¡por favor rellene los campos faltantes!</span></div>
                                : null
                                )}

                                <div className="form-body" style={{justifyContent:'center'}}>
                                    
                                    <button type="button" className="form-input-next form-input-back" onClick={()=>atras('formularioPaso3','formularioPaso4')}> Atrás </button>
                                    <button type="submit button" onClick={()=>enviar('formularioPaso4')} className="form-input-next">Enviar.</button>
                                </div>  
                                <div className="form-body" style={{justifyContent:'center',padding:'1rem'}}>
                                    <span className="dots">●</span>
                                    <span className="dots">●</span>
                                    <span className="dots">●</span>
                                    <span className="dots-Active">●</span>
                                </div> 

                        </div>

                    </div>
                
                </form>
            </div>  

            {/* DataList para ayuda a rellenar campos del formulario */}
                    {/* habitualmente se llenan de manera dinamica con una APIREST  */}
            <datalist id="paises-formularioList">
                    <option value="México"/>
                    <option value="Argentina"/>
                    <option value="Perú"/>
            </datalist>
            <datalist id="estados-formularioList">
                    <option value="Guerréro"/>
                    <option value="Jalisco"/>
                    <option value="Michoacan"/>
            </datalist>
            <datalist id="comprobanteDomicilo-formularioList">
                    <option value="Recibo de Luz"/>
                    <option value="Recibo de agua"/>
                    <option value="Recibo de gas"/>
                    <option value="Recibo de teléfono"/>
            </datalist>
            <datalist id="estadoCivil-formularioList">
                    <option value="Soltero/a"/>
                    <option value="Casado/a"/>
                    <option value="Divorciado/a"/>
                    <option value="Viudo/a"/>
            </datalist>
            <datalist id="genero-formularioList">
                    <option value="Hombre"/>
                    <option value="Mujer"/>
                    <option value="Otro"/>
            </datalist>
            <datalist id="documentoDeIdentificacion-formularioList">
                    <option value="INE"/>
                    <option value="Cartilla militar"/>
                    <option value="Licencia de conducir"/>
            </datalist>
            <datalist id="documentoDeIdentificacion-formularioList2">
                    <option value="INE"/>
                    <option value="Cartilla militar"/>
                    <option value="Licencia de conducir"/>
            </datalist>
        </>
    )
}

export default FormPerfilUsuario;
