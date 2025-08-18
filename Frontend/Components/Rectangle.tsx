
import { Stage, Layer, Rect } from "react-konva";




export function Rectangle(){
    return <div className="">


        {/* Rectangle */}
        <Layer>
            <Rect
          x={50}          
          y={60}         
          width={200}     
          height={100}    

          stroke="white"  
          strokeWidth={3} 
          cornerRadius={9} 
          draggable       
        />


        </Layer>


    </div>
}