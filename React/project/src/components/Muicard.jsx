import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ name, price, category, description }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 }}>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          Price: ₹{price}
        </Typography>
        <Typography variant="body2">
          {category}
        </Typography>
         <Typography variant="P" component="div">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
