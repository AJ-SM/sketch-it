import { useState, type ReactNode } from "react";
import {  Layer,Stage,Rect,Circle, Arrow } from "react-konva";




export function Workspace(){ 
    const [dloc , setdloc] = useState<null>({x:0,y:0})
    const [uloc , setuloc] = useState<null>({x:0,y:0})
    const [isDrawing, setIsDrawing] = useState(false);
    function getPosup(stage:any){
        if (!isDrawing) return;
        const pointerPosition = stage.target.getPointerPosition();
        setuloc(pointerPosition)
        console.log("up")
        console.log(uloc)
    
    }

        function getPosDown(stage:any){
        const pointerPosition = stage.target.getPointerPosition();
        setIsDrawing(!isDrawing)
        if(!isDrawing){setdloc(pointerPosition)}
        
        console.log("down")
        console.log(dloc)
    
    }
    return <div className="h-screen w-screen bg-black ease-in duration-75">
      
        <Stage  height={window.innerHeight} width={window.innerWidth}  onMouseMove={getPosup} onMouseDown={getPosDown} >
            <Layer>
                <Circle x={1000} y={100} radius={100} stroke={"white"} strokeWidth={2}/>

        <Arrow
          x={dloc.x}
          y={dloc.y}
          points={[0, 0, uloc.x-dloc.x, uloc.y-dloc.y]}
          pointerLength={13}
          pointerWidth={20}
          fill="white"
          stroke="white"
          strokeWidth={3}
        />








            </Layer>

        </Stage>
    </div>
}