---
custom_edit_url: null
title: forward_avoid_collision()
published: true
taxonomy:
    category:
        - driving
        - Driving
    tag:
        - zumi-library
menu: forward_avoid_collision()
---

##### Description
Drives Zumi forward at a default speed of 40 for 1 second in the direction Zumi is currently facing.
If either of the front IR sensor values go below the threshold, Zumi will stop even if the duration or timeout is not complete.

##### Syntax
```forward_avoid_collision(speed=40, duration=1.0)```<br />
```forward_avoid_collision(speed=40, duration=1.0, desired_angle=None, left_th=150, right_th=150)```<br />

##### Parameters
speed: Positive integer value for speed between 0 and 80<br />
duration: Number of seconds Zumi will drive and check for collision<br />
desired_angle: Heading or desired angle (Default to None which is Zumi's current heading)<br />
left_th: threshold of the front left IR sensor<br />
right_th: threshold of the front right IR sensor<br />

##### Returns
None

##### Example Code
###### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.forward_avoid_collision(40,2)

```