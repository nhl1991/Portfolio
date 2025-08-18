'use client'
import styles from '@/components/CirclingNavigation/navigation.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import data from '@/lib/projects.json'
import { useStore } from '@/lib/stores';
import { Project } from '@/lib/interface';

export default function Navigation() {
    const { rotation, setItem, setRotation } = useStore();
    const ringRef = useRef<HTMLDivElement>(null);
    const smallRingRef = useRef<HTMLDivElement[]>([]);
    const rotationRef = useRef(0)
    const { projects } = data;
    const cirlceCount = projects.length; // Just change this value to add more circle and adjust size in page.module.css file
    const angle = 360 / cirlceCount;
    const deg = 15;

    const elTranform = {
        rot: rotation,   // the rotation 'counter' for the element 'el'
        sca: 1,   // the scale 'counter' for the element 'el'
        rev: 0
    };

    const handleOnWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
        if (!ringRef || !ringRef.current) return;
        if (!smallRingRef || !smallRingRef.current) return;


        // const circles = document.querySelectorAll('#ring div div');
        rotationRef.current += e.deltaY * -0.005;
        elTranform.rot = rotationRef.current * deg; // big circle rotation degree.
        elTranform.rev = -rotationRef.current * deg;

        ringRef.current.style.transform = `rotate(${elTranform.rot}deg)`;
        for (let i = 0; i < smallRingRef.current.length; i++) {
            const value = (elTranform.rev - (angle * i));
            smallRingRef.current[i].style.transform = `rotate(${value}deg)`;
            // (circles[i] as HTMLElement).style.transform = `rotate(${value}deg)`
        }
    }
    // React.MouseEventHandler<HTMLAnchorElement>
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
        e.preventDefault();

        setRotation(elTranform.rot) //To prevent re-render, store the current value when user clicks the item.
        setItem(project);
        window.scrollTo({
            left: window.innerWidth,
            behavior: 'smooth'
        })
    };


    return (

        <div className={`w-[50vw] h-screen p-4`}>
            <div className='w-full h-full flex justify-center items-center relative rounded-2xl'>
                <div className='w-full h-full relative -left-100'>
                    <div id="ring" className={`${styles.ring}`} onWheel={handleOnWheel} ref={ringRef}>

                        {
                            data.projects.map((item, i) => {
                                return <div key={i} style={{ transform: `rotate(${i * angle}deg)` }} className={styles.container}>
                                    <div title={item.title} style={{ transform: `rotate(-${i * angle}deg)` }} className={styles.item} ref={(el) => { if (el) smallRingRef.current[i] = el; }}>
                                        <Link id={item.title} className='w-full h-full z-50 rounded-full flex items-center justify-center border-4 border-gray-600/20 transition-colors duration-300 hover:border-white  overflow-hidden relative' href={projects[i].URL} onClick={(e) => { onClick(e, projects[i]) }} >
                                            <Image className='w-full h-full object-cover bg-white/10' fill sizes='(min-width: 125px, min-height: 125px) 100vw, (min-width: 60px, min-height: 60px) 50vw' src={`${projects[i].Image}`} alt="project" />
                                        </Link>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}