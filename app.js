import * as Tone from 'tone'

function sequencer() {

    const claps = new Tone.Player('./SFX/clap-analog.wav').toDestination();
    const snare = new Tone.Synth('./SFX/snare-pinch.wav').toDestination();
    const now = Tone.now()
    console.log(claps);

    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, '8n' );
    Tone.Transport.start();

    function repeat(){
        let step = index % 8;
        let selectedSfx = document.querySelector(`.top input:nth-child(${step+ 1}`);
        let selectedSfx2 = document.querySelector(`.bottom input:nth-child(${step+ 1}`);
        if (selectedSfx.checked) {
            claps.start();
        }
        if (selectedSfx2.checked) {
            snare.start();
        }
        index ++
    }

    
}

sequencer();