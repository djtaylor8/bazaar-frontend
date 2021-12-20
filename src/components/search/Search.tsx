import * as React from 'react';
import {
  createStyles,
  alpha,
  makeStyles
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
  
const useStyles = makeStyles((theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha('#D0D0D0', 0.25),
      '&:hover': {
        backgroundColor: alpha('#D0D0D0', 0.50),
      },
      marginLeft: 0,
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '50%',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })
);

interface Props {
  searchQuery: string;
  setSearchQuery: (e: string | null) => void;
}
  
const Search: React.FC<Props> = ({ searchQuery, setSearchQuery }) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search ' }}
        value={searchQuery}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;