import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native"
import { globalStyles } from "../../../config/theme/globalStyles"
import { ListComponent } from "./components/last-movies-component/ListComponent"

const lastmovies = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    urlImg: 'https://almomento.mx/wp-content/uploads/2024/01/Primer-trailer-de-Deadpool-3-podria-llegar-durante-el-Super-Bowl.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    urlImg: 'https://prod.assets.earlygamecdn.com/images/kung-fu-panda-4-header.png?transform=banner2x_webp',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    urlImg: 'https://i.blogs.es/c52f60/captura-de-pantalla-2023-11-10-a-las-16.23.38/1366_2000.jpeg',
  },
];
const movies = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    urlImg: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/232F55CE38A1592AAA5C31019D4326417FC21474B51D12AFD3DB94529EF92511/scale?width=506&amp;aspectRatio=2.00&amp;format=webp',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    urlImg: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/f9037f52-1ca0-4c86-8817-07f23834bf33/dd18b9fc2e1e024d24824feaec9778554d3e66c1.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    urlImg: 'https://i.blogs.es/074e70/world-war-z-brad-pitt-wallpaper-1750x984/450_1000.jpg',
  },
];
const greathits = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    urlImg: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AD82F7AB9D9B93ACC53F4B4E501788F0AE5432DEAB773477686E58ED334F2B59/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    urlImg: 'https://irs.www.warnerbroslatino.com/hero-banner-v2-tablet-jpeg/movies/media/browser/shawred_4k_sf_h_dd_4320x1080_300dpi_mx_f1f7f066.jpeg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    urlImg: 'https://media-front.elmostrador.cl/2023/08/OPPENHEIMER.jpeg',
  },
];
const documentals = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    urlImg: 'https://hips.hearstapps.com/hmg-prod/images/secretos-ballenas-documental-disney-fotogramas-1666869233.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    urlImg: 'https://hips.hearstapps.com/hmg-prod/images/tesoros-sumergidos-america-documental-disney-fotogramas-1666869271.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    urlImg: 'https://hips.hearstapps.com/hmg-prod/images/comos-mundos-posibles-disney-plus-fotogramas-1666868188.jpg?crop=1xw:1xh;center,top&resize=980:*',
  },
];

const animes = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    urlImg: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    urlImg: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/ea075b926e1073f4eb016bff8cdb434c.jpe',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    urlImg: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/aa31911c746c4d7d027b190f2e184834.jpe',
  },
];


export const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      {/* last movies */}
      <ScrollView>
        <ListComponent data={lastmovies} title="Last Movies" side={true}/>
        <ListComponent data={movies} title="Movies" side={false}/>
        <ListComponent data={greathits} title="Great Hits" side={true}/>
        <ListComponent data={documentals} title="Documentals" side={false}/>
        <ListComponent data={animes} title="Animes" side={true}/>
      </ScrollView>
      {/* series */}

    </SafeAreaView>
  )
}
