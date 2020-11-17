# bezier-editor

## Introduction

It's a tool base on HTML5 canvas that allows you to create bezier curve like photoshop
and then it can be export as JavaScript code to create an animation path for an HTML element.

## How To

1. Open index.html and draw bezier curve in canvas like using Photoshop.

2. Click "Export" to get the JavaScript code.

3. Create your own HTML file and include jQuery Library :

  ```html
  <script type="text/javascript" src="jquery.js"></script>
  ```

4. And include bezier-animation.js :

  ```html
  <script type="text/javascript" src="bezier-show.js"></script>
  ```

5. Paste the code you just got in another script tag. Don't forget to add the element selector. Here is an example :

  ```js
    <script type="text/javascript">
      var show = new bezierShow("bezier-canvas");
      show.set([
        {start: [169, 108],c1:[94, 192],c2:[70, 266],end: [218,201]},
        {start: [218, 201],c1:[366, 136],c2:[711, 202],end: [495,312]},
        {start: [495, 312],c1:[279, 422],c2:[173, 376],end: [144,317]},
        {start: [144, 317],c1:[115, 258],c2:[249, 117],end: [278,110]},
        {start: [278, 110],c1:[307, 103],c2:[426, 108],end: [462,129]},

      ])
      show.setStyle('#00f58b', 10);

      show.draw();
    </script>
  ```

6. Enjoy your coding!
