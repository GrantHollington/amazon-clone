export const initialState = {
    basket: [],
};

// selector

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            // this way removes everything in the basket with the same id
            // return {
            //     ...state, 
            //     basket: state.basket.filter(item => item.id !== action.id)
            // }
            // This only finds the first match and returns it
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            // copy basket into a temporary variable
            let newBasket = [...state.basket];
            
            // if the index >= 0 it means it found something within the basket, and then it removes the element in the array at the index using splice
            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as it is not in the basket! `
                )
            }

            return {
                ...state,
                basket: newBasket
            }



        default:
            return state;
    }
}

export default reducer;