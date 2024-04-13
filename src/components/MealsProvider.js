import React from "react";

const MealContext = React.createContext();

const todayMeals = ['CholeBhature', 'RajmaChawal', 'Samosa']

const MealsProvider = ({children}) => {
    const [meals, setMeals] = React.useState(todayMeals)
    return (
        <MealContext.Provider value={{meals}}>
            {children}
        </MealContext.Provider>
    );
}

export const useMealListContext = () => React.useContext(MealContext);
export default MealsProvider;