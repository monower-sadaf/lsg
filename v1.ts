import axios from "./axios.js"
import { cache } from "react";
import { IAniobidhi } from "./lib/types.jsx";
/* export default {

   async sliders() {
      type Slider = {
         image_url: string;
       };

      type GetSliderResponse = {
         sliders: Slider[]
      }
      return axios.get<GetSliderResponse>(`/sliders`)
   },

   async notice() {
      type Notice = {
         notice: string,
         is_top: boolean,
       };

      type GetNoticesResponse = {
         notices: Notice[]
      }
      return axios.get<GetNoticesResponse>(`/notices`)
   },


   async land_apps_info() {
      type data = {
         link: string,
         type: boolean,
         image_url: string,
       };

      type Response = {
         data: data[]
      }
      return axios.get<Response>(`/apps-and-softwares`)
   },

   async land_related_media_links() {
      type data = {
         title: string,
         link: string,
         type: string,
       };

      type Response = {
         data: data[]
      }
      return axios.get<Response>(`/land-related-media-links`)
   },

   async faq() {
      type data = {
         answer: string,
         question: string,
       };

      type Response = {
         data: data[]
      }
      return axios.get<Response>(`/faqs`)
   },

   async festivals_images() {
      type data = {
         image_url: string,
       };

      type Response = {
         data: data[]
      }
      return axios.get<Response>(`/festivals-images`)
   },

   async land_related_videos() {
      type data = {
         title: string,
         link: string,
       };

      type Response = {
         data: data[]
      }
      return axios.get<Response>(`/land-related-video-links`)
   },

   async recent_update() {
      type data = {
         title: string,
         link: string,
         image_url: string,
         created_at: string,
       };

      type Response = {
         data: data[]
      }
      return axios.get<Response>(`/recent-updates`)
   },

   async menu_list() {
      type data = {
         title: string,
         link: string,
         is_main: string,
       
       };

      type Response = {
         data: data[]
      }
      return axios.get<Response>(`/menu-lists`)
   },

   async services() {
      type data = {};

      type Response = {
         data: data[]
      }
      return axios.get<Response>(`/services`)
   },
   async service(id: number) {
      type data = {};

      type Response = {
         data: any
      }
      return axios.get<Response>(`/services/${id}`)
   },

   // authintation
   // async register(fromData:any) {
   //    return axios.post(`/register`, fromData)
   // },


   async aniobidhi() {
      return axios.get<IAniobidhi>(`/ayinbidhis`)
   },

   async poripotro_proggapons() {
      return axios.get<IAniobidhi>(`/poripotro_proggapons`)
   },

   async manuals() {
      return axios.get<IAniobidhi>(`/manuals`)
   },
   async vhumi_sheba_forms() {
      return axios.get<IAniobidhi>(`/vhumi_sheba_forms`)
   },
   async getSinglePageData(path:any) {
      return axios.get<IAniobidhi>(`/${path}`)
   },

   async recent_update_details(id:any) {
      return axios.get(`/recent-updates/${id}`);
   },

   async user_ask_question(fromData:any) {
      return axios.post(`/user_ask_questions`, fromData);
   },

   async single_notice(id:any){
      return axios.get(`/notices/${id}`);
   }
  
}
 */

export const slider = cache(async ()=>{
   const { data } = await axios.get(`/sliders`)
   return data;
});


export const notice = cache(async ()=>{
   const { data } = await axios.get(`/notices`);
   return data;
});


export const land_apps_infos = cache(async ()=>{
   const { data } = await axios.get('/apps-and-softwares');
   return data;
});

export const service = cache(async ()=>{
   const { data } = await axios.get('/services');
   return data;
});

export const serviceDetails = cache(async (id:number)=>{
   const { data } = await axios.get(`/services/${id}`);
   return data;
});

export const faq = cache(async ()=>{
   const { data } = await axios.get('/faqs');
   return data;
});

export const land_related_media_link = cache(async ()=>{
   const { data } = await axios.get('/land-related-media-links');
   return data;
});

export const festival_images = cache(async ()=>{
   const { data } = await axios.get('/festivals-images');
   return data;
});

export const land_related_video = cache(async ()=>{
   const { data } = await axios.get('/land-related-video-links');
   return data;
});

export const recent_updates = cache(async ()=>{
   const { data } = await axios.get('/recent-updates');
   return data;
});


export const vhumi_sheba_forms = async ()=>{
   const { data } = await axios.get('/vhumi_sheba_forms');
   return data;
}

export const ainobidhi = async ()=>{
   const { data } = await axios.get('/ayinbidhis');
   return data;
}

export const poripotro_proggapons = async ()=>{
   const { data } = await axios.get('/poripotro_proggapons');
   return data;
}

export const manuals = async ()=>{
   const { data } = await axios.get('/manuals');
   return data;
}

export const getSinglePageData = async (path:any)=>{
   const { data } = await axios.get(`/${path}`);
   return data;
}

export const user_ask_question = async (fromData:any)=>{
   const { data } = await axios.post(`/user_ask_questions`, fromData);
   return data;
}

export const recent_update_details = async (id:any)=>{
   const { data } = await axios.get(`/recent-updates/`+id);
   return data;
}

export const single_notice = async (id:any)=>{
   const { data } = await axios.get(`/notices/${id}`);
   return data;
}

export const login_links = async ()=>{
   const { data } = await fetch(process.env.IMPORTANT_LINK_BASE_URL+'/api/login_links',{
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      }
   }).then(res => res.json());
   return data[0];
}

export const MenuList = async ()=>{
   const { data: {data} } = await axios.get(`/menu-lists`);
   return data;
}

export const prokolpo_porichalok = async ()=>{
   const { data } = await axios.get(`/prokolpo_poricaloks`);
   return data;
};