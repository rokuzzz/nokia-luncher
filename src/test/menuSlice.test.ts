import { fetchDailyMenuEn } from './../redux/slices/menuSlice';
import createTestStore from "./utils/testStore";

let store = createTestStore()

beforeEach(() => {
  store = createTestStore()
})

describe('test menu reducer', () => {
  // test('fetch weekly menu in eng', async () => {
  //   await store.dispatch(fetchWeeklyMenuEn())
  //   // console.log(store.getState().menuReducer.weeklyMenuEn.mealdates[0].courses[2])
  //   expect(store.getState().menuReducer.weeklyMenuEn.mealdates.length).toBeGreaterThan(0)
  // })
  test('fetch daily menu in eng', async () => {
    await store.dispatch(fetchDailyMenuEn('2022-11-15'))
    // console.log(store.getState().menuReducer.dailyMenuEn.courses)
    expect(store.getState().menuReducer.dailyMenuEn.courses).toBeDefined()
  })
})