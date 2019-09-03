export const CHANGE_RANGE = 'CHANGE_RANGE';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_NAV = 'TOGGLE_NAV';
export const CLOSE_NAV = 'CLOSE_NAV';

export const changeRange = (values) => ({type: CHANGE_RANGE, payload: {values}});

export const removeItem = (category, id) => ({type: REMOVE_ITEM, payload: {category, id}});

export const addItem = (category, item) => ({type: ADD_ITEM, payload: {category, item}});

export const toggleNav = (e) => ({type: TOGGLE_NAV, payload: {e}});

export const closeNav = () => ({type: CLOSE_NAV, payload: {}});

export const toggleModal = (modalState) => ({type: TOGGLE_MODAL, payload: {modalState}});