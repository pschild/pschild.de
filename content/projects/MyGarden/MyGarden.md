---
title: MyGarden
layout: project
date: "2015-07-09"
titleImagePath: "./mygarden_1.jpg"
---
"MyGarden" ist der Name des Abschluss-Projektes der Lehrveranstaltung "Spieleentwicklung" an der Hochschule Rhein-Waal.<br/>
Umgesetzt wurde das Spiel zusammen mit mehreren Kommilitonen mit _Unity3d_ und der Programmiersprache _C#_.

Die Spielidee beruht auf dem Brettspiel "Obstgarten": es treten zwei Spieler gegeneinander an. Sie müssen innerhalb von zwei Minuten so viele Äpfel wie möglich aus einem Obstgarten holen und zu einem Korb bringen. Der Garten und die Apfelbäume werden jedoch von einem alten Mann und seinem Hund bewacht, die im Garten patrouillieren und die Kinder vom Einsammeln der Äpfel abhalten wollen.<br/>
Um den Spielverlauf abwechslungsreicher zu gestalten existieren auch diverse Power-ups:
* Blaue Bonbons erhöhen kurzzeitig die Geschwindigkeit des Spielers.
* Rote Bonbons füllen die Lebensanzeige des Spielers zu einem Teil wieder auf.
* Pilze sorgen bei Berührung kurzzeitig für langsamere Geschwindigkeit und "Schwindel" (in Form von Kamera-Wacklern).

<video controls>
    <source src="./myGarden_kompr.mp4" type="video/mp4">
</video>

Das Spiel kann sowohl im Einzel- als auch im Mehrspielermodus gespielt werden: Im Mehrspielermodus treten beide Spieler im Splitscreen-Modus gegeneinander an, im Einzelspielermodus wird die Steuerung eines Spielers von einer KI übernommen.<br/>
Durch das Einsammeln und Abladen der Äpfel erhalten die Spieler Punkte. Je nach Punktzahl bekommt der Spieler die Möglichkeit, sich in einer Highscore-Tabelle einzutragen, die in einer Datenbank verwaltet wird.

<image-gallery>
    <img src="./mygarden_4.jpg"/>
    <img src="./mygarden_3.jpg"/>
    <img src="./mygarden_1.jpg"/>
    <img src="./mygarden_2.jpg"/>
</image-gallery>

Die KI wird jeweils durch eine _Finite State Machine_ (kurz FSM) realisiert. Am Beispiel des Computergegners, gegen den der Spieler im Einzelspieler antritt, folgt eine Auflistung der verschiedenen Verhaltensweisen:

Der computergesteuerte Gegener hat vier Verhaltensweisen: Äpfel sammeln, Äpfel zum Korb bringen, Äpfel vom Baum "ernten" und fliehen.
* Wenn Äpfel auf dem Rasen liegen, sammelt er diese ein.
* Falls keine Äpfel mehr auf dem Rasen liegen, sucht er den nächstgelegenen Baum, an dem Äpfel hängen, und "erntet" diese.
* Steht der Spieler in der Nähe eines Baumes und ist mindestens ein Gegner (Opa oder Hund) weniger als 6m von ihm entfernt (Messung der Entfernung durch <a href="https://docs.unity3d.com/ScriptReference/Physics.Raycast.html" target="_blank">Raycasts</a>), flieht er zu zufällig ausgewählten Orten im Garten. Ist der Gegner weit genug entfernt, nimmt der Spieler seine durch das Fliehen unterbrochene Aufgabe wieder auf.
* Ist der Rucksack des Spielers voll, bringt er diese sofort zum Korb und lädt sie dort ab. Hierbei spielt es keine Rolle, ob ein Gegner in der Nähe ist - das Wegbringen der Äpfel hat in diesem Fall höchste Priorität. Anschließend sammelt er erneut herumliegende Äpfel ein.

<image-gallery>
    <img src="./fsm_ai.png"/>
    <img src="./fsm_opa.png"/>
</image-gallery>