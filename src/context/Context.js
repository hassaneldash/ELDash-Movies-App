import React, { createContext, useContext, useState } from 'react';

// Creating a context to manage language state
const Context = createContext();



export const Provider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en-US');
    const [loader, setLoader] = useState(true);
    const [header, setHeader] = useState("Trending");
    
    // Function to update the language state
    const updateLanguage  = (newLanguage) => {
        setSelectedLanguage(newLanguage);
    };
    
    // creat local storage
    const GetFavorite = () => {
        setLoader(false);
        setHeader("Favorite Movies");
    }
    
    // Providing the language state and changeLanguage function to its children
    return (
        <Context.Provider value={{ GetFavorite,  selectedLanguage, updateLanguage }}>
            {children}
        </Context.Provider>
    );
};

// Custom hook to easily access the language context in functional components
export const useLanguage = () => {
    return useContext(Context);
};