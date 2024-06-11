import { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';

const useProfileContext = () => {
    const context = useContext(ProfileContext);

    if (context === undefined) {
        throw new Error('Não está dentro do contexto');
    }

    return context;
};

export default useProfileContext;
