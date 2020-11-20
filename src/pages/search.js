import React, { useEffect, useState } from 'react'
import {Input} from 'antd'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { MoviesCatalog } from '../components/moviesCatalog/MoviesCatalog'
import { API_KEY, URL_API } from '../utils/constant'

import './stylesPages/search.scss'

const Search = (props) => {

    const {location, history} = props;
    const [movieList, setMovieList] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {

        (async() => {
        
            const searchValue = queryString.parseUrl(location.search);
            const { s } = searchValue.query;
            const response = await fetch(`
            ${URL_API}/search/movie?api_key=${API_KEY}&language=es-ES&query=${s}&page=1
            `);
            const movies = await response.json();
            setMovieList(movies);
            setSearchValue(s);

        })()
        
    }, [location.search])
    
    const onChangeSearch = ({target}) => {
        const urlParams = queryString.parse(location.search);
        urlParams.s = target.value;
        history.push(`?${queryString.stringify(urlParams)}`);
        setSearchValue(target.value);
    }

    console.log(movieList.results);
    return (
        <div className="container">
           <div className="row">
               <div className="py-5 col-md-8 offset-md-2 search">
                    <h2 className="mb-4">Buscá tu pelicula</h2>
                    <Input 
                        value = {searchValue} 
                        onChange = {onChangeSearch}
                        placeholder="Busca tu pelicula"
                    
                    />
               </div>
               {
                   (movieList.results && movieList.results.length > 1) && (
                       
                           <div className="col-12">
                               <MoviesCatalog movies ={movieList} />
                           </div>
                       
                   )
               }
           </div>
        </div>
    )
}

export default withRouter(Search);
