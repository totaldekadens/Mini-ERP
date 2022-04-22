# Mini-ERP
Del 2 Inlämningsuppgift 2 i kursen Utveckling mot e-handelsplattformar

Del 1 hittar du här: https://github.com/totaldekadens/Wordpress---Goalieshoppen

## Extern applikation
Skapa en fristående, extern webbapplikation med data från WordPress & WooCommerce REST API.
Denna applikation simulerar ett affärssystem (eller en mobil app).
I den första synkroniseringen ("synken") läses data in från eHandelsplattformen till affärssystemet med hjälp av WooCommerce REST API (/wp-json/wc/v3/.....). Ingen databas behövs utan data lagras i lokalt minne (local storage). Ett tips är att använda sig av Requests som är ett HTTP bibliotek för att skicka requests.
Datan visas upp på olika sidor som beskrivs nedan:
 
* 5 produkter i två olika kategorier. 
      * Varje produkt behöver en produktbild, produktnamn, pris, produkt URL och en kortare beskrivning.
* 2 kortare blogginlägg (posts).
* 2 ordrar från två olika kunder. Varje order behöver:
    - order id
    - status
    - totalsumma
    - datum
