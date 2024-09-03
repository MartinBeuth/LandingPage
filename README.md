
# Readme

## Inhalt

|  |  |
|--|--|
| [Ordnerstruktur](#ordnerstruktur) | [Ansatz](#ansatz) |


---


### Ordnerstruktur
Die entscheidenen Ordner befinden sich alle in **src**:  
**assets**, **cards**, **components**, **hooks**, **stylesheets**.

* **assets** 

Dieser Ordner enthält das Hintergrundbild, das für die Landingpage und den Musikplayer verwendet wird. Das Bild wurde von einer KI generiert.

* **cards** 

Der vorliegende Ordner beinhaltet die Datei **MusicForCoding.jsx**, welche für die Funktionalität des Musikplayers verantwortlich ist. Die URL des Musikplayers wurde der Website entnommen. [https://datashat.net/](https://datashat.net/)

* **components** 

Der Ordner besteht wiederum aus den Unterordnern **Top_Pages**, **NavBar**, **Middle_Pages**.  
**Top_Pages** enthält die Dateien **Background.js** und **Ueberschrift.js**.   
**NavBar** enthält die Datei **NavBar.js**.  
**Middle_Pages** enthält die Dateien **Kontakt.js**, **Projekte.js** und **Vita.js**.  

Hier sind also alle Dateien enthalten, die den Inhalt der Webpage bestimmen.

* **hooks** 

In dem vorliegenden Ordner sind die folgenden Dateien enthalten: **useAudio.js** und **useLoading.js**.

Die Verwendung der Hooks dient dem Zweck, den Ladevorgang bei den Middle_Pages vorzutäuschen. Zudem wird durch deren Einsatz die Funktionalität des Musikplayers bestimmt.

* **stylesheets**

Hier sind die Dateien:   
**App.css**, **background.css**, **kontakt.css**, **loadingspinner.css**, **mediaqueries.css**, **mediaqueries2.css**, **middle.css**, **musicforcoding.css**, **navbar.css**, **picture.css**, **projekte.css**, **top.css**, **ueberschrift.css** und **vita.css**.  

Die Stylesheets bestimmen das Design der namensgleichen Components und Cards.



---

### Ansatz
Diese React-Anwendung ist genau genommen ein Lebenslauf plus Musikplayer.  
Die wesentlichen Konzepte, die in diesem Code zum Einsatz kommen, sind:

- Router: Dieser ermöglicht die Navigation zwischen verschiedenen Komponenten.
- useState Hook: Dieser verwaltet den Zustand der Sichtbarkeit und des Ladezustandes.
- Custom Hook (useLoading): Dieser verwaltet den Ladezustand und bietet Funktionen zum Starten und Stoppen des Ladevorgangs.
- setTimeout: Dieser simuliert einen asynchronen Datenabruf.
- UI-Komponenten: components und cards.
