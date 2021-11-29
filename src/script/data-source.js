const DataSource = () => {
  fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia')

  .then((response) => {
    return response.json();
  })

  .then(data => {
      console.log(data)
          document.getElementById("update").innerHTML = `<h5>${data.lastUpdate}</h5>`; // lastUpdate
          document.getElementById("cases").innerHTML = `<h5>${data.positif}</h5>`;//jml kasus positif
          document.getElementById("active").innerHTML = `<h5>${data.dirawat}</h5>`;//jml kasus yg sedang aktif
          document.getElementById("death").innerHTML = `<h5>${data.meninggal}</h5>`;//kasus meninggal
          document.getElementById("recovered").innerHTML = `<h5>${data.sembuh}</h5>`;//kasus sembuh
         
  })
  .catch(error => {
      alert(error.message);
      console.log(error);
  })

};

export default DataSource;
