import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentAccount : {
        id : 1,
        userName : 'bulut',
        fullName: 'Bulut Çağrı Çiftçi',
        avatar : 'https://pbs.twimg.com/profile_images/1625430327408709632/XbSId-y6_400x400.jpg'
    },
    accounts : [
        {
            id : 1,
            userName : 'bulut',
            fullName: 'Bulut Çağrı Çiftçi',
            avatar : 'https://pbs.twimg.com/profile_images/1625430327408709632/XbSId-y6_400x400.jpg'
        },
        {
            id : 2,
            userName : 'sanctus',
            fullName: 'Sanctus Digital',
            avatar : 'https://pbs.twimg.com/profile_images/1775086575900069888/V-NDhYsr_400x400.jpg'
        },

    ]
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers : {
        // state manipule etme metodları
        _addAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload);
            if (state.currentAccount.id && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload;
        }
    }
})

export const { _addAccount,_setCurrentAccount,_removeAccount} = auth.actions
export default auth.reducer