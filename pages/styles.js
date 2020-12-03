
import {Dimensions, StyleSheet} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT= Dimensions.get('window').height;
const styles=StyleSheet.create({
    logo:{
        alignSelf:'center',
        width:135,height:60,
        justifyContent:'space-around'

    },
    wall:{
        flex:1,
        resizeMode:'cover',
        width:null,
        height:null,
    },
    username:{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 70,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 25,
        borderRadius: 20,
        color: 'black',
         
    },
    continer:{
        flex:1,
        justifyContent:'space-around'
    },
    login:{
       
        width: DEVICE_WIDTH - 80,
        height: 40,
        alignSelf:'center',
    },
    reg:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize:14
       
    },
    buttonStyle: {
    padding:10,
    backgroundColor:'#FFF400',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff'
    },
up:{
   alignItems:'flex-start',
    flexDirection:'row',
},
ic:{
  backgroundColor:'black',
    width:40,
    height:40,
    borderRadius:10
},
})

export default styles;