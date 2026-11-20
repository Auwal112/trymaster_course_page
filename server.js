const express = require('express');
const compression = require('compression');
const { engine } = require('express-handlebars');



const app = express();

app.use(compression());
app.use(express.static('public'));


app.engine('handlebars', engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');
app.set('views', './views');

const PORT = process.env.PORT || 3000;


//login page
app.get("/auth",(req,res)=>{
  res.render('auth.handlebars',{});
});
//get all coursess
app.get('/courses', (req, res) => {
  const courses = [
    {
      title: 'PostgreSQL & SQL Performance Tuning',
      instructor: 'Marcus Vance',
      duration: '10 Hours',
      stars: '★★★★☆',
      rating: '4.7',
      reviewsCount: 540,
      price: 34,
      originalPrice: 89,
      buttonText: 'Buy Now'
    },
    {
      title: 'Node.js & Express REST API Mastery',
      instructor: 'Sarah Jenkins',
      duration: '14 Hours',
      stars: '★★★★★',
      rating: '4.9',
      reviewsCount: 1210,
      price: 49,
      originalPrice: 99,
      buttonText: 'Buy Now'
    }
  ];

  res.render('main', { courses });
});



//get course info
app.get("/course",(req,res)=>{
  res.render('courses.handlebars',{});
});

//blog site
app.get("/blog",(req,res)=>{
  res.send("blog page");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
