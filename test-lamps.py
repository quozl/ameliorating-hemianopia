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

lamp = digitalio.DigitalInOut(board.D12)
lamp.direction = digitalio.Direction.OUTPUT

sensor = analogio.AnalogIn(board.A0)

for n in range(20):
    dark1 = sensor.value

    lamp.value = True

    time.sleep(0.0001)
    light1 = sensor.value

    time.sleep(0.0002)
    light2 = sensor.value

    time.sleep(0.0004)
    light3 = sensor.value

    time.sleep(0.0008)
    light4 = sensor.value

    time.sleep(0.0016)
    light5 = sensor.value

    lamp.value = False
    time.sleep(0.5)
    dark2 = sensor.value

    print(n, dark1, light1, light2, light3, light4, light5, dark2)

print("stop")
