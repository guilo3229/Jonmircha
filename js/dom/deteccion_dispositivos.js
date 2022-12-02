const d = document,
n=navigator,
ua =n.userAgent

export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
    // creamos 3 objetos que nos va ayudar mucho cuando queremos hacer direcciones o redirecciones
    isMobile = {
        android:() => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipad|ipod/i),
        windows:() => ua.match(/windows phone/i),
        any:function(){
            return this.android()||this.ios()||this.windows();

        },

    },
    isDesktop = {
        linux:() => ua.match(/linux/i),
        mac: () => ua.match(/max os/i),
        windows:() =>ua.match(/windows nt/i),
        any:function(){
            return this.linux()||this.mac()||this.windows();

        },
    },
    isBrowser = {
        chrome:()=> ua.match(/chrome/i),
        safari:()=> ua.match(/safari/i),
        firefox:()=> ua.match(/firefox/i),
        opera:()=> ua.match(/opera|opera mini/i),
        ie:() => ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any:function(){
            return this.chrome()||
                this.edge()||
                this.firefox()||
                this.opera()||
                this.ie()||
                this.safari()
               
            
        }

    };
    
    console.log(isMobile.any())
    console.log(isDesktop.any())
    console.log(isMobile.any())
    $id.innerHTML =   `
    <ul>
    <li>User Agent<b>${ua} </b></li>
    
    <li>Plataforma:<b>${isMobile.any()?isMobile.any():isDesktop.any()} </b></li>
    
    <li>Navegador: <b>${isBrowser.any()} </b></li>
    </ul>
    
    
    `
// Como ahcer contenido exlcusivo se ahria con validaciones del if:
if(isBrowser.chrome()){
    $id.innerHTML += `<p>
    <mark>Este contenido solo se ve en pep</mark>
</p>`;}
// con edge no funciona muy bien ya que usa el motor de chrome
if(isBrowser.firefox()){
    $id.innerHTML += `<p>
    <mark>Este contenido solo se ve en firefox</mark>
</p>`;
}
if(isMobile.android())
{
    window.location.href="https://jonmircha.com"
}
}