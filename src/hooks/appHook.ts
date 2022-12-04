import { AppDispatch, RootState } from './../redux/store';
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()