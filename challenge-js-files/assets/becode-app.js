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
        const stat = [];
        const stat2 = [];
        const tabContent = document.getElementsByTagName("tbody");
        const tbodyContent = tabContent[0].getElementsByTagName("tr");
        console.log(tbodyContent);
        const tbodyContent2 = tabContent[1].getElementsByClassName("tr");
        console.log(tbodyContent2);
    
    
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
    

        constDiv('graph1', bodyContent);
    
        //graphique 1
    
        const svg = dimple.newSvg("#graph1", "100%", 450);//taille du graphique
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
    

        constDiv('graph2', table1); //Div pour graphique au dessus de table1
    
        functionTab(table1, stat);
    
    
        constDiv('graph3', table2);//Div pour graphique au dessus de table2
        
        functionTab(table2, stat2);

    
}