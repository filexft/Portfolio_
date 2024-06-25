import { FC } from "react";
// import { BentoDemo } from "../../components/ui_libs/mybento";

import { CarouselDApiDemo } from "../../components/ui_libs/MyCarousel";
import { TabsDemo } from "../../components/ui_libs/Mytabs";

interface CompetanceProps {
    
}
 
const Competance: FC<CompetanceProps> = () => {
    return ( <div className="flex-col   items-center  min-h-screen max-w-full">
        <div className="w-full flex flex-row items-center justify-center p-10">
            <div className="w-[90%] flex-col justify-between items-center gap-8">
                {/* <BentoDemo /> */}
                <CarouselDApiDemo />
                <div className="mt-20">

                    <TabsDemo />
                </div>
            </div>
        </div>
    </div> );
}
 
export default Competance;
