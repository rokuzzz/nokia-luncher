export interface AdditionalDietInfo {
  allergens: string,
}

export interface MenuItem{
  title_fi: string,
  title_en: string,
  category: string,
  additionalDietInfo: AdditionalDietInfo,
  price: string,
}

export interface MenuItemInFavorites extends MenuItem {
  isLiked: boolean,
}

export interface FavoritesState {
  itemsInFavorites: MenuItemInFavorites[]
}

export type Course = {
  [key: string]: MenuItem
}

export interface MenuOfTheDay{
  date: string,
  courses: Course[] | null,
}

export interface Meta {
  generated_timestamp: number | undefined,
  ref_url: string,
  ref_title: string
}


export interface WeeklyMenuApiData {
  meta: Meta,
  timeperiod: string,
  mealdates: MenuOfTheDay[]
}

export interface DailyMenuApiData {
  meta: Meta,
  courses: Course | null
}

export interface MenuState {
  // weeklyMenuEn: WeeklyMenuApiData,
  // weeklyMenuFi: WeeklyMenuApiData,
  isLoading: boolean,
  dailyMenu: DailyMenuApiData,
  error: string | undefined
}