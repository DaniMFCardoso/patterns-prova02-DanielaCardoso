class Device {
    turnOn() {}
    turnOff() {}
}
  
class TV extends Device {
    turnOn() {
      console.log("TV ligada.");
    }
    turnOff() {
      console.log("TV desligada.");
    }
}
  
class Radio extends Device {
    turnOn() {
      console.log("Rádio ligado.");
    }
    turnOff() {
      console.log("Rádio desligado.");
    }
}
  
class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
}
  
class AdvancedRemoteControl extends RemoteControl {
    mute() {
      console.log("Dispositivo mutado (silenciado).");
    }
}
  
const tv = new TV();
const radio = new Radio();

const tvRemote = new RemoteControl(tv);
const radioRemote = new AdvancedRemoteControl(radio);

tvRemote.pressPowerButton(true);   // TV ligada
tvRemote.pressPowerButton(false);  // TV desligada

radioRemote.pressPowerButton(true); // Rádio ligado
radioRemote.mute();                 // Dispositivo mutado
radioRemote.pressPowerButton(false); // Rádio desligado