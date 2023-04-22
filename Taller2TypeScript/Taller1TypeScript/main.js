import { data } from "./data.js";
var seriesView = document.getElementById('seriesView');
var average = document.getElementById('average');
var cards = document.getElementById('cards');
mostrarSeries(data);
average.innerHTML = "".concat(getSeriesAverage(data));
function mostrarSeries(series) {
    console.log('Despegar series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td style='color: #0DA8CC ' onclick=\"renderDescription(").concat(serie.id, ")\" >").concat(serie.name, "</td> \n                                <td>").concat(serie.platform, "</td>\n                                <td>").concat(serie.seasons, "</td>");
        var desElement = document.createElement("div");
        desElement.innerHTML = "<div class=\"card\" style=\"width: 18rem;\" id =\"".concat(serie.id, "\"><img src=\"").concat(serie.imagen, "\">\n                               <h5>").concat(serie.name, "</h5>\n                           <p> ").concat(serie.description, "</p>\n                               <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a></div>");
        seriesView.appendChild(trElement);
        cards.appendChild(desElement);
    });
}
function getSeriesAverage(series) {
    var totalSeries = 0;
    var promedio = 0;
    series.forEach(function (serie) { return totalSeries = serie.seasons + totalSeries; });
    promedio = totalSeries / series.length;
    return promedio;
}
function renderDescription(idSerie) {
    var cdescrip = document.getElementById("".concat(idSerie));
    cdescrip.classList.toggle("show");
}
