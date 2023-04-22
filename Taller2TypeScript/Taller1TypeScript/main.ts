import { Serie } from "./Serie.js";
import { data } from "./data.js";

let seriesView: HTMLElement = document.getElementById('seriesView')!;
let average: HTMLElement = document.getElementById('average')!;
let cards: HTMLElement = document.getElementById('cards')!;

mostrarSeries(data);

average.innerHTML = `${getSeriesAverage(data)}`

function mostrarSeries(series: Serie[]): void {
    console.log('Despegar series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td style='color: #0DA8CC ' onclick="renderDescription(${serie.id})" >${serie.name}</td> 
                                <td>${serie.platform}</td>
                                <td>${serie.seasons}</td>`;
        let desElement = document.createElement("div");
        desElement.innerHTML = `<div class="card" style="width: 18rem;" id ="${serie.id}"><img src="${serie.imagen}">
                               <h5>${serie.name}</h5>
                           <p> ${serie.description}</p>
                               <a href="${serie.link}">${serie.link}</a></div>`;
        seriesView.appendChild(trElement);
        cards.appendChild(desElement);
    });
}



function getSeriesAverage(series: Serie[]): number {
    let totalSeries: number = 0;
    let promedio: number = 0;
    series.forEach((serie) => totalSeries = serie.seasons + totalSeries);
    promedio = totalSeries / series.length;
    return promedio;
}


function renderDescription(idSerie: number) {
    var cdescrip = document.getElementById(`${idSerie}`)!;
    cdescrip.classList.toggle("show");

}
