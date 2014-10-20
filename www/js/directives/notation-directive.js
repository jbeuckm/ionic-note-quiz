angular.module('note-quiz')
    .directive('notation', [function(){
        return {
            restrict: 'E',
            templateUrl: 'js/templates/notation-directive.html',
            link: function(scope, element, attrs){
                
  var canvas = document.getElementById('notation-canvas');
  var renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS);

  var ctx = renderer.getContext();
  var stave = new Vex.Flow.Stave(10, 0, 500);
  stave.addClef("treble").setContext(ctx).draw();

  var bass_stave = new Vex.Flow.Stave(10, 80, 500);
  bass_stave.addClef("bass").setContext(ctx).draw();

  // Create the notes
  var notes = [
    // A quarter-note C.
    new Vex.Flow.StaveNote({ keys: ["c/4"], duration: "q" }),

    // A quarter-note D.
    new Vex.Flow.StaveNote({ keys: ["d/4"], duration: "q" }),

    // A C-Major chord.
    new Vex.Flow.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),


    new Vex.Flow.StaveNote({ clef: "bass", keys: ["d/3"], duration: "q" })

  ];

  // Create a voice in 4/4
  var voice = new Vex.Flow.Voice({
    num_beats: 4,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  });

  // Add notes to voice
  voice.addTickables(notes);

  // Format and justify the notes to 500 pixels
  var formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], 500);

  // Render voice
  voice.draw(ctx, stave);

                
            }
        }
    }]);