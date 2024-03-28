import { num_en_to_bn,formateDate } from "@/helpers/helpers";



const VideoCard = ({link,title,time}) => {
    return(<>
        <div className="flex flex-col border">
            <iframe className="w-full h-[210px] rounded-md" src={link} title={title}
            frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <div className="p-2 flex flex-col space-y-1">
                <p className="flex items-center space-x-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                    </span>
                    <span>
                        {
                            num_en_to_bn(formateDate(time))
                        }
                    </span>
                </p>
                <p>{title}</p>
            </div>
        </div>
    </>)
};

export default VideoCard;