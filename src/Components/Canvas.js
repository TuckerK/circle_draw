import {useOnDraw} from './Hooks';
import './Canvas.css';

const Canvas = ({
    width,
    height
}) => {

    const {
        setCanvasRef,
        onCanvasMouseDown
    } = useOnDraw(onDraw);

    function onDraw(ctx, point, prevPoint) {
        drawLine(prevPoint, point, ctx, 5, 10);
    }

    // draw a line from start to end
    function drawLine(
        start,
        end,
        ctx,
        width,
        arcSize
    ) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(start.x, start.y, arcSize, 0, 2 * Math.PI);
        ctx.fill();

    }

    return(
        <canvas
            width={width}
            height={height}
            onMouseDown={onCanvasMouseDown}
            ref={setCanvasRef}
        />
    );

}

export default Canvas;
