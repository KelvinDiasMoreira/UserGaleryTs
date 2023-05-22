import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


import { Container, Img} from "./styles";
import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function App() {
  const { images } = useContext(UserContext);
  
  return (
    <Container>
        <Swiper
        cssMode={true}
        loop={true}
        modules={[Navigation, Pagination]}
        keyboard={true}
        slidesPerView={1}
        navigation={true}
        pagination={{clickable: true}}
        className="mySwiper"
        >
        {images?.map((image: any) => {
                const {data, extension, id} = image
                return(
                  <SwiperSlide key={id}>
                    
                    <Img key={id} src={`data:${extension};base64, ${data}`}></Img>
                
                  </SwiperSlide>
                )
              })}
      </Swiper>
    </Container>
  );
}



export default App;
