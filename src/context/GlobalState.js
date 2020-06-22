import React, { createContext, useReducer } from 'react';

// import the Reducer 

import AppReducer from './AppReducer';



const initialSate = {

    transactions:[]
}

// create global context

export const  GlobalContext = createContext(initialSate);

// create a provider for global context 

export const GlobalProvider = ({ children }) => {

    const [state,dispatch] = useReducer(AppReducer,initialSate);


    // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }

        return(

            <GlobalContext.Provider value={
 
                {
                        transactions : state.transactions,
                         delTransaction,
                          addTransaction
                        
                }

            }> {children}

            </GlobalContext.Provider>
        )
}