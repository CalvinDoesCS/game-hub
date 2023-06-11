import useData from "./useData";


export interface Genre {
    id: number;
    name: string;
    image_background : string;
  }
//Hiding these http request details under useGenere.
const useGenres = () => useData<Genre>('genres');

export default useGenres;