var main = function () {
    "use strict";
    //Sticky Nav
    var main = $("nav");
    var mns = "scroll";
    var hdr = $("header").height();
    var totop = $(".totop");
    $(window).scroll(function () {
        if ($(this).scrollTop() > hdr) {
            main.addClass(mns);
            totop.addClass("toshow");
        } else {
            main.removeClass(mns);
            totop.removeClass("toshow");
        }
    //Parallax
        var scroll = $(window).scrollTop(),
            slowScroll = scroll / 2,
            slowerScroll = scroll / 3;
        $("header h1, header p").css({
            transform: "translateY(" + slowScroll + "px)"
        });
        $("header").css("background-position", "50% " + slowerScroll + "px");
    });
    //Navigation Active
    $('#hotspots').waypoint(function(direction) {
         if (direction === 'down') {
                $('nav span a:nth-child(1)').removeClass('active');
                $('nav span a:nth-child(2)').addClass('active');
            }
            else {
                $('nav span a:nth-child(2)').removeClass('active');
                $('nav span a:nth-child(1)').addClass('active');
            }
    },{offset:'12.6%'});
    $('#hotspotinfo').waypoint(function(direction) {
         if (direction === 'down') {
                $('nav span a:nth-child(2)').removeClass('active');
                $('nav span a:nth-child(3)').addClass('active');
            }
            else {
                $('nav span a:nth-child(3)').removeClass('active');
                $('nav span a:nth-child(2)').addClass('active');
            }
    },{offset:'12.6%'});
    $('#googlemaps').waypoint(function(direction) {
         if (direction === 'down') {
                $('nav span a:nth-child(3)').removeClass('active');
                $('nav span a:nth-child(4)').addClass('active');
            }
            else {
                $('nav span a:nth-child(4)').removeClass('active');
                $('nav span a:nth-child(3)').addClass('active');
            }
    },{offset:'12.6%'});
    //Smoothscroll
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $("html, body").stop().animate({
            "scrollTop": $target.offset().top - 110
        }, 900, "swing");
    });
    //MobileDropDown
    $("#menu-toggle").on("click", function(){
        $("#mobiledropdown").slideToggle("fast");
        if ($("#mobiledropdown").is(":visible")) {
            $("#mobiledropdown").css("display","block");
        }
    });
    //Advert
    $("#advert").delay(2000).slideDown("fast");
        $("#advert span").on("click", function(){
            $("#advert").slideUp("fast");
        });
    //Slider
        var i = 1;
        var imagecycle = ["images/ads/ad1.jpg", "images/ads/ad2.gif", "images/ads/ad3.jpg"];
        var linkcycle = ["http://www.winkelhaak.be/", "http://www.vintageproductions.eu/grid/all/otokar-europe-communication-mix/", "http://rizon.be/"];
        $.fn.preload = function() {
            this.each(function(){
                $('<img/>')[0].src = this;
            });
        };
        $(imagecycle).preload();
        function Slider() {
            $("#advert img").fadeOut(600, function () {
                $("#advert a").attr("href", linkcycle[i]);
                $(this).attr("src", imagecycle[i]);
                $(this).fadeIn(600, function () {
                    if (i == imagecycle.length - 1) {
                        i = 0;
                    } else {
                        i++;
                    }
                });
            });
        }
        setInterval(Slider, 6000);
    //Random Math Advert
    /*var x = Math.floor((Math.random() * 3) + 1);
    $("#advert img").attr("src","images/ads/ad" + x + ".jpg").attr("alt", "Advertisement");*/
    //Hotspots Info
    $("ul.categories li div a, ul.infohex li div a, nav #mobiledropdown a").on("click", function () {
        switch ($(this).data("hotspot")) {
            //Default  
            case "Hotspots":
                $("#infonum").text("A").css("color", "#1cb299");
                $("#info").text("Hotspot Informatie");
                $("#hotspotinfo p:nth-of-type(1)").html('Welkom op de website van AntwerpDesignGuide. Op deze site kan u alles terugvinden van de gids die iedere design liefhebber de mogelijkheid geeft om Antwerpen in een nieuw en sfeervol design ligt te zien.');
                $("#hotspotinfo p:nth-of-type(2)").html('Deze gids toont verschillende aspecten van de design wereld waar een link wordt gelegd met bijzondere hotspots die in Antwerpen te vinden zijn.');
                $("#hotspotinfo p:nth-of-type(3)").html('Deze aspecten worden in de gids opgedeeld in vier verschillende categorieën waaronder elk vier hotspots te vinden zijn. De gids zal je naar deze hotspots leiden zodat je een geheel beeld krijgt van de verschillende design typen die in Antwerpen te vinden zijn.');
                $("#hotspotinfo p:nth-of-type(4)").html('Indien ge&iuml;nteresseerd kan je de gids altijd gratis ophalen op elk Antwerps info punt, in een van de 16 hotspots of je kan ook onze gratis mobiele applicatie downloaden op de <a href="https://play.google.com/store/search?q=antwerpen%20guide" target="_blank">Google Play Store</a> of de <a href="https://itunes.apple.com/nl/genre/ios/id36?mt=8" target="_blank">Apple App Store.</a>');
                $("#hotspotinfo").css("background-color", "#1cb299"); 
                //Hexagons
                $(".infohex").css("display", "inline-block");
                $(".infohex li:nth-of-type(4) div h2, .infohex li:nth-of-type(4) div p").css("cssText", "background-color:#405b62 !important; background-color: rgba(64, 91, 98, 0.8) !important;");
                $(".infohex li:nth-of-type(3) div h2, .infohex li:nth-of-type(3) div p").css("cssText", "background-color:#a4d07b !important; background-color: rgba(164, 208, 123, 0.8) !important;");
                $(".infohex li:nth-of-type(2) div h2, .infohex li:nth-of-type(2) div p").css("cssText", "background-color:#f7f193 !important; background-color: rgba(247, 241, 147, 0.9) !important;");
                $(".infohex li:nth-of-type(1) div h2, .infohex li:nth-of-type(1) div p").css("cssText", "background-color:#eb5153 !important; background-color: rgba(235, 81, 83, 0.8) !important;");
                //Fourth
                $(".infohex li:nth-of-type(4) div a").data("hotspot", "Overnachten");
                $(".infohex li:nth-of-type(4) div img").attr("src", "images/hotspots/overnachten.jpg");
                $(".infohex li:nth-of-type(4) div h2").html("Overnachten");
                $(".infohex li:nth-of-type(4) div p").html("");
                //Third
                $(".infohex li:nth-of-type(3) div a").data("hotspot", "Interieur");
                $(".infohex li:nth-of-type(3) div img").attr("src", "images/hotspots/interieur.jpg");
                $(".infohex li:nth-of-type(3) div h2").html("Interieur");
                $(".infohex li:nth-of-type(3) div p").html("");
                //Second
                $(".infohex li:nth-of-type(2) div a").data("hotspot", "Winkels");
                $(".infohex li:nth-of-type(2) div img").attr("src", "images/hotspots/winkels.jpg");
                $(".infohex li:nth-of-type(2) div h2").html("Winkels");
                $(".infohex li:nth-of-type(2) div p").html("");
                //First
                $(".infohex li:nth-of-type(1) div a").data("hotspot", "Horeca");
                $(".infohex li:nth-of-type(1) div img").attr("src", "images/hotspots/horeca.jpg");
                $(".infohex li:nth-of-type(1) div h2").html("Horeca");
                $(".infohex li:nth-of-type(1) div p").html("");
                break;
            //Horeca
            case "Horeca":
                $("#infonum").text("H").css("color", "#eb5153");
                $("#info").text('Horeca');
                $("#hotspotinfo p").html('');
                $("#hotspotinfo").css("background-color", "#eb5153");
                //Hexagons
                $(".infohex").css("display", "inline-block");
                $(".infohex li div h2, .infohex li div p").css("cssText", "background-color:#eb5153 !important; background-color: rgba(235, 81, 83, 0.8) !important;");
                //Fourth
                $(".infohex li:nth-of-type(4) div a").data("hotspot", "Mon");
                $(".infohex li:nth-of-type(4) div img").attr("src", "images/hotspots/mon.jpg");
                $(".infohex li:nth-of-type(4) div h2").html("Món");
                $(".infohex li:nth-of-type(4) div p").html("Sint-Aldegondiskaai 30<br>2000 Antwerpen");
                //Third
                $(".infohex li:nth-of-type(3) div a").data("hotspot", "Lux");
                $(".infohex li:nth-of-type(3) div img").attr("src", "images/hotspots/lux.jpg");
                $(".infohex li:nth-of-type(3) div h2").html("Lux");
                $(".infohex li:nth-of-type(3) div p").html("Adriaan<br>Brouwerstraat 13<br>2000 Antwerpen");
                //Second
                $(".infohex li:nth-of-type(2) div a").data("hotspot", "Tartine");
                $(".infohex li:nth-of-type(2) div img").attr("src", "images/hotspots/tartine.jpg");
                $(".infohex li:nth-of-type(2) div h2").html("Maison Tartine");
                $(".infohex li:nth-of-type(2) div p").html("Minderbroedersrui 60<br>2000 Antwerpen");
                //First
                $(".infohex li:nth-of-type(1) div a").data("hotspot", "EllisGourmetBurger");
                $(".infohex li:nth-of-type(1) div img").attr("src", "images/hotspots/ellis.jpg");
                $(".infohex li:nth-of-type(1) div h2").html("Ellis Gourmet Burger");
                $(".infohex li:nth-of-type(1) div p").html("De Keyserlei 21<br>2018 Antwerpen");
                break;  
            //Winkels
            case "Winkels":
                $("#infonum").text("W").css("color", "#f7f193");
                $("#info").text("Winkels");
                $("#hotspotinfo").css("background-color", "#f7f193");
                $("#hotspotinfo p").html('');
                //Hexagons
                $(".infohex").css("display", "inline-block");
                $(".infohex li div h2, .infohex li div p").css("cssText", "background-color:#f7f193 !important; background-color: rgba(247, 241, 147, 0.9) !important;");
                //Fourth
                $(".infohex li:nth-of-type(4) div a").data("hotspot", "Bulthaup");
                $(".infohex li:nth-of-type(4) div img").attr("src", "images/hotspots/bulthaup.jpg");
                $(".infohex li:nth-of-type(4) div h2").html("Bulthaup Metropool");
                $(".infohex li:nth-of-type(4) div p").html("Jordaenskaai 2<br>2000 Antwerpen");
                //Third
                $(".infohex li:nth-of-type(3) div a").data("hotspot", "ChaplinsBarbershop");
                $(".infohex li:nth-of-type(3) div img").attr("src", "images/hotspots/chaplins.jpg");
                $(".infohex li:nth-of-type(3) div h2").html("Chaplins Barbershop");
                $(".infohex li:nth-of-type(3) div p").html("Londenstraat 12<br>2000 Antwerpen");
                //Second
                $(".infohex li:nth-of-type(2) div a").data("hotspot", "Goldwood");
                $(".infohex li:nth-of-type(2) div img").attr("src", "images/hotspots/goldwood.jpg");
                $(".infohex li:nth-of-type(2) div h2").html("Goldwood By Boris");
                $(".infohex li:nth-of-type(2) div p").html("Offerandestraat 1<br>2060 Antwerpen");
                //First
                $(".infohex li:nth-of-type(1) div a").data("hotspot", "100gr");
                $(".infohex li:nth-of-type(1) div img").attr("src", "images/hotspots/100gr.jpg");
                $(".infohex li:nth-of-type(1) div h2").html("100gr Design");
                $(".infohex li:nth-of-type(1) div p").html("Lange<br>Winkelhaakstraat 26<br>2060 Antwerpen");
                break;    
              //Interieur
              case "Interieur":
                $("#infonum").text("I").css("color", "#a4d07b");
                $("#info").text("Interieur");
                $("#hotspotinfo").css("background-color", "#a4d07b");
                $("#hotspotinfo p").html('');
                //Hexagons
                $(".infohex").css("display", "inline-block");
                $(".infohex li div h2, .infohex li div p").css("cssText", "background-color:#a4d07b !important; background-color: rgba(164, 208, 123, 0.8) !important;");
                //Fourth
                $(".infohex li:nth-of-type(4) div a").data("hotspot", "MAS");
                $(".infohex li:nth-of-type(4) div img").attr("src", "images/hotspots/mas.jpg");
                $(".infohex li:nth-of-type(4) div h2").html("Het MAS");
                $(".infohex li:nth-of-type(4) div p").html("Hanzestedenplaats 1<br>2000 Antwerpen");
                //Third
                $(".infohex li:nth-of-type(3) div a").data("hotspot", "RoosMartens");
                $(".infohex li:nth-of-type(3) div img").attr("src", "images/hotspots/roos.jpg");
                $(".infohex li:nth-of-type(3) div h2").html("Roos Mertens Interieur");
                $(".infohex li:nth-of-type(3) div p").html("Oude Leeuwenrui 36<br>2000 Antwerpen");
                //Second
                $(".infohex li:nth-of-type(2) div a").data("hotspot", "RobbyAerts");
                $(".infohex li:nth-of-type(2) div img").attr("src", "images/hotspots/robby.jpg");
                $(".infohex li:nth-of-type(2) div h2").html("Robby Aerts Interieur");
                $(".infohex li:nth-of-type(2) div p").html("Kommekensstraat 16<br>2000 Antwerpen");
                //First
                $(".infohex li:nth-of-type(1) div a").data("hotspot", "FelixPakhuis");
                $(".infohex li:nth-of-type(1) div img").attr("src", "images/hotspots/felix.jpg");
                $(".infohex li:nth-of-type(1) div h2").html("Felix Pakhuis");
                $(".infohex li:nth-of-type(1) div p").html("Godefriduskaai 30<br>2000 Antwerpen");
                break;  
            //Overnachten
            case "Overnachten":
                $("#infonum").text("O").css("color", "#405b62");
                $("#info").text("Overnachten");
                $("#hotspotinfo").css("background-color", "#405b62");
                $("#hotspotinfo p").html('');
                //Hexagons
                $(".infohex").css("display", "inline-block");
                $(".infohex li div h2, .infohex li div p").css("cssText", "background-color:#405b62 !important; background-color: rgba(64, 91, 98, 0.8) !important;");
                //Fourth
                $(".infohex li:nth-of-type(4) div a").data("hotspot", "LeonardoHotel");
                $(".infohex li:nth-of-type(4) div img").attr("src", "images/hotspots/leonardo.jpg");
                $(".infohex li:nth-of-type(4) div h2").html("Leonardo Hotel");
                $(".infohex li:nth-of-type(4) div p").html("De Keyserlei 59<br>2018 Antwerpen");
                //Third
                $(".infohex li:nth-of-type(3) div a").data("hotspot", "WitteLelie");
                $(".infohex li:nth-of-type(3) div img").attr("src", "images/hotspots/lelie.jpg");
                $(".infohex li:nth-of-type(3) div h2").html("De Witte Lelie");
                $(".infohex li:nth-of-type(3) div p").html("Keizerstraat 16<br>2000 Antwerpen");
                //Second
                $(".infohex li:nth-of-type(2) div a").data("hotspot", "HomeFeek");
                $(".infohex li:nth-of-type(2) div img").attr("src", "images/hotspots/feek.jpg");
                $(".infohex li:nth-of-type(2) div h2").html("Home @ Feek");
                $(".infohex li:nth-of-type(2) div p").html("Klapdorp 52<br>2000 Antwerpen");
                //First
                $(".infohex li:nth-of-type(1) div a").data("hotspot", "YellowSubmarine");
                $(".infohex li:nth-of-type(1) div img").attr("src", "images/hotspots/submarine.jpg");
                $(".infohex li:nth-of-type(1) div h2").html("Yellow Submarine B&amp;B");
                $(".infohex li:nth-of-type(1) div p").html("Falconplein 51<br>2000 Antwerpen");
                break;
            //Horeca  
            case "EllisGourmetBurger":
                $("#infonum").text("1").css("color", "#eb5153");
                $("#info").text("Ellis Gourmet Burger");
                $("#hotspotinfo p:nth-of-type(1)").html('Eindelijk vanuit Brussel overgewaaid en aan wal gespoeld in de Scheldestad! Wie voor de perfecte burger enkel aan McDonalds denkt, moet dringend aan deze tafels plaatsnemen.');
                $("#hotspotinfo p:nth-of-type(2)").html('Je begint spontaan te kwijlen boven je bord met heerlijke frietjes, een dikke sappige hamburger met een plakje smeltende kaas erop en de versgemaakte sausjes... Voor wie niet kan kiezen is er zelfs een ‘trio mini-burgers’ op de kaart.');
                $("#hotspotinfo p:nth-of-type(3)").html('Wie zegt dat hamburgers niet gastronomisch kunnen zijn? Wij ontheffen de hamburger officieel van zijn status ‘fastfood’ en reserveren alvast een tafel.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: De Keyserlei 21, 2018 Antwerpen');
                $("#hotspotinfo").css("background-color", "#eb5153");
                $(".infohex").css("display", "none");
                break;
            case "Tartine":
                $("#infonum").text("2").css("color", "#eb5153");
                $("#info").text("Maison Tartine");
                $("#hotspotinfo p:nth-of-type(1)").html('Midden in het centrum, is het hopen op een plaatsje tijdens het lunchuur. Maar de winnaars die een tafel bemachtigd hebben, worden beloond met — hoe kan het ook anders — een fantastische boterham! (of de getoaste variant: de Tartini).');
                $("#hotspotinfo p:nth-of-type(2)").html('Ten eerste zullen deze bad girls de torenhoge verwachtingen nakomen, letterlijk: deze boterhammen zijn torenhoog gigantisch, smullen gegarandeerd!');
                $("#hotspotinfo p:nth-of-type(3)").html('Ten tweede moet je gewoon de klassieker Tartini Italiano uit geprobeerd hebben wegens deze boterham uitermate lekker is.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Minderbroedersrui 60, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#eb5153");
                $(".infohex").css("display", "none");
                break;
            case "Lux":
                $("#infonum").text("3").css("color", "#eb5153");
                $("#info").text("Lux");
                $("#hotspotinfo p:nth-of-type(1)").html('Vlakbij het Museum aan de Stroom vind je dit klassevolle restaurant. De traphal is monumentaal met een gigantische houten trap, originele mozaïekvloer en prachtige glazen wijnkamer die tot aan de nok gevuld is. Ook de schouwmantels van Belgisch marmer, de talrijke Griekse zuilen en het parket werden uit dit 17e eeuwse pand behouden.');
                $("#hotspotinfo p:nth-of-type(2)").html('In de keuken staat meesterkok Bert Zaman. Hij werkt hier sinds het prille begin. Daarvoor deed hij stages in diverse nationale en internationale sterrenzaken, was hij finalist bij Prosper Montagné- een gerenommeerde prijs voor jonge beloftes, en won hij in de categorie: Beste presentatie. ');
                $("#hotspotinfo p:nth-of-type(3)").html('De keuken is geëvolueerd van klassiek Frans met een mediterrane twist naar een volledig eigen stijl.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Adriaan Brouwerstraat 13, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#eb5153");
                $(".infohex").css("display", "none");
                break;
            case "Mon":
                $("#infonum").text("4").css("color", "#eb5153");
                $("#info").text("Món");
                $("#hotspotinfo p:nth-of-type(1)").html('Món is Catalaans voor wereld. Dit verwijst naar de verschillende werelden die harmonieus samenkomen in onze Antwerpse haven. Món vond onderdak in een geklasseerd pand uit 1685 met uitzicht op het Bonapartedok en het Eilandje.');
                $("#hotspotinfo p:nth-of-type(2)").html('Het werd volledig gerestaureerd met behoud van historische elementen zoals de eeuwenoude zware draagstructuur en opvallende gekaleide buitenmuren. Het interieur komt helemaal tot leven door de zorgvuldig gekozen verlichting, die ervoor zorgt dat de tijdloze balken perfect in het eigentijds interieur hun meerwaarde tonen.');
                $("#hotspotinfo p:nth-of-type(3)").html('De met kettingzaag gebeeldhouwde levensechte rundskop is een opvallend dramatisch accent in een voor het overig sereen  en sober interieur dat door zijn eigenheid op zich voldoende theatraal is. Mochten overigens deze muren kunnen spreken…');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Sint-Aldegondiskaai 30, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#eb5153");
                $(".infohex").css("display", "none");
                break;
            //Winkels    
            case "100gr":
                $("#infonum").text("5").css("color", "#f7f193");
                $("#info").text("100gr DESIGN");
                $("#hotspotinfo p:nth-of-type(1)").html('100gr DESIGN staat voor functioneel design met een kwinkslag, liefst van Belgische en/of jonge ontwerpers. Ze werken niet met vaste collecties, dus wees er snel bij!');
                $("#hotspotinfo p:nth-of-type(2)").html('In hun boekenkast vind je een 150-tal titels over architectuur en design, allemaal onder de 50 euro. Het is toegankelijk voor iedereen, maar toch specifiek en uitdagend.');
                $("#hotspotinfo p:nth-of-type(3)").html('De shop biedt bovendien ook een heleboel kwalitatieve kinderboeken, vormgegeven door Vlaamse illustratoren.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Lange Winkelhaakstraat 26, 2060 Antwerpen');
                $("#hotspotinfo").css("background-color", "#f7f193");
                $(".infohex").css("display", "none");
                break;
            case "Goldwood":
                $("#infonum").text("6").css("color", "#f7f193");
                $("#info").text("Goldwood By Boris");
                $("#hotspotinfo p:nth-of-type(1)").html('Antwerpenaar Boris Devis heeft een gloednieuwe designwebshop - met offline showroom - gelanceerd. Hier ontdek je prachtige en originele interieur musthaves.');
                $("#hotspotinfo p:nth-of-type(2)").html('Boris Devis startte zijn carrière als design hunter voor een Moscouse decorateur. Tijdens deze periode ontwikkelde hij een scherp oog voor écht design. Na veel networking en jaren ervaring begon hij met zijn eigen project Goldwood Interiors.');
                $("#hotspotinfo p:nth-of-type(3)").html('Goldwood Interiors is een online designshop met een offline showroom in de Offerandestraat. Daarnaast biedt Boris nog een heleboel diensten aan. Zo kan je steeds beroep op hem doen bij de herinrichting van je huis of kantoor, wanneer je een oud meubelstuk wilt verkopen, bij het uitlenen van meubels tijdens een fotoshoot of als je op zoek bent naar de perfecte locatie voor een tentoonstelling.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Offerandestraat 1, 2060 Antwerpen');
                $("#hotspotinfo").css("background-color", "#f7f193");
                $(".infohex").css("display", "none");
                break;
            case "ChaplinsBarbershop":
                $("#infonum").text("7").css("color", "#f7f193");
                $("#info").text("Chaplins Barbershop");
                $("#hotspotinfo p:nth-of-type(1)").html('Wat een man écht tot rust brengt? Een ouderwetse scheerpartij en een verfrissende kappersbeurt, terwijl hij achterover leunt in onze jaren ‘50-stoelen en nu en dan een slok neemt van een frisse pint. Vertrouw ons, er is niets beter dan dat.');
                $("#hotspotinfo p:nth-of-type(2)").html('De eerste keer dat je bij Chaplins Salon and Barbershop binnenwandelt, dat is meteen weten dat je juist zit. Het hout aan de muren, de eigenzinnige antiquiteiten en de geur van pure, verfrissende haarverzorging: het is een behoorlijk rustgevende cocktaill.');
                $("#hotspotinfo p:nth-of-type(3)").html('Dames, heren, snorren, baarden, hoge hakken en handtassen geven zich over en vergeten de drukte buiten de deur. Kom binnen, voel je thuis en laat je van je sokken blazen door de magie van onze kappers.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Londenstraat 12, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#f7f193");
                $(".infohex").css("display", "none");
                break;
            case "Bulthaup":
                $("#infonum").text("8").css("color", "#f7f193");
                $("#info").text("Bulthaup Metropool");
                $("#hotspotinfo p:nth-of-type(1)").html('Bulthaup staat over de hele wereld bekend om zijn architectuur van ruimte binnenshuis. Architectuur, vernieuwing en precisie zijn waar het merk Bulthaup om draait.');
                $("#hotspotinfo p:nth-of-type(2)").html('Bulthaup biedt de klanten de garantie dat ze een hoogwaardig product krijgen, kunnen kiezen uit een rijkdom aan ontwerpmogelijkheden en vertrouwen op een merk dat op alle relevante wereldmarkten faam geniet. Bulthaup levert uniciteit: leefruimtes die rekening houden met en opgaan in de architectuur van de ruimte en toegespitst zijn op de wensen en Ideeën van de indivudele klant.');
                $("#hotspotinfo p:nth-of-type(3)").html('Er worden nieuwe producten ontwikkeld om de voorsprong op de concurrentie te kunnen behouden. Onze competentie en kwaliteit komen tot uiting in uiterste precisie en technische perfectie.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Jordaenskaai 2, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#f7f193");
                $(".infohex").css("display", "none");
                break;
            //Interieur    
            case "FelixPakhuis":
                $("#infonum").text("9").css("color", "#a4d07b");
                $("#info").text("Felix Pakhuis");
                $("#hotspotinfo p:nth-of-type(1)").html('Met boekenprogramma, theatervoorstellingen, concerten en andere evenementen heeft het FelixPakhuis in korte tijd een belangrijke plaats veroverd in de socioculturele wereld van Antwerpen.');
                $("#hotspotinfo p:nth-of-type(2)").html('Het Pakhuis heeft ook een restaurant. Het figureerde twee maanden geleden in de shortlist van de Concept Restaurant Awards, een organisatie van de Belgische Leaders Club, een denktank van oprichters van (keten)restaurants en hun partners.');
                $("#hotspotinfo p:nth-of-type(3)").html('Het beschermde FelixPakhuis is een multiconcept dat bestaat uit de living (de bar en het restaurant), het terras (aan het Willemdok) en het salon waar optredens en evenementen tot 400 personen kunnen plaatsvinden.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Godefriduskaai 30, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#a4d07b");
                $(".infohex").css("display", "none");
                break;
            case "RobbyAerts":
                $("#infonum").text("10").css("color", "#a4d07b");
                $("#info").text("Robby Aerts Interieur");
                $("#hotspotinfo p:nth-of-type(1)").html('Robby Aerts is in klassevolle interieur designer en heeft 5 jaar geleden zijn eigen zaak opgericht genaamd Robby Aerts Interieur.');
                $("#hotspotinfo p:nth-of-type(2)").html('Hier vindt u een combinatie van pure vormen en natuurlijke materialen die het interieur tot een hedendaagse en luxueuze gezelligheid brengt.');
                $("#hotspotinfo p:nth-of-type(3)").html('Laat je volledig inspireren door de talrijke ontwerpen die Robby Aerts je te bieden heeft!');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Kommekensstraat 16, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#a4d07b");
                $(".infohex").css("display", "none");
                break;
            case "RoosMartens":
                $("#infonum").text("11").css("color", "#a4d07b");
                $("#info").text("Roos Mertens Interieur");
                $("#hotspotinfo p:nth-of-type(1)").html('Na 25 jaar achter gesloten deuren te hebben gewerkt, is de showroom geopend in het noorden van Antwerpen tegenover het Felixpakhuis. Hier wordt het veelzijdig aanbod getoond van stalen: tijdloos, hedendaags of klassiek.');
                $("#hotspotinfo p:nth-of-type(2)").html('Iedereen, van particulier tot professional, die op zoek is naar mooie materialen die met de grootste zorg en vakkundigheid en volgens de regels van de kunst verwerkt worden tot raam-, vloer- en wandbekleding kan hier terecht.');
                $("#hotspotinfo p:nth-of-type(3)").html('Door hun opleiding als interieurarchitect en hun jarenlange ervaring is deze zaak ondertussen een vaste waarde geworden voor collega’s architecten en interieurarchitecten die alleen of samen met hun opdrachtgever hun showroom bezoeken om in alle discretie een totaalpakket te kunnen samenstellen.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Oude Leeuwenrui 36, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#a4d07b");
                $(".infohex").css("display", "none");
                break;
            case "MAS":
                $("#infonum").text("12").css("color", "#a4d07b");
                $("#info").text("Museum aan de stroom");
                $("#hotspotinfo p:nth-of-type(1)").html('Sinds de opening vier jaar geleden een gevestigde waarde in de stad. De stadsbewoners moesten even wennen aan de moderne architectuur van het gebouw, maar intussen zouden ze het niet meer kunnen wegdenken.');
                $("#hotspotinfo p:nth-of-type(2)").html('Het museum heeft een hele belangrijke rol gespeeld in de ontwikkeling van de buurt. Op een aantal jaar tijd kwamen er heel wat nieuwe zaken bij én intussen is het Eilandje één van de hipste buurten dan de stad. ');
                $("#hotspotinfo p:nth-of-type(3)").html('Mensen zonder hoogtevrees kunnen genieten van het geweldige uitzicht op het dak. Wie liever met zijn voeten op de grond blijft, kan het kunstwerk Dead Skull van Luc Tuymans bewonderen op het plein voor het museum.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Hanzestedenplaats 1, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#a4d07b");
                $(".infohex").css("display", "none");
                break;
            //Overnachten    
            case "YellowSubmarine":
                $("#infonum").text("13").css("color", "#405b62");
                $("#info").text("Yellow Submarine B&B");
                $("#hotspotinfo p:nth-of-type(1)").html('B&B Yellow Submarine ligt in het centrum van Antwerpen, op 600 meter van de Grote Markt. Het heeft kamers met een minimalistisch interieur en gratis WiFi.');
                $("#hotspotinfo p:nth-of-type(2)").html('B&B Yellow Submarine heeft kamers met originele kenmerken die zijn uitgerust met een flatscreentelevisie met kabelzenders, een minibar, een Nespresso-apparaat en thee van het merk Rituals. U kunt genieten van een ontbijt bestaande uit vers brood, ontbijtgranen, vers fruit en koffie en de keuze uit een omelet of een gekookt ei. Een glutenvrij of lactosevrij ontbijt is op aanvraag beschikbaar.');
                $("#hotspotinfo p:nth-of-type(3)").html('De Creative Coffee Bar op de begane grond serveert koffie en zoete lekkernijen en biedt gratis kranten. De tramhalte Klapdorp ligt op slechts 250 meter van Bed & Breakfast Yellow Submarine. Het Modemuseum vindt u op minder dan 15 minuten lopen en het MAS Museum ligt op 350 meter afstand.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Falconplein 51, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#405b62");
                $(".infohex").css("display", "none");
                break;
            case "HomeFeek":
                $("#infonum").text("14").css("color", "#405b62");
                $("#info").text("Home@Feek");
                $("#hotspotinfo p:nth-of-type(1)").html('Home@Feek ligt op een rustige locatie in het oude centrum van Antwerpen en heeft 3 trendy en stijlvolle suites. Geniet van de luxe faciliteiten, zoals een regendouche, een spabad en een eigen terras.');
                $("#hotspotinfo p:nth-of-type(2)").html('De elegante suites zijn het nieuwste concept van designer Frederik van Heereveld. Ze zijn ontworpen met aandacht voor detail en unieke materialen. De rustgevende inrichting garandeert een goede nachtrust. Daarnaast loopt u in slechts 5 minuten naar de Grote Markt.');
                $("#hotspotinfo p:nth-of-type(3)").html('Bezienswaardigheden die nabij de verblijfplaats liggen, zijn het mooi vernieuwde Schipperskwartier, het Museum aan de Stroom en de trendy jachthaven. Je kan de stad makkelijk te voet intrekken én om nog meer van Antwerpen te ontdekken kan je gebruikmaken van de fietsdienst van Home @ Feek.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Klapdorp 52, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#405b62");
                $(".infohex").css("display", "none");
                break;
            case "WitteLelie":
                $("#infonum").text("15").css("color", "#405b62");
                $("#info").text("Hotel De Witte Lelie");
                $("#hotspotinfo p:nth-of-type(1)").html('Hotel De Witte Lelie is een klein boetiekhotel in het centrum van Antwerpen. Er is gratis WiFi en een terras met een romantische tuin.');
                $("#hotspotinfo p:nth-of-type(2)").html('Het hotel biedt suites met airconditioning en een eigen badkamer. Het ontbijt wordt tijdens de warmere maanden geserveerd op het terras.');
                $("#hotspotinfo p:nth-of-type(3)").html('De Witte Lelie bevindt zich op slechts 5 minuten lopen van de Grote Markt. De Groenplaats is 8 minuten. Openbaar vervoer is beschikbaar in de buurt.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: Keizerstraat 16, 2000 Antwerpen');
                $("#hotspotinfo").css("background-color", "#405b62");
                $(".infohex").css("display", "none");
                break;
            case "LeonardoHotel":
                $("#infonum").text("16").css("color", "#405b62");
                $("#info").text("Leonardo Hotel Antwerp");
                $("#hotspotinfo p:nth-of-type(1)").html('Leonardo Hotel Antwerpen biedt designkamers in een historisch pand in de Diamantenwijk, op 50 meter van het centraal station van Antwerpen en de Antwerpse dierentuin. Het beschikt over een eigentijdse bar waar Belgisch bier wordt geschonken. In de lobby staan 2 computers met gratis internet.');
                $("#hotspotinfo p:nth-of-type(2)").html('De kamers zijn ingericht in warme tinten en rijke stoffen. De eigen badkamers zijn uitgerust met een bad of een douche. Er wordt ook dagelijks een ontbijtbuffet geserveerd met roerei, versgebakken brood en zoete deegwaren. In de zomermaanden kunt u op het zonnige terras van uw ontbijt genieten.');
                $("#hotspotinfo p:nth-of-type(3)").html('Op korte loopafstand van het hotel vindt u tal van eetgelegenheden.Leonardo Hotel Antwerpen ligt op 15 minuten lopen van het plein de Groenplaats en op slechts 5 minuten lopen van de winkelstraat de Meir met zijn vele boetiekjes, bars en restaurants. Het Stadsplein van Antwerpen met het stadhuis ligt op 20 minuten lopen van het hotel.');
                $("#hotspotinfo p:nth-of-type(4)").html('Adres: De Keyserlei 59, 2018 Antwerpen');
                $("#hotspotinfo").css("background-color", "#405b62");
                $(".infohex").css("display", "none");
        }
    });
    //Disable Google Map Scroll
        $("#locations").addClass("scrolloff"); 
        $("#googlemaps").on("click", function () {
            $("#locations").removeClass("scrolloff");
        });
        $("#locations").mouseleave(function () {
            $("#locations").addClass("scrolloff"); 
        });
};
$("document").ready(main);