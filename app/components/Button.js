import React from 'react-native'
import ReactNativeButton from 'apsl-react-native-button'
import Colors from "../Colors"

export default Button = (props) => (
  <ReactNativeButton 
    {...props}
    activityIndicatorColor={Colors.white}
    textStyle={[{
      textAlign: 'center',
      color: Colors.white,
      fontSize: 12,
      fontFamily: 'Montserrat-Bold',
    }, props.textStyle]}
    disabledStyle={[{
      backgroundColor: Colors.gray,
      borderColor: Colors.darkGray,
    }, props.disabledStyle]}
    style={[{
      alignSelf: 'center',
      borderWidth: 0,
      borderRadius: 0,
      paddingHorizontal: 40,
      paddingVertical: 24,
      backgroundColor: Colors.pink,
      borderBottomWidth: 3,
      borderColor: Colors.darkPink,
      marginBottom: 0,
    }, props.style]}
  >
    {props.children.toUpperCase()}
  </ReactNativeButton>
)
