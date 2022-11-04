export interface MenuOfTheDay{
  date: DayOfTheWeek,
  courses: MenuItem[],
}

export type DayOfTheWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'

export interface MenuItem{
  title_fi: string,
  title_en: string,
  category: string,
  additionalDietInfo: AdditionalDietInfo,
  price: string,
}

export interface AdditionalDietInfo {
  allergens: string,
}

export interface ItemAtFavorites extends MenuItem{
  isAvailable: boolean
}