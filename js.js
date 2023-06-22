const galeriCons = document.querySelector('.galeri-con')
const galeriContiCons = document.querySelector('.galeri-lon')
const galeriCon = ['previous', 'next']
const galeriFotoGambar = document.querySelectorAll('.galeri-fotogambar')

class Carol {

constructor(con, fotogambar, lon) {
    this.carolCon = con;
    this.carolFotoGambar = [...fotogambar];
    this.carolLon = lon;
    
}

updateGaleri() {
    this.carolFotoGambar.forEach(el => {
        el.classList.remove('galeri-fotogambar-1');
        el.classList.remove('galeri-fotogambar-2');
        el.classList.remove('galeri-fotogambar-3');
        el.classList.remove('galeri-fotogambar-4');
        el.classList.remove('galeri-fotogambar-5');
    });

    this.carolFotoGambar.slice(0 , 5).forEach((el , i) => {
        el.classList.add(`galeri-fotogambar-${i+1}`);
    });
}

setCarolState(direction){
    if (direction.className == 'galeri-lon-previous'){
        this.carolFotoGambar.unshift(this.carolFotoGambar.pop());
    }else{
        this.carolFotoGambar.push( this.carolFotoGambar.shift());
    }
    this.updateGaleri();
}

setLon() {
    this.carolLon.forEach(control => {
        galeriContiCons.appendChild(document.createElement('button')).className = `galeri-lon-${control}`;
        document.querySelector(`.galeri-lon-${control}`).innerText = control;
    });
}

useLon() {
    const triggers = [...galeriContiCons.childNodes];
    triggers.forEach(control => {
        control.addEventListener('click', e => {e.preventDefault();
        this.setCarolState(control)
        });
    });
}

}

const exampleCarol = new Carol(galeriCons, galeriFotoGambar, galeriCon);

exampleCarol.setLon();
exampleCarol.useLon();
