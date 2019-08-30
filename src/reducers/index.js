import {
  CHANGE_RANGE,
  REMOVE_ITEM,
  ADD_ITEM,
  TOGGLE_MODAL,
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
  isFormOpen: false,
  defClothes: {
    "Zimno": ["czapka ", "kurtka zimowa", "buty zimowe", ""],
    "Umiarkowanie": ["lekka czapka", "", "płaszcz"],
    "Ciepło": ["kapelusz", "krótkie ", "sandały"],
    "Wiatr": ["nauszniki", "kurtka "],
    "Deszcz": ["parasol", "kalosze"]
  },
  isSaveModalOpen: false,
  isFormModalOpen: false,
  counter: 11,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      console.log(action.payload)
      return {
        ...state,
        [action.payload.whichModal]: !state[action.payload.whichModal],
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
      console.log(action.payload.category)
      row.push(item)
      newClothes[category] = row
      console.log(newClothes)
      return {
        ...state,
        clothes: newClothes
      };
    default:
      return state;
  }
};

export default rootReducer;


