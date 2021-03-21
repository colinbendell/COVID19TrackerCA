var totalCases = 0;
var totalCasesChange = 0;
var activeCases = 0;
var activeCasesChange = 0;
var critical = 0;
var criticalChange = 0;
var hospitalizations = 0;
var hospitalizationsChange = 0;
var totalVaccinations = 0;
var totalVaccinationsChange = 0;
var last5days = {};
var regions = [];

// Helper function to format numbers with commas
const formatter = new Intl.NumberFormat('en-CA');
function format(value) {
  const formattedValue = formatter.format(value);
  // this safely returns any values that aren't numbers, such a 'N/A'
  if (formattedValue === 'NaN') return value;
  // otherwise return the number as a string with commas in it
  return formattedValue;
}

function formatNumber(value) {
    if (Number.parseInt(value) > 1000) {
        if (value < 100*1000) {
            return format(Math.round(value/100)/10) + "k";
        }
        return format(Math.round(value/1000)) + "k";
    }
    if (Number.isFinite(value)) return value; //ensures that "0" properly returns
    return value || '';
}

// Controls the state of the application, sets up correct data information
window.addEventListener('DOMContentLoaded', async () => {

    // get and update header, and cases by province table footer
    const res = await fetch(api_url + "summary.json");
    const json = await res.json();
    var data = json.data[0];

    $("#activeCases").prop("checked", false);
    $("#criticalCases").prop("checked", false);

   // totalCases = data.total_cases;
   // totalCasesChange = data.change_cases;
  //  activeCases = data.total_cases - data.total_fatalities - data.total_recoveries;
   // activeCasesChange = data.change_cases - data.change_fatalities - data.change_recoveries;
   // critical = data.total_criticals;
   // criticalChange = data.change_criticals;
   //  hospitalizations = data.total_hospitalizations;
    // hospitalizationsChange = data.change_hospitalizations;
    const canadaPopulation = 38008005;

    const vaccinations = data.total_vaccinations;
    const peopleVaccinated = data.total_vaccinations - data.total_vaccinated;
    const vaccinationsChange = data.change_vaccinations;

    // update timestamp
    $("#updateTime").text("As of " + moment(res.last_updated).format("dddd [at] h:mm a [CST, ]"));
    $("#updateVax").text(format(data.total_vaccinations));
    $("#updateChangeVax").text(format(data.change_vaccinations));
    $("#updateTwoDoses").text(format(data.total_vaccinated));
    $("#updateVaxPpl").text(format(data.total_vaccinations - data.total_vaccinated));
    $("#updateTotalDel").text(format(data.total_vaccines_distributed));
    $("#updatePerAdm").text((((data.total_vaccinations) / (data.total_vaccines_distributed))*100).toFixed(1) + "%")
    
    // update header
    $(".summary-header-cases > h1").text(data.total_cases + " cases");
    $(".summary-header-cases > b").text(displayNewCases(data.change_cases));
    $(".summary-header-deaths > h1").text(data.total_fatalities + " deaths");
    $(".summary-header-deaths > b").text(displayNewCases(data.change_fatalities));
    $(".summary-header-hospitalized > h1").text(data.total_hospitalizations + " hospitalized");
    $(".summary-header-hospitalized > b").text(displayNewCases(data.change_hospitalizations));
    $(".summary-header-recoveries > h1").text(data.total_recoveries + " recoveries");
    $(".summary-header-recoveries > b").text(displayNewCases(data.change_recoveries));
    $(".summary-header-percentVaccinated > h1").text((((data.total_vaccinations - data.total_vaccinated) / 38008005)*100).toFixed(3) + "%");
    $(".summary-header-percentVaccinated > b").text("of the Canadian population has received at least one dose");
    $(".summary-header-vaccinations > h1").text(format(data.total_vaccinations) + " doses administered");
    $(".summary-header-vaccinations > b").text(displayNewCases(data.change_vaccinations));
    $(".summary-header-pplVac > h1").text(data.total_vaccinations);
    $(".summary-header-pplVac > b").text("people have received at least one dose");
    $(".summary-header-vaccineDelivered > h1").text(format(data.total_vaccines_distributed) + " doses delivered");
    $(".summary-header-vaccineDelivered > b").text((((data.total_vaccinations) / (data.total_vaccines_distributed))*100).toFixed(1) + "%" + " of doses delivered have been administered");

    // update province table footer
    const casesPer100000 = Math.floor(((100000 * data.total_cases) / canadaPopulation) * 100) / 100;
    const fatalitiesPer100000 = Math.floor(((100000 * data.total_fatalities) / canadaPopulation) * 100) / 100;
    const hospitalizationsPer100000 = Math.floor(((100000 * data.total_hospitalizations) / canadaPopulation) * 100) / 100;
    const criticalsPer100000 = Math.floor(((100000 * data.total_criticals) / canadaPopulation) * 100) / 100;
    const recoveriesPer100000 = Math.floor(((100000 * data.total_recoveries) / canadaPopulation) * 100) / 100;
    const testsPer100000 = Math.floor(((100000 * data.total_tests) / canadaPopulation) * 100) / 100;
    const vaccinationsPer100000 = Math.floor(((100000 * data.total_vaccinations) / canadaPopulation) * 100) / 100;

    $('#totalCasesCanada').attr("data-per-capita", casesPer100000);
    $('#totalFatalitiesCanada').attr("data-per-capita", fatalitiesPer100000);
    $('#totalHospitalizationsCanada').attr("data-per-capita", hospitalizationsPer100000);
    $('#totalCriticalsCanada').attr("data-per-capita", criticalsPer100000);
    $('#totalRecoveriesCanada').attr("data-per-capita", recoveriesPer100000);
    $('#totalTestsCanada').attr("data-per-capita", testsPer100000);
    $('#totalVaccinationsCanada').attr("data-per-capita", vaccinationsPer100000);
    $('#totalVaccinationsChangeCanada').attr("data-per-capita", vaccinationsPer100000);

    $('#totalCasesCanada').text(data.total_cases + (data.change_cases ? (" " + displayNewCases(data.change_cases)) : ""));
    $('#totalFatalitiesCanada').text(data.total_fatalities + (data.change_fatalities ? (" " + displayNewCases(data.change_fatalities)) : ""));
    $('#totalHospitalizationsCanada').text(data.total_hospitalizations + (data.change_hospitalizations ? (" " + displayNewCases(data.change_hospitalizations)) : ""));
    $('#totalCriticalsCanada').text(data.total_criticals + (data.change_criticals ? (" " + displayNewCases(data.change_criticals)) : ""));
    $('#totalRecoveriesCanada').text(data.total_recoveries + (data.change_recoveries ? (" " + displayNewCases(data.change_recoveries)) : ""));
    $('#totalTestsCanada').text(data.total_tests + (data.change_tests ? (" " + displayNewCases(data.change_tests)) : ""));

    // append data to row
    const d = { code: "CA", name: "Canada", population: canadaPopulation, total: data, daily: []}
    try {
        const res = await fetch(api_url + "reports.json");
        const resData = await res.json();
        d.daily = resData.data;
    }
    catch {
        //noop
    }
    $('#vaccinationsProvinceTableFooter').append(formatVaccineTable(d))

    $('#totalVaccinationsChangeCanada').text(data.change_vaccinations);
    $('#vaccinatedPerCanada').text(vaccinationsPer100000);
    $('#infectedPerCanada').text(casesPer100000);


    $("#perCapita").on('change', function () {
        var field = $(this).val();

        switch(field) {
            case "cases":
                $('#infectedPerCanada').text($('#totalCasesCanada').attr("data-per-capita"));
                $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
                    $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(2)").attr("data-per-capita"));
                });
                break;
            case "fatalities":
                $('#infectedPerCanada').text($('#totalFatalitiesCanada').attr("data-per-capita"));
                $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
                    $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(3)").attr("data-per-capita"));
                });
                break;
            case "hospitalizations":
                $('#infectedPerCanada').text($('#totalHospitalizationsCanada').attr("data-per-capita"));
                $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
                    $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(4)").attr("data-per-capita"));
                });
                break;
            case "criticals":
                $('#infectedPerCanada').text($('#totalCriticalsCanada').attr("data-per-capita"));
                $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
                    $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(5)").attr("data-per-capita"));
                });
                break;
            case "recoveries":
                $('#infectedPerCanada').text($('#totalRecoveriesCanada').attr("data-per-capita"));
                $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
                    $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(6)").attr("data-per-capita"));
                });
                break;
            case "tests":
                $('#infectedPerCanada').text($('#totalTestsCanada').attr("data-per-capita"));
                $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
                    $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(7)").attr("data-per-capita"));
                });
                break;
            case "vaccinations":
                $('#infectedPerCanada').text($('#totalVaccinationsCanada').attr("data-per-capita"));
                $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
                    $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(8)").attr("data-per-capita"));
                });
                break;
        }

        return true;
    });

    $("#activeCases").on('change', function () {
        var checked = $("#activeCases").prop("checked");
        if (checked) {
            $(".summary-header-cases > h1").text(activeCases + " active");
            $(".summary-header-cases > b").text(displayNewCases(activeCasesChange));
        }
        else {
            $(".summary-header-cases > h1").text(totalCases + " cases");
            $(".summary-header-cases > b").text(displayNewCases(totalCasesChange));
        }
    });

    $("#criticalCases").on('change', function () {
        var checked = $("#criticalCases").prop("checked");
        if (checked) {

            $(".summary-header-vaccinations > h1").text(format(peopleVaccinated) + " people");
            $(".summary-header-vaccinations > b").text("have received at least one dose");
            
        }
        else {
            $(".summary-header-vaccinations > h1").text(format(vaccinations) + " doses administered");
            $(".summary-header-vaccinations > b").text(displayNewCases(vaccinationsChange));
        }
    });

    $(".summary-arrow").click(function() {
        var container = $(this).next();
        container.empty();
        var field = $(this).attr("data-field");
        var data = last5days[field];
        if (data !== undefined) {
            data.forEach(item => {
                container.append("<div>" +
                "<span>" + item.label + "</span>" +
                "<span>" + item.total + " " +  (item.change !== null && item.change !== undefined ? displayNewCasesOlder(item.change) : "") + "</span>" +
                "</div>");
            });
        }
        container.toggle();
    });

    // draw map and cases by province graph and table
    const splitRes = await fetch(api_url + "split.json");
    const splitJson = await splitRes.json();
    drawMap(splitJson.data);
    barGraph(splitJson.data, "#provinceCasesChart");

    // const provRes = await fetch(api_url + "provinces.json");
    // const provJson = await provRes.json();
    // buildProvinceTable(splitJson.data, provJson);

    const fullDataRes = await fetch('https://colinbendell.github.io/covid19data.ca/data.json');
    const fullDataJson = await fullDataRes.json();
    const provData = Object.keys(fullDataJson).map(k => Object.assign(fullDataJson[k], {code: k}));
    await buildProvinceTable(provData.filter(v => v.code !== 'CA'));

    // draw new and cumulative cases graphs
    $.ajax({
        url: api_url + "reports.json",
        type: "GET",
    }).then(res => {
        fillNulls(res.data);
        last5days = getLast5Days(res.data, "total_");
        lineGraph(res.data, "#dailyCaseChart", false);
        lineGraph(res.data, "#cumulativeCaseChart", true);
    });

    // draw latest cases table
    $.ajax({
        url: api_url + "cases.json",
        type: "GET",
    }).then(res =>
    {

        var data = res.data;

        data.forEach(function(item) {
            item.province = provinceProperties(item.province) ? provinceProperties(item.province).name : item.province;
            item.date = moment(item.date).format('MM/DD/YY');
        });

        $('#individualCaseTable').dataTable({
            "order": [
                [0, "desc"]
            ],
            "data": data,
            "columns": [{
                    "data": "id"
                }, {
                    "data": "date"
                }, {
                    "data": "province"
                }, {
                    "data": "city"
                }, {
                    "data": "age"
                }, {
                    "data": "travel_history"
                }, {
                    "data": "confirmed_presumptive"
                },
                {
                    "data": "source",
                    "render": (data, type) => {
                        if (type === 'display') data = '<a href="' + data + '">Source</a>';

                        return data;
                    }
                }
            ]
        });
    })

    // get notice
    $.ajax({
        url: api_url + "vac.json",
        type: "GET",
    }).then(res => {
        var data = res;
        if (data && data.length) {
            $("#statisticsNotice").show();
            var note = data[0];
            $("#statisticsNotice .card-body").empty();
            $("#statisticsNotice .card-body").append("<h3>" + note.title + "</h3><p>" + note.description + "</p>");
        }
    });


    $(window).on("resize", function() {
        $('#totalCasesProvinceTable .regionTable').each((index, regionsRow) => {
            var container = $(regionsRow).prev();
            var firstCells = container.find("td");
            var regionsRows = $(regionsRow).find("tr");
            regionsRows.each((index, row) => {
                var secondCells = $(row).find("td");
                firstCells.each((index2, cell) => {
                    var newWidth = $(cell).width();
                    if (index2 === 0) newWidth += 2;
                    $(secondCells[index2]).width(newWidth);
                });
            });
        });
    });
});

function formatVaccineTable(data = {updated_at: 0, data_status: "Unknown", population: 0, total: { total_cases: 0, total_fatalities: 0, total_vaccinations: 0, total_vaccinated: 0, total_vaccines_distributed: 0, change_vaccinations: 0}, daily:[]}) {

    const changeVaccinations = data.total.change_vaccinations;
    const totalVaccinations = data.total.total_vaccinations || 0;
    const totalVaccinated = data.total.total_vaccinated;
    const totalCases = data.total.total_cases;
    const totalFatalities = data.total.total_fatalities;
    const population = data.population;

    const vaccinationsPer100000 = Math.floor(((100000 * totalVaccinations) / data.population) * 100) / 100;
    const vaccinationsPerCapita = Math.round(((totalVaccinations - (totalVaccinated || 0))/ data.population) * 1000) / 10;
    const casesPerCapita = Math.round((totalCases / data.population) * 1000) / 10;
    const deathsPerCase = Math.round((totalFatalities / totalCases) * 1000) / 10;
    const vaccinationsCompletePerCapita = Number.parseInt(totalVaccinated) > 0 ? Math.round((totalVaccinated / data.population) * 1000) / 10 : "N/A";
    const vaccinationsPercent = Math.floor(((100 * totalVaccinations) / data.total.total_vaccines_distributed) * 100) / 100;

    const updatedAt = data.updated_at ? (new Date(data.updated_at)).toLocaleString(): "N/A";

    const provinceStatus = data.data_status || "Unknown";
    const itemTotalVaccinated = Number.parseInt(totalVaccinated) > 0 ? totalVaccinated : "N/A";
    const itemVaccinesAvailable = data.total.total_vaccines_distributed - (totalVaccinations || 0);

    const weekVaccinations = data.daily.map(v => v.change_vaccinations).slice(-7);
    const weekVaccinationsAvg = Math.floor(weekVaccinations.reduce((c, v) => c + v) / weekVaccinations.length);
    const yesterdayVaccinations = data.daily[Math.max(0, data.daily?.length - 2)]?.change_vaccinations;
    const changeInVaccinationRate = changeVaccinations > 0 && yesterdayVaccinations > 0 ? Math.round((changeVaccinations - weekVaccinationsAvg) / weekVaccinationsAvg*100) : 0;
    const daysToFullVaccinations = Math.max(Math.round((data.population - (totalVaccinations - totalVaccinated || 0)) / weekVaccinationsAvg / 7 + 0.5),0);
    const daysToZeroVaccines = Math.max(Math.round(itemVaccinesAvailable / (weekVaccinationsAvg-0.001) + 0.5),0);

    let htmlName = data.name?.en || data.name;
    if (data.data_status) {
        htmlName = `<button onclick="toggleHealthRegions('${data.code}')"></button>` +
            `<span class='province-update-status status-${provinceStatus.toLowerCase().replace(/\s/gi, '-')}' data-toggle='tooltip' data-placement='bottom' data-html='true' title='` +
            `Status: <b>${provinceStatus}</b><br>` +
            `Last updated: <b>${updatedAt}</b><br>` +
            `Update expected by: <b>${expectedTime(data.code)}</b>'>` +
            "</span>" +
            `<span><a style='color:black;' href='provincevac.html?p=${data.code}'><span>${data.name?.en || data.name}</span></a> </span>`;
    }

    return `<tr class="vaccine ${data.code ? "province" : "healthregion"} ${data.code||data.province} " data-toggle="tooltip" data-placement="bottom" data-html="true" title="Total: ${format(totalVaccinations)}<br>Today: ${format(changeVaccinations)}<br>Yesterday: ${format(yesterdayVaccinations)}<br>Population: ${format(population)}">` +
    `<td>${htmlName}</td>` +
    `<td class='supply available'>${formatNumber(itemVaccinesAvailable)}` +
    `<span class="supply zero ${daysToZeroVaccines > 10 ? "bad" : daysToZeroVaccines > 7 ? "ok" : "good"}">${daysToZeroVaccines || ''}</span></td>` +
    `<td class="dose today" data-rate="${changeInVaccinationRate}">${formatNumber(changeVaccinations || weekVaccinationsAvg) || ''}</td>` +
    `<td class="dose total" >${formatNumber(totalVaccinations) || ''}</td>` +
    `<td class="dose one"><div class="progressbar" role="progressbar" aria-valuenow="${vaccinationsPerCapita}" data-value="${formatNumber(totalVaccinations - (totalVaccinated || 0))}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${vaccinationsPerCapita}%"></span></div></td>` +
    `<td class="dose full"><div class="progressbar" role="progressbar" aria-valuenow="${vaccinationsCompletePerCapita}" data-value="${formatNumber(totalVaccinated)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${vaccinationsCompletePerCapita}%"></span></div></td>` +
    `<td class="supply complete ${daysToFullVaccinations > 15 ? "bad" : daysToFullVaccinations > 5 ? "ok" : "good" }">${daysToFullVaccinations || ''}</td>` +
    `<td><div class="progressbar infection" role="progressbar" aria-valuenow="${casesPerCapita}" data-value="${formatNumber(totalCases)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(casesPerCapita/10*100, 100)}%"></span></div></td>` +
    `<td><div class="progressbar death" role="progressbar" aria-valuenow="${deathsPerCase}" data-value="${formatNumber(totalFatalities)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(deathsPerCase/4*100 || 0, 100)}%"></span></div></td>` +
    `</tr>`;
}
async function buildProvinceTable(data, provinceData) {
    const html = [];
    for (const item of data.sort((a,b) => b.total.total_vaccinations - a.total.total_vaccinations)) {
        item.source = provinceSources[item.province] || "https://covid19tracker.ca/sources.html";

        let d = {};
        if (item.daily) {
            d = item;
        }
        else {
            Object.assign(d, provinceData.filter(province => province.code === item.province)[0]);
            Object.assign(d, provinceProperties(item.province), {total: item, daily: []});
            try {
                const res = await fetch(api_url + item.province + ".json");
                const resData = await res.json();
                d.daily = resData.data.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
            }
            catch {
                //noop
            }
        }

        // append data to row
        html.push(formatVaccineTable(d))
        if (d.regions) {
            for (const region of d.regions) {
                console.log(region.total);
                console.log(region.daily[region.daily.length - 2]);
                if (!d.total?.change_cases) {
                    region.daily.pop();
                    region.total = region.daily[region.daily.length - 1];
                }
                console.log(region.total);
                html.push(formatVaccineTable(region));
            }
        }
    }
    $('#vaccinationsProvinceTable').append(html);
    $('[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip province-status-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
}
function toggleHealthRegions(province) {
    console.log(province);
    const nodes = document.getElementsByClassName(`vaccine ${province}`);
    for (const node of nodes) {
        node.classList.toggle("visible");
    }
}
