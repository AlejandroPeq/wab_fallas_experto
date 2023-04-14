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
  "units": {
    "areaSquareFeetUnit": "Kvadratfod",
    "areaAcresUnit": "Acres",
    "areaSquareMetersUnit": "Kvadratmeter",
    "areaSquareKilometersUnit": "Kvadratkilometer",
    "areaHectaresUnit": "Hektarer",
    "areaSquareMilesUnit": "Kvadratmiles",
    "lengthFeetUnit": "Fod",
    "lengthMilesUnit": "Miles",
    "lengthMetersUnit": "Meter",
    "lengthKilometersUnit": "Kilometer"
  },
  "analysisTab": {
    "analysisTabLabel": "Analysis",
    "selectAnalysisLayerLabel": "Analyselag",
    "addLayerLabel": "Tilføj lag",
    "noValidLayersForAnalysis": "Ingen gyldige lag fundet i det valgte webkort.",
    "noValidFieldsForAnalysis": "Ingen gyldige felter fundet i det valgte webkort. Fjern det valgte lag.",
    "allowGroupingLabel": "Grupper objekter efter felt med samme værdi",
    "groupingHintDescription": "Tip: Som standard grupperes alle objekter med samme værdi for de markerede felter, så de fremstår som en enkelt post i rapporten. Deaktiver gruppering efter de samme attributer for at vise en post for hvert objekt i stedet.",
    "addLayersHintText": "Tip: Vælg de lag og felter, der skal medtages i analysen og rapporten",
    "queryCapabilityHintText": "Kun lag med forespørgselsfunktioner vil blive angivet",
    "addLayerNameTitle": "Navn på lag",
    "addFieldsLabel": "Tilføj felt",
    "addFieldsPopupTitle": "Vælg felter",
    "addFieldsNameTitle": "Feltnavne",
    "aoiToolsLegendLabel": "Interesseområde-værktøjer",
    "aoiToolsDescriptionLabel": "Vælg og afmærk de værktøjer, der er tilgængelige for oprettelse af interesseområdet.",
    "placenameLabel": "Stednavn",
    "drawToolsLabel": "Vælg tegneværktøjer",
    "uploadShapeFileLabel": "Overfør en shapefil",
    "coordinatesLabel": "Koordinater",
    "coordinatesDrpDwnHintText": "Tip: Vælg enhed til visning af de angivne traverser",
    "coordinatesBearingDrpDwnHintText": "Tip: Vælg pejling til visning af de angivne traverser",
    "allowShapefilesUploadLabel": "Tillad brugere at overføre de shapefiler, der skal medtages i analysen",
    "allowShapefilesUploadLabelHintText": "Tip: Tilføj en indstilling til rapportfanen, hvor brugerne kan overføre deres egne data som en shapefil, der kan medtages i analyserapporten",
    "allowVisibleLayerAnalysisLabel": "Analysér eller rapportér ikke resultaterne for lag, der ikke er synlige",
    "allowVisibleLayerAnalysisHintText": "Tip: Lag, der er slået fra, eller som ikke er synlige på grund af indstillingerne for målestokkens synlighedsområde, vil ikke blive analyseret eller medtaget i de udskrevne eller downloadede resultater.",
    "areaUnitsLabel": "Enheder for analyseresultater (Område)",
    "lengthUnitsLabel": "Enheder for analyseresultater (Længde)",
    "maxFeatureForAnalysisLabel": "Maksimalt antal objekter, der kan analyseres",
    "maxFeatureForAnalysisHintText": "Tip: Angiv de maksimale antal objekter, der kan medtages i analysen",
    "searchToleranceLabelText": "Søg tolerance",
    "searchToleranceHint": "Tip: Søgetolerancen anvendes, når der analyseres punkt- eller linjeangivelser",
    "placenameButtonText": "Stednavn",
    "drawToolsButtonText": "Tegn",
    "shapefileButtonText": "Shapefil",
    "coordinatesButtonText": "Koordinater",
    "invalidLayerErrorMsg": "Konfigurér felter for",
    "drawToolSelectableLayersLabel": "Vælg lag, der kan markeres",
    "drawToolSelectableLayersHint": "Tip: Vælg de lag, der indeholder de objekter, der kan vælges ved hjælp af Vælg-tegneværktøjet",
    "drawToolsSettingsFieldsetLabel": "Tegneværktøjer",
    "drawToolPointLabel": "Punkt",
    "drawToolPolylineLabel": "Polylinje",
    "drawToolExtentLabel": "Udstrækning",
    "drawToolPolygonLabel": "Polygon",
    "drawToolCircleLabel": "Cirkel",
    "selectDrawToolsText": "Vælg de tegneværktøjer, der er tilgængelige for oprettelse af interesseområdet",
    "selectingDrawToolErrorMessage": "Vælg mindst ét tegneværktøj eller valglag for at anvende Tegneværktøjer til AOI-værktøjer.",
    "sortingSettingsLegend": "Sorteringsindstillinger",
    "ascendingLabel": "Stigende",
    "descendingLabel": "Faldende",
    "sortFieldSelectLabel": "Vælg sorteringsfelt",
    "statisticsCountLabel": "Statistik: antal",
    "statisticsTotalLengthLabel": "Statistik: samlet længde",
    "statisticsTotalAreaLabel": "Statistik: samlet område"
  },
  "downloadTab": {
    "downloadLegend": "Download-indstillinger",
    "reportLegend": "Rapportindstillinger",
    "downloadTabLabel": "Hent",
    "syncEnableOptionLabel": "Vektorlag",
    "syncEnableOptionHint": "Tip: Vælg de lag, der kan downloades, og angiv de formater, hvori hvert lag er tilgængeligt. Downloadede datasæt vil omfatte de objekter, der gennemskærer interesseområdet.",
    "syncEnableOptionNote": "Bemærk: Filgeodatabase- og shapefil-downloads kræver synkroniseringsaktiverede vektorlag. Shapefilformatet understøttes kun af \"hostede\" vektorlag i ArcGIS Online.",
    "extractDataTaskOptionLabel": "Geoprocesseringstjenesten Udtræk dataopgave",
    "extractDataTaskOptionHint": "Tip: Brug en publiceret Udtræk dataopgave-geoprocesseringstjeneste til at downloade objekter, der gennemskærer interesseområdet i filgeodatabase- eller shapefil-format.",
    "cannotDownloadOptionLabel": "Deaktivér download",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Navn på lag",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Filgeodatabase",
      "ShapefileFormatLabel": "Shapefil",
      "allowDownloadLabel": "Tillad download"
    },
    "setButtonLabel": "Indstil",
    "GPTaskLabel": "Angiv URL'en til geoprocesseringstjenesten",
    "printGPServiceLabel": "Udskriv tjeneste-URL",
    "setGPTaskTitle": "Angiv den krævede geoprocesseringstjeneste-URL",
    "logoLabel": "Logo",
    "logoChooserHint": "Tip: Klik på billedikonet for at redigere det logo, der vises i rapportens øverste venstre hjørne",
    "footnoteLabel": "Fodnote",
    "columnTitleColorPickerLabel": "Titelfarve for rapportkolonne",
    "reportTitleLabel": "Rapporttitel",
    "displaySummaryLabel": "Vis resumé",
    "hideZeroValueRowLabel": "Skjul rækker med værdien 0 for alle analysefelter",
    "hideNullValueRowLabel": "Skjul rækker uden dataværdi (nul eller tom) for alle analysefelter",
    "errorMessages": {
      "invalidGPTaskURL": "Ugyldig geoprocesseringstjeneste. Vælg en geoprocesseringstjeneste, der indeholder en Udtræk dataopgave.",
      "noExtractDataTaskURL": "Vælg en geoprocesseringstjeneste, der indeholder en Udtræk dataopgave.",
      "duplicateCustomOption": "Dobbelt forekomst af posten ${duplicateValueSizeName}.",
      "invalidLayoutWidth": "Ugyldig bredde indtastet for ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Ugyldig højde indtastet for ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Ugyldig sideenhed valgt for ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Der opstod et problem under hentning af følgeopgavens dimensionsoplysninger. Prøv igen.",
      "failtofetchbuddyTaskName": "Der opstod et problem under hentning af følgeopgavens navn. Prøv igen.",
      "failtofetchChoiceList": "Der opstod et problem under hentning af valgliste fra udskrivningstjenesten. Prøv igen.",
      "invalidWidth": "Ugyldig widget.",
      "invalidHeight": "Ugyldig højde."
    },
    "addCustomLayoutTitle": "Tilføj brugerdefineret layout",
    "customLayoutOptionHint": "Tip: Tilføj layout fra din udskrivningstjeneste til listen over udskrivningsindstillinger.",
    "reportDefaultOptionLabel": "Standardlayout",
    "pageSizeUnits": {
      "millimeters": "Millimeter",
      "points": "Punkter"
    },
    "noDataTextRepresentation": "Ingen dataværdi",
    "naTextRepresentation": "Ikke en anvendelig værdi",
    "noDataDefaultText": "Ingen data",
    "notApplicableDefaultText": "I/T"
  },
  "generalTab": {
    "generalTabLabel": "Generelt",
    "tabLabelsLegend": "Paneletiketter",
    "tabLabelsHint": "Tip: Angiv etiketter",
    "AOITabLabel": "Interesseområde-panel",
    "ReportTabLabel": "Rapportpanel",
    "bufferSettingsLegend": "Bufferindstillinger",
    "defaultBufferDistanceLabel": "Standardbufferafstand",
    "defaultBufferUnitsLabel": "Bufferenheder",
    "generalBufferSymbologyHint": "Tip: Den symbologi, der skal anvendes for at angive bufferområdet omkring det definerede interesseområde",
    "aoiGraphicsSymbologyLegend": "Interesseområde-symbologi",
    "aoiGraphicsSymbologyHint": "Tip: Den symbologi, der skal benyttes til at angive punkt-, linje- og polygon-interesserområder",
    "pointSymbologyLabel": "Punkt",
    "previewLabel": "Eksempel",
    "lineSymbologyLabel": "Linje",
    "polygonSymbologyLabel": "Polygon",
    "aoiBufferSymbologyLabel": "Buffersymbologi",
    "pointSymbolChooserPopupTitle": "Adresse- eller punktplaceringssymbol",
    "polygonSymbolChooserPopupTitle": "Polygonsymbol",
    "lineSymbolChooserPopupTitle": "Linjesymbol",
    "aoiSymbolChooserPopupTitle": "Buffersymbol",
    "aoiTabText": "AOI",
    "reportTabText": "Rapport",
    "invalidSymbolValue": "Ugyldig symbolværdi."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Søgekildeindstillinger",
    "searchSourceSettingTitle": "Søgekildeindstillinger",
    "searchSourceSettingTitleHintText": "Tilføj og konfigurér geokodningstjenester eller vektorlag som søgekilder. Disse specificerede kilder bestemmer, hvad der kan søges efter i søgeboksen.",
    "addSearchSourceLabel": "Tilføj søgekilde",
    "featureLayerLabel": "Vektorlag",
    "geocoderLabel": "Geokoder",
    "generalSettingLabel": "Generel indstilling",
    "allPlaceholderLabel": "Pladsholdertekst for søgning efter alle:",
    "allPlaceholderHintText": "Tip: Indtast den tekst, der skal vises som pladsholder, mens der søges i alle lag og geokoder",
    "generalSettingCheckboxLabel": "Vis pop-up for det fundne objekt eller den fundne position",
    "countryCode": "Lande- eller regionskode(r)",
    "countryCodeEg": "f.eks. ",
    "countryCodeHint": "Hvis denne værdi er tom, bliver der søgt efter alle lande og regioner",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Søg kun inden for den aktuelle kortudstrækning",
    "locatorUrl": "Geokodnings-URL",
    "locatorName": "Navn på geokodningsfunktion",
    "locatorExample": "Eksempel",
    "locatorWarning": "Denne version af geokodningstjenesten understøttes ikke. Widget'en understøtter Geokodningstjeneste version 10.0 og nyere.",
    "locatorTips": "Forslag er ikke tilgængelige, fordi geokodningstjenesten ikke understøtter forslagsfunktionen.",
    "layerSource": "Lagkilde",
    "setLayerSource": "Angiv lagkilde",
    "setGeocoderURL": "Angiv geokodnings-URL",
    "searchLayerTips": "Forslag er ikke tilgængelige, fordi featuretjenesten ikke understøtter forslagsfunktionen.",
    "placeholder": "Pladsholdertekst",
    "searchFields": "Søgefelter",
    "displayField": "Visningsfelt:",
    "exactMatch": "Nøjagtigt match",
    "maxSuggestions": "Maksimalt antal forslag",
    "maxResults": "Maksimalt antal resultater",
    "enableLocalSearch": "Aktivér lokal søgning",
    "minScale": "Min. målestok",
    "minScaleHint": "Når kortmålestokken er større end denne målstok, anvendes lokal søgning",
    "radius": "Radius",
    "radiusHint": "Angiver radius for et område omkring det aktuelle kortcentrum, der benyttes til at booste rangordningen af geokodningsforslag, så de forslag, der ligger tættest på placeringen, returneres først",
    "setSearchFields": "Indstil søgefelter",
    "set": "Indstil",
    "invalidUrlTip": "URL’en ${URL} er ugyldig eller utilgængelig.",
    "invalidSearchSources": "Ugyldige søgekildeindstillinger"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Udfyld de obligatoriske felter",
    "bufferDistanceFieldsErrorMsg": "Angiv gyldige værdier",
    "invalidSearchToleranceErrorMsg": "Angiv en gyldig værdi for søgetolerance",
    "atLeastOneCheckboxCheckedErrorMsg": "Ugyldig konfiguration: Der kræves mindst ét AOI-værktøj.",
    "noLayerAvailableErrorMsg": "Ingen lag tilgængelige",
    "layerNotSupportedErrorMsg": "Understøttes ikke ",
    "noFieldSelected": "Brug redigeringshandlingen til at vælge felter til analyse.",
    "duplicateFieldsLabels": "Dobbeltforekomst af etiketten \"${labelText}\" er tilføjet til: \"${itemNames}\"",
    "noLayerSelected": "Vælg mindst ét lag til analyse.",
    "errorInSelectingLayer": "Kan ikke vælge lag. Prøv igen.",
    "errorInMaxFeatureCount": "Angiv et gyldigt maks. antal objekter til analysen."
  }
});