class StatItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set covidItem(item){
        this._covidItem = item;
        this.render()
    }
  
    render() {
        this.innerHTML = `
        <div class="card-stat">
            <div class="update-text">
            <h5>Pembaruan terakhir: </h5>
            <h5>${this._covidItem.lastUpdate}</h5>
            <span id="update"></span>
            </div>

            <div class="card total">
            <p>Positif </p>
            <p> ${this._covidItem.positif}</p>
            <span id="cases"></span>
            </div>

            <div class="card aktif">
            <p>Dirawat </p>
            <p> ${this._covidItem.dirawat}</p>
            <span id="active"></span>
            </div>

            <div class="card sembuh">
            <p>Sembuh </p>
            <p> ${this._covidItem.sembuh}</p>
            <span id="recovered"></span>
            </div>

            <div class="card meninggal">
            <p>Meninggal </p>
            <p> ${this._covidItem.meninggal}</p>
            <span id="death"></span>
            </div>
        </div>
        `;
    }
}
  
customElements.define("stat-item", StatItem);
