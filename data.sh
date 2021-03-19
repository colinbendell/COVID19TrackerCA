#/bin/sh
set -e 
curl -s https://api.covid19tracker.ca/reports/province/AB\?after\=2020-12-10\?fill_dates\=true -o data/AB.json
curl -s https://api.covid19tracker.ca/reports/province/BC\?after\=2020-12-10\?fill_dates\=true -o data/BC.json
curl -s https://api.covid19tracker.ca/reports/province/MB\?after\=2020-12-10\?fill_dates\=true -o data/MB.json
curl -s https://api.covid19tracker.ca/reports/province/NB\?after\=2020-12-10\?fill_dates\=true -o data/NB.json
curl -s https://api.covid19tracker.ca/reports/province/NL\?after\=2020-12-10\?fill_dates\=true -o data/NL.json
curl -s https://api.covid19tracker.ca/reports/province/NS\?after\=2020-12-10\?fill_dates\=true -o data/NS.json
curl -s https://api.covid19tracker.ca/reports/province/NT\?after\=2020-12-10\?fill_dates\=true -o data/NT.json
curl -s https://api.covid19tracker.ca/reports/province/NU\?after\=2020-12-10\?fill_dates\=true -o data/NU.json
curl -s https://api.covid19tracker.ca/reports/province/ON\?after\=2020-12-10\?fill_dates\=true -o data/ON.json
curl -s https://api.covid19tracker.ca/reports/province/PE\?after\=2020-12-10\?fill_dates\=true -o data/PE.json
curl -s https://api.covid19tracker.ca/reports/province/QC\?after\=2020-12-10\?fill_dates\=true -o data/QC.json
curl -s https://api.covid19tracker.ca/reports/province/SK\?after\=2020-12-10\?fill_dates\=true -o data/SK.json
curl -s https://api.covid19tracker.ca/reports/province/YT\?after\=2020-12-10\?fill_dates\=true -o data/YT.json

curl -s https://api.covid19tracker.ca/province/ON/regions -o data/ON-regions.json
curl -s https://api.covid19tracker.ca/province/AB/regions -o data/AB-regions.json
curl -s https://api.covid19tracker.ca/province/BC/regions -o data/BC-regions.json
curl -s https://api.covid19tracker.ca/province/MB/regions -o data/MB-regions.json
curl -s https://api.covid19tracker.ca/province/NB/regions -o data/NB-regions.json
curl -s https://api.covid19tracker.ca/province/NL/regions -o data/NL-regions.json
curl -s https://api.covid19tracker.ca/province/NS/regions -o data/NS-regions.json
curl -s https://api.covid19tracker.ca/province/NT/regions -o data/NT-regions.json
curl -s https://api.covid19tracker.ca/province/NU/regions -o data/NU-regions.json
curl -s https://api.covid19tracker.ca/province/ON/regions -o data/ON-regions.json
curl -s https://api.covid19tracker.ca/province/PE/regions -o data/PE-regions.json
curl -s https://api.covid19tracker.ca/province/QC/regions -o data/QC-regions.json
curl -s https://api.covid19tracker.ca/province/SK/regions -o data/SK-regions.json
curl -s https://api.covid19tracker.ca/province/YT/regions -o data/YT-regions.json

curl -s https://api.covid19tracker.ca/cases\?province=ON -o data/ON-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=AB -o data/AB-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=BC -o data/BC-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=MB -o data/MB-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=NB -o data/NB-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=NL -o data/NL-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=NS -o data/NS-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=NT -o data/NT-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=NU -o data/NU-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=ON -o data/ON-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=PE -o data/PE-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=QC -o data/QC-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=SK -o data/SK-cases.json
curl -s https://api.covid19tracker.ca/cases\?province=YT -o data/YT-cases.json

curl -s https://api.covid19tracker.ca/provinces -o data/provinces.json
curl -s https://api.covid19tracker.ca/regions -o data/regions.json
curl -s https://api.covid19tracker.ca/summary/split/hr -o data/hr.json
curl -s https://api.covid19tracker.ca/summary -o data/summary.json
curl -s https://api.covid19tracker.ca/summary/split -o data/split.json
curl -s https://api.covid19tracker.ca/cases -o data/cases.json
curl -s https://api.covid19tracker.ca/reports\?after\=2020-12-10\?fill_dates\=true -o data/reports.json
curl -s https://covid19tracker.ca/assets/data/provinces.json -o data/provinces-map.json
curl -s https://api.covid19tracker.ca/notes/tag/vac -o data/vac.json
curl -s https://api.covid19tracker.ca/notes -o data/notes.json
