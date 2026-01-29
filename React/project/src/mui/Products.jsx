import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function Muicard() {
  const [userData, setUserData] = useState({
    ProductName: '',
    ProductPrice: '',
    ProductCategory: '',
    ProductDescription: ''
  });

  const [allData, setAllData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSubmit = () => {
    setAllData([...allData, userData]);

    setUserData({
      ProductName: '',
      ProductPrice: '',
      ProductCategory: '',
      ProductDescription: ''
    });

    alert('Form Submitted Successfully');
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* INPUT FIELDS – ONE AFTER ANOTHER */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 300
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Product Name"
          variant="filled"
          value={userData.ProductName}
          onChange={(e) =>
            setUserData({ ...userData, ProductName: e.target.value })
          }
        />

        <TextField
          label="Product Price"
          variant="filled"
          value={userData.ProductPrice}
          onChange={(e) =>
            setUserData({ ...userData, ProductPrice: e.target.value })
          }
        />

        <TextField
          label="Product Category"
          variant="filled"
          value={userData.ProductCategory}
          onChange={(e) =>
            setUserData({ ...userData, ProductCategory: e.target.value })
          }
        />

        <TextField
          label="Product Description"
          variant="filled"
          value={userData.ProductDescription}
          onChange={(e) =>
            setUserData({ ...userData, ProductDescription: e.target.value })
          }
        />

        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      {/* CARDS – HORIZONTAL */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          mt: 4,
          flexWrap: 'wrap'
        }}
      >
        {allData.map((item, index) => (
          <Card key={index} sx={{ width: 220 }}>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? '' : undefined}
            >
              <CardContent>
                <Typography variant="h6">
                  {item.ProductName}
                </Typography>
                <Typography variant="body2">
                {item.ProductPrice}
                </Typography>
                <Typography variant="body2">
                 {item.ProductCategory}
                </Typography>
                <Typography variant="body2" >
                  {item.ProductDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
Products.jsx