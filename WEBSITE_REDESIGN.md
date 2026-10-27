# Website-Neugestaltung · 27.10.2026

Alle vier Seiten verwenden ein gemeinsames, responsives Design mit warmem Off-White,
App-Grün und dezenten Goldakzenten. Dunkle Darstellung folgt der Systemeinstellung.
Die Startseite enthält einen kompakten Windows-Fensterrahmen, Funktionskarten,
eine per Tastatur bedienbare Galerie, CSV-Import, Datenschutz, Einmalkauf und FAQ.
Keine externen Schriften, Skripte, Tracker oder Cookies.

## Inhalte und Assets

- Fakten geprüft gegen `~/Developer/haushaltsbuch/docs/PRODUKT.md`,
  `store/STORE_TEXTE.md`, `docs/BANKFORMATE.md` und
  `src/Haushaltsbuch.App/Services/Loc.cs`. Das ältere Produktkonzept enthält
  überholte Planungsstände; aktuelle Store-Texte und Implementierung haben Vorrang.
- Zehn App-Sprachen, Teilbuchungen, Unterkategorien, Importprofile,
  Kreditkarten, CSV-/Druckbericht/PDF und eine wählbare Währung pro Buch.
- Bankliste nennt nur belegte konkrete Varianten; regionale Unterschiede,
  Vorbereitung anderer CSV-Dateien und fehlende Währungsumrechnung sind erläutert.
  Die Support-Anleitung wurde an diesen Stellen präzisiert.
- Aktuelle DE-/EN-Screenshots aus `store/screenshots/<lang>/raw`, auf
  1440 × 810 verkleinert, WebP mit Qualität 84. Je Bild etwa 38–55 KB,
  alle deutlich unter 200 KB. Bestehende Bilddateien bleiben erhalten.
- `img/og.png`: 1200 × 630, aus Logo, Schrift und App-Screenshot zusammengesetzt.
  OG-/Twitter-Metadaten, Favicon, Canonical und DE-/EN-hreflang auf allen Seiten.
- Impressumsdaten und Datenschutz-Inhalt unverändert; Support-Mail `mip@gmx.biz`.
- DE/EN-Sprachwahl per URL und lokalem Browserspeicher; bleibt bei Seitenwechseln
  erhalten. Galerie unterstützt Pfeiltasten, Home und End; reduzierte Bewegung
  wird berücksichtigt.

## Lokale Prüfung

Ausgeliefert mit `python3 -m http.server 8765 --bind 127.0.0.1`, geprüft in
Headless-Chrome über Playwright. Screenshots visuell angesehen und korrigiert.

- Startseite: 1440, 390 und 360 px, jeweils hell/dunkel und DE/EN.
- Informationsseiten: 360 px hell/dunkel und DE/EN; zusätzliche Screenshots
  bei 390 px sowie 1440 px. Importtabelle zusätzlich einzeln geprüft.
- 24 automatisierte Ansichten ohne horizontalen Überlauf; keine fehlenden
  sichtbaren Bilder und keine JavaScript-Fehler. Sprachwechsel, Fortbestand bei
  Navigation und Galerie mit Maus/Tastatur erfolgreich geprüft.
- Lokale Links/Anker, eindeutige IDs, Bildabmessungen und Alt-Texte geprüft.
  Keine externen Ressourcenanforderungen bei der geprüften Seitennutzung.
- Lighthouse mobil, lokal: **Performance 99 · Accessibility 100 ·
  Best Practices 100 · SEO 100**. Auch der zusätzliche Audit für sichtbare
  und zugängliche Beschriftungen besteht. Lokale Messung, keine Live-Messung;
  Hosting-Kompression und Cache-Header hängen von GitHub Pages ab.

Belege: `/tmp/monatsklar-web/`, insbesondere `index-1440-light-de.png`,
`index-1440-dark-en.png`, `index-390-light-de.png`, `index-390-dark-en.png`,
`browser-check.txt` und `lighthouse-mobile.json`.

## Noch offen

Der ausdrücklich gewünschte Platzhalter `TODO-STORE-ID` bleibt in beiden
Store-Links. Vor Freischaltung durch die echte Produkt-ID ersetzen.
Kein Push und keine Veröffentlichung im Rahmen dieses Auftrags.
