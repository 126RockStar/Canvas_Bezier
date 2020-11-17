
var bezierShow = function(id) {
    var show = {
        canvas: null,
        ctx: null,
        nodes: [],
        style: {
            color:'#FF0000',
            width:1
        },
        init: function(id) {
            this.canvas = document.getElementById(id);
            this.ctx = this.canvas.getContext("2d");
        },
        set: function(nodes) {
            this.nodes = nodes;
        },
        setStyle: function(color, width) {
			this.style = {
				color: color,
				width: width
			}
            this.ctx.lineWidth = width;	
            this.ctx.strokeStyle=this.style.color;
		},
        draw: function() {
            var _ctx = this.ctx;
            var nodes = this.nodes;
            for(var i = 0; i < nodes.length; ++i) {
            _ctx.beginPath();
            _ctx.moveTo(nodes[i].start[0], nodes[i].start[1]);
            _ctx.bezierCurveTo(nodes[i].c1[0], nodes[i].c1[1], nodes[i].c2[0], nodes[i].c2[1], nodes[i].end[0], nodes[i].end[1]);
            _ctx.stroke();
            }
        }
        }
        show.init(id);
        return show;
}