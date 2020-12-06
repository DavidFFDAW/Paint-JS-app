class PaintServices{

    constructor(){
        this.tools = new ToolbarModel();
    }
    
    changeBackgroundColor = (target) => target.style.background = this.tools.color;
    setTheColor = (target) => this.tools.color = target.value;
    setRubber = (canvas) => this.tools.color = canvas.style.backgroundColor;
    setPencil = () => this.tools.isPencilSelected = true;
    setIsDrawing = (newValue) => this.tools.isDrawing = newValue;

    setPositionToDraw = (e) => {
        this.tools.positions.x = e.clientX;
        this.tools.positions.y = e.clientY;
    }

    makeDrawing = (ev, ctx) => {
        if(this.tools.isDrawing){
            ctx.beginPath();
            ctx.lineWidth = this.tools.lineThick;
            ctx.lineCap = 'round';
            ctx.strokeStyle = this.tools.color;
            ctx.moveTo(this.tools.positions.x,this.tools.positions.y);
            this.setPositionToDraw(ev);
            ctx.lineTo(this.tools.positions.x,this.tools.positions.y);
            ctx.stroke();
        }
    }


    clearCanvas = (ctx) => {
        const canvasStyle = { width: ctx.canvas.style.width, height: ctx.canvas.style.height };
        ctx.clearRect(0, 0, canvasStyle.width, canvasStyle.height);
        ctx.restore();
    }

    downloadCanvas = (canvas) => {
        const image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
        const link = document.createElement('a');
        link.download = 'myArt.jpg';
        link.href = image;
        link.click();
    }
}