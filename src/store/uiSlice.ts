
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
    isMobileMenuOpen: boolean;
}

const initialState: UIState = {
    isMobileMenuOpen: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
            state.isMobileMenuOpen = action.payload;
        },
        toggleMobileMenu: (state) => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen;
        },
        closeMobileMenu: (state) => {
            state.isMobileMenuOpen = false;
        },
    },
});

export const { setMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = uiSlice.actions;

export default uiSlice.reducer;
