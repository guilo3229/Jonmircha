

// Todo lo que cuelga de window no hace falta ponerle la palabra window

// console.log("******Objeto URL (location)******")
// console.log(location)
// // location.origion me da la ruta, he estado trabajando con una extensiond e VSCODE con el open view server  nos da el servidor de la maquina y el puerto los ultimos 4 numeros, si abro el archivo directamente en fichero ya no abro un servidor sino desde el disco duro, desde el file no imprime el protocol,hostname y el port ya que no hay uns ervidor o host por medio
// console.log(location.origin)
// console.log(location.protocol)
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.port)
// console.log(location.href)
// console.log(location.hash)
// // El search muestra los aprametros pasados por la url
// console.log(location.search)
// // El pathname es el archivo que estoy consultando
// console.log(location.pathname)
// // El reload recarga ciclicamente y no para de ejecutarse
// // location.reload()

// console.log("******Objeto Historial (history)******")
// la longitud del lenght de history nos dice cuantas paginas has estado y quedan guardadas para ir o vovler con las flechitas de hacia delante o hacia atras
// console.log(history)
// console.log(history.length)
// console.log(history.back()) history.forward() te regresa yo te lelva a las paginas anteriores o predecesoras tantas como el numero que le pongas al parametro
// El history.go() hace lo mismo que los otros 2 pero de manera junta pondremos negativo para ir hacia detras y numeros positivos apra paginas hacia delante.(esto funcionara o no en base al historial de navegacion)
console.log("******Objeto Navegador (navigator)******")
console.log(navigator)
// navigator.conecction nos da informacion del tipo de la conexion del usuario
console.log(navigator.connection)
console.log(navigator.geolocation)
// los mediaDevices son los dispositivos como camaras o microfonos
console.log(navigator.mediaDevices)
// los mimeTypes son los tipos de formatos que acepta el navegador que estamos
console.log(navigator.mimeTypes)
// el navigator.online sirve apra saber si hemos perdido la conexion de linea
console.log(navigator.onLine)
// El serviceWorker es un APi que nos hace poder crear una paginaweb como una progressivewebsapps de escritorio
console.log(navigator.serviceWorker)
// ya sea el storage o localstorage es lo del almacenamiento
console.log(navigator.storage)
console.log(navigator.usb)
// el user agent nos da muchoa informacion del usuario qcdle navegador que se esta conectando a la aplicacion osea todo lo del sistema operativo etc
console.log(navigator.userAgent)