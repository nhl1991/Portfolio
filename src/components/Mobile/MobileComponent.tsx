import item from '@/lib/projects.json'
import MobileContainer from './MobileItemContainer';

export default function Mobile() {
    const { projects } = item;
    return (
        <div id="wrapper" className="w-svw h-svh ">
            {projects.map((item, i) => {
                return <div id="project" key={i} className="w-full h-full p-2">
                    <MobileContainer item={item} />
                </div>
            })}
        </div>
    )
}


