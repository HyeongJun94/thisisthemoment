import useMediaQuery from '@material-ui/core/useMediaQuery';

// 바꾸는 action, 상태를 받는 함수 추가하는게 좋을려나?

const ANDROID = 'media/ANDROID';
// const PC = 'media/PC';

export const android = () => ({ type: ANDROID });
// export const pc = () => ({ type: PC });

const initialState = false;

const media = (state = initialState, action) => {
  switch (action.type){
    case ANDROID:
      return state;
      // return useMediaQuery('(mid-width:600px)');
    // case PC:
    default:
      return state;
  }
};

export default media;
