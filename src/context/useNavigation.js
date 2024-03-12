// useNavigation.js
import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';

export default function useNavigation() {
    return useContext(NavigationContext);
}
