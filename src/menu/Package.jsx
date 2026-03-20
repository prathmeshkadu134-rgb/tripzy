import React from "react";
import "./Package.css";
// Assuming Form component is using Link from react-router-dom
import Form from '../components/Form' 

const Services = () => {
  return (
    <div className='package-section'>
      <div className="nav-package">
        
        {/* === Header Section === */}
        <div className="heading">
          <h2 className="pop">
            Best <span className="typewriter"> Indian Tour Packages </span>{" "}
            Customs & Group Tour
          </h2>
        </div>
        
        {/* === Introductory Content === */}
        <div className="nav-package-content">
          <p className="nav-pack-cont1">
            India is a land of incredible diversity, where history, culture,
            spirituality, and natural beauty blend to offer unforgettable travel
            experiences. At IndiaTravel.com, we specialize in curated <b> India tour
            packages </b> that cater to all types of travelers—whether you’re looking
            for a luxury escape, cultural exploration, spiritual retreat, or
            thrilling adventure. From the majestic forts of Rajasthan to the
            serene backwaters of Kerala, and from the snow-capped Himalayas to
            the colorful chaos of Delhi and Mumbai, our <b> India holiday packages </b>
            are thoughtfully designed to bring you the best of this vibrant
            country.
          </p>
          <p className="nav-pack-cont2">
            Our <b> India tours </b> include everything you need for a seamless
            journey—comfortable accommodations, expert guides, private
            transportation, and immersive local experiences. Whether you’re
            planning a family vacation, a romantic getaway, or a solo trip, we
            offer customizable packages to suit your interests and budget.
            Discover ancient temples, vibrant festivals, exotic wildlife, and
            warm hospitality across the Indian subcontinent. Let us help you
            plan your dream vacation with our trusted <b> India tour packages,</b>
            designed to create lasting memories and authentic experiences. Book
            your India adventure today!
          </p>
        </div>
        
        {/* === Package Grid Section === */}
        <div className="india-tours">
          <h2 className="pop package-grid-heading"> 
            <span className="typewriter"> Popular Tour Packages </span> of India
          </h2>
          
          {/* Tour Row 1 */}
          <div className="tour-sec1">
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour1-img">
                 <p>Golden Triangle Tour of India</p>
              </div>
              <span className="tour-desc">Experience India’s most iconic destinations—Delhi, Agra, and Jaipur—in one thrilling journey. This classic India tour package includes visits to the majestic Taj Mahal, Amber Fort, and Qutub Minar. Enjoy comfortable hotels, guided city tours, and private transfers. Ideal for first-time travelers to India.</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour2-img">
                 <p>Splendors <br/>of <br/>Kerala</p>
              </div>
              <span className="tour-desc">Cruise through backwaters, relax in Munnar’s tea gardens, and enjoy the cultural charm of Kochi and Alleppey. This Kerala holiday package includes houseboat stays, Ayurvedic massages, and scenic drives with local guides.</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour3-img">
                 <p>Magical <br/>Rajastan</p>
              </div>
              <span className="tour-desc">Explore Jaipur, Udaipur, Jodhpur, and Jaisalmer. This Rajasthan tour offers royal palaces, camel rides, folk music, and luxury heritage hotels. Includes meals, local guides, and private transfers.</span>
            </div>
          </div>
          
          {/* Tour Row 2 */}
          <div className="tour-sec1">
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour4-img">
                 <p>Varanasi & Ayodhya Tour</p>
              </div>
              <span className="tour-desc">Witness spiritual India with holy ghats, Ganga aarti, and temples of Varanasi and Ayodhya. Includes cultural walks, heritage stays, and spiritual storytelling.</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour5-img">
                 <p>Darjeeling <br/> With <br/> Gangtok</p>
              </div>
              <span className="tour-desc">Explore the tea gardens of Darjeeling and the serene landscapes of Gangtok. This package offers hill-station charm, scenic toy train rides, monastery visits, and cozy hotel stays. Includes breakfast, transfers, and local sightseeing with expert guides.</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour6-img">
                 <p>Punjab Golden Temple</p>
              </div>
              <span className="tour-desc">Combine India’s iconic Golden Triangle—Delhi, Agra, Jaipur—with the spiritual city of Amritsar. Visit the Golden Temple, Wagah Border ceremony, Taj Mahal, and Amber Fort. Enjoy luxury stays, guided tours, and private transportation</span>
            </div>
          </div>
          
          {/* Tour Row 3 */}
          <div className="tour-sec1">
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour7-img">
                 <p>Exotic Andaman<br/> With<br/>Havelok Island</p>
              </div>
              <span className="tour-desc">Discover India’s island paradise. Visit Port Blair, Ross Island, and the pristine beaches of Havelock. Enjoy snorkeling, glass-bottom boat rides, and sun-kissed shores. This package includes beachfront stays, ferry transfers, and island tours.</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour8-img">
                 <p>Himachal Highlights</p>
              </div>
              <span className="tour-desc">Discover the magic of Shimla, Manali, Dharamshala, and Dalhousie. Our Himachal tour package covers colonial architecture, mountain adventures, Tibetan monasteries, and riverside strolls. Includes deluxe hotels, private transport, and sightseeing tours.</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour9-img">
                 <p>Assam and<br/> Sunderbans Cruise</p>
              </div>
              <span className="tour-desc">Sail through the Brahmaputra and the mangrove forests of the Sunderbans. Witness unique wildlife, tribal cultures, and riverside temples. This luxury cruise package includes onboard meals, cabins, excursions, and naturalist guides.</span>
            </div>
          </div>
          
          {/* Tour Row 4 */}
          <div className="tour-sec1">
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour10-img">
                 <p>Karnataka</p>
              </div>
              <span className="tour-desc">Explore the cultural treasures of Karnataka—Bangalore, Mysore, Hampi, and Coorg. This South India tour includes palaces, coffee plantations, ancient ruins, and wildlife. Includes 3–4 star accommodations, private transport, and guided tours</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour11-img">
                 <p>Ladakh <br/>A piece of<br/>Broken Moon Land</p>
              </div>
              <span className="tour-desc">Embark on a high-altitude adventure through Leh, Nubra Valley, and Pangong Lake. This Ladakh tour includes mountain passes, monasteries, homestays, and jeep safaris. Ideal for thrill-seekers and nature enthusiast</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour12-img">
                 <p>Golden Triangle with Goa</p>
              </div>
              <span className="tour-desc">This vibrant tour blends the historical charm of the Golden Triangle with the sun-soaked beaches of Goa. After exploring Delhi, Agra, and Jaipur, unwind with a coastal retreat. Package includes beach resorts, heritage sightseeing, and cultural experiences</span>
            </div>
          </div>
          
          {/* Tour Row 5 */}
          <div className="tour-sec1">
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour13-img">
                 <p>CharDham<br/>Yatra</p>
              </div>
              <span className="tour-desc">Visit the four sacred sites—Yamunotri, Gangotri, Kedarnath, and Badrinath. This pilgrimage includes transport, meals, stays, and spiritual guidance</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour14-img">
                 <p>Srinagar and Leh-Ladakh Tour</p>
              </div>
              <span className="tour-desc">Experience the blend of Kashmir’s beauty and Ladakh’s mystique. Includes Shikara rides, Buddhist monasteries, and high-altitude lakes. Package includes stays in houseboats and hotels, with scenic drives.</span>
            </div>
            <div className="tour-card tour1">
              <div className="tour-img-wrapper tour15-img">
                 <p>Garhwal Kumaon Trip</p>
              </div>
              <span className="tour-desc">Explore Uttarakhand’s cultural heartland—Nainital, Ranikhet, Almora, and Auli. Perfect for nature lovers and culture seekers, this tour offers lakes, mountains, temples, and stunning views. Includes accommodations, transport, and guided excursions.</span>
            </div>
          </div>
          
        </div>
      </div>
      <Form/>
    </div>
  );
};

export default Services;