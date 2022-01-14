import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  boxStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background:
      'linear-gradient(90deg, rgba(0,22,36,1) 0%, rgba(9,88,121,1) 48%, rgba(0,212,255,1) 100%)',
    width: '90vw',
  },

  inputStyle: {
    color: 'cyan',
    label: {
      color: 'cyan',
    },
  },

  buttonStyle: {
    margin: '5px',
    background: 'none',
    width: '100px',
    height: '25px',
    border: '1px solid cyan',
  },

  containerStyle: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    background: 'transparent',
    width: '35vw',
    height: '50vh',
    borderRadius: 20,
    border: '2px solid cyan',
  },

  headerStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    background: 'transparent',
    borderRadius: 20,
    border: '1px solid cyan',
  },

  headerTextStyle: {
    color: 'cyan',
    marginLeft: '10px',
  },

  tempStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    background: 'transparent',
    color: 'cyan',
    fontWeight: '800',
    borderRadius: 20,
    border: '1px solid cyan',
  },

  infoStyle: {
    height: '25vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'transparent',
    color: 'cyan',
    fontWeight: '600',
    borderRadius: 20,
    border: '1px solid cyan',
  },
});

export default useStyles;
