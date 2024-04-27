import Head from 'next/head';

const AboutUs = () => {
  return (
    <div className="container h-full mx-auto px-4 py-8 text-black top-28 pt-28">
      <Head>
        <title>About Us - Memorable Destination</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Welcome to Memorable Destination</h1>
      <p className="mb-4">
        Where every journey is a chapter in your story of adventure and discovery.
      </p>
      <p className="mb-4">
        {"At Memorable Destination, we're in the business of crafting memories that last a lifetime. From the moment you step aboard one of our tours, you're not just a traveler—you're a storyteller, an explorer, and a cherished member of our global family."}
      </p>
      <p className="mb-4">
       {" What sets us apart is our relentless pursuit of the extraordinary. We don't just take you to the world's most iconic destinations; we unlock hidden gems, reveal local secrets, and create authentic experiences that leave a lasting impression. Whether it's wandering through ancient ruins with a seasoned historian, savoring culinary delights in a bustling market, or witnessing a breathtaking sunset from a secluded viewpoint, every moment with us is designed to be unforgettable."}
      </p>
      <p className="mb-4">
       {" But our commitment to creating memorable experiences goes beyond the destinations themselves. We're dedicated to providing unparalleled service, from the moment you inquire about a trip to the day you return home with a heart full of memories. Our team of passionate travel experts is here to guide you every step of the way, ensuring that your journey is seamless, stress-free, and tailored to your unique preferences."}
      </p>
      <p className="mb-4">
       {" As avid travelers ourselves, we understand the transformative power of exploration. We've seen how stepping outside of your comfort zone, immersing yourself in new cultures, and connecting with fellow adventurers can inspire growth, broaden perspectives, and ignite a lifelong love affair with the world."}
      </p>
      <p className="mb-4">
        {"So whether you're dreaming of a romantic getaway, a family adventure, or a solo expedition to the ends of the earth, let us be your compass. Join us as we embark on a journey of discovery, laughter, and wonder—a journey where every moment is an opportunity to create memories that will stay with you long after the adventure ends."}
      </p>
      <p>
        Welcome to Memorable Destination, where the world is waiting to be explored and every journey is a tale worth telling.
      </p>
    </div>
  );
};

export default AboutUs;
