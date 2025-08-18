
import { Stage, Layer, Rect } from "react-konva";





export function Rectangle(){
    return <div className=" bg">

       <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {/* Rectangle */}
        <Rect
          x={50}          // x position
          y={60}          // y position
          width={200}     // rectangle width
          height={100}    // rectangle height
        // fill color
          stroke="black"  // border color
          strokeWidth={2} // border thickness
          cornerRadius={10} // rounded corners
          draggable       // make it draggable
        />
      </Layer>
    </Stage>
    </div>
}