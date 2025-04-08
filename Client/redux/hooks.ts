import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store'; // adjust path if needed

// Create typed versions
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
