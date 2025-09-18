import React, { createContext, useContext, useReducer } from 'react';

interface AppState {
  selectedLeague: string;
  selectedDate: Date;
  favoriteTeams: string[];
  user: any;
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialState: AppState = {
  selectedLeague: 'all',
  selectedDate: new Date(),
  favoriteTeams: [],
  user: null,
};

function appReducer(state: AppState, action: any) {
  switch (action.type) {
    case 'SET_LEAGUE':
      return { ...state, selectedLeague: action.payload };
    case 'SET_DATE':
      return { ...state, selectedDate: action.payload };
    case 'ADD_FAVORITE_TEAM':
      return { 
        ...state, 
        favoriteTeams: [...state.favoriteTeams, action.payload] 
      };
    case 'REMOVE_FAVORITE_TEAM':
      return { 
        ...state, 
        favoriteTeams: state.favoriteTeams.filter(id => id !== action.payload) 
      };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};