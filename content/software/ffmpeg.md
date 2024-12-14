# FFMPEG

[FFMPEG](https://ffmpeg.org/) ist ein freies Multimedia-Softwareprojekt. Es bietet eine Reihe freier Computerprogramme und Programmbibliotheken, die digitales Video- und Audiomaterial aufnehmen, konvertieren, senden (streamen), filtern und in verschiedene Containerformate verpacken können. Unter anderem enthält es mit libavcodec eine umfangreiche Sammlung von Audio- und Videocodecs.

## Videobearbeitung

### Schnitt

```sh
ffmpeg \
  -ss $STARTTIME \
  -to $ENDTIME \
  -i $INPUT \
  -c copy \
  $OUTPUT
```

* `$STARTTIME`, `$ENDTIME` als Timestamp im Format `hh:mm:ss(:frame)` wobei `frame` optional ist.


### Komprimierung

```sh
ffmpeg \
  -i $INPUT \
  -crf $COMPRESSIONRATE \
  -c:v libx264 -preset fast -tag:v hvc1 -c:a eac3 -b:a 224k \
  $OUTPUT
```

* `$COMPRESSIONRATE` kann dabei ein Wert zwischen `0` und `51` sein. Dabei ist `0` verlustlos, `23` die Standardkompression, und `51` die stärkstmögliche Kompression. Je höher der Wert, desto schlechter wird die Videoqualität.

Encoder (`libx264`), Videocodec (`hvc1`), Audiocodec (`eac3`) und Audiobitrate (`224k`) sind sane default, müssen aber je nach usecase eventuell angepasst werden.


## Konvertierung

### Videoformat

```sh
ffmpeg \
  -i $INPUT \
  $OUTPUT.format
```

Videos lassen sich schnell in ein anderes Format konvertieren, in dem man einfach eine neue Dateiendung anhängt. Dabei werden Codecs etc. von FFMPEG automatisch befüllt.

* `$OUTPUT.format` z.b. `mein-video.mp4`

#### test headline


### GIF

```sh
ffmpeg \
  -i $INPUT \
  -vf "fps=15,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
  -loop 0 \
  $OUTPUT.gif
```

* `-vf […]` Videofilter zur automatischen Erstellung der optimierten GIF-Farbpalette.
* `-loop <0>` Häufigkeit des GIF-Loop wobei `0` für unendlich steht.