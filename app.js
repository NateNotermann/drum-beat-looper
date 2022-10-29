function sequencer() {

    const claps = new Tone.Player('./SFX/tom-808.wav').toDestination();
    const snare = new Tone.player('./SFX/clap-analog.wav').toDestination();
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, '8n' );
    Tone.transport.start();

    function repeat(){
        let step = index % 8;
        let seclectedSfx = document.querySelector(`.top input:nth-child(${step+ 1}`);
        let seclectedSfx2 = document.querySelector(`.bottom input:nth-child(${step+ 1}`);
        if (seclectedSfx.checked) {
            claps.start();
        }
        if (seclectedSfx2.checked) {
            snare.start();
        }
        index ++
    }

}


sequencer();