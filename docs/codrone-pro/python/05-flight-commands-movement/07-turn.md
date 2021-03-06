---
custom_edit_url: null
title: turn()
menu: turn()
taxonomy:

	category: flight-command-movement
---

##### Description

A function that represents yaw, but with more natural language. It simply turns in the given direction, duration and power.

##### Syntax
```turn(direction)```<br />
```turn(direction, duration)```<br />
```turn(direction, duration, power)```

##### Parameters

**direction**	: a constant in Arduino and enum in Python. It’s the direction of the turn, which can be one of the following: LEFT or RIGHT.<br />
**duration**	: the duration of the turn in seconds. If 0, it will turn right indefinitely. Defaults to 1 second if not defined.<br />
**power**		: the power at which the drone turns right. Takes a value from 0 to 100. Defaults to 50 if not defined.

##### Returns

None

##### Example Code
###### Python
```python
#Python code
import CoDrone
from CoDrone import Direction

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

drone.turn(Direction.LEFT)          # Turn left for 1 second at -50 power
drone.turn(Direction.LEFT, 0)       # Turn left at -50 power indefinitely
drone.turn(Direction.RIGHT, 3, 100) # Turn right for 3 seconds at 100 power
drone.land()
drone.close()
```

###### Arduino
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.turn(LEFT);             // Turn left for 1 second at 50 power
    CoDrone.turn(LEFT, 0);          // Turn left at 50 power indefinitely
    CoDrone.turn(RIGHT, 5, 100);    // Turn right for 5 seconds at 100 power    
}

void loop(){

}
```
