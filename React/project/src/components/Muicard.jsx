import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ name, price, category, description }) {
  return (
    <Card sx={{ minWidth: 275 , maxWidth: 400}}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 18 }}>
          {name}
        </Typography>

        <Typography variant="h6" component="div">
          Price: Rs{price}
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          {category}
        </Typography>
        
        <Typography variant="body2">
          {description}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
