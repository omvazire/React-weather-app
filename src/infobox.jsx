import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import "./infobox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox ({info}){
   
  const HOT_URL = "https://media.istockphoto.com/id/828198028/photo/wood-thermometer.webp?a=1&b=1&s=612x612&w=0&k=20&c=Db111wbzmMrpY5qq5azFXkc5FKEizdb_vIHHPfgvxjA="
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  const RAIN_URL = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



  let WeatherIcon;

if (info.humidity > 80) {
  WeatherIcon = <ThunderstormIcon />;
} else if (info.temp > 25) {
  WeatherIcon = <WbSunnyIcon />;
} else {
  WeatherIcon = <AcUnitIcon />;
}

    return(
        <div className="infobox">
        
        <div className='cardcontent'>

        <Card sx={ {maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {info.humidity > 80 ? RAIN_URL: info.temp > 25 ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
  {info.city} {WeatherIcon}
</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
  <div>Temperature = {info.temp}°C</div>
  <div>Humidity = {info.humidity}</div>
  <div>Min Temp = {info.tempmin}°C</div>
  <div>Max Temp = {info.tempmax}°C</div>
  <div>
    the weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}°C
  </div>
</Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        </div>
        </div>
    )
}