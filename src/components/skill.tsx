
 
const TechnicalSkill = () => {
    return ( 
    <div className="flex justify-around items-center  w-full p-4 sm:flex-col">
        <div className="flex items-center p-3 border-r-4 border-r-skin-color h-full ">
                <h3 className="text-4xl font-semibold ">Technical Skills</h3>
        </div>
         <div className="flex-col justify-start">
            <h3 className="text-2xl font-semibold mb-3">LANGUAGES</h3>
            <ul className="list-disc ml-4">
                <li>Javascript</li>
                
                <li>Typescript</li>

                <li>Html/Css</li>

                <li>Python</li>
                
                <li>Php</li>

                <li>Java</li>

                <li>C</li>
            </ul>
        </div>
        <div>
            <h3 className="text-2xl font-semibold mb-3">FRAMEWORKS/ LIBRARIES/ OTHERS</h3>
            <div className="flex justify-between">
                <ul role="list" className="list-disc">
                    <li>React.js</li>
                    
                    <li>Node.js</li>
                    <li>Next.js</li>
                    <li>Express.js</li>

                    
                    <li>Flask</li>

                    <li>Django</li>

                    <li>Tailwind css</li>

                </ul>
                <ul className="list-disc">
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Next.js</li>
                    <li>Express.js</li>

                    
                    <li>Flask</li>

                    <li>Django</li>

                    <li>Tailwind css</li>
                </ul>
            </div>
        </div>
    </div> );
}
 
export default TechnicalSkill;