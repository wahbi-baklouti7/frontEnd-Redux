import { useDispatch } from 'react-redux'

import { getArticles } from '../../features/articleslice'
import { useEffect } from 'react';
import AfficheArticles from './AfficheArticles';
const ListArticles = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // alert("impossible de se connecter au serveur");
    dispatch(getArticles());
  }, []);

    return (
        <>
        <h1>Liste des articles</h1>
        <AfficheArticles />
        </>
  );
};

export default ListArticles