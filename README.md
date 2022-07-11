# Mini-ERP
Del 2 Inlämningsuppgift 2 i kursen Utveckling mot e-handelsplattformar

Del 1 hittar du här: https://github.com/totaldekadens/Wordpress---Goalieshoppen

## Extern applikation
Skapa en fristående, extern webbapplikation med data från WordPress & WooCommerce REST API.
Denna applikation simulerar ett affärssystem (eller en mobil app).
I den första synkroniseringen ("synken") läses data in från eHandelsplattformen till affärssystemet med hjälp av WooCommerce REST API (/wp-json/wc/v3/.....). Ingen databas behövs utan data lagras i lokalt minne (local storage). Ett tips är att använda sig av Requests som är ett HTTP bibliotek för att skicka requests.
Datan visas upp på olika sidor som beskrivs nedan:
 
* 5 produkter i två olika kategorier.  ✅
     - Varje produkt behöver en produktbild, produktnamn, pris, produkt URL och en kortare beskrivning.
* 2 kortare blogginlägg (posts). ✅
* 2 ordrar från två olika kunder. Varje order behöver: ✅
    - order id
    - status
    - totalsumma
    - datum


## Sneak peak: 

![Beställningar](https://user-images.githubusercontent.com/90898648/178287373-3a3f4970-0cdb-46ed-b0a9-29fa76563b05.JPG)

![Beställningar - kundinfo](https://user-images.githubusercontent.com/90898648/178287395-e8af7479-4a51-41bf-85ad-211510f0b0bb.JPG)

![Inlägg](https://user-images.githubusercontent.com/90898648/178287420-b4434218-ce39-4d30-8711-64ec459eaa2b.JPG)

![Produkter](https://user-images.githubusercontent.com/90898648/178287478-a07cdd2f-9567-4eda-9af6-547833329274.JPG)

![Media](https://user-images.githubusercontent.com/90898648/178287440-01c584f9-00cf-444c-94ca-6fbfca2e9f07.JPG)

