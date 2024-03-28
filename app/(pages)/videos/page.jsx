'use client';


import { useEffect, useState } from "react";
import Loader from "../../components/_skeleton/Loader";
import VideoCard from '@/app/components/Card/VideoCard/VideoCard';
import { land_related_video } from "@/v1";


const Home = () => {
    const [videos,setVideos] = useState(null);

    useEffect(()=>{
        land_related_video().then(({data})=>{
            setVideos(data);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    return (<>
        <section className="container mx-auto py-6">
            <h3 className="text-secondary text-24 leading-[27.58px] lg:text-36 lg:leading-[36px] text-center">অনুষ্ঠান এবং উৎসব এর চিত্র</h3>
            {
                videos == null ? (
                    <Loader />
                ) : (
                    <div className="flex flex-wrap justify-center">
                        {
                            videos?.map((item,index)=>(
                                <div key={index} className="lg:w-[30%] m-2 lg:m-4">
                                    <VideoCard 
                                        link={item?.link} 
                                        title={item?.title}
                                        time={item?.created_at}
                                    />
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </section>
    </>)
};
export default Home;