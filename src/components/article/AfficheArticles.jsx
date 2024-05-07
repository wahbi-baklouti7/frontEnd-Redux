import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartslice";
import { useNavigate } from "react-router-dom";

const AfficheArticles = () => {
  // const { articles, isLoading, error } = useSelector((state) => state.storearticles
  const { articles, isLoading, error } = useSelector((state) => state.article
  );

  const dispatch = useDispatch();
  const navigate= useNavigate();

  
  const handleAddToCart = (article) => {
    dispatch(addToCart(article));
    // navigate("/cart");
  }

  if (isLoading)
    return (
      <center>
        <ReactLoading type="spokes" color="red" height={"8%"} width={"8%"} />
      </center>
    );
  if (error) return <p>Impossible d&apos;afficher la liste des articles...</p>;
  return (
    <div className="container row d-flex justify-content-around">
      {articles.map((article) => (
        <Card key={article._id} sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={article.imageart}
          title={article.reference}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {article.reference}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
           Prix: {article.prix} DT
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.designation.substring(0, 300)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button  size="small" variant="contained" color="success" onClick={() => handleAddToCart(article)} >Add To Cart</Button>
          <Button size="small" color="error" variant="contained">Delete</Button>
        </CardActions>
      </Card>
      ))}
      
    </div>
  );
};

export default AfficheArticles;
