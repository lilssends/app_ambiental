import  {Link} from 'expo-router';
import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar} from 'expo-status-bar';

export default function inicio() {
    return (
        <ScrollView>
            <View style={styles.container}>
                
                <Link style={styles.links} href="/sobre"> Pressione para ir a tela Sobre</Link>
                <br />
                <Link style={styles.links} href="/parcerias"> Pressione para ir a tela Parcerias</Link>
                <br />
                <Link style={styles.links} href="/relatorio"> Pressione para ir a tela Relatórios</Link>
                <br />  
                <Link style={styles.links} href="/sugestoes"> Pressione para ir a tela Sugestões</Link>
                <br />
                <Link style={styles.links} href="/perfil"> Pressione para ir a tela Perfil</Link>
                <br />
                <Link style={styles.links} href="/usuarioAnonimo"> Pressione para ir a tela Anônimo</Link>
                <br />
                <Link style={styles.links} href="/formulario"> Pressione para ir a tela Formulário</Link>
                <br />
                <Link style={styles.links} href="/cases"> Pressione para ir a tela Casos de Sucesso</Link>
                <br />
                <Link style={styles.links} href="/home"> Pressione para ir a tela Home</Link>
                <br />
                
             </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create
({
    container: {
        flex: 1,
        backgroundColor: '#3525D9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    links: {
        marginTop: 20,
        fontSize: 18,
        color: '#D96B25',
        backgroundColor: '#082c03ff',
        paddingTop: 15,
        paddingEnd: 15,
        paddingBottom: 15,
        borderRadius: 25,
    }
});
