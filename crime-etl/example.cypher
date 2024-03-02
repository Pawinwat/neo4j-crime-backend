create index on :Year(value);
create index on :Month(value);
create index on :Place(name);
create index on :Category(name);

load csv with headers from
"https://www.dropbox.com/s/0uffu7j65dn2uz1/2015-09-city-of-london-street.csv?dl=1" as csv
with csv as crimecsv
where crimecsv.`Location` is not null
merge (p:Place {name: crimecsv.`Location`})
with crimecsv, split(crimecsv.`Month`, "-") AS yearMonth
where yearMonth[0] is not null
merge (y:Year {value: toInt(yearMonth[0])})
with crimecsv, split(crimecsv.`Month`, "-") AS yearMonth
where yearMonth[1] is not null
merge (m:Month {value: toInt(yearMonth[1])})
with crimecsv
where crimecsv.`Crime type` is not null
merge (ctg:Category {name: crimecsv.`Crime type`})
with crimecsv
where crimecsv.`Latitude` is not null
merge (c:Case {ref: case when crimecsv.`Crime ID` is null then '' else crimecsv.`Crime ID` end ,lat: toFloat(crimecsv.`Latitude`), lon: toFloat(crimecsv.`Longitude`), outcome: case when crimecsv.`Last outcome category` is null then 'n/a' else crimecsv.`Last outcome category` end })

with crimecsv, split(crimecsv.`Month`, "-") AS yearMonth
match (xc:Case {ref: case when crimecsv.`Crime ID` is null then '' else crimecsv.`Crime ID` end ,lat: toFloat(crimecsv.`Latitude`), lon: toFloat(crimecsv.`Longitude`), outcome: case when crimecsv.`Last outcome category` is null then 'n/a' else crimecsv.`Last outcome category` end }),
(xy:Year {value: toInt(yearMonth[0])}),
(xm:Month {value: toInt(yearMonth[1])}),
(xp:Place {name: crimecsv.`Location`}),
(xctg:Category {name: crimecsv.`Crime type`})

create (xm)-[:YEAR_OF]->(xy),
(xc)-[:HAPPEN_IN]->(xm),
(xc)-[:TYPE_OF]->(xctg),
(xc)-[:AT]->(xp);