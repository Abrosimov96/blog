import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProvider';
import {AppRouter} from 'app/providers/routes';
import {Navbar} from 'widgets/Navbar';



const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme]) }>
            <Navbar />
            <AppRouter/>
        </div>
    );
};

export default App