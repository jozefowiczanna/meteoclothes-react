import {
  CHANGE_RANGE,
  REMOVE_ITEM,
  ADD_ITEM,
  TOGGLE_MODAL,
  GET_FORECAST_SUCCESS,
  GET_FORECAST_FAILURE,
  RESET_VALUES,
  SAVE_VALUES,
  LOAD_VALUES,
} from 'actions';

const defRange = {
  tempmin: "5",
  tempmax: "18",
  windmin: "20",
  rainmin: "70",
}

const defClothes = {
  "Cold": ["winter hat", "thick scarf", "winter jacket", "winter shoes", "gloves"],
  "Moderate": ["light cap", "sneakers", "coat"],
  "Warm": ["straw hat", "T-shirt", "shorts", "sandals"],
  "Precipitation": ["ear muffs", "wind jacket"],
  "Wind": ["umbrella", "rain boots"]
}

function storageAvailable(type) {
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
  }
  catch(e) {
      return e instanceof DOMException && (
          // everything except Firefox
          e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
          // acknowledge QuotaExceededError only if there's something already stored
          (storage && storage.length !== 0);
  }
}

const initialState = {
  range: {...defRange},
  clothes: {...defClothes},
  city: 'Amsterdam',
  isSaveModalOpen: false,
  isFormModalOpen: false,
  data: [
    {
      clouds: 49,
      dailySummary: "Średnie zachmurzenie w ciągu dnia.",
      humidity: 70,
      icon: "partly-cloudy-day",
      rainSnow: 15,
      tempDay: 22,
      tempNight: 15,
      windSpeed: 11,
    },
  ],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
      const updatedClothes = {...state.clothes};
      const row = [...state.clothes[action.payload.category]];
      row.splice(id, 1);
      updatedClothes[category] = row;

      return {
        ...state,
      clothes: updatedClothes
      };
    }
    case ADD_ITEM:
    {
      const category = action.payload.category;
      const item = action.payload.item;
      const newClothes = {...state.clothes};
      const row = [...state.clothes[action.payload.category]];
      row.push(item);
      newClothes[category] = row;
      return {
        ...state,
        clothes: newClothes
      };
    }
    case RESET_VALUES:
    {
      if (storageAvailable('localStorage')) {
        localStorage.clear();
      }
      return {
        ...state,
        range: {...defRange},
        clothes: {...defClothes},
      }
    }
    case SAVE_VALUES:
    {
      if (storageAvailable('localStorage')) {
        localStorage.setItem('range', JSON.stringify(state.range));
        localStorage.setItem('clothes', JSON.stringify(state.clothes));
      } else {
        alert("Settings cannot be saved - browser does not support local storage")
      }
      return {
        ...state,
     }
    }
    case LOAD_VALUES:
    {
      if ((storageAvailable('localStorage')) && localStorage.length > 0 && localStorage.getItem('clothes') && localStorage.getItem('range')) {
        const lsClothes = JSON.parse(localStorage.getItem('clothes'));
        const lsRange = JSON.parse(localStorage.getItem('range'))
        if (
            lsClothes["Cold"] &&
            lsClothes["Moderate"] &&
            lsClothes["Precipitation"] &&
            lsClothes["Warm"] &&
            lsClothes["Wind"] &&
            lsRange["rainmin"] &&
            lsRange["tempmax"] &&
            lsRange["tempmin"] &&
            lsRange["windmin"]
          ) {
          console.log("Data loaded correctly.");
          return {
            ...state,
            range: lsRange,
            clothes: lsClothes,
          }
        } else {
          console.log("Could not load data from local storage. Default settings will be restored.");
          return {
            ...state,
            range: {...defRange},
            clothes: {...defClothes},
          }
        }
      } else {
        return {
          ...state,
        }
      }
    } 
    case GET_FORECAST_SUCCESS:
    {
      return {
        ...state,
        city: action.payload.name,
        data: action.payload.outputData,
      };
    }
    case GET_FORECAST_FAILURE:
    {
      alert("An error occured. Please try again later.");
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;


