import {View, Text, Button, TextInput} from 'react-native';
import styles from '../styles';

export default function RegisterPage(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Registration page</Text>
            <TextInput
            style={styles.input}
            placeholder='Firstname'/>
            
            <TextInput
            style={styles.input}
            placeholder='Lastname'/>

              <TextInput
              style={styles.input}
            placeholder='Email'/>

              <TextInput
              style={styles.input}
            placeholder='Gender'/>

              <TextInput
              secureTextEntry
              style={styles.input}
            placeholder='Password'/>

            <Button
            title='Review and Submit' />
        </View>
    )
}