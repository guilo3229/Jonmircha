const validarEmail = (email="") =>{

if(email === "")return console.warn("No ha introducido ingun valor")
if (typeof email !== "string")return console.error(`El valor "${email}" introducido no es una cadena`)

const regex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

return (regex.test(email))
    ?console.info(`El email: ${email} es valido`)
    :console.info(`El email: ${email} no es valido`)

}


validarEmail("  caraculo@gmail")