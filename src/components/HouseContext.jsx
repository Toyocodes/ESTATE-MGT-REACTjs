import {useState, useEffect, createContext} from 'react'
import {housesData} from '../data'

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
    const [houses, setHouses] = useState(housesData)
    const [country, setCountry] = useState('Location (any)')
    const [countries, setCountries] = useState([])
    const [property, setProperty] = useState('Property type (any)')
    const [properties, setProperties] = useState([])
    const [price, setPrice] = useState('Price range (any)')
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const allCountries = houses.map((house)=>{
            return house.country;
        });
        //remove duplicate
        const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
        // console.log(uniqueCountries)

        //set countries state
        setCountries(uniqueCountries)
    }, [])


    useEffect(()=>{
        const allProperties = houses.map((house)=>{
            return house.type;
        });
        //remove duplicate
        const uniqueProperties = ['Property type (any)', ...new Set(allProperties)]
        // console.log(uniqueProperties)

        //set Properties state
        setProperties(uniqueProperties)
    }, [])

       
    const handleClick = () => {
        setLoading(true);
      
        const minPrice = parseInt(price.split(' ')[0]);
        const maxPrice = parseInt(price.split(' ')[2]);
      
        const filteredHouses = housesData.filter((house) => {
          const housePrice = parseInt(house.price);
      
          // Check if the selected country is not '(any)' and it doesn't match the house's country.
          if (country !== 'Location (any)' && house.country !== country) {
            return false;
          }
      
          // Check if the selected property type is not '(any)' and it doesn't match the house's type.
          if (property !== 'Property type (any)' && house.type !== property) {
            return false;
          }
      
          // Check if the selected price range is not '(any)' and the house's price is outside the range.
          if (price !== 'Price range (any)' && (housePrice < minPrice || housePrice > maxPrice)) {
            return false;
          }
      
          return true; // Include the house in the filtered result.
        });
      
        setTimeout(() => {
          setHouses(filteredHouses);
          setLoading(false);
        }, 1000);
      };
      
        
    
        return (
    <HouseContext.Provider 
        value ={{
            country,
            setCountry,
            countries,
            property,
            setProperty, 
            properties,
            price,
            setPrice,
            houses, 
            handleClick,
            loading,
        }}
        >
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider