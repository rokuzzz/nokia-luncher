export interface MenuApiData {
  weeklyMenuEn: WeeklyMenuApiData,
  weeklyMenuFi: WeeklyMenuApiData,
  dailyMenuEn: DailyMenuApiData,
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

export interface Meta {
  generated_timestamp: number | undefined,
  ref_url: string,
  ref_title: string
}

export interface MenuOfTheDay{
  date: string,
  courses: Course[] | null,
}

// export type DayOfTheWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'

// export interface Courses {
//   1: Course
//   2: Course,
//   3: Course,
//   4: Course,
//   5: Course
// }

export type Course = {
  [key: string]: MenuItem
}

// export type Course = MenuItem

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