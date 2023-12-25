import React,{useState} from 'react';
import { Card, CardContent, Typography, Grid, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
const theme = createTheme({
  // Define your theme properties here
  background: '#ffffff',
});

const StyledCard = styled(Card)({
  maxWidth: 800,
  margin: 'auto',
  marginTop: 20,
});

const StyledImageContainer = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  '&:hover img': {
    transform: 'scale(1.2)', // Zoom effect on hover
    transition: 'transform 0.3s ease-in-out',
    zIndex: 1,
  },
});

const StyledProductImage = styled('img')({
  maxWidth: '100%',
  maxHeight: 400,
  transition: 'transform 0.3s ease-in-out',
  top: 0,
  left: 0,
  zIndex: 0,
});

const StyledAdditionalImages = styled('div')({
  marginTop: 20,
  display: 'flex',
  justifyContent: 'center',
});
const StyledLightboxOverlay = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

const StyledLightboxImage = styled('img')({
  maxWidth: '90%',
  maxHeight: '90%',
});
const ProductDetails = ({ product }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };
  const handleImageClick = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
  };
  const {
    title,
    name,
    slug,
    amount,
    description,
    price,
    img,
    discountPercentage,
    rating,
    items_left,
    stock,
    imageURL,
    brand,
    category,
    thumbnail,
    image,
    images,
  } = product;
  return (
    <ThemeProvider theme={theme}>
      <StyledCard>
        <CardContent>
          <button onClick={goBack}  style={{color:'black'}}><ArrowBackIcon/></button>
          <Grid container spacing={3}>
            
              <Grid item xs={12} md={5} mt={4} ml={3} component={StyledImageContainer}>
                <StyledProductImage src={thumbnail?thumbnail:(category.image?images[0]:image)} alt={title && title} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">{slug?slug:title}</Typography>
              <Typography variant="body1">{description?description:name}</Typography>
              <Typography variant="h6">Price: ₹{price?price:amount}</Typography>
              <Typography variant="body1">Discount: {discountPercentage? discountPercentage+"%":"No Discount"}</Typography>
              {rating===undefined?<Typography variant="body1">Item Left: {items_left}</Typography>:<Typography variant="body1">Rating: {rating.rate===undefined?rating:rating.rate}<StarRateIcon size={3} style={{color:"gold",height:"2.5vh",margin:"0"}}/></Typography>}
              <Typography variant="body1">Stock: {stock? stock:0}</Typography>
              <Typography variant="body1">Brand: {brand}</Typography>
              <Typography variant="body1">Category: {category.name?category.name:category}</Typography>
            </Grid>
          </Grid>
          <StyledAdditionalImages>
            {images && images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                style={{ maxWidth: '100%', maxHeight: 100, margin: '0 5px' }}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </StyledAdditionalImages>
          {lightboxOpen && (
            <StyledLightboxOverlay onClick={closeLightbox}>
              <StyledLightboxImage src={lightboxImage} alt="Lightbox" />
            </StyledLightboxOverlay>
          )}
        </CardContent>
      </StyledCard>
    </ThemeProvider>
  );
};

export default ProductDetails;
