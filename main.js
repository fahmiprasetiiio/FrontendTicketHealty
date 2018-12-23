function listRumkit(){
    // alert('cek cek');
    var xmlList = new XMLHttpRequest();
    xmlList.open("GET", "http://dev.farizdotid.com/api/instansi/semuainstansi");
    xmlList.onreadystatechange = function(){
        data = JSON.parse(this.response);
        
        pilrs = ``;
        data['instansi'].forEach(function(isi) {
            console.log(isi['jenis_instansi'])
            pilrs += `<a class='dropdown-item' href='#'>${isi['nama_instansi']}</a>`;
            
        });
        document.getElementById("pilrumkit").innerHTML = pilrs;
        document.getElementById("pilrumkit2").innerHTML = pilrs;
    }
    xmlList.send();


    var xmlList = new XMLHttpRequest();
    xmlList.open("GET", "http://dev.farizdotid.com/api/instansi/semuainstansi");
    xmlList.onreadystatechange = function(){
        data = JSON.parse(this.response);

        pilkota = ``;
        let kota = (data['instansi']);
        

        kota.forEach(function(isi){
            console.log(isi['nama_kabupaten'])
            pilkota += `<button class='dropdown-item' type='button' >${isi['nama_kabupaten']}</button>`;

        });
        document.getElementById("pilihkota").innerHTML = pilkota;
    }
    xmlList.send();
}