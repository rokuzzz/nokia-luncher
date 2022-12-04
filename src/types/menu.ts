export interface AdditionalDietInfo {
  allergens: string,
}

export interface SingleMenuItem{
  title_fi: string,
  title_en: string,
  category: string,
  additionalDietInfo: AdditionalDietInfo,
  price: string,
}

export type OnClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => void

export interface ItemInfoType{
  menuItem: SingleMenuItem,
  open: boolean,
  onClose: any
}

export interface MenuItemInFavorites extends SingleMenuItem {
  isLiked: boolean,
}

export interface FavoritesState {
  itemsInFavorites: MenuItemInFavorites[]
}

export type Course = {
  [key: string]: SingleMenuItem
}

export interface MenuOfTheDay{
  date: string,
  courses: Course | null,
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
  weeklyMenu: WeeklyMenuApiData,
  dailyMenu: DailyMenuApiData,
  dmIsLoading: boolean
}