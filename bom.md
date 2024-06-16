# ameliorating hemianopia

apparatus arrrangement

* laptop --> arduino
* arduino --> driver module --> led strip
* arduino --> amplifier module --> speaker

## bill of materials

### control system

* laptop computer, with USB Type-A socket, with headphone socket,
* USB Type-A to USB Type-B cable,
* [Arduino Mega 2560 R3](https://store.arduino.cc/products/arduino-mega-2560-rev3),
  * acquired,
  * can substitute a smaller controller,
* cable [STEMMA JST PH 2mm 3-Pin to Male Header Cable - 200mm](https://www.adafruit.com/product/3893),
* driver module [Adafruit MOSFET Driver - For Motors, Solenoids, LEDs, etc - STEMMA JST PH 2mm](https://shop.pimoroni.com/products/adafruit-mosfet-driver-for-motors-solenoids-leds-etc-stemma-jst-ph-2mm)
  * can substitute an alternate mosfet drive module,
* cable [STEMMA JST PH 2mm 3-Pin to Male Header Cable - 200mm](https://www.adafruit.com/product/3893),
* amplifier module [Adafruit STEMMA Audio Amp - Mono 2.5W Class D - PAM8302](https://shop.pimoroni.com/products/adafruit-stemma-audio-amp-mono-2-5w-class-d-pam8302)
  * [documentation](https://learn.adafruit.com/stemma-audio-amp)
* [Breadboard (Mini) White](https://shop.pimoroni.com/products/colourful-mini-breadboard)
  * or [Maker Essentials - Mini Breadboards & Jumper Jerky](https://shop.pimoroni.com/products/maker-essentials-mini-breadboards-jumper-jerky),
  * and or jumper cables,

### visual stimulus

* lights [5V USB LED Strip 4.9ft-480LEDs White 4000K CRI85+ COB](https://www.amazon.com/Powered-Daylight-Backlight-Bedroom-Lighting/dp/B08HD3ZSQV)
  * acquired,
  * not yet cut up,
* short wires, for linking cut sections, soldering skills,
* USB to USB extension cable 3m,
  * plug to be cut off and wires attached to driver module,

### auditory stimulus

* speaker [Panasonic 4D02C0](https://www.digikey.com/en/products/detail/panasonic-electronic-components/EAS-4D02C0/262241),
  * not yet soldered wires to it,
* wires, 3m, two conductors,

### fixation target

* CR2032 battery,
* 5mm PTH LED White,
* adhesive tape,

### firmware

* command input, using serialRead(),
* timing, using delay(), and random(),
* lights, using digitalWrite(),
* white noise
  * [ideas](https://forum.arduino.cc/t/arduino-rain-noise-generator-anyone/593002/4)
