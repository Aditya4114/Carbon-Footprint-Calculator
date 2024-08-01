function setResultHtml() {
    const resultHtml = `
    
      <div class="gif">
      <p class="carbon-footprint">Total Carbon Footprint: <span class="highlight">${totalCarbonFootprint} kg CO2e</span></p>

  <img src="/assests/Climate change-bro.svg" width="100%" height="100%" frameBorder="0" class="illustrations" allowFullScreen></img>
  <p>Oh no! The Bigfoot-o-meter is off the charts! <br>

Your eco-footprint has grown too big.<br>
But don't worry, we can shrink it together!<br>

Want to learn some easy tricks to leave a lighter step?<br>
Tap on the black boxes for planet-friendly tips!<br>
<br>
Remember: Every small change helps our Earth smile.</p>
</div>
<div class="boxes">
  <details id="Plants">
    <summary>Plants<span class="realname">Plant trees!</span></summary>
  <ul class="info"><br>
    Tree-planting Tips to Shrink Your Footprint:

  <li>1. Go native: Local trees thrive best<br>
  <li>2. Sunny spots are tree hotspots<br>
  <li>3. Dig wide for happy roots<br>
  <li>4. Water well at first<br>

  Fun fact: Trees are nature's air filters and climate coolers!

  </ul>
  </details>
  <details id="Vehicles">
  <summary>Vehicles<span class="realname">Drive Less!</span></summary>
  <ul><br>

<li>🚗 Carpool or hop on public transport</li>
<li>🛒 Combine errands into one trip</li>
<li>🚶‍♂️ Walk or bike for short journeys</li>
<li>🔧 Keep your vehicle in top shape</li>
<li>🌬️ Drive gently, save fuel</li>
<li>💨 Check tire pressure monthly</li>
<li>⚡Consider hybrid or electric for your next car</li>

  </details>
  <details id="waste">
  <summary>Waste<span class="realname">Reduce Waste!</span></summary>
  <ul>
  <br>
<li>🔄 Recycle right: Learn your local recycling rules</li>
  <li>🥤 Refuse single-use: Say no to disposable items</li>
  <li>🛍️ Reuse champion: Give items a second life</li>
  <li>🥬 Compost corner: Turn food scraps into garden gold</li>
  <li>🛒 Buy smart: Choose products with less packaging</li>
  <li>🧵 Repair hero: Fix items instead of tossing them</li>
  <li>📦 Donate don't dump: Give away usable items</li>
  </ul>
  </details>
  <details id="electricity">
  <summary>Electricity<span class="realname">Lights Off!</span></summary>
  <ul>
  <br>  
<li>Lights off, natural glow,
<li>Let sunshine in to show.
<li>Unplug when not in use,
<li>Energy we don't abuse.

<li>LED bulbs shine bright,
<li>Use less with delight.
<li>Thermostat set just right,
<li>Cozy day and night.

<li>Smart choices, small acts,
<li>Big impact, that's facts.

  </details>
  <details id="Public">
  <summary>Public<span class="realname">Carpooling!</span></summary>
  <ul>
<br>
<li>Buses and trains, the way to go,
<li>Less traffic, watch the city flow.
<li>Save money, breathe cleaner air,
<li>No parking woes, no driving care.

<li>Join the crowd, read or rest,
<li>Public transport, city's best.
<li>Small choice, big change,
<li>Our streets to rearrange.
  </details>
  <details id="Meat">
  <summary>Meat<span class="realname">Less Meat!</span></summary>
  <ul>
  <br>
<li>🥩 Start with one day meatless a week
<li>🥕 Veg out: Make veggies the star of your meals
<li>🍳 se 50% less meat in your recipes
<li>🌱 Explore tasty plant-based proteins
<li>🐟 Choose fish over red meat occasionally
<li>🍽️ Reduce meat serving sizes
<li>🧀 Try plant-based milk and cheese
Remember: Every bite counts towards a cooler planet!
Small changes in diet can make a big difference for our Earth.
  </ul>
  </details>
</div>
    `;
  
    document.getElementById('result').innerHTML = resultHtml;
  }
  
function setResultHtml2(){
  const resultHtml2 =`
   
  <div class="gif">
      <p class="carbon-footprint">Total Carbon Footprint: <span class="highlight">${totalCarbonFootprint} kg CO2e</span></p>
<img src="/assests/Taking care of the Earth-bro.svg" width="100%" height="100%" frameBorder="0" class="illustrations" allowFullScreen></img>
<p>Wow! You're walking the line!<br>

Your eco-footprint is right on the threshold.<br>
Balancing act, eco-champion!<br>

Want to take a step in the greener direction?<br>
Tap here for some earth-loving ideas!<br>


Let's see if we can tip the scales for Mother Nature!<br>Remember: Every tiny improvement counts.<br></p>
</div>
<div class="boxes">
  <details id="Plants">
    <summary>Plants<span class="realname">Plant trees!</span></summary>
  <ul class="info"><br>
    Tree-planting Tips to Shrink Your Footprint:

  <li>1. Go native: Local trees thrive best<br>
  <li>2. Sunny spots are tree hotspots<br>
  <li>3. Dig wide for happy roots<br>
  <li>4. Water well at first<br>

  Fun fact: Trees are nature's air filters and climate coolers!

  </ul>
  </details>
  <details id="Vehicles">
  <summary>Vehicles<span class="realname">Drive Less!</span></summary>
  <ul><br>

<li>🚗 Carpool or hop on public transport</li>
<li>🛒 Combine errands into one trip</li>
<li>🚶‍♂️ Walk or bike for short journeys</li>
<li>🔧 Keep your vehicle in top shape</li>
<li>🌬️ Drive gently, save fuel</li>
<li>💨 Check tire pressure monthly</li>
<li>⚡Consider hybrid or electric for your next car</li>

  </details>
  <details id="waste">
  <summary>Waste<span class="realname">Reduce Waste!</span></summary>
  <ul>
  <br>
<li>🔄 Recycle right: Learn your local recycling rules</li>
  <li>🥤 Refuse single-use: Say no to disposable items</li>
  <li>🛍️ Reuse champion: Give items a second life</li>
  <li>🥬 Compost corner: Turn food scraps into garden gold</li>
  <li>🛒 Buy smart: Choose products with less packaging</li>
  <li>🧵 Repair hero: Fix items instead of tossing them</li>
  <li>📦 Donate don't dump: Give away usable items</li>
  </ul>
  </details>
  <details id="electricity">
  <summary>Electricity<span class="realname">Lights Off!</span></summary>
  <ul>
  <br>  
<li>Lights off, natural glow,
<li>Let sunshine in to show.
<li>Unplug when not in use,
<li>Energy we don't abuse.

<li>LED bulbs shine bright,
<li>Use less with delight.
<li>Thermostat set just right,
<li>Cozy day and night.

<li>Smart choices, small acts,
<li>Big impact, that's facts.

  </details>
  <details id="Public">
  <summary>Public<span class="realname">Carpooling!</span></summary>
  <ul>
<br>
<li>Buses and trains, the way to go,
<li>Less traffic, watch the city flow.
<li>Save money, breathe cleaner air,
<li>No parking woes, no driving care.

<li>Join the crowd, read or rest,
<li>Public transport, city's best.
<li>Small choice, big change,
<li>Our streets to rearrange.
  </details>
  <details id="Meat">
  <summary>Meat<span class="realname">More Veggies!</span></summary>
  <ul>
  <br>
<li>🥩 Start with one day meatless a week
<li>🥕 Veg out: Make veggies the star of your meals
<li>🍳 se 50% less meat in your recipes
<li>🌱 Explore tasty plant-based proteins
<li>🐟 Choose fish over red meat occasionally
<li>🍽️ Reduce meat serving sizes
<li>🧀 Try plant-based milk and cheese
Remember: Every bite counts towards a cooler planet!
Small changes in diet can make a big difference for our Earth.
  </ul>
  </details>
</div>
}
`;

document.getElementById('result').innerHTML = resultHtml2;
  }



  function setResultHtml3(){
    const resultHtml3 =`
     
   <div class="gif">
      <p class="carbon-footprint">Total Carbon Footprint: <span class="highlight">${totalCarbonFootprint} kg CO2e</span></p>
  <img src="/assests/Taking care of the Earth-rafiki (1).svg" width="100%" height="100%" frameBorder="0" class="illustrations" allowFullScreen></img>
  <p>Hooray! You're leaving fairy footprints!<br>

Your eco-footprint is beautifully below the threshold.<br>
You're a true green guardian!<br>

Curious about more earth-friendly tricks?<br>
Tap here to level up your eco-game!<br>

Remember: Your choices are making a difference.<br>
Keep up the fantastic work, planet protector!</p>
  </div>
  <div class="boxes">
  <details id="Plants">
  <summary>Plants<span class="realname">Plant trees!</span></summary>
  <ul class="info"><br>
    Tree-planting Tips to Shrink Your Footprint:<br>

  <li>1. Go native: Local trees thrive best
  <li>2. Sunny spots are tree hotspots
  <li>3. Dig wide for happy roots
  <li>4. Water well at first

  Fun fact: Trees are nature's air filters and climate coolers!

  </ul>
  </details>
  <details id="Vehicles">
  <summary>Vehicles<span class="realname">Drive less!</span></summary>
  <ul>
  <br>
    Wheels of Change<br>

<li>Less car, more star,
<li>Walk near, bike far.
<li>Share rides, feel pride,
<li>Let nature be your guide.

<li>Bus or train, sun or rain,
<li>Plan your trip, take a dip.
<li>Work from home, less to roam,
<li>Cleaner air, world to share.

<li>Your choices shine,
<li>This planet's divine.
  </details>
  <details id="waste">
  <summary>Waste<span class="realname">Reduce Waste!</span></summary>
  <ul>
  <br>
    Less Waste, More Grace<br>

<li>Reuse, refuse, recycle,
<li>Make waste minimal.
<li>Bring your own, buy in bulk,
<li>Compost the natural.

<li>Fix don't toss, donate with heart,
<li>Choose lasting from the start.
<li>Small steps each day,
<li>Keep trash away.
  </ul>
  </details>
  <details id="electricity">
  <summary>Electricity<span class="realname">Lights Off!</span></summary>
  <ul>
  <br>  
<li>Lights off, natural glow,
<li>Let sunshine in to show.
<li>Unplug when not in use,
<li>Energy we don't abuse.

<li>LED bulbs shine bright,
<li>Use less with delight.
<li>Thermostat set just right,
<li>Cozy day and night.

<li>Smart choices, small acts,
<li>Big impact, that's facts.

  </details>
  <details id="Public">
  <summary>Public<span class="realname">Carpooling!</span></summary>
  <ul>
<br>
<li>Buses and trains, the way to go,
<li>Less traffic, watch the city flow.
<li>Save money, breathe cleaner air,
<li>No parking woes, no driving care.

<li>Join the crowd, read or rest,
<li>Public transport, city's best.
<li>Small choice, big change,
<li>Our streets to rearrange.
  </details>
  </div>
  }
  `;
  
  document.getElementById('result').innerHTML = resultHtml3;
    }









  if (totalCarbonFootprint > threshold) {
    setResultHtml();
  }
  if(totalCarbonFootprint >=5900 && totalCarbonFootprint <=7900){
    setResultHtml2();
  }
  if(totalCarbonFootprint < 5900){
    setResultHtml3();
  }




  $(function(){
  

    $("details").click(function(){
      $(this).find("summary").click();
    })
    

    $("details summary,details a").click(function(e){
      e.stopPropagation();
    })
    
    $("summary").click(function(){
      $("details").not($(this).parent()).removeAttr("open");
    })
  })