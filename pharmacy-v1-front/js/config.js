/*######################################################################################
# App: Teste Memed - Pharmacy Checkout                                                 #
# Language: JavaScript (with use of JQuery)                                            #
# Version: 1.0                                                                         #
# Date: 2020/02/24 00:10:00                                                            #
# Author: Alison Martins                                                               #
# E-Mail: martins.alison.new@gmail.com                                                 #
# File: config.js                                                                      #
# Description: Function libraty for frontand in index.html                             #
########################################################################################*/

//function that listens to DOM load completion
$(document).ready(function() {
    initiate()
});
//function that start rederers for whole page
function initiate(){
    buildInitHeader();
    load_prescription();
    $('#btnGetPharm').show()  
}
//function that makes the calls for search
function buttonGetFarma(id) {
    //build new header
    var head = buildresHeader()
    //shows loading gif
    var waiting = '<img src="img/tenor.gif">'
    $('#content').html(waiting)
    $('#headerDiv').html(head)
    //ajax to get prescription
    $.getJSON('http://localhost:5000/api/v1/prescription/' + id, (pres) => {
        //ajax to get location
        $.getJSON('http://localhost:5000/api/v1/location', function (loc) {
            //uri encoding needed since only was possible to do get requests to the api correctly
            var presc = encodeURIComponent(JSON.stringify(pres)) 
            var loc = encodeURIComponent(JSON.stringify(loc))
            //sets complete url for API request for bast match
            var url = 'http://localhost:5000/api/v1/bestmatch?prescription=' + presc + '&location=' + loc
            //ajax that queries for best match
            $.getJSON(url, function (match) {
                console.log(match)
                //renders resutl table
                var cont = builtBestMatchTable(match)
                $('#content').html(cont)
                //hides button
                $('#btnGetPharm').hide()
            })
        })
    })
}
//renderer for initaal header
function buildInitHeader(){
    //fetches prescription
    $.getJSON('http://localhost:5000/api/v1/prescription/1', function (jd) {
        var html = '<span class="display-4">Dr. Memed</span><br><span>Prescri&ccedil;&atilde;o emitida em </span>' + jd.emission + '<span id="prescDate"></span>'
        $('#headerDiv').html(html)
    })
}
//renderer for response header
function buildresHeader(){
    var html = '<table><tr class="align-middle"><td width="30%" align="center"><a href="javascript:initiate()"><img src="img/back.jpg" width="30"></a></td><td width="15%"></td><td><span><strong>Encontrar Farm&aacute;cia</strong><br><span style="color: grey; font-size: small;">Servi&ccedil;o oferececido pela Memed&copy;</span></td></tr></table>'
    return html
}
//fetches prescrition from API            
function load_prescription() {
    $.getJSON('http://localhost:5000/api/v1/prescription/1', function (jd) {

        console.log(jd);
        $('#content').html(buildPrescTable(jd.data))
    })
}
//renders prescription itial table
function buildPrescTable(prescData){
    var htmldin = '<div class="table-responsive"><table class="table table-hover"><thead><tr><th>Medicamento</th><th>Quantidade</th></tr>' 
    //iterrates and build row for each med
    prescData.forEach((med) => {
        htmldin = htmldin + '<tr height="20"><td><span class="text-muted">' + med.nome + '</span></td><td><span class="text-muted" align="right">' + med.quant + '</span></td></tr>'
    })
    htmldin = htmldin + '</table></div>'
    return htmldin
}
//renders best match
function builtBestMatchTable(match){
    var htmldin = '<div><strong>' + match.pharmacy + '</strong> (a ' + match.distance + ' metros)<br><strong>Total: R$ ' + match.totalPrice + '</strong></div>'
    htmldin =  htmldin + '<div class="table-responsive"><table class="table table-hover"><thead><tr><th>Medicamento</th><th>Quantidade</th><th>Total</th></tr>' 
    //iterates meds list on bestmatch and build rows
    match.medList.forEach((med) => {
        htmldin = htmldin + '<tr height="20"><td><span class="text-muted">' + med.nome + '</span></td><td><span class="text-muted" align="right">' + med.quant + '</span></td><td align="right"><span class="text-muted">' + med.total + '</span></td></tr>'
    })
    htmldin = htmldin + '</table></div>'
    return htmldin
}