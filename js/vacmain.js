// var totalCases = 0;
// var totalCasesChange = 0;
// var activeCases = 0;
// var activeCasesChange = 0;
// var critical = 0;
// var criticalChange = 0;
// var hospitalizations = 0;
// var hospitalizationsChange = 0;
// var totalVaccinations = 0;
// var totalVaccinationsChange = 0;
// var last5days = {};
// var regions = [];

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
    // const res = await fetch(api_url + "summary.json");
    // const json = await res.json();
    // var data = json.data[0];

    // $("#activeCases").prop("checked", false);
    // $("#criticalCases").prop("checked", false);

   // totalCases = data.total_cases;
   // totalCasesChange = data.change_cases;
  //  activeCases = data.total_cases - data.total_fatalities - data.total_recoveries;
   // activeCasesChange = data.change_cases - data.change_fatalities - data.change_recoveries;
   // critical = data.total_criticals;
   // criticalChange = data.change_criticals;
   //  hospitalizations = data.total_hospitalizations;
    // hospitalizationsChange = data.change_hospitalizations;
    const canadaPopulation = 38008005;

    // const vaccinations = data.total_vaccinations;
    // const peopleVaccinated = data.total_vaccinations - data.total_vaccinated;
    // const vaccinationsChange = data.change_vaccinations;
    //
    // // update timestamp
    // $("#updateTime").text("As of " + moment(res.last_updated).format("dddd [at] h:mm a [CST, ]"));
    // $("#updateVax").text(format(data.total_vaccinations));
    // $("#updateChangeVax").text(format(data.change_vaccinations));
    // $("#updateTwoDoses").text(format(data.total_vaccinated));
    // $("#updateVaxPpl").text(format(data.total_vaccinations - data.total_vaccinated));
    // $("#updateTotalDel").text(format(data.total_vaccines_distributed));
    // $("#updatePerAdm").text((((data.total_vaccinations) / (data.total_vaccines_distributed))*100).toFixed(1) + "%")
    //
    // // update header
    // $(".summary-header-cases > h1").text(data.total_cases + " cases");
    // $(".summary-header-cases > b").text(displayNewCases(data.change_cases));
    // $(".summary-header-deaths > h1").text(data.total_fatalities + " deaths");
    // $(".summary-header-deaths > b").text(displayNewCases(data.change_fatalities));
    // $(".summary-header-hospitalized > h1").text(data.total_hospitalizations + " hospitalized");
    // $(".summary-header-hospitalized > b").text(displayNewCases(data.change_hospitalizations));
    // $(".summary-header-recoveries > h1").text(data.total_recoveries + " recoveries");
    // $(".summary-header-recoveries > b").text(displayNewCases(data.change_recoveries));
    // $(".summary-header-percentVaccinated > h1").text((((data.total_vaccinations - data.total_vaccinated) / 38008005)*100).toFixed(3) + "%");
    // $(".summary-header-percentVaccinated > b").text("of the Canadian population has received at least one dose");
    // $(".summary-header-vaccinations > h1").text(format(data.total_vaccinations) + " doses administered");
    // $(".summary-header-vaccinations > b").text(displayNewCases(data.change_vaccinations));
    // $(".summary-header-pplVac > h1").text(data.total_vaccinations);
    // $(".summary-header-pplVac > b").text("people have received at least one dose");
    // $(".summary-header-vaccineDelivered > h1").text(format(data.total_vaccines_distributed) + " doses delivered");
    // $(".summary-header-vaccineDelivered > b").text((((data.total_vaccinations) / (data.total_vaccines_distributed))*100).toFixed(1) + "%" + " of doses delivered have been administered");
    //
    // // update province table footer
    // const casesPer100000 = Math.floor(((100000 * data.total_cases) / canadaPopulation) * 100) / 100;
    // const fatalitiesPer100000 = Math.floor(((100000 * data.total_fatalities) / canadaPopulation) * 100) / 100;
    // const hospitalizationsPer100000 = Math.floor(((100000 * data.total_hospitalizations) / canadaPopulation) * 100) / 100;
    // const criticalsPer100000 = Math.floor(((100000 * data.total_criticals) / canadaPopulation) * 100) / 100;
    // const recoveriesPer100000 = Math.floor(((100000 * data.total_recoveries) / canadaPopulation) * 100) / 100;
    // const testsPer100000 = Math.floor(((100000 * data.total_tests) / canadaPopulation) * 100) / 100;
    // const vaccinationsPer100000 = Math.floor(((100000 * data.total_vaccinations) / canadaPopulation) * 100) / 100;
    //
    // $('#totalCasesCanada').attr("data-per-capita", casesPer100000);
    // $('#totalFatalitiesCanada').attr("data-per-capita", fatalitiesPer100000);
    // $('#totalHospitalizationsCanada').attr("data-per-capita", hospitalizationsPer100000);
    // $('#totalCriticalsCanada').attr("data-per-capita", criticalsPer100000);
    // $('#totalRecoveriesCanada').attr("data-per-capita", recoveriesPer100000);
    // $('#totalTestsCanada').attr("data-per-capita", testsPer100000);
    // $('#totalVaccinationsCanada').attr("data-per-capita", vaccinationsPer100000);
    // $('#totalVaccinationsChangeCanada').attr("data-per-capita", vaccinationsPer100000);
    //
    // $('#totalCasesCanada').text(data.total_cases + (data.change_cases ? (" " + displayNewCases(data.change_cases)) : ""));
    // $('#totalFatalitiesCanada').text(data.total_fatalities + (data.change_fatalities ? (" " + displayNewCases(data.change_fatalities)) : ""));
    // $('#totalHospitalizationsCanada').text(data.total_hospitalizations + (data.change_hospitalizations ? (" " + displayNewCases(data.change_hospitalizations)) : ""));
    // $('#totalCriticalsCanada').text(data.total_criticals + (data.change_criticals ? (" " + displayNewCases(data.change_criticals)) : ""));
    // $('#totalRecoveriesCanada').text(data.total_recoveries + (data.change_recoveries ? (" " + displayNewCases(data.change_recoveries)) : ""));
    // $('#totalTestsCanada').text(data.total_tests + (data.change_tests ? (" " + displayNewCases(data.change_tests)) : ""));

    // append data to row
    // const d = { code: "CA", name: "Canada", population: canadaPopulation, total: data, daily: []}
    // try {
    //     const res = await fetch(api_url + "reports.json");
    //     const resData = await res.json();
    //     d.daily = resData.data;
    // }
    // catch {
    //     //noop
    // }
    // $('#vaccinationsProvinceTableFooter').append(formatVaccineTable(d))
    // $('#casesProvinceTableFooter').append(formatVaccineTable(d, false))
    //
    // $('#totalVaccinationsChangeCanada').text(data.change_vaccinations);
    // $('#vaccinatedPerCanada').text(vaccinationsPer100000);
    // $('#infectedPerCanada').text(casesPer100000);


    // $("#perCapita").on('change', function () {
    //     var field = $(this).val();
    //
    //     switch(field) {
    //         case "cases":
    //             $('#infectedPerCanada').text($('#totalCasesCanada').attr("data-per-capita"));
    //             $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
    //                 $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(2)").attr("data-per-capita"));
    //             });
    //             break;
    //         case "fatalities":
    //             $('#infectedPerCanada').text($('#totalFatalitiesCanada').attr("data-per-capita"));
    //             $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
    //                 $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(3)").attr("data-per-capita"));
    //             });
    //             break;
    //         case "hospitalizations":
    //             $('#infectedPerCanada').text($('#totalHospitalizationsCanada').attr("data-per-capita"));
    //             $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
    //                 $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(4)").attr("data-per-capita"));
    //             });
    //             break;
    //         case "criticals":
    //             $('#infectedPerCanada').text($('#totalCriticalsCanada').attr("data-per-capita"));
    //             $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
    //                 $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(5)").attr("data-per-capita"));
    //             });
    //             break;
    //         case "recoveries":
    //             $('#infectedPerCanada').text($('#totalRecoveriesCanada').attr("data-per-capita"));
    //             $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
    //                 $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(6)").attr("data-per-capita"));
    //             });
    //             break;
    //         case "tests":
    //             $('#infectedPerCanada').text($('#totalTestsCanada').attr("data-per-capita"));
    //             $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
    //                 $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(7)").attr("data-per-capita"));
    //             });
    //             break;
    //         case "vaccinations":
    //             $('#infectedPerCanada').text($('#totalVaccinationsCanada').attr("data-per-capita"));
    //             $('#totalCasesProvinceTable tr.provinceRow').each((index, item) => {
    //                 $(item).find("td:nth-child(9)").text($(item).find("td:nth-child(8)").attr("data-per-capita"));
    //             });
    //             break;
    //     }
    //
    //     return true;
    // });
    //
    // $("#activeCases").on('change', function () {
    //     var checked = $("#activeCases").prop("checked");
    //     if (checked) {
    //         $(".summary-header-cases > h1").text(activeCases + " active");
    //         $(".summary-header-cases > b").text(displayNewCases(activeCasesChange));
    //     }
    //     else {
    //         $(".summary-header-cases > h1").text(totalCases + " cases");
    //         $(".summary-header-cases > b").text(displayNewCases(totalCasesChange));
    //     }
    // });
    //
    // $("#criticalCases").on('change', function () {
    //     var checked = $("#criticalCases").prop("checked");
    //     if (checked) {
    //
    //         $(".summary-header-vaccinations > h1").text(format(peopleVaccinated) + " people");
    //         $(".summary-header-vaccinations > b").text("have received at least one dose");
    //
    //     }
    //     else {
    //         $(".summary-header-vaccinations > h1").text(format(vaccinations) + " doses administered");
    //         $(".summary-header-vaccinations > b").text(displayNewCases(vaccinationsChange));
    //     }
    // });

    // $(".summary-arrow").click(function() {
    //     var container = $(this).next();
    //     container.empty();
    //     var field = $(this).attr("data-field");
    //     var data = last5days[field];
    //     if (data !== undefined) {
    //         data.forEach(item => {
    //             container.append("<div>" +
    //             "<span>" + item.label + "</span>" +
    //             "<span>" + item.total + " " +  (item.change !== null && item.change !== undefined ? displayNewCasesOlder(item.change) : "") + "</span>" +
    //             "</div>");
    //         });
    //     }
    //     container.toggle();
    // });

    // draw map and cases by province graph and table
    // const splitRes = await fetch(api_url + "split.json");
    // const splitJson = await splitRes.json();
    // drawMap(splitJson.data);
    // barGraph(splitJson.data, "#provinceCasesChart");

    // const provRes = await fetch(api_url + "provinces.json");
    // const provJson = await provRes.json();
    // buildProvinceTable(splitJson.data, provJson);

    const fullDataRes = await fetch('https://colinbendell.github.io/covid19data.ca/data.json');
    const fullDataJson = await fullDataRes.json();
    const provData = Object.keys(fullDataJson).map(k => Object.assign(fullDataJson[k], {code: k}));
    await buildProvinceTable(provData.filter(v => v.code !== 'CA'));

    const canada = provData.filter(v => v.code === 'CA')[0]
    document.getElementById("vaccinationsProvinceTableFooter").innerHTML = formatVaccineTable(canada);
    document.getElementById("casesProvinceTableFooter").innerHTML = formatVaccineTable(canada, false);

    // draw new and cumulative cases graphs
    // $.ajax({
    //     url: api_url + "reports.json",
    //     type: "GET",
    // }).then(res => {
    //     fillNulls(res.data);
    //     last5days = getLast5Days(res.data, "total_");
    //     lineGraph(res.data, "#dailyCaseChart", false);
    //     lineGraph(res.data, "#cumulativeCaseChart", true);
    // });

    // // draw latest cases table
    // $.ajax({
    //     url: api_url + "cases.json",
    //     type: "GET",
    // }).then(res =>
    // {
    //
    //     var data = res.data;
    //
    //     data.forEach(function(item) {
    //         item.province = provinceProperties(item.province) ? provinceProperties(item.province).name : item.province;
    //         item.date = moment(item.date).format('MM/DD/YY');
    //     });
    //
    //     $('#individualCaseTable').dataTable({
    //         "order": [
    //             [0, "desc"]
    //         ],
    //         "data": data,
    //         "columns": [{
    //                 "data": "id"
    //             }, {
    //                 "data": "date"
    //             }, {
    //                 "data": "province"
    //             }, {
    //                 "data": "city"
    //             }, {
    //                 "data": "age"
    //             }, {
    //                 "data": "travel_history"
    //             }, {
    //                 "data": "confirmed_presumptive"
    //             },
    //             {
    //                 "data": "source",
    //                 "render": (data, type) => {
    //                     if (type === 'display') data = '<a href="' + data + '">Source</a>';
    //
    //                     return data;
    //                 }
    //             }
    //         ]
    //     });
    // })

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

    //
    // $(window).on("resize", function() {
    //     $('#totalCasesProvinceTable .regionTable').each((index, regionsRow) => {
    //         var container = $(regionsRow).prev();
    //         var firstCells = container.find("td");
    //         var regionsRows = $(regionsRow).find("tr");
    //         regionsRows.each((index, row) => {
    //             var secondCells = $(row).find("td");
    //             firstCells.each((index2, cell) => {
    //                 var newWidth = $(cell).width();
    //                 if (index2 === 0) newWidth += 2;
    //                 $(secondCells[index2]).width(newWidth);
    //             });
    //         });
    //     });
    // });
});

function chunkArray(myArray, chunkSize){
    const results = [];

    while (myArray.length) {
        results.unshift(myArray.splice(-chunkSize));
    }

    return results;
}

function formatVaccineTable(data = {updated_at: 0, data_status: "Unknown", population: 0, total: { total_cases: 0, total_fatalities: 0, total_vaccinations: 0, total_vaccinated: 0, total_vaccines_distributed: 0, change_vaccinations: 0}, daily:[]}, vaccineTable = true) {

    const changeVaccinations = data.total.change_vaccinations;
    const totalVaccinations = data.total.total_vaccinations || 0;
    const totalVaccinated = data.total.total_vaccinated || 0;
    const totalCases = data.total.total_cases;
    const totalFatalities = data.total.total_fatalities;
    const population = data.population;
    const totalRecoveries = data.total.total_recoveries || 0;
    const currentChangeCases = data.total.change_cases;
    const currentChangeTests = data.total.change_tests || 0;
    const currentActive = totalCases - totalFatalities - totalRecoveries;
    const currentHospitalized = data.total.total_hospitalizations || 'N/A';

    const vaccinationsPer100000 = Math.floor(((100000 * totalVaccinations) / data.population) * 100) / 100;
    const vaccinationsPerCapita = Math.round(((totalVaccinations - (totalVaccinated || 0))/ data.population) * 1000) / 10;
    const casesPerCapita = Math.round((totalCases / data.population) * 1000) / 10;
    const deathsPerCase = Math.round((totalFatalities / totalCases) * 1000) / 10;
    const activePer100k = currentActive > 0 ? Math.round(currentActive / population * 100*1000) : 0;
    const hospitalizedPer100k = currentHospitalized >= 0 ? Math.round(currentHospitalized / population * 1000*1000) : "N/A";
    const vaccinationsCompletePerCapita = totalVaccinated > 0 ? Math.round((totalVaccinated / data.population) * 1000) / 10 : "N/A";
    const vaccinationsPercent = Math.floor(((100 * totalVaccinations) / data.total.total_vaccines_distributed) * 100) / 100;
    const currentPositivityRate = currentChangeTests > 0 ? Math.round(currentChangeCases / currentChangeTests * 1000) / 10 : "N/A";

    const updatedAt = data.updated_at ? (new Date(data.updated_at)).toLocaleString(): "N/A";

    const provinceStatus = data.data_status || "Unknown";
    const itemTotalVaccinated = Number.parseInt(totalVaccinated) > 0 ? totalVaccinated : "N/A";
    const itemVaccinesAvailable = data.total.total_vaccines_distributed - (totalVaccinations || 0);

    const lastMonth = chunkArray(data.daily.slice(-8*7 -1, -1), 7);
    const lastWeek = data.daily.slice(-8, -1);
    const yesterday = lastWeek.slice(-1)[0];
    const weekVaccinations = lastWeek.map(v => v.change_vaccinations || 0);
    const weekVaccinationsAvg = Math.floor(weekVaccinations.reduce((c, v) => c + v) / lastWeek.length);
    const yesterdayVaccinations = yesterday?.change_vaccinations;
    const changeInVaccinationRate = changeVaccinations > 0 && yesterdayVaccinations > 0 ? Math.round((changeVaccinations - weekVaccinationsAvg) / weekVaccinationsAvg*100) : 0;
    const daysToFullVaccinations = weekVaccinationsAvg > 0 ? Math.max(Math.round((data.population - (totalVaccinations - totalVaccinated || 0)) / weekVaccinationsAvg / 7 + 0.5),0) : 0;
    const daysToZeroVaccines = Math.max(Math.round(itemVaccinesAvailable / (weekVaccinationsAvg-0.001) + 0.5),0);
    const weekActive = lastWeek.map(v => (v.total_cases || 0) - (v.total_fatalities || 0) - (v.total_recoveries || 0));
    const weekActiveAvg = Math.floor(weekActive.reduce((c, v) => c + v) / lastWeek.length);
    const changeInActiveRate =  Math.round((currentActive - weekActiveAvg) / (weekActiveAvg+0.001)*100);
    const changeActive = currentActive - weekActive.slice(-1)[0];

    let htmlName = data.name?.en || data.name;
    if (data.data_status) {
        htmlName = `<button onclick="toggleHealthRegions('${data.code}')"></button>` +
            `<span class='province-update-status status-${provinceStatus.toLowerCase().replace(/\s/gi, '-')}' data-toggle='tooltiprow' data-placement='bottom' data-html='true' title='` +
            `Status: <b>${provinceStatus}</b><br>` +
            `Last updated: <b>${updatedAt}</b><br>` +
            `Update expected by: <b>${expectedTime(data.code)}</b>'>` +
            "</span>" +
            `<span><a style='color:black;' href='provincevac.html?p=${data.code}'><span>${data.name?.en || data.name}</span></a> </span>`;
    }

    if (vaccineTable) {
        const maxDose = Math.max(...lastWeek.flat().map(d => d.change_vaccinations || 0), changeVaccinations || 0, 0);

        const weeklyDoseHistory = [];
        weeklyDoseHistory.push(`<div><table class="charts-css column"><tbody><tr>`);
        for (const item of lastMonth.slice(0, -1)) {
            const avgItem = Math.round(item.map(i => i.change_vaccinations).reduce((p, c) => p + c) / item.length + 0.5)
            const doseHeight = (maxDose > 0 ? Math.round(avgItem / maxDose * 100) : 0) || 5;
            weeklyDoseHistory.push(`<td style="--size:calc(${doseHeight}/100);"><span class="tooltip">Week of ${item[0].date}: ${formatNumber(avgItem)}</span></td>`);
        }
        weeklyDoseHistory.push(`</tr><tr>`);

        for (const item of lastWeek.slice(0)) {
            const doseValue = item.change_vaccinations || 0;
            const doseHeight = (maxDose > 0 ? Math.round(doseValue / maxDose * 100) : 0) || 5;
            weeklyDoseHistory.push(`<td style="--size:calc(${doseHeight}/100);"><span class="tooltip">${item.date}: ${formatNumber(doseValue)}</span> </td>`);
        }
        const doseHeight = (maxDose > 0 ? Math.round((changeVaccinations || 0) / maxDose * 100) : 0) || 5;
        weeklyDoseHistory.push(`<td style="--size:calc(${doseHeight}/100);"><span class="tooltip">Today: ${formatNumber(changeVaccinations)}</span> </td>`);
        weeklyDoseHistory.push(`</tr></tbody></table></div>`);

        return `<tr class="vaccine ${data.code ? "province" : "healthregion"} ${data.code||data.province} " data-toggle="tooltiprow" data-placement="bottom" data-html="true" title="Total: ${format(totalVaccinations)}<br>Today: ${format(changeVaccinations)}<br>Yesterday: ${format(yesterdayVaccinations)}<br>Population: ${format(population)}">` +
            `<td>${htmlName}</td>` +
            `<td class="dose history">${weeklyDoseHistory.join('')}</td>` +
            `<td class="dose today" data-rate="${changeInVaccinationRate}">${formatNumber(changeVaccinations || weekVaccinationsAvg) || ''}</td>` +
            `<td class="supply complete ${daysToFullVaccinations > 15 ? "bad" : daysToFullVaccinations > 5 ? "ok" : "good" }">${daysToFullVaccinations || ''}</td>` +
            `<td class="dose total" >${formatNumber(totalVaccinations) || ''}</td>` +
            `<td class="dose one"><div class="progressbar" role="progressbar" aria-valuenow="${vaccinationsPerCapita}" data-value="${formatNumber(totalVaccinations - (totalVaccinated || 0))}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${vaccinationsPerCapita}%"></span></div></td>` +
            `<td class="dose full"><div class="progressbar" role="progressbar" aria-valuenow="${vaccinationsCompletePerCapita}" data-value="${formatNumber(totalVaccinated)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${vaccinationsCompletePerCapita}%"></span></div></td>` +
            `<td><div class="progressbar infection" role="progressbar" aria-valuenow="${casesPerCapita}" data-value="${formatNumber(totalCases)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(casesPerCapita/10*100, 100)}%"></span></div></td>` +
            `<td class='supply available'>${formatNumber(itemVaccinesAvailable)}` +
            `<span class="supply zero ${daysToZeroVaccines > 10 ? "bad" : daysToZeroVaccines > 7 ? "ok" : "good"}">${daysToZeroVaccines || ''}</span></td>` +
            // `<td><div class="progressbar death" role="progressbar" aria-valuenow="${deathsPerCase}" data-value="${formatNumber(totalFatalities)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(deathsPerCase/4*100 || 0, 100)}%"></span></div></td>` +
            // `<td class="activecases today" data-rate="${changeInActiveRate}">${formatNumber(changeActive)}</td>` +
            // `<td><div class="progressbar activecases ${activePer100k < 10 ? "green" : activePer100k < 25 ? "yellow" : activePer100k < 40 ? "orange" : activePer100k < 100 ? "red" : "black"}" aria-valuenow="${activePer100k}" data-value="${formatNumber(currentActive)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(activePer100k/(activePer100k < 10 ? 10 : activePer100k < 25 ? 25 : activePer100k < 40 ? 40 : activePer100k < 100 ? 100 : 150)*100, 100)}%"></span></div></td>` +
            `</tr>`;
    }
    else {
        const caseMax = Math.max(...lastMonth.flat().map(d => d.change_cases || 0), currentChangeCases || 0, 1);
        const activeMax = Math.max(...lastMonth.flat().map(v => (v.total_cases || 0) - (v.total_fatalities || 0) - (v.total_recoveries || 0)), currentActive || 0, 1);

        const weeklyCasesHistory = [];
        const weeklyActiveHistory = [];
        weeklyCasesHistory.push(`<div><table class="charts-css column"><tbody><tr>`);
        weeklyActiveHistory.push(`<div><table class="charts-css column"><tbody><tr>`);
        for (const item of lastMonth.slice(0, -1)) {
            const caseAvg = Math.round(item.map(i => i.change_cases).reduce((p, c) => p + c) / item.length + 0.5);
            const activeAvg = Math.round(item.map(v => (v.total_cases || 0) - (v.total_fatalities || 0) - (v.total_recoveries || 0)).reduce((p, c) => p + c) / item.length + 0.5);
            const caseHeight = (caseMax > 0 ? Math.round(caseAvg / caseMax * 100) : 0) || 5;
            const activeHeight = (activeMax > 0 ? Math.round(activeAvg / activeMax * 100) : 0) || 5;
            weeklyCasesHistory.push(`<td style="--size:calc(${caseHeight}/100);"><span class="tooltip">Week of ${item[0].date}: ${formatNumber(caseAvg)}</span></td>`);
            weeklyActiveHistory.push(`<td style="--size:calc(${activeHeight}/100);"><span class="tooltip">Week of ${item[0].date}: ${formatNumber(activeAvg)}</span></td>`);
        }
        weeklyCasesHistory.push(`</tr><tr>`);
        weeklyActiveHistory.push(`</tr><tr>`);

        for (const item of lastWeek.slice(0)) {
            const caseValue = item.change_cases || 0;
            const activeValue = (item.total_cases || 0) - (item.total_fatalities || 0) - (item.total_recoveries || 0);
            const caseHeight = (caseMax > 0 ? Math.round(caseValue / caseMax * 100) : 0) || 5;
            const activeHeight = (activeMax > 0 ? Math.round(activeValue / activeMax * 100) : 0) || 5;
            weeklyCasesHistory.push(`<td style="--size:calc(${caseHeight}/100);"><span class="tooltip">${item.date}: ${formatNumber(caseValue)}</span> </td>`);
            weeklyActiveHistory.push(`<td style="--size:calc(${activeHeight}/100);"><span class="tooltip">${item.date}: ${formatNumber(activeValue)}</span> </td>`);
        }
        const caseHeight = (caseMax > 0 ? Math.round((currentChangeCases || 0) / caseMax * 100) : 0) || 5;
        const activeHeight = (activeMax > 0 ? Math.round((currentActive || 0) / activeMax * 100) : 0) || 5;
        weeklyCasesHistory.push(`<td style="--size:calc(${caseHeight}/100);"><span class="tooltip">Today: ${formatNumber(currentChangeCases)}</span> </td>`);
        weeklyCasesHistory.push(`</tr></tbody></table></div>`);

        weeklyActiveHistory.push(`<td style="--size:calc(${activeHeight}/100);"><span class="tooltip">Today: ${formatNumber(currentActive)}</span> </td>`);
        weeklyActiveHistory.push(`</tr></tbody></table></div>`);

        return `<tr class="vaccine ${data.code ? "province" : "healthregion"} ${data.code||data.province} " data-toggle="tooltiprow" data-placement="bottom" data-html="true" title="Total: ${format(totalCases)}<br>Today: ${format(currentChangeCases)}<br>Yesterday: ${format(yesterday.change_cases)}<br>Population: ${format(caseMax)}">` +
            `<td>${htmlName}</td>` +
            `<td class="cases history">${weeklyCasesHistory.join('')}</td>` +
            `<td class="activecases today" data-rate="${changeInActiveRate}">${formatNumber(currentChangeCases)}</td>` +
            `<td class="activecases history">${weeklyActiveHistory.join('')}</td>` +
            `<td class="activecases per100k"><div class="progressbar ${activePer100k < 10 ? "green" : activePer100k < 25 ? "yellow" : activePer100k < 40 ? "orange" : activePer100k < 100 ? "red" : "black"}" aria-valuenow="${activePer100k}" data-value="${formatNumber(currentActive)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(activePer100k/(activePer100k < 10 ? 10 : activePer100k < 25 ? 25 : activePer100k < 40 ? 40 : activePer100k < 100 ? 100 : 150)*100, 100)}%"></span></div></td>` +
            `<td class="hospitalized per1000k"><div class="progressbar ${hospitalizedPer100k < 10 ? "green" : hospitalizedPer100k < 25 ? "yellow" : activePer100k < 40 ? "orange" : hospitalizedPer100k < 100 ? "red" : "black"}" aria-valuenow="${hospitalizedPer100k}" data-value="${formatNumber(currentHospitalized)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(hospitalizedPer100k/(hospitalizedPer100k < 10 ? 10 : hospitalizedPer100k < 25 ? 25 : hospitalizedPer100k < 40 ? 40 : hospitalizedPer100k < 100 ? 100 : 150)*100, 100)}%"></span></div></td>` +
            `<td class="positivity"><div class="progressbar" role="progressbar" aria-valuenow="${currentPositivityRate}" data-value="${formatNumber(currentChangeTests)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(currentPositivityRate/10*100, 100)}%"></span></div></td>` +
            `<td class="infection"><div class="progressbar infection" role="progressbar" aria-valuenow="${casesPerCapita}" data-value="${formatNumber(totalCases)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(casesPerCapita/10*100, 100)}%"></span></div></td>` +
            `<td class="death"><div class="progressbar death" role="progressbar" aria-valuenow="${deathsPerCase}" data-value="${formatNumber(totalFatalities)}" aria-labelledby="provinceID tableHeaderID"><span class="value" aria-hidden="true" style="width: ${Math.min(deathsPerCase/4*100 || 0, 100)}%"></span></div></td>` +
            `</tr>`;
    }
}
async function buildProvinceTable(data, provinceData) {
    const vaccineHtml = [];
    const casesHtml = [];
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
        vaccineHtml.push(formatVaccineTable(d))
        if (d.regions && d.regions.length > 1) {
            for (const region of d.regions.filter(r => Number.isInteger(r.total?.total_vaccinations) && r.daily)) {
                if (!region.total?.change_cases) {
                    region.daily.pop();
                    region.total = region.daily[region.daily.length - 1];
                }
                vaccineHtml.push(formatVaccineTable(region));
            }
        }

        if (!d.total?.change_cases) {
            d.daily.pop();
            d.total = d.daily[d.daily.length - 1];
        }

        casesHtml.push(formatVaccineTable(d, false))
        if (d.regions && d.regions.length > 1) {
            for (const region of d.regions.filter(r => Number.isInteger(r.total?.total_cases) && r.daily)) {
                if (!region.total?.change_cases) {
                    region.daily.pop();
                    region.total = region.daily[region.daily.length - 1];
                }
                casesHtml.push(formatVaccineTable(region, false));
            }
        }

    }
    document.getElementById("vaccinationsProvinceTable").innerHTML = vaccineHtml.join('');
    document.getElementById("casesProvinceTable").innerHTML = casesHtml.join('');
    // $('#vaccinationsProvinceTable').append(vaccineHtml);
    $('[data-toggle="tooltiprow"]').tooltip({
        template: '<div class="tooltip province-status-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
}
function toggleHealthRegions(province) {
    const nodes = document.getElementsByClassName(`vaccine ${province}`);
    for (const node of nodes) {
        node.classList.toggle("visible");
    }
}
