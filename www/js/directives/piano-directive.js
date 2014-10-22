angular.module('note-quiz')
    .directive('piano', [function(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'js/templates/piano-directive.html',
            link: function(scope, element, attrs){
                
              // Create a piano, 700px wide and 200px high
              var piano = new Clavier(700, 200);

              // Append the piano element to the DOM
              piano.appendTo(document.getElementById('piano-holder'));

              var pressed = null;

              piano.on('touchstart', function(e) {
                pressed = e.target;
                  console.log(pressed);
                pressed.classList.add('pressed');
              });

              piano.on('touchend', function() {
                if (pressed) {
                  pressed.classList.remove('pressed');
                  pressed = null;
                }
              });
                
            }
        }
    }]);