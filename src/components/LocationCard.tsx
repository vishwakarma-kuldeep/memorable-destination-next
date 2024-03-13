// components/MapComponent.tsx
const LocationCard: React.FC = () => {
    return (
        <div className="container mx-auto">
          {/* <h1 className="text-3xl font-bold text-center mb-8">Welcome to My Next.js App</h1> */}
          <MapComponent />
        </div>
      );
};
const MapComponent: React.FC = () => {
    return (
      <div className="flex flex-col items-center rounded">
        <div className="w-full h-40 rounded">
          <iframe
            className="w-full h-full rounded-2"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.517359704265!2d72.67606277451891!3d23.04148687916048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871195452639%3A0x3e58bfa1f0ab083b!2sArth%20Business%20Centre%20(abc)!5e0!3m2!1sen!2sin!4v1709982555776!5m2!1sen!2sin"
            title="Memorable Destination"
            
          ></iframe>
        </div>
      </div>
    );
  };
  
 
//   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.517359704265!2d72.67606277451891!3d23.04148687916048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871195452639%3A0x3e58bfa1f0ab083b!2sArth%20Business%20Centre%20(abc)!5e0!3m2!1sen!2sin!4v1709982555776!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    export default LocationCard;