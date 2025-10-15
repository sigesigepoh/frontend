import{View,Text,Button}from 'react-native'
import axios from"axios";

export default function ReviewPage({route, navigation}){
    const {formData} = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/registration/api/register/", formData);
      
                
            console.log(response.data);
        }catch { (error)
            console.error(error.response?.data || error.message
            );
        }
    };
        

    return(
        <View>
            <Text> Review Information</Text>
            <Text>Firstname: {formData.first_name}</Text>
            <Text>Lastname: {formData.last_name}</Text>
            <Text>Email: {formData.email}</Text>
            <Text>Gender: {formData.gender}</Text>
            <Text>Password: {formData.password}</Text>

            <View>
                <Button title="Go Back to edit" onPress={()=>navigation.goBack()}/>
            </View>

            <View>
                <Button title="Submit" onPress={handleSubmit}/>
            </View>

        </View>
    )
}
