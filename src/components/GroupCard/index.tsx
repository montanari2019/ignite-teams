import { FontAwesome5 } from '@expo/vector-icons';
import { Container, TitleCard } from './styled';
import { TouchableOpacityProps } from 'react-native';


interface GroupCardProps extends TouchableOpacityProps {
    title: string
}


export function GroupCard({ title, ...rest }:GroupCardProps){
    return(
        <Container {...rest}>
            <FontAwesome5 name="users" size={24} color="#00875F" />
            <TitleCard>{title}</TitleCard>
        </Container>
    )
}