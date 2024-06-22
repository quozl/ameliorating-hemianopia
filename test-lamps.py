# test lamp lighting time
#
#                                     +--------------+
#                      +--------------+ Light Sensor |
#                      |              +--------------+
#                      |
#           +----------+-----------+  +--------------+
#  5V ------+ Feather M0 Adalogger |  |     Lamp     |
#           +----------+-----------+  +------+-------+
#                      |                     |
#                      |              +------+-------+
#                      +--------------+    Driver    +------ 12V
#                                     +--------------+
#

print("start")

import board
import digitalio
import analogio
import time
import microcontroller

lamp = digitalio.DigitalInOut(board.D12)
lamp.direction = digitalio.Direction.OUTPUT
lamp.value = False

sensor = analogio.AnalogIn(board.A0)

for i in range(1):

    # calibrate ambient light with lamp off versus lamp on
    time.sleep(0.25)
    c_off = sensor.value
    lamp.value = True
    time.sleep(0.25)
    c_on = sensor.value
    lamp.value = False

    # measure the time to turn on
    m = 0
    time.sleep(0.25)
    t0 = time.monotonic()
    lamp.value = True
    while sensor.value < c_on * 0.90:
        microcontroller.delay_us(100)
        m += 1
    t1 = time.monotonic()

    # measure the time to turn off
    n = 0
    time.sleep(0.25)
    t2 = time.monotonic()
    lamp.value = False
    while sensor.value > c_on * 0.90:
        microcontroller.delay_us(100)
        n += 1
    t3 = time.monotonic()

    print(i, c_off, c_on, t0, t1, m, t2, t3, n)

print("stop")
