import React from 'react';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme =>({
    toolbarSecondary: {
        justifyContent: 'flex-end',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));


export default function Title(){
    const classes = useStyles();
    const sections = [
        {name : 'Option1'},
        {name : 'Option2'}
    ];
    return (
        <React.Fragment>
            <Box my={8}/>
            <Toolbar 
            component="nav" 
            variant="dense" 
            className={classes.toolbarSecondary} 
            >
                {sections.map(section =>(
                    <Link
                        color='inherit'
                        noWrap
                        key={section}
                        variant="body2"
                        href="#"
                        className={classes.toolbarLink}
                    >
                        {section.name}
                    </Link>
                ))}
            </Toolbar>

        </React.Fragment>
     
    )   
}


