function updateSpeedometer(){
    const dial = document.getElementById("dial");
    const meter = document.getElementById("meter");
    const speed = Math.floor(Math.random() * 181);
    
    
    const rotation = (speed / 180) * 180;
    dial.style.transform = "translate(32%, -20%) rotate(" + rotation + "deg)";
    
    if (speed <= 60) {
        meter.style.backgroundColor = "rgba(0, 225, 0, 0.2)";
    } else if (speed <= 120) {
        meter.style.backgroundColor = "rgba(255, 165, 0, 0.2)";
    } else {
        meter.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    }
    
    
    }
    setInterval(updateSpeedometer, 4000);