class MyVisualizer extends AbstractVisualizer {
  constructor(analyzedAudio) {
    super();
    this.peaks = analyzedAudio.peaks;
    this.start();
  }
    
  drawLine(startPoint, endPoint, lineProperties) {
      // TEACH:
    const canvas = this.canvas;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);
    context.lineTo(endPoint.x, endPoint.y);
    context.lineWidth = lineProperties.width || WIDTH;
    context.strokeStyle = lineProperties.color || COLOR;
    context.stroke();
  }


    /**
     * TODO(you): 
     * 1) Call drawShapes() to re-draw the visual at the current time index.
     *    -- If you want to "conditionally" draw (ex. only draw at a certain
     *    BEAT in the song), what do you need to add?
     * 2) Add the requestAnimationFrame loop which recursively calls
     * itself ("updateVisual") to repeatedly update the visual.
     */
    updateVisual(index) {
      index = index || 0;

      if (index >= this.peaks.length) {
          return;
      }

      const audioEl = document.querySelector('#audio');

      if ((audioEl.currentTime) > this.peaks[index].timeOfPeak ) {

        this.drawShapes();

        requestAnimationFrame(() => {
          this.updateVisual(index + 1)
        });
      } else {
        requestAnimationFrame(() => {
          this.updateVisual(index)
        });
      }
    }

    /**
     * TODO(you): Draw the shapes you'd expect to see in your visual.
     */
    drawShapes() {
      const point1 = {
        x: 100,
        y: 200,
      };
      const point2 = {
        x: 400,
        y: 200,
      };
      const point3 = {
        x: 400,
        y: 400,
      };
      const point4 = {
        x: 100,
        y: 400,
      };
      const color = generateRandomColor();
      const width = generateRandomValue(1, 2);

      this.drawRectangle(point1, point2, point3, point4, {color, width});
    }
}

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const data = new Uint8Array(analyser.frequencyBinCount);

const spotifyApi = new SpotifyWebApi();

getToken().then((token) => {
  spotifyApi.setAccessToken(token);
});

/**
 * TODO(you): Add a 'click' event listener that starts the music.
 */
document.getElementById('playButton').addEventListener('click', (clickEvent) => { 
  clickEvent.preventDefault();

  const audioEl = document.querySelector('#audio');
  const queryInput = document.querySelector('#query')
  document.getElementById('playCircle').setAttribute("class", "playing");

  if(!audioEl.src) {
    // TODO(you): Use the spotifyApi to searchTracks for your input. Documentation can be found at:
    // https://doxdox.org/jmperez/spotify-web-api-js#src-spotify-web-api.js-constr.prototype.searchtracks
    spotifyApi.searchTracks("cyanide", {limit: 1})
      .then((results) => {
        // TO TEACH: Access track from results to find a previewUrl.
        let track = results.tracks.items[0];
        let previewUrl = track.preview_url;

        if (previewUrl) {
          // Sets the HTML audio element source to the music.
          audioEl.src = previewUrl;

          requestAudio(previewUrl, (audio) => {
            // TO TEACH: Use analyzeAudio to apply frequency analysis.
            const analyzedAudio = analyzeAudio(audio);

            // TO TEACH: Create an instance of MyVisualizer using the
            //           analyzed audio.
            const visualizer = new MyVisualizer(analyzedAudio);

            audioEl.play();
            
            // Use MyVisualizer's updateVisual to start visualization.
            visualizer.updateVisual();
          });
        } else {
          alert('This song does not have a preview');
          document.getElementById('playCircle').setAttribute("class", "");
        }
      })
      .catch((error) => {
        console.warn('Something went wrong');
        console.warn(error);
        document.getElementById('playCircle').setAttribute("class", "");
      });
  } else if (!audioEl.paused) {
    audioEl.pause();
		document.getElementById('playCircle').setAttribute("class", "");
  } else {
    audioEl.play();
		document.getElementById('playCircle').setAttribute("class", "playing");
  }
});
