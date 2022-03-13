---
title: "move = play"
date: "2008-11-06"
tags:
  - software
  - interactive
  - installation
featured: false
featuredImage: "./files/thumb.jpg"
---

<iframe title="vimeo-player" src="https://player.vimeo.com/video/2393559" width="640" height="482" frameborder="0" allowfullscreen></iframe>

_Move = play_ is an interactive installation piece using live video footage and sound.
You can move your hands and body to create music as well as images.
It responds to color(ex. red t-shirts, blue paper) to determine an overall color of the screen and which instrument to play.
It’s made with Processing, Osculator and Ableton Live.
The project is based on [Memo Akten](http://memo.tv)’s Webcam Piano code example.

### Technologies
Using frame difference technique, Processing responds to motion. It then sends OSC messages to Osculator. Osculator turns the OSC messages into MIDI messages. MIDI messages are sent to Ableton Live, and make MIDI instruments to play sounds. Processing also reads color, and the colors are used for switching MIDI tracks. All MIDI tracks are record enabled for seamless playing. By placing different color paper in front of the camera, you can actually play music. I used a few free virtual instruments such as ZebraCM, FreeAlpha and Automat.
