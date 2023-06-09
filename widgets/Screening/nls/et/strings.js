﻿///////////////////////////////////////////////////////////////////////////
// Copyright ï¿½ Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "_widgetLabel": "Sõelumine",
  "geometryServicesNotFound": "Geomeetriateenus pole saadaval.",
  "unableToDrawBuffer": "Puhvrit ei saa tõmmata. Proovige uuesti.",
  "invalidConfiguration": "Sobimatu konfiguratsioon",
  "clearAOIButtonLabel": "Alusta uuesti",
  "noGraphicsShapefile": "Üleslaetud Shape-failis pole graafikat.",
  "zoomToLocationTooltipText": "Suumi asukohta",
  "noGraphicsToZoomMessage": "Sissesuumimiseks ei leitud graafikat.",
  "placenameWidget": {
    "placenameLabel": "Asukoha otsimine"
  },
  "drawToolWidget": {
    "useDrawToolForAOILabel": "Valige joonistusrežiim",
    "toggleSelectability": "Klõpsake valitavuse sisse-ja väljalülitamiseks",
    "chooseLayerTitle": "Valige selekteeritavad (valitavad) kihid",
    "selectAllLayersText": "Vali kõik",
    "layerSelectionWarningTooltip": "AOI loomiseks peab olema valitud vähemalt üks kiht",
    "selectToolLabel": "Vali tööriist"
  },
  "shapefileWidget": {
    "shapefileLabel": "Laadi üles pakitud Shape-fail",
    "uploadShapefileButtonText": "Laadi üles",
    "unableToUploadShapefileMessage": "Shape-faili ei saa üles laadida."
  },
  "coordinatesWidget": {
    "selectStartPointFromSearchText": "Määrake alguspunkt",
    "addButtonTitle": "Lisa",
    "deleteButtonTitle": "Eemalda",
    "mapTooltipForStartPoint": "Alguspunkti määramiseks klõpsake kaardil",
    "mapTooltipForUpdateStartPoint": "Alguspunkti värskendamiseks klõpsake kaardil",
    "locateText": "Paiguta",
    "locateByMapClickText": "Valige algkoordinaadid",
    "enterBearingAndDistanceLabel": "Sisestage kurss ja vahemaa alguspunktist",
    "bearingTitle": "Kurss",
    "distanceTitle": "Vahemaa",
    "planSettingTooltip": "Plaani seaded",
    "invalidLatLongMessage": "Sisestage kehtivad väärtused."
  },
  "bufferDistanceAndUnit": {
    "bufferInputTitle": "Puhvri ulatus (valikuline)",
    "bufferInputLabel": "Kuva tulemused järgmise kohta",
    "bufferDistanceLabel": "Puhvri ulatus",
    "bufferUnitLabel": "Puhvri ühik",
    "bufferRangeMessage": "Puhvri ulatus on vahemikust väljas,<br/> sisestage väärtus vahemikus 0 kuni ${distance} ${unit}"
  },
  "traverseSettings": {
    "bearingLabel": "Kurss",
    "lengthLabel": "Pikkus",
    "addButtonTitle": "Lisa",
    "deleteButtonTitle": "Eemalda",
    "deleteBearingAndLengthLabel": "Eemalda koordinaadid ja pikkus",
    "addButtonLabel": "Lisa koordinaadid ja pikkus"
  },
  "planSettings": {
    "expandGridTooltipText": "Laienda ruudustik",
    "collapseGridTooltipText": "Ahenda ruudustik",
    "directionUnitLabelText": "Juhiste ühik",
    "distanceUnitLabelText": "Vahemaa ja pikkuse ühikud",
    "planSettingsComingSoonText": "Varsti kättesaadav"
  },
  "newTraverse": {
    "invalidBearingMessage": "Vigane kurss.",
    "invalidLengthMessage": "Vigane pikkus.",
    "negativeLengthMessage": "Negatiivne pikkus"
  },
  "reportsTab": {
    "aoiAreaText": "AOI pindala",
    "downloadButtonTooltip": "Allalaadimine",
    "printButtonTooltip": "Prindi",
    "uploadShapefileForAnalysisText": "Laadi üles Shape-fail analüüsis kaasamiseks",
    "uploadShapefileForButtonText": "Sirvi",
    "downloadLabelText": "Vali formaat:",
    "downloadBtnText": "Allalaadimine",
    "noDetailsAvailableText": "Tulemusi ei leitud",
    "featureCountText": "Koguarv",
    "featureAreaText": "Pindala",
    "featureLengthText": "Pikkus",
    "attributeChooserTooltip": "Valige kuvatavad atribuudid",
    "csv": "CSV",
    "filegdb": "Faili geoandmebaas",
    "shapefile": "Shape-fail",
    "noFeaturesFound": "Valitud failiformaadi jaoks pole tulemusi",
    "selectReportFieldTitle": "Vali väljad",
    "noFieldsSelected": "Ühtegi välja pole valitud",
    "intersectingFeatureExceedsMsgOnCompletion": "Ühe või enama kihi puhul on ületatud maksimaalne kirjete arv.",
    "unableToAnalyzeText": "Ei saa analüüsida, maksimaalne kirjete arv on ületatud.",
    "errorInPrintingReport": "Aruannet ei saa printida. Kontrollige, kas aruande seaded on õiged.",
    "aoiInformationTitle": "Huviala (AOI) info",
    "summaryReportTitle": "Kokkuvõte",
    "notApplicableText": "Pole saadaval",
    "downloadReportConfirmTitle": "Kinnitage allalaadimine",
    "downloadReportConfirmMessage": "Kas soovite kindlasti alla laadida?",
    "noDataText": "Andmed puuduvad",
    "createReplicaFailedMessage": "Järgmiste kihtide allalaadimine nurjus : <br/> ${layerNames}",
    "extractDataTaskFailedMessage": "Allalaadimine nurjus.",
    "printLayoutLabelText": "Paigutus",
    "printBtnText": "Prindi",
    "printDialogHint": "Märkus: aruande pealkirja ja kommentaare saab redigeerida aruande eelvaates.",
    "unableToDownloadFileGDBText": "Faili geoandmebaasi ei saa punkt- või joonasukohti sisaldava AOI jaoks alla laadida",
    "unableToDownloadShapefileText": "Shape-faili ei saa punkt- või joonasukohti sisaldava AOI jaoks alla laadida",
    "analysisAreaUnitLabelText": "Kuva ala tulemid:",
    "analysisLengthUnitLabelText": "Kuva pikkuse tulemid:",
    "analysisUnitButtonTooltip": "Valige ühikud analüüsiks",
    "analysisCloseBtnText": "Sulge",
    "areaSquareFeetUnit": "ruutjalga",
    "areaAcresUnit": "aakrit",
    "areaSquareMetersUnit": "ruutmeetrit",
    "areaSquareKilometersUnit": "ruutkilomeetrit",
    "areaHectaresUnit": "hektarit",
    "areaSquareMilesUnit": "Ruutmiili",
    "lengthFeetUnit": "ft",
    "lengthMilesUnit": "mi",
    "lengthMetersUnit": "m",
    "lengthKilometersUnit": "km",
    "hectaresAbbr": "hektarit",
    "squareMilesAbbr": "Ruutmiili",
    "layerNotVisibleText": "Ei saa analüüsida. Kiht on välja lülitatud või asub väljaspool mõõtkava nähtavuse ulatust.",
    "refreshBtnTooltip": "Värskenda raportit",
    "featureCSVAreaText": "Lõikuv ala",
    "featureCSVLengthText": "Lõikuv pikkus",
    "errorInFetchingPrintTask": "Printimisel ilmnes tõrge. Proovige uuesti.",
    "selectAllLabel": "Vali kõik",
    "errorInLoadingProjectionModule": "Viga projektsioonimooduli sõltuvuste laadimisel. Proovige faili uuesti allalaadimist.",
    "expandCollapseIconLabel": "Lõikub objektidega",
    "intersectedFeatureLabel": "Ristmiku objekti detail",
    "valueAriaLabel": "Väärtus",
    "countAriaLabel": "Koguarv",
    "layerNameWithFeatureCount": "${layerName} kiht ${featureCount} lõikuva objektiga",
    "sortingSettingsLegend": "Sortimisseaded",
    "ascendingLabel": "Kasvav",
    "descendingLabel": "Kahanev",
    "sortFieldSelectLabel": "Vali sortimisväli",
    "errorLabel": "Serveris ilmnes ajutine tõrge ja päringut ei saanud lõpule viia.",
    "statisticsCountLabel": "Statistika: arv",
    "statisticsTotalLengthLabel": "Statistika: kogupikkus",
    "statisticsTotalAreaLabel": "Statistika: kogupindala",
    "timedOutErrorLabel": "Serveri ajalõpp",
    "sortHint": "Vihje. Valitud väljad sorditakse ainult juhul, kui objektide/gruppide arv on suurem kui 1."
  }
});