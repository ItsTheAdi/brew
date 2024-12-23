import React from 'react'
import arabica from '../images/arabica.jpg'
import robusta from '../images/robusta.jpg'
import blends from '../images/blends.jpg'
function products() {
  return (
    <div className="mt-0 flex-col justify-center items-center mb-3" style={{backgroundColor:"#0A1828",color:"#BFA181"}}>
        <div className='mb-2 text-5xl flex justify-center items-center'>Coffee Beans for Every Brewing Style</div>
        <div className='container max-w-full flex-col justify-between  space-x-4 h-64' style={{width:'100%',height:'100%',backgroundColor:"#0A1828"}}>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-5 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={arabica} alt="" width="384" height="512"/>
  <div class="pl-5 pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg " style={{color:"#BFA181"}}>
        “ Indulge in the smooth and sophisticated flavor profile of our
 Arabica beans. Grown in the lush hills of Coorg, these beans
 are carefully harvested and expertly roasted to perfection and
 delivering a rich and nuanced coffee experience.s”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400 text-2xl" style={{color:"#BFA181"}}>
        Arabica
      </div>
    </figcaption>
  </div>
  
  <hr className='h-4'></hr>
</figure>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-5 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={robusta} alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium" style={{color:"#BFA181"}}>
        “ For those who prefer a bolder and more robust
 coffee, look no further than our Robusta beans.
 Sourced from the vibrant plantations of Tamil Nadu,
 these beans pack a punch with their deep, full
bodied flavor and earthy undertones”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400 text-2xl" style={{color:"#BFA181"}}>
        Robusta
      </div>
    </figcaption>
  </div>
</figure>
<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-5 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={blends} alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium" style={{color:"#BFA181"}}>
        “Experience the best of both worlds with our expertly
 crafted blends. Combining the finest Arabica and
 Robusta beans, our blends strike the perfect balance
 of flavor, aroma, and complexity, resulting in a truly
 exceptional cup of coffee”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400 text-2xl" style={{color:"#BFA181"}}>
        Blends
      </div>
    </figcaption>
  </div>
</figure>
        </div>
        <div className='text-3xl flex justify-center items-center'>Instant Coffee</div>
        <div className='container max-w-full flex-col justify-between  space-x-4 h-64' style={{width:'100%',height:'100%',backgroundColor:"#0A1828"}}>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-5 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={arabica} alt="" width="384" height="512"/>
  <div class="pl-5 pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg " style={{color:"#BFA181"}}>
        “ When convenience is key, our agglomerated instant coffee
 is the perfect choice. Made from carefully selected beans
 and processed to preserve their flavor and aroma, our
 agglomerated instant coffee offers a quick and satisfying
 caffeine fix without compromising on quality”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400" style={{color:"#BFA181"}}>
        Agglomerated
      </div>
    </figcaption>
  </div>
  
  <hr className='h-4'></hr>
</figure>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-5 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={robusta} alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium" style={{color:"#BFA181"}}>
        “ Experience the unparalleled freshness and intensity of
 flavor with our freeze-dried instant coffee. Using
 advanced freeze-drying technology, we lock in the
 natural essence of our premium beans, ensuring that
 every cup is bursting with flavor and aroma”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400" style={{color:"#BFA181"}}>
        Freeze Dried
      </div>
    </figcaption>
  </div>
</figure>
<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-5 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={blends} alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium" style={{color:"#BFA181"}}>
        “ For a smooth and consistent cup of coffee every time, our spray
dried instant coffee is the way to go. By atomizing our carefully
 selected beans into fine particles, we create a convenient and
 easy-to-dissolve coffee powder that retains all the delicious
 flavors of our premium beans.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400 " style={{color:"#BFA181"}}>
        Spray Dried
      </div>
    </figcaption>
  </div>
</figure>
        </div>
    </div>
  );
}

export default products