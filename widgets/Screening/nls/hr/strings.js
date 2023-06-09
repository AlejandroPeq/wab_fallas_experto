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
  "_widgetLabel": "Probir",
  "geometryServicesNotFound": "Geometrijska usluga nije dostupna.",
  "unableToDrawBuffer": "Nije moguće nacrtati pojas. Pokušajte ponovno.",
  "invalidConfiguration": "Nevaljana konfiguracija.",
  "clearAOIButtonLabel": "Kreni ispočetka",
  "noGraphicsShapefile": "Učitani shapefile na sadrži grafike.",
  "zoomToLocationTooltipText": "Uvećaj na lokaciju",
  "noGraphicsToZoomMessage": "Nema pronađenih grafika za uvećanje.",
  "placenameWidget": {
    "placenameLabel": "Tražite lokaciju"
  },
  "drawToolWidget": {
    "useDrawToolForAOILabel": "Odabir načina crtanja",
    "toggleSelectability": "Kliknite za prebacivanje mogućnosti odabira",
    "chooseLayerTitle": "Izaberite slojeve koji se mogu odabrati",
    "selectAllLayersText": "Odaberi sve",
    "layerSelectionWarningTooltip": "Treba odabrati barem jedan sloj za izradu područja interesa (AOI)",
    "selectToolLabel": "Odabir alata"
  },
  "shapefileWidget": {
    "shapefileLabel": "Učitajte komprimirani shapefile",
    "uploadShapefileButtonText": "Učitaj",
    "unableToUploadShapefileMessage": "Nije moguće učitati shapefile."
  },
  "coordinatesWidget": {
    "selectStartPointFromSearchText": "Odredite početnu točku",
    "addButtonTitle": "Dodaj",
    "deleteButtonTitle": "Ukloni",
    "mapTooltipForStartPoint": "Kliknite na kartu za određivanje početne točke",
    "mapTooltipForUpdateStartPoint": "Kliknite na kartu za ažuriranje početne točke",
    "locateText": "Pronađi",
    "locateByMapClickText": "Odaberite početne koordinate",
    "enterBearingAndDistanceLabel": "Unesite azimut i udaljenost od početne točke",
    "bearingTitle": "Azimut",
    "distanceTitle": "Udaljenost",
    "planSettingTooltip": "Postavke plana",
    "invalidLatLongMessage": "Unesite valjane vrijednosti."
  },
  "bufferDistanceAndUnit": {
    "bufferInputTitle": "Udaljenost pojasa (dodatno)",
    "bufferInputLabel": "Prikaži rezultate unutar",
    "bufferDistanceLabel": "Veličina pojasa",
    "bufferUnitLabel": "Jedinica pojasa",
    "bufferRangeMessage": "Udaljenost međuspremnika je izvan raspona<br/>, unesite vrijednost između 0 i ${distance} ${unit}"
  },
  "traverseSettings": {
    "bearingLabel": "Azimut",
    "lengthLabel": "Duljina",
    "addButtonTitle": "Dodaj",
    "deleteButtonTitle": "Ukloni",
    "deleteBearingAndLengthLabel": "Ukloni usmjerenje i duljinu retka",
    "addButtonLabel": "Dodaj usmjerenje i duljinu"
  },
  "planSettings": {
    "expandGridTooltipText": "Proširi mrežu",
    "collapseGridTooltipText": "Sažmi mrežu",
    "directionUnitLabelText": "Jedinica smjera",
    "distanceUnitLabelText": "Jedinice udaljenosti i dužine",
    "planSettingsComingSoonText": "Dolazi uskoro"
  },
  "newTraverse": {
    "invalidBearingMessage": "Nevažeći azimut.",
    "invalidLengthMessage": "Nevažeća duljina.",
    "negativeLengthMessage": "Negativna dužina"
  },
  "reportsTab": {
    "aoiAreaText": "Područje interesa (AOI)",
    "downloadButtonTooltip": "Preuzmi",
    "printButtonTooltip": "Ispis",
    "uploadShapefileForAnalysisText": "Učitaj shapefile za uključivanje u analizu",
    "uploadShapefileForButtonText": "Pregledaj",
    "downloadLabelText": "Odaberi format:",
    "downloadBtnText": "Preuzmi",
    "noDetailsAvailableText": "Nema rezultata",
    "featureCountText": "Broj",
    "featureAreaText": "Područje",
    "featureLengthText": "Duljina",
    "attributeChooserTooltip": "Odaberite atribute za prikaz",
    "csv": "CSV",
    "filegdb": "Geobaza podataka",
    "shapefile": "Shapefile",
    "noFeaturesFound": "Nema rezultata za odabrani format datoteke",
    "selectReportFieldTitle": "Odaberi polja",
    "noFieldsSelected": "Nema odabranih polja",
    "intersectingFeatureExceedsMsgOnCompletion": "Dosegnut je maksimalni broj zapisa za jedan ili više slojeva.",
    "unableToAnalyzeText": "Nije moguće analizirati, dosegnut je maksimalni broj zapisa.",
    "errorInPrintingReport": "Nije moguće ispisati izvješće. Provjerite jesu li postavke izvješća valjane.",
    "aoiInformationTitle": "Informacije o područjima interesa (AOI)",
    "summaryReportTitle": "Sažetak",
    "notApplicableText": "Nije dostupno",
    "downloadReportConfirmTitle": "Potvrdi preuzimanje",
    "downloadReportConfirmMessage": "Jeste li sigurni da želite preuzeti?",
    "noDataText": "Nema podataka",
    "createReplicaFailedMessage": "Radnja preuzimanja nije uspjela za sljedeće slojeve: <br/> ${layerNames}",
    "extractDataTaskFailedMessage": "Radnja preuzimanja nije uspjela.",
    "printLayoutLabelText": "Izgled",
    "printBtnText": "Ispis",
    "printDialogHint": "Napomena: naziv izvješća i komentari mogu se urediti u pretpregledu izvješća.",
    "unableToDownloadFileGDBText": "Geobaza podataka ne može se preuzeti za područja interesa koja sadrže točkaste ili linijske lokacije",
    "unableToDownloadShapefileText": "Shapefile se ne može preuzeti za područja interesa koja sadrže točkaste ili linijske lokacije",
    "analysisAreaUnitLabelText": "Prikaži područje rezultata u :",
    "analysisLengthUnitLabelText": "Prikaži duljinu rezultata u :",
    "analysisUnitButtonTooltip": "Izaberite jedinice za analizu",
    "analysisCloseBtnText": "Zatvori",
    "areaSquareFeetUnit": "Kvadratne stope",
    "areaAcresUnit": "Rali",
    "areaSquareMetersUnit": "Kvadratni metri",
    "areaSquareKilometersUnit": "Kvadratni kilometri",
    "areaHectaresUnit": "Hektari",
    "areaSquareMilesUnit": "Kvadratne milje",
    "lengthFeetUnit": "Stope",
    "lengthMilesUnit": "Milje",
    "lengthMetersUnit": "Metri",
    "lengthKilometersUnit": "Kilometri",
    "hectaresAbbr": "hektari",
    "squareMilesAbbr": "Kvadratne milje",
    "layerNotVisibleText": "Nije moguće analizirati. Sloj je isključen ili je izvan raspona vidljivosti mjerila.",
    "refreshBtnTooltip": "Osvježi izvještaj",
    "featureCSVAreaText": "Područje presijecanja",
    "featureCSVLengthText": "Duljina presijecanja",
    "errorInFetchingPrintTask": "Pogreška prilikom dohvaćanja informacija o zadatku ispisa. Pokušajte ponovno.",
    "selectAllLabel": "Odaberi sve",
    "errorInLoadingProjectionModule": "Pogreška prilikom učitavanja zavisnosti modula za projekciju. Pokušajte ponovo preuzeti datoteku.",
    "expandCollapseIconLabel": "Geoobjekti koji se presijecaju",
    "intersectedFeatureLabel": "Pojedinosti o geoobjektima koji se presijecaju",
    "valueAriaLabel": "Vrijednost",
    "countAriaLabel": "Zbroj",
    "layerNameWithFeatureCount": "${layerName} sloj sa ${featureCount} geoobjekta koji se presijecaju",
    "sortingSettingsLegend": "Postavke sortiranja",
    "ascendingLabel": "Uzlazno",
    "descendingLabel": "Silazno",
    "sortFieldSelectLabel": "Odaberi polje za sortiranje",
    "errorLabel": "Poslužitelj je naišao na privremenu grešku i nije mogao dovršiti upit.",
    "statisticsCountLabel": "Statistike: Broj",
    "statisticsTotalLengthLabel": "Statistike: Ukupna duljina",
    "statisticsTotalAreaLabel": "Statistike: Ukupna površina",
    "timedOutErrorLabel": "Poslužitelju je isteklo vrijeme",
    "sortHint": "Savjet: Odabrana polja sortiraju se samo ako je broj geoobjekata/grupa veći od 1."
  }
});