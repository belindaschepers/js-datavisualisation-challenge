/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name : Belinda Schepers     
Date :  
Contact information : 
What does this script do ? 
...
*/

window.onload = function() {
    
        const graph = []; //graphique ajax
    
    
        //creation des divs sur le html
        const constDiv = function bow(creaDiv, target){
            const div = document.createElement('div');
            div.id = creaDiv;
            target.insertAdjacentElement('beforebegin', div);
        }
    
        // recup des données tableaux
        const functionTab = function bow2(id, statsContent){
            let tbody = id.getElementsByTagName("tbody");
            let tr = tbody[0].getElementsByTagName("tr");
            for (i = 1; i < tr.length; i++){
                let country = [];//
                let th = tr[i].getElementsByTagName("th");
                let div = th[0].getElementsByTagName("div");
                let number = div[0].innerHTML;
                country.push(number);
                let td = tr[i].getElementsByTagName("td");
                for (j = 0; j < td.length; j++) {
                    let content = td[j].innerHTML;
                    country.push(content);
                }
                statsContent.push(country);
                console.log(statsContent);
            }
        }
    

        constDiv('firstGraph', bodyContent);
    
        //graphique 1
    
        const svg = dimple.newSvg("#firstGraph", "100%", 450);//taille du graphique
        let chart = new dimple.chart(svg, graph);//ce qu'il va traiter
        chart.addCategoryAxis("x", "Countries and Years");
        chart.addMeasureAxis("y", "Data");
        chart.addSeries(null, dimple.plot.scatter);//type de graphique
    
        let firstGraphic = () => {
            let request = new XMLHttpRequest;
            request.open('GET', 'https://inside.becode.org/api/v1/data/random.json', true);
            request.onload = function() {
                if (this.status === 200) { 
                source = JSON.parse(this.responseText);
    
                for (i=0;i<source.length;i++){
                    let content = {"Countries and Years":source[i][0], "Data":source[i][1]};
                    graph.push(content);
                    console.log(graph);
                }
                chart.draw();
                setInterval(firstGraphic, 1000);//Mis à jour toutes les secondes
                }
            }
            request.send();
        }
        firstGraphic();
    

        //graphique 2

        function CreaDiv() {
        
            const table1 = document.getElementById("table1");
            const table2 = document.getElementById("table2");
            const values = document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police");//recup des données
            const values2 = document.getElementById("Homicides");
        
            let divGr = document.createElement("div");
            divGr.id = "graph1" //creation de l'id attaché à la div
        
            let divGr2 = document.createElement("div");
            divGr2.id = "graph2"
        
            values.appendChild(divGr); //insérer la div après le h3

            values2.appendChild(divGr2);

        
        }
        CreaDiv();
        
        function draw() {
        
            table1Td = table1.getElementsByTagName("td"); //séléction
            table1Th = table1.getElementsByTagName("th");
        
            class object { //objet contenant l'année, le pays et le taux de criminalité
                constructor(year, country, crimes) {
                    this.year = year;
                    this.country = country;
                    this.crimes = crimes;
                }
            }
        
            let data = []; //stock toutes les données
            let stock = null; //contient les objets
            let compte = 0; //compte pour connaitre le nombre d'objet non stockés
            let countryNumber = 35;
            let tdTable1 = 12;
        
            for (j = 0; j < countryNumber; j++) { //boucle qui parcours chaque ligne et récup les infos de chaque pays
                for (i = 1; i < tdTable1; i++) {//boucle qui parcours une ligne du talbeau pour récup l'info sur les 10 ans de crimes
                    stock = new object(table1Th[(i + 4)].innerHTML, table1Td[(j * tdTable1)].innerHTML, table1Td[i + (tdTable1 * j)].innerHTML);
                    if (stock == undefined) {
                        compte += 1;//si pas de valeur, ne rien incrémenter
                    }
                    else if (stock.crimes == ":") {
                        stock.crimes = 0;//transforme la valeur pour éviter le bug
                        data[((j) * tdTable1) + i] = stock;//incrémente toutes les données
                    }
                    else {
                        data[((j) * tdTable1) + i] = stock;
                    }
                }
            }
        
            data.shift();
            //retire une donnée vide en position 0 sur le tableau
            for (k = 1; k < data.length; k++) {
                if (data[k] == null) {
                    data.splice(k, 1);
                }
        
            }
            //retire valeurs null
        
        
            let svg = dimple.newSvg("#graph1", "100%", 450);
            let chart = new dimple.chart(svg, data); 
            chart.addCategoryAxis("x", "year");
            chart.addMeasureAxis("y", "crimes");
            chart.addSeries("country", dimple.plot.line);
            let chartStyle = chart.addSeries("country", dimple.plot.bubble);
            chart.addLegend(780, 50, 200, 600); 
            chart.draw();
    
            //graphique 3
        
            table2td = table2.getElementsByTagName("td"); 
            table2th = table2.getElementsByTagName("th");
        
            let data2 = [];
            let stock2 = null;
            let compte2 = 0;
            let countryNumber2 = 30;
            let tdTable2 = 3;
        
        
            for (j = 0; j < countryNumber2; j++) {
                for (i = 1; i < tdTable2; i++) {
                    stock2 = new object(table2th[(i + 1)].innerHTML, table2td[(j * tdTable2)].innerHTML, table2td[i + (tdTable2 * j)].innerHTML);
                    if (stock2 == undefined) {
                        compte2 += 1;
                    }
                    else if (stock2.crimes == ":") {
                        stock2.crimes = 0;
                        data2[((j) * tdTable2) + i] = stock2;
                    }
                    else {
                        console.log(stock2.country.length + stock2.country);
                        if (stock2.country.length == 55) {
                            data2[((j) * tdTable2) + i] = stock2;
                        }
                        data2[((j) * tdTable2) + i] = stock2;
                        console.log(stock2);
                    }
                }
            }
        
            data2.shift();
            for (k = 1; k < data2.length; k++) {
                if (data2[k] == null) {
                    data2.splice(k, 1);
                }
        
            }
            console.log(data2);
        
        
            let svg2 = dimple.newSvg("#graph2", "100%", 450);
            let chart2 = new dimple.chart(svg2, data2);
            chart2.addCategoryAxis("x", "year");
            chart2.addMeasureAxis("y", "crimes"); 
            chart2.addSeries("country", dimple.plot.line); 
            let chart2style = chart2.addSeries("country", dimple.plot.bubble);
            chart2.addLegend(730, 30, 200, 600);
            chart2.draw();
        };
        
        draw();

    }