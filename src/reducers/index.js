import {
  CHANGE_RANGE,
  REMOVE_ITEM,
  ADD_ITEM,
  TOGGLE_MODAL,
  TOGGLE_NAV,
  CLOSE_NAV,
} from 'actions';

const defRange = {
  tempmin: "5",
  tempmax: "18",
  windmin: "20",
  rainmin: "70",
}

const defClothes = {
  "Zimno": ["czapka zimowa", "gruby szalik", "kurtka zimowa", "buty zimowe", "rękawiczki"],
  "Umiarkowanie": ["lekka czapka", "adidasy", "płaszcz"],
  "Ciepło": ["kapelusz", "t-shirt", "krótkie spodenki", "sandały"],
  "Wiatr": ["nauszniki", "kurtka przeciwwiatrowa"],
  "Deszcz": ["parasol", "kalosze"]
}

const initialState = {
  range: {...defRange},
  clothes: {...defClothes},
  isNavOpen: false,
  isSaveModalOpen: false,
  isFormModalOpen: false,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        isNavOpen: !state.isNavOpen,
      };
    case CLOSE_NAV:
      return {
        ...state,
        isNavOpen: false,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        [action.payload.modalState]: !state[action.payload.modalState],
      };
    case CHANGE_RANGE:
      return {
        ...state,
        range: action.payload.values,
      };
    case REMOVE_ITEM:
    {
      const category = action.payload.category;
      const id = action.payload.id;
      const updatedClothes = {...state.clothes}
      const row = [...state.clothes[action.payload.category]];
      row.splice(id, 1);
      updatedClothes[category] = row;

      return {
        ...state,
      clothes: updatedClothes
      };
    }
    case ADD_ITEM:
      const category = action.payload.category;
      const item = action.payload.item;
      const newClothes = {...state.clothes};
      const row = [...state.clothes[action.payload.category]];
      row.push(item)
      newClothes[category] = row
      return {
        ...state,
        clothes: newClothes
      };
    default:
      return state;
  }
};

export default rootReducer;


