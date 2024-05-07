import { CardMedia } from '@mui/material';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CategoryCard = ({category}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Image
            //   sx={{ height: 250 }}
              fluid
              
          src={category.imagecategorie }
          title={category.nomcategorie}
        />
    <Card.Body>
              <Card.Title>{ category.nomcategorie}</Card.Title>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
        </Card>
  )
}

export default CategoryCard