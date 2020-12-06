class PaintView{
    constructor(){
        this.btnUndo = document.getElementById('btnUndo');
        this.btnRedo = document.getElementById('btnRedo');
        this.btnPencil = document.getElementById('btnPencil');
        this.btnRubber = document.getElementById('btnRubber');
        this.btnFill = document.getElementById('btnFill');
        this.btnColor = document.getElementById('btnColor');
        this.btnFigure = document.getElementById('btnFigure');
        this.btnLine = document.getElementById('btnLine');
        this.canvas = document.getElementById('canvas');
        this.btnClear = document.getElementById('btnClear');
        this.btnDownload = document.getElementById('btnDownload');

        this.ctx = this.canvas.getContext('2d');
    }
    // -------------------- Methods ----------------------- //

    initCoordsOfCanvas = () => { // TODO: add split method to get coords without 'px' 
        const canvasStyle = getComputedStyle(document.querySelector('.canvas'));
        this.canvas.width = canvasStyle.width;
        console.log(this.canvas.width);
        this.canvas.height = canvasStyle.height;
        console.log(this.canvas.height);
    }


    // -------------------- Binding ----------------------- //

    bindFillButton(handler){
        this.btnFill.addEventListener('click',ev => {
            handler(this.canvas);
        });
    }
    bindColorButton(handler){
        this.btnColor.addEventListener('change',ev => {
            handler(this.btnColor);
        });
    }
    bindRubberButton(handler){
        this.btnRubber.addEventListener('click',ev => {
            handler(this.canvas);
        });
    }
    bindDownloadButton(handler){
        this.btnDownload.addEventListener('click',ev => {
            handler(this.canvas);
        });
    }
    bindClearButton(handler){
        this.btnClear.addEventListener('click',ev => {
            handler(this.ctx);
        });
    }
    bindCanvasDrawMouseDown(handler){
        this.canvas.addEventListener('mousedown',ev => {
            handler(ev);
        });
    }
    bindCanvasDrawMouseMove(handler){
        this.canvas.addEventListener('mousemove',ev => {
            handler(ev,this.ctx);
        });
    }
    bindCanvasDrawMouseUp(handler){
        this.canvas.addEventListener('mouseenter',ev => {
            handler(ev);
        });
    }
    bindPencilButton(handler){
        this.btnPencil.addEventListener('click',ev => {
            handler();
        });
    }
}