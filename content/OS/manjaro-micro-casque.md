Title: Manjaro - Impossible d'utiliser mon micro de mon casque bluetooth
Date: 2020-09-15 14:43
Tags: manjaro
Category: Billets

[Après le son]({filename}pas-de-son-manjaro.md), voila que je n'arrivais pas à utiliser le micro de mon casque bluetooth.

Après moult recherches et tests, j'ai enfin trouvé. En fait, Manjaro (ou le kernel ou je sais pas quoi) ne sait pas permuter automatiquement entre le mode HSP / HFP (qualité médiocre, mais micro et son fonctionnent) et le mode A2DP Sink (très bonne qualité, pour écouter de la musique).

Alors, OK, macOS tout ça, tout ce qu'on veut hein. Mais on branche ou on connecte et ça marche. Juste ça. Bref.

J'ai trouvé un script ([ici](https://gist.github.com/OndraZizka/2724d353f695dacd73a50883dfdf0fc6)) que j'ai adapté et que je partage ci-dessous. Il permet donc de permuter très facilement entre ces deux modes.

```
#!/bin/bash

####  Restart Bluetooth
if [ "$1" == "resetBT" ] ; then
  sudo rfkill block bluetooth && sleep 0.1 && sudo rfkill unblock bluetooth;
  exit;
fi;

#### Toggle listen/speak
if [ "$1" == "" -o "$1" == "toggle" ] ; then
  LINE=`pacmd list-sinks  | grep '\(name:\|alias\)' | grep -B1 MPOW-059  | head -1`
  if [ "$LINE" == "" ] ; then echo "MPOW-059 headset not found."; $0 reset; sleep 2; exit; fi

  SINK_NAME="bluez_sink.00_00_00_0F_09_0D.a2dp_sink"
  if $(echo "$LINE" | grep $SINK_NAME &> /dev/null) ; then
    echo "Detected quality sound output, that means we can't speak; switch that."
    $0 speak;
  else
    echo "Quality sound not found, switch to the good sound."
    $0 listen;
  fi
fi

#### Change the output to F5A
if [ "$1" == "listen" ] ; then
  LINE=`pacmd list-sinks  | grep '\(name:\|alias\)' | grep -B1 MPOW-059  | head -1`
  if [ "$LINE" == "" ] ; then echo "MPOW-059 phones not found."; $0 reset; sleep 2; exit; fi
  #        name: <bluez_sink.00_19_5D_25_6F_6C.headset_head_unit>

  ## Get what's between <...>
  SINK_NAME=`echo "$LINE" | tr '>' '<' | cut -d'<' -f2`;

  ## The above gives an ID according to the active profile.
  ## To set manually:
  #SINK_NAME="bluez_sink.00_19_5D_25_6F_6C.headset_head_unit"
  #SINK_NAME="bluez_sink.00_19_5D_25_6F_6C.a2dp_sink"

  ## Switch the output to that.
  echo "Switching audio output to $SINK_NAME";
  pacmd set-default-sink "$SINK_NAME"

  #### Change profile to quality output + no mic. From `pacmd list-cards`:
  CARD="bluez_card.00_00_00_0F_09_0D"
  PROFILE="a2dp_sink"
  echo "Switching audio profile to $PROFILE";
  pacmd set-card-profile $CARD $PROFILE
  exit;
fi;

#### Input
if [ "$1" == "speak" ] ; then
  ## Change profile to crappy output + mic. From `pacmd list-cards`:
  CARD="bluez_card.00_00_00_0F_09_0D"
  pacmd set-card-profile $CARD headset_head_unit

  LINE=`pacmd list-sources | grep '\(name:\|alias\)' | grep -B1 MPOW-059  | head -1`
  if [ "$LINE" == "" ] ; then echo "MPOW-059 mic not found."; $0 reset; sleep 2; exit; fi
  SOURCE_NAME=`echo "$LINE" | tr '>' '<' | cut -d'<' -f2`;
  #SOURCE_NAME="bluez_source.00_19_5D_25_6F_6C.headset_head_unit"
  #SOURCE_NAME="bluez_sink.00_19_5D_25_6F_6C.a2dp_sink.monitor"
  echo "Switching audio input to $SOURCE_NAME";
  pacmd set-default-source "$SOURCE_NAME" || echo 'Try `pacmd list-sources`.';
fi;


####  Resources:

##  Why this is needed
# https://jimshaver.net/2015/03/31/going-a2dp-only-on-linux/

##  My original question
# https://askubuntu.com/questions/1004712/audio-profile-changes-automatically-to-hsp-bad-quality-when-i-change-input-to/1009156#1009156

##  Script to monitor plugged earphones and switch when unplugged (Ubuntu does that, but nice script):
# https://github.com/freundTech/linux-helper-scripts/blob/master/padevswitch/padevswitch
```
