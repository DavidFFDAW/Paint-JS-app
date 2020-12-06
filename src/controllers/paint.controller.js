class PaintController{

    constructor(paintService,paintView) {
        this.service = paintService;
        this.view = paintView;

        // this.view.initCoordsOfCanvas();

        this.view.bindFillButton(this.handlerFillButton);
        this.view.bindColorButton(this.handlerColorButton);
        this.view.bindRubberButton(this.handlerRubberButton);
        this.view.bindDownloadButton(this.handlerDownloadBtton);
        this.view.bindPencilButton(this.handlerPencilButton);
        this.view.bindCanvasDrawMouseDown(this.handlerMouseDown);
        this.view.bindCanvasDrawMouseUp(this.handlerMouseUp);
        this.view.bindCanvasDrawMouseMove(this.handlerMouseMoveDraw);
    }

    handlerFillButton = (target) => this.service.changeBackgroundColor(target);
    handlerColorButton = (target) => this.service.setTheColor(target);
    handlerRubberButton = (target) => this.service.setRubber(target);
    handlerDownloadBtton = (target) => this.service.downloadCanvas(target);
    handlerPencilButton = () => this.service.setPencil();
    handlerMouseMoveDraw = (ev,ctx) => this.service.makeDrawing(ev,ctx);
    handlerMouseDown = (e) => {
        this.service.setPositionToDraw(e);
        this.service.setIsDrawing(true);
    };
    handlerMouseUp = (e) => {
        this.service.setPositionToDraw(e);
        this.service.setIsDrawing(false);
    }
}
