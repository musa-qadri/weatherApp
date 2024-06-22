async function getWeather() {
    const cityName = document.getElementById('cityName');
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const temp = document.getElementById('temp');
    const weatherNameElement = document.getElementById('weatherName');
    const weatherIcon = document.getElementById('weatherIcon');
    const inputTex = document.getElementById('inputTex').value.trim();
    const mainElement = document.querySelector('.main');
    
    const apiKey = '232649f47ca799275342fab1ed4ca4b4';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${inputTex}&units=metric`;
    
    if (!inputTex) {
      alert('Please enter a city name');
      return;
    }
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      
      cityName.textContent = data.name;
      dateElement.textContent = ` ${new Date().toLocaleDateString()}`;
      timeElement.textContent = ` ${new Date().toLocaleTimeString()}`;
      temp.textContent = `Temp: ${data.main.temp}°C`;
      const weatherDescription = data.weather[0].description;
      weatherNameElement.textContent = weatherDescription;
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      
      if (weatherDescription === 'scattered clouds') {
                mainElement.style.backgroundImage = "url('https://media.istockphoto.com/id/480531006/photo/cirrocumulus-cloud.webp?b=1&s=170667a&w=0&k=20&c=8eNB5R5JDuOTzHAuXH2IJAG3wLv1wAohCsT5pXG4o2A=')";
              } else if (weatherDescription === 'clear sky') {
                mainElement.style.backgroundImage = "url('https://www.ecolur.org/files/news/2013/10/102355114361.jpg')";
              } else if (weatherDescription === 'rain') {
                mainElement.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqKsACXMDDGBH9IyL_FsfANIgnNlhdus5u3baGgVxPYRfXryZFXr_o8QpMBLiOaqyFfU&usqp=CAU')";
              } else {
                mainElement.style.backgroundImage = "url('https://www.ecolur.org/files/news/2013/10/102355114361.jpg')";
              }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data. Please try again.');
    }
  }
  
  document.getElementById('inputTex').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      getWeather();
    }
  });
  




// async function getWeather() {
//     const cityName = document.getElementById('cityName');
//     const date = document.getElementById('date');
//     const timeElement = document.getElementById('time');
//     const temp = document.getElementById('temp');
//     const weatherName = document.getElementById('weatherName');
    
//     const weatherIcon = document.getElementById('weatherIcon');
//     const inputTex = document.getElementById('inputTex').value.trim();
//     const main = document.getElementsByClassName('main');
    
//     const apiKey = '232649f47ca799275342fab1ed4ca4b4';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${inputTex}&units=metric`;
    
//     if (!inputTex) {
//       alert('Please enter a city name');
//       return;
//     }
    
//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error('City not found');
//       }
//       const data = await response.json();
      
//       cityName.textContent = data.name;
//       date.textContent = new Date().toLocaleDateString();
//       temp.textContent = `Temp: ${data.main.temp}°C`;
//       timeElement.textContent = ` ${new Date().toLocaleTimeString()}`;
//       weatherName.textContent = data.weather[0].description;
//       weatherNameElement.textContent = weatherDescription;

//       weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

//       if (weatherDescription === 'scattered clouds') {
//         mainElement.style.backgroundImage = "url('https://media.istockphoto.com/id/480531006/photo/cirrocumulus-cloud.webp?b=1&s=170667a&w=0&k=20&c=8eNB5R5JDuOTzHAuXH2IJAG3wLv1wAohCsT5pXG4o2A=')";
//       } else if (weatherDescription === 'clear sky') {
//         mainElement.style.backgroundImage = "url('https://www.ecolur.org/files/news/2013/10/102355114361.jpg')";
//       } else if (weatherDescription === 'rain') {
//         mainElement.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqKsACXMDDGBH9IyL_FsfANIgnNlhdus5u3baGgVxPYRfXryZFXr_o8QpMBLiOaqyFfU&usqp=CAU')";
//       } else {
//         mainElement.style.backgroundImage = "url('https://www.ecolur.org/files/news/2013/10/102355114361.jpg')";
//       }

//     } catch (error) {
//       console.error('Error fetching data:', error);
//       alert('Error fetching data. Please try again.');
//     }
//   }
  
//   document.getElementById('inputTex').addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//       getWeather();
//     }
//   });
  

