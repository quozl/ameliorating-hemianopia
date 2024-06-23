# Ameliorating Hemianopia with Multisensory Training

embedded.fm patrons' Slack channel #project-club heard from someone asking for help to make apparatus as described in a research paper [Ameliorating Hemianopia with Multisensory Training](https://www.jneurosci.org/content/43/6/1018).

## Mobile phone proof of concept

A proof of concept to use a mobile phone as the stimulus device.

* file [mk-burst](mk-burst), is a shell script for Linux which builds the sound using the sox software; a seven second silence with a half second of noise overlaid,
* file [index.html](index.html) and [go.js](go.js), deliver the sound and light to a mobile phone,
* file [ah-server](ah-server), is a shell script for Linux which starts Python to serve the above.

However, there are problems;

* does not always render the sound and light at the same time; sometimes the sound is late, sometimes it is early,
* the brightness does not meet the specification, though it can be made fairly bright,
* achieving the same cross sectional area of light may require positioning the mobile phone up to 3m away instead of the specified 2m, and it is not known if this affects the outcome, given the increased delay before the sound reaches the ears.

It may not be useful.

## Microcontroller - Arduino Mega

* file [bom.md](bom.md), is a list of parts to be used for a microcontroller based apparatus.

----

