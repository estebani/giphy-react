import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{
    
    
    const [categories, setCategories] = useState(['One Punch'])
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategory={setCategories}/>

            <ol>
                {
                    categories.map((category,idx)=> (
                        <GifGrid 
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
        </>
    )
};