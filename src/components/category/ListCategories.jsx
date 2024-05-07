import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard'
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { getCategories } from '../../features/categoryslice';
const ListCategories = () => {

    const dispatch = useDispatch();
    const {categories,isLoading,error}= useSelector((state)=>state.storeCategories)
  

    useEffect(()=> {
        dispatch(getCategories())
    },[])
    if (isLoading) {
        return (
            <center>
        <ReactLoading type="spokes" color="red" height={"8%"} width={"8%"} />
      </center>
        )
    }
    if (error) return <p>Impossible d&apos;afficher la liste des articles...</p>;

    return (
        <div className="container row d-flex justify-content-around">
            {categories.map((category) => (
                <CategoryCard key={category._id} category={category} />
            ))}
        </div>
    )
}

export default ListCategories