---
title: MyPlant
layout: project
date: "2014-06-16"
titleImagePath: "./myplant_1.jpg"
---
Ziel der Lehrveranstaltung "Projektmanagement" an der Hochschule Rhein-Waal war die Planung und Umsetzung eines beliebigen Projektes.<br/>
In Zusammenarbeit mit mehreren Kommilitonen wurde das Projekt "MyPlant" bearbeitet. Dabei ging es um das Tracking von Umgebungsdaten der heimischen Pflanzen: Mit einem Arduino und entsprechenden Sensoren wurden die folgenden Werte ausgelesen:
* Temperatur
* Luftfeuchtigkeit
* Feuchtigkeit der Erde (Bodensensor)
* Helligkeit der Umgebung

<media-slider>
    <img src="./myplant_2.jpg"/>
    <img src="./myplant_3.jpg"/>
    <img src="./myplant_1.jpg"/>
</media-slider>

Die empfangenen Sensor-Werte wurden vom Arduino über eine WLAN-Verbindung an einen Webserver geschickt. Dort wurden sie in einer Datenbank gespeichert und deren Verlauf mit Hilfe einer Webanwendung visualisiert.

<media-slider>
    <img src="./myplant_5.png"/>
    <img src="./myplant_6.png"/>
</media-slider>

Durch die Kombination mehrerer Sensoren konnten verschiedene Zustände der Pflanze erkannt werden. Beispielsweise braucht die Pflanze Wasser, falls die Helligkeitswerte zu hoch sind und die Bodenfeuchtigkeit unter einem vordefinierten Schwellwert liegt.<br/>
Die verschiedenen Zustände meldete die Pflanze automatisch über einen eigenen Twitter-Account.

<image-with-lightbox>
    <img src="./myplant_4.png"/>
</image-with-lightbox>