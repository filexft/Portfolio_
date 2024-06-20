import { FC } from "react";
// import { BentoDemo } from "../../components/ui_libs/mybento";

import { CarouselDApiDemo } from "../../components/ui_libs/MyCarousel";
import { TabsDemo } from "../../components/ui_libs/Mytabs";

interface CompetanceProps {
    
}
 
const Competance: FC<CompetanceProps> = () => {
    return ( <div className="flex-col  justify-evenly items-center  min-h-screen max-w-full overflow-y-hidden">
        <div className="w-full flex flex-row items-center justify-center p-10">
            <div className="w-[90%] flex-col">
                {/* <BentoDemo /> */}
                <CarouselDApiDemo />
                <TabsDemo />
            </div>
        </div>
    </div> );
}
 
export default Competance;
