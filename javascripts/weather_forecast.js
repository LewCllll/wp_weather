$(document).ready(function () {
  $('#dropdown li').on('click', function(){
    $('#choose').text($(this).text());
    
    var city = $('#choose').text();
    $.ajax('https://query.yahooapis.com/v1/public/yql', {
      
      method: 'GET',
      
      data: {
        q: 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+ city +'") and u="c"',
        format: 'json'
      },
      
      success: function (data) {
        
        var weatherInfo = data.query.results.channel,
            nowDate = weatherInfo.item.condition.date.toUpperCase(),
            nowTemp = weatherInfo.item.condition.temp,
            nowCondition = weatherInfo.item.condition.text.toUpperCase(),
            conditionIcon = weatherInfo.item.condition.code;
        
        var dayOne = weatherInfo.item.forecast[1].date.toUpperCase(),
            dayTwo = weatherInfo.item.forecast[2].date.toUpperCase(),
            dayThree = weatherInfo.item.forecast[3].date.toUpperCase();
        
        var lowOne = weatherInfo.item.forecast[1].low,
            lowTwo = weatherInfo.item.forecast[2].low,
            lowThree = weatherInfo.item.forecast[3].low;
        
        var highOne = weatherInfo.item.forecast[1].high,
            highTwo = weatherInfo.item.forecast[2].high,
            highThree = weatherInfo.item.forecast[3].high;
        
        var conditionOne = weatherInfo.item.forecast[1].code,
            conditionTwo = weatherInfo.item.forecast[2].code,
            conditionThree = weatherInfo.item.forecast[3].code;
            
        
        $('#date-now').text(nowDate);
        $('#temp-now').text(nowTemp);
        $('#condition-now').text(nowCondition);
        
        $('#date1').text(dayOne);
        $('#date2').text(dayTwo);
        $('#date3').text(dayThree);
        
        $('#low1').text(lowOne);
        $('#low2').text(lowTwo);
        $('#low3').text(lowThree);
        
        $('#high1').text(highOne);
        $('#high2').text(highTwo);
        $('#high3').text(highThree);
        
        var skycons = new Skycons();
        
        if(conditionOne <= 12 || conditionOne > 36){
          skycons.add("condition1", Skycons.RAIN);
        }if(conditionOne > 12 && conditionOne <= 17){
          skycons.add("condition1", Skycons.SNOW);         
        }if(conditionOne === 18){
          skycons.add("condition1", Skycons.SLEET);         
        }if(conditionOne > 18 && conditionOne <= 22){
          skycons.add("condition1", Skycons.FOG);         
        }if(conditionOne > 22 && conditionOne <= 25){
          skycons.add("condition1", Skycons.WIND);         
        }if(conditionOne > 25 && conditionOne <= 28 || conditionOne == 44){
          skycons.add("condition1", Skycons.CLOUDY);         
        }if(conditionOne == 29){
          skycons.add("condition1", Skycons.PARTLY_CLOUDY_NIGHT);   
        }if(conditionOne == 30){
          skycons.add("condition1", Skycons.PARTLY_CLOUDY_DAY);   
        }if(conditionOne == 32 || conditionOne == 34 || conditionOne == 36){
          skycons.add("condition1", Skycons.CLEAR_DAY);   
        }if(conditionOne == 31 || conditionOne == 33){
          skycons.add("condition1", Skycons.CLEAR_NIGHT);   
        }
        
        if(conditionTwo <= 12 || conditionTwo > 36){
          skycons.add("condition2", Skycons.RAIN);
        }if(conditionTwo > 12 && conditionTwo <= 17){
          skycons.add("condition2", Skycons.SNOW);         
        }if(conditionTwo === 18){
          skycons.add("condition2", Skycons.SLEET);         
        }if(conditionTwo > 18 && conditionTwo <= 22){
          skycons.add("condition2", Skycons.FOG);         
        }if(conditionTwo > 22 && conditionTwo <= 25){
          skycons.add("condition2", Skycons.WIND);         
        }if(conditionTwo > 25 && conditionTwo <= 28 || conditionTwo == 44){
          skycons.add("condition2", Skycons.CLOUDY);         
        }if(conditionTwo == 29){
          skycons.add("condition2", Skycons.PARTLY_CLOUDY_NIGHT);   
        }if(conditionTwo == 30){
          skycons.add("condition2", Skycons.PARTLY_CLOUDY_DAY);   
        }if(conditionTwo == 32 || conditionTwo == 34 || conditionTwo == 36){
          skycons.add("condition2", Skycons.CLEAR_DAY);   
        }if(conditionTwo == 31 || conditionTwo == 33){
          skycons.add("condition2", Skycons.CLEAR_NIGHT);   
        }
        
          if(conditionThree <= 12 || conditionThree > 36){
          skycons.add("condition3", Skycons.RAIN);
        }if(conditionThree > 12 && conditionThree <= 17){
          skycons.add("condition3", Skycons.SNOW);         
        }if(conditionThree === 18){
          skycons.add("condition3", Skycons.SLEET);         
        }if(conditionThree > 18 && conditionThree <= 22){
          skycons.add("condition3", Skycons.FOG);         
        }if(conditionThree > 22 && conditionThree <= 25){
          skycons.add("condition3", Skycons.WIND);         
        }if(conditionThree > 25 && conditionThree <= 28 || conditionThree == 44){
          skycons.add("condition3", Skycons.CLOUDY);         
        }if(conditionThree == 29){
          skycons.add("condition3", Skycons.PARTLY_CLOUDY_NIGHT);   
        }if(conditionThree == 30){
          skycons.add("condition3", Skycons.PARTLY_CLOUDY_DAY);   
        }if(conditionThree == 32 || conditionThree == 34 || conditionThree == 36){
          skycons.add("condition3", Skycons.CLEAR_DAY);   
        }if(conditionThree == 31 || conditionThree == 33){
          skycons.add("condition3", Skycons.CLEAR_NIGHT);   
        }
        
        if(conditionIcon <= 12 || conditionIcon > 36){
          skycons.add("today", Skycons.RAIN);
        }if(conditionIcon > 12 && conditionIcon <= 17){
          skycons.add("today", Skycons.SNOW);         
        }if(conditionIcon === 18){
          skycons.add("today", Skycons.SLEET);         
        }if(conditionIcon > 18 && conditionIcon <= 22){
          skycons.add("today", Skycons.FOG);         
        }if(conditionIcon > 22 && conditionIcon <= 25){
          skycons.add("today", Skycons.WIND);         
        }if(conditionIcon > 25 && conditionIcon <= 28 || conditionIcon == 44){
          skycons.add("today", Skycons.CLOUDY);         
        }if(conditionIcon == 29){
          skycons.add("today", Skycons.PARTLY_CLOUDY_NIGHT);   
        }if(conditionIcon == 30){
          skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);   
        }if(conditionIcon == 32 || conditionIcon == 34 || conditionIcon == 36){
          skycons.add("today", Skycons.CLEAR_DAY);   
        }if(conditionIcon == 31 || conditionIcon == 33){
          skycons.add("today", Skycons.CLEAR_NIGHT);   
        }
        
        skycons.play();
        return false;
      }
    });
});
 });
    

