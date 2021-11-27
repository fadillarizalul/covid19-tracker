const DataSource = () => {
    function getApi(){
    
        const xhr = new XMLHttpRequest();
    
        xhr.open('GET', 'https://apicovid19indonesia-v2.vercel.app/api/indonesia', true);
    
        xhr.onload = function(){
            if(this.status === 200){
    
                const response = JSON.parse(this.responseText);
                
                let lastUpdate = '';
                let cases = '';
                let active = '';
                let recovered = '';
                let death = '';

                        lastUpdate += `<h3>${response.lastUpdate.value}</h3>`
                        cases += `<h3>${response.positif.value}</h3>`
                        active += `<h3>${response.dirawat.value}</h3>`
                        recovered += `<h3>${response.sembuh.value}</h3>`
                        death += `<h3>${response.meninggal.value}</h3>`
                document.getElementById("update").innerHTML = lastUpdate; // lastUpdate
                document.getElementById("cases").innerHTML = cases;//jml kasus positif
                document.getElementById("active").innerHTML = active;//jml kasus yg sedang aktif
                document.getElementById("recovered").innerHTML = recovered;//kasus sembuh
                document.getElementById("death").innerHTML = death;//kasus meninggal       
            }
        }
        xhr.send();
    }

    setInterval(getApi, 1000);
}

export default DataSource;
